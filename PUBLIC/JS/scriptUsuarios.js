const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
const expresionTelefono = /^[0-9]{10}$/
const expresionDocumento = /^[0-9]{8,10}$/;
const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
const expresionpassword =  /^[a-zA-Z0-9]{8,}$/;
const expresionCpassword =  /^[a-zA-Z0-9]{8,}$/;

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const documento = document.getElementById('documento');
const email = document.getElementById('correo');
const passwords = document.getElementById('password');
const Cpassword = document.getElementById('confirmarPassword');


const mensajeNombre = document.getElementById('mensajeNombre');
const mensajeCpassword = document.getElementById('mensajeCpassword');
const mensajePassword = document.getElementById('mensajePassword');
const mensajeEmail = document.getElementById('mensajeEmail');
const mensajeDocumento = document.getElementById('mensajeDocumento');
const mensajeTelefono = document.getElementById('mensajeTelefono');
const mensajeApellido = document.getElementById('mensajeApellido');


nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = '';
    mensajeNombre.textContent = ''; 
  } else {
    nombre.style.borderColor = '#900D09';
    mensajeNombre.textContent = 'El nombre es inválido'; 
  }
});
apellido.addEventListener('input', () => {
  if (expresionApellido.test(apellido.value)) {
    apellido.style.borderColor = '';
    mensajeApellido.textContent = '';
  } else {
    apellido.style.borderColor = '#900D09';
    mensajeApellido.textContent = 'El apellido es inválido';
  }
});

telefono.addEventListener('input', () => {
  if (expresionTelefono.test(telefono.value)) {
    telefono.style.borderColor = '';
    mensajeTelefono.textContent = '';
  } else {
    telefono.style.borderColor = '#900D09';
    mensajeTelefono.textContent = 'El teléfono es inválido';
  }
});

documento.addEventListener('input', () => {
  if (expresionDocumento.test(documento.value)) {
    documento.style.borderColor = '';
    mensajeDocumento.textContent = '';
  } else {
    documento.style.borderColor = '#900D09';
    mensajeDocumento.textContent = 'El documento es inválido';
  }
});

email.addEventListener('input', () => {
  if (expresionEmail.test(email.value)) {
    email.style.borderColor = '';
    mensajeEmail.textContent = '';
  } else {
    email.style.borderColor = '#900D09';
    mensajeEmail.textContent = 'El email es inválido';
  }
});

passwords.addEventListener('input', () => {
  if (expresionpassword.test(passwords.value)) {
    passwords.style.borderColor = '';
    mensajePassword.textContent = '';
  } else {
    passwords.style.borderColor = '#900D09';
    mensajePassword.textContent = 'La contraseña es inválida';
  }
});

Cpassword.addEventListener('input', () => {
  if (expresionCpassword.test(Cpassword.value)) {
    Cpassword.style.borderColor = '';
    mensajeCpassword.textContent = '';
  } else {
    Cpassword.style.borderColor = '#900D09';
    mensajeCpassword.textContent = 'La confirmación de contraseña es inválida';
  }
});