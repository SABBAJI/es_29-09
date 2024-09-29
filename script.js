let people = [];

function aggiungiPersona() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let province = document.getElementById("province").value;

  
    if (!name || !surname || !email || !birthdate || !phone || !country || !province) {
        alert("Compila tutti i campi!");
        return;
    }

   
    let person = {
        name,
        surname,
        email,
        birthdate,
        phone,
        country,
        province
    };

  
    people.push(person);

    
    aggiornaTabella();

   
    document.getElementById("personForm").reset();
}

function aggiornaTabella() {
    let tableBody = document.querySelector("#personTable tbody");
    tableBody.innerHTML = ""; 

    
    people.forEach((person, index) => {
        let row = `<tr>
            <td>${person.name}</td>
            <td>${person.surname}</td>
            <td>${person.email}</td>
            <td>${person.birthdate}</td>
            <td>${person.phone}</td>
            <td>${person.country}</td>
            <td>${person.province}</td>
            <td><button onclick="rimuoviPersona(${index})">Rimuovi</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function rimuoviPersona(index) {
    
    people.splice(index, 1);
    
    aggiornaTabella();
}
