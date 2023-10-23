window.addEventListener('load', function(){
    let userTableBody = document.getElementById("userTableBody");
    let addressTableBody = document.getElementById("addressTableBody");
    let contactTableBody = document.getElementById("contactTableBody");
    let addressTable = document.getElementById("addressTable");
    let contactTable = document.getElementById("contactTable");
    let userHeader = document.querySelector(".table thead tr");

    let listUsers = async() => {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        data.forEach(user => {
            let userRow = document.createElement("tr");
            let id = document.createElement("td");
            let name = document.createElement("td");
            let email = document.createElement("td");
            let username = document.createElement("td");

            id.innerText = user.id;
            name.innerText = user.name;
            email.innerText = user.email;
            username.innerText = user.username;

            userRow.appendChild(id);
            userRow.appendChild(name);
            userRow.appendChild(email);
            userRow.appendChild(username);

            userTableBody.appendChild(userRow);

            let addressRow = document.createElement("tr");
            let addressId = document.createElement("td");
            let street = document.createElement("td");
            let suite = document.createElement("td");
            let city = document.createElement("td");
            let zipcode = document.createElement("td");
            let geo = document.createElement("td");

            addressId.innerText = user.id;
            street.innerText = user.address.street;
            suite.innerText = user.address.suite;
            city.innerText = user.address.city;
            zipcode.innerText = user.address.zipcode;
            geo.innerText = `${user.address.geo.lat}, ${user.address.geo.lng}`;

            addressRow.appendChild(addressId);
            addressRow.appendChild(street);
            addressRow.appendChild(suite);
            addressRow.appendChild(city);
            addressRow.appendChild(zipcode);
            addressRow.appendChild(geo);

            addressTableBody.appendChild(addressRow);

            let contactRow = document.createElement("tr");
            let contactId = document.createElement("td");
            let phone = document.createElement("td");
            let website = document.createElement("td");
            let company = document.createElement("td");

            contactId.innerText = user.id;
            phone.innerText = user.phone;
            website.innerText = user.website;
            company.innerText = user.company.name;

            contactRow.appendChild(contactId);
            contactRow.appendChild(phone);
            contactRow.appendChild(website);
            contactRow.appendChild(company);

            contactTableBody.appendChild(contactRow);
        });
    };

    let hideTables = () => {
        userTableBody.style.display = "none";
        addressTable.style.display = "none";
        contactTable.style.display = "none";
    };

    let showAddresses = () => {
        hideTables();
        addressTable.style.display = "";

        // Ocultar las columnas de ID, nombre, correo electrónico y nombre de usuario
        userHeader.querySelectorAll("th")[0].style.display = "none"; // ID
        userHeader.querySelectorAll("th")[1].style.display = "none"; // Name
        userHeader.querySelectorAll("th")[2].style.display = "none"; // Email
        userHeader.querySelectorAll("th")[3].style.display = "none"; // Username
    };

    let showContact = () => {
        hideTables();
        contactTable.style.display = "";

        // Ocultar las columnas de ID, nombre, correo electrónico y nombre de usuario
        userHeader.querySelectorAll("th")[0].style.display = "none"; // ID
        userHeader.querySelectorAll("th")[1].style.display = "none"; // Name
        userHeader.querySelectorAll("th")[2].style.display = "none"; // Email
        userHeader.querySelectorAll("th")[3].style.display = "none"; // Username
    };

    let resetData = () => {
        userTableBody.style.display = "";
        addressTable.style.display = "none";
        contactTable.style.display = "none";

        // Mostrar las columnas de ID, nombre, correo electrónico y nombre de usuario
        userHeader.querySelectorAll("th")[0].style.display = ""; // ID
        userHeader.querySelectorAll("th")[1].style.display = ""; // Name
        userHeader.querySelectorAll("th")[2].style.display = ""; // Email
        userHeader.querySelectorAll("th")[3].style.display = ""; // Username
    };

    document.getElementById("filterButton").addEventListener("click", showAddresses);
    document.getElementById("filterButton2").addEventListener("click", showContact);
    document.getElementById("homeButton").addEventListener("click", resetData);

    listUsers();
});
