function mostrarAlerta() {
  alert("Por favor, escribe 8 letras y un número en la contraseña.")
}

const form = document.querySelector('#formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
  const expresionpassword = /^[a-zA-Z]{8}[0-9]{1}$/;
  const email = document.getElementById('email').value;
  const password = document.getElementById('contrasena').value;
  try {
    if (email == '' || password == '') {
      throw 'No se pueden dejar campos vacios';
    }
    if (!expresionEmail.test(email)) {
      throw 'El email no cumple con el formato'
    }
    if (!expresionpassword.test(password)) {
      throw 'La contraseña no cumple con el formato'
    }
    window.location.href = 'usuarios'
    alert('Iniciaste sesión')
  } catch (e) {
    alert(e)
  }
})


