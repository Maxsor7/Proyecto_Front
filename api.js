window.addEventListener('load', function(){
    let table = document.querySelector(".table tbody"); // corrección aquí

    let listUsers = async() =>{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        data.forEach(user => {
            let row = document.createElement("tr");
            let id = document.createElement("td");
            let name = document.createElement("td");
            let email = document.createElement("td");
            let username = document.createElement("td");

            id.innerText = user.id;
            name.innerText = user.name;
            email.innerText = user.email;
            username.innerText = user.username;

            row.appendChild(id);
            row.appendChild(name);
            row.appendChild(email);
            row.appendChild(username);

            table.appendChild(row);
        });
    };

    listUsers(); // Llamar a la función aquí
});
