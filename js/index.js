document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
    });
});

//DESAFIATE - VERIFICA SI YA SE HA INICIADO SESIÓN O NO
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const loggedIn = localStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        menuButton.onclick = () => {
            localStorage.removeItem('loggedIn'); // Eliminar sesión
            window.location.href = 'login.html'; // Redirigir al login
        };
    } else {
        window.location.href = 'login.html'; // Redirigir al login
    }
});