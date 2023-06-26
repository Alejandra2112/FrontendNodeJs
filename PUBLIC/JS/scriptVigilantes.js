const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
const expresionTelefono = /^[0-9]{10}$/;
const expresionDocumento = /^[0-9]{8,10}$/;
const expresionNombre =/^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const telefono = document.getElementById('telefono');
const documento = document.getElementById('numero');
const email = document.getElementById('correo');


const mensajeNombre = document.createElement('span');
mensajeNombre.className = 'mensaje-error';
nombre.parentNode.appendChild(mensajeNombre);

const mensajeApellido = document.createElement('span');
mensajeApellido.className = 'mensaje-error';
apellido.parentNode.appendChild(mensajeApellido);

const mensajeEmail = document.createElement('span');
mensajeEmail.className = 'mensaje-error';
email.parentNode.appendChild(mensajeEmail);

const mensajeTelefono = document.createElement('span');
mensajeTelefono.className = 'mensaje-error';
telefono.parentNode.appendChild(mensajeTelefono);

const mensajeDocumento = document.createElement('span');
mensajeDocumento.className = 'mensaje-error';
documento.parentNode.appendChild(mensajeDocumento);



nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = '';
    mensajeNombre.textContent = '';
  } else {
    nombre.style.borderColor = '#900D09';
    mensajeNombre.textContent = 'El nombre es inválido';
    mensajeNombre.style.color = '#900D09'
  }
});

apellido.addEventListener('input', () => {
  if (expresionApellido.test(apellido.value)) {
    apellido.style.borderColor = '';
    mensajeApellido.textContent = '';
  } else {
    apellido.style.borderColor = '#900D09';
    mensajeApellido.textContent = 'El apellido es inválido';
    mensajeApellido.style.color = '#900D09'
  }
});

email.addEventListener('input', () => {
  if (expresionEmail.test(email.value)) {
    email.style.borderColor = '';
    mensajeEmail.textContent = '';
  } else {
    email.style.borderColor = '#900D09';
    mensajeEmail.textContent = 'El correo electrónico es inválido';
    mensajeEmail.style.color = '#900D09'
  }
});

telefono.addEventListener('input', () => {
  if (expresionTelefono.test(telefono.value)) {
    telefono.style.borderColor = '';
    mensajeTelefono.textContent = '';
  } else {
    telefono.style.borderColor = '#900D09';
    mensajeTelefono.textContent = 'El número de teléfono es inválido';
    mensajeTelefono.style.color = '#900D09'
  }
});

documento.addEventListener('input', () => {
  if (expresionDocumento.test(documento.value)) {
    documento.style.borderColor = '';
    mensajeDocumento.textContent = '';
  } else {
    documento.style.borderColor = '#900D09';
    mensajeDocumento.textContent = 'El número de documento es inválido';
    mensajeDocumento.style.color = '#900D09'
  }
});

const fechaNacimiento = document.getElementById('fechaNacimiento'); // Referencia al campo de fecha de nacimiento

const mensajeFecha = document.createElement('span');
mensajeFecha.className = 'mensaje-error';
fechaNacimiento.parentNode.appendChild(mensajeFecha);

fechaNacimiento.addEventListener('input', () => {
  const fechaNacimientoValue = fechaNacimiento.value;

  const fechaActual = new Date();
  const anioActual = fechaActual.getFullYear();
  const anioNacimiento = new Date(fechaNacimientoValue).getFullYear();
  const edad = anioActual - anioNacimiento;

  if (edad >= 18) {
    fechaNacimiento.style.borderColor = '';
    mensajeFecha.textContent = '';
  } else {
    fechaNacimiento.style.borderColor = '#900D09';
    mensajeFecha.textContent = 'La fecha es inválida';
    mensajeFecha.style.color = '#900D09';
  }
});

