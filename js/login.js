document.addEventListener('DOMContentLoaded',()=> {

   document.getElementById('container-login').addEventListener('submit',function(event) {
      event.preventDefault();
   
      const usuario = document.querySelector('#Usuario').value;
      const contraseña = document.querySelector('#Contraseña').value;

      if (!usuario || !contraseña) {
         alert("Debe completar ambos campos");
      }
      else {
         //DESAFIATE
         // Guardar el estado de sesión
         localStorage.setItem('loggedIn', 'true');
         // Redirigir a la página de productos
         window.location.href = 'index.html';
      }
   });
});
