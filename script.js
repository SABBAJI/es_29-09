let people = [];

function aggiungiPersona() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let birthdate = document.getElementById("birthdate").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;
    let province = document.getElementById("province").value;

    // Ensure all fields are filled
    if (!name || !surname || !email || !birthdate || !phone || !country || !province) {
        alert("Compila tutti i campi!");
        return;
    }

    // Create person object
    let person = {
        name,
        surname,
        email,
        birthdate,
        phone,
        country,
        province
    };

    // Add to the array
    people.push(person);

    // Update the table
    aggiornaTabella();

    // Reset form fields
    document.getElementById("personForm").reset();
}

function aggiornaTabella() {
    let tableBody = document.querySelector("#personTable tbody");
    tableBody.innerHTML = ""; // Clear the table before updating

    // Loop over the array and generate rows
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
    // Remove person from the array
    people.splice(index, 1);
    // Update the table
    aggiornaTabella();
}
