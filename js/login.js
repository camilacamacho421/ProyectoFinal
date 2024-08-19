document.addEventListener('DOMContentLoaded',()=> {

    document.getElementsById('container-login').addEventListener('submit',function(event) {

     let usuario = document.getElementById('Usuario').value;
     let contraseña = document.getElementById('Contraseña').value;

     if (!usuario || !contraseña) {
        alert("Debe completar ambos campos");
     }
     else {
        location.href="index.html";
     }

    });

});