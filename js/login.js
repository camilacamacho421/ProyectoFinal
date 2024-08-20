document.addEventListener('DOMContentLoaded',()=> {

    document.getElementById('container-login').addEventListener('submit',function(event) {

      event.preventDefault();//Agregué esto y funcionó 
   
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