const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
const expresionVehiculo = /^[a-zA-Z0-9]+$/
const expresionCapacidad = /^[0-9]+$/
const expresionParqueadero = /^[a-zA-Z0-9]+$/


const nombre = document.getElementById('propietario');
const vehiculo = document.getElementById('vehiculo');
const capacidad = document.getElementById('capacidad');
const parqueadero = document.getElementById('parqueadero');
const fechaInput = document.getElementById('fechaFin');

const mensajeVehiculo = document.getElementById('mensajeVehiculo');
const mensajeNombre = document.getElementById('mensajeNombre');
const mensajeCapacidad = document.getElementById('mensajeCapacidad');
const mensajeParqueadero = document.getElementById('mensajeParqueadero');
const mensajeFecha = document.getElementById('mensajeFecha');

nombre.addEventListener('input', () => {
  if (expresionNombre.test(nombre.value)) {
    nombre.style.borderColor = '';
    mensajeNombre.textContent = '';
  } else {
    nombre.style.borderColor = '#900D09';
    mensajeNombre.textContent = 'El nombre es inválido';
  }
});

vehiculo.addEventListener('input', () => {
  if (expresionVehiculo.test(vehiculo.value)) {
    vehiculo.style.borderColor = '';
    mensajeVehiculo.textContent = '';
  } else {
    vehiculo.style.borderColor = '#900D09';
    mensajeVehiculo.textContent = 'El vehículo es inválido';
  }
});

capacidad.addEventListener('input', () => {
  if (expresionCapacidad.test(capacidad.value)) {
    capacidad.style.borderColor = '';
    mensajeCapacidad.textContent = '';
  } else {
    capacidad.style.borderColor = '#900D09';
    mensajeCapacidad.textContent = 'La capacidad es inválida';
  }
});

parqueadero.addEventListener('input', () => {
  if (expresionParqueadero.test(parqueadero.value)) {
    parqueadero.style.borderColor = '';
    mensajeParqueadero.textContent = '';
  } else {
    parqueadero.style.borderColor = '#900D09';
    mensajeParqueadero.textContent = 'El parqueadero es inválido';
  }
});

fechaInput.addEventListener('input', () => {
  const fechaIngresada = new Date(fechaInput.value);
  const fechaActual = new Date();

  if (fechaIngresada >= fechaActual) {
    fechaInput.style.borderColor = '';
    mensajeFecha.textContent = '';
  } else {
    fechaInput.style.borderColor = 'red';
    mensajeFecha.textContent = 'La fecha debe ser igual o posterior a la fecha actual';
  }
});
