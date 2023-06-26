const salirButton = document.getElementById('salir');
salirButton.addEventListener('click', (event) => {
  event.preventDefault();

  Swal.fire({
    title: 'Cerrar Sesión',
    text: "¿Seguro que quieres cerrar sesión?",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonText: 'Cancelar', 
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = '/'; 
    }
  });
});
