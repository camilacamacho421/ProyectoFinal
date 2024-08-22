//VERIFICAR QUE EL CAMPO DE CONTRASEÑA Y USUARIO NO ESTÉN VACÍOS
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
         localStorage.setItem('loggedIn', 'true'); // Guardar el estado de sesión
         window.location.href = 'index.html'; // Redirigir a la página de productos
      }
   });
});
