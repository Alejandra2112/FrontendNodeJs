const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
const expresionDescripcion = /^[\s\S]*$/;

const nombre = document.getElementById('nombrerol');
const descripcion = document.getElementById('descripcion');

const mensajeNombre = document.getElementById('mensajeNombre');
const mensajeDescripcion = document.getElementById('mensajeDescripcion');

nombre.addEventListener('input', () => {
  const valorNombre = nombre.value.trim(); // Eliminar espacios en blanco al inicio y final

  if (valorNombre === 'Administrador' || valorNombre === 'Vigilante' || valorNombre === 'Residente') {
    nombre.style.borderColor = '';
    mensajeNombre.textContent = '';
  } else {
    nombre.style.borderColor = '#900D09';
    mensajeNombre.textContent = 'El nombre no es válido. Debe ser "Administrador", "Vigilante" o "Residente".';
  }
});


descripcion.addEventListener('input', () => {
  if (expresionDescripcion.test(descripcion.value)) {
    descripcion.style.borderColor = '';
    mensajeDescripcion.textContent = '';
  } else {
    descripcion.style.borderColor = '#900D09';
    mensajeDescripcion.textContent = 'La descripción es inválida';
  }
});




