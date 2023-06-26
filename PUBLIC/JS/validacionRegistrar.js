const btn = document.getElementById('btnRegistrar');
btn.addEventListener('click', () => {

  const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
  const expresionpassword = /^[a-zA-Z0-9]{8,}$/;
  const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
  const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
  const expresionTelefono = /^[0-9]{10}$/;
  const expresionDocumento = /^[0-9]{8,10}$/;

  const email = document.getElementById('correo').value;
  const documento = document.getElementById('documento').value;
  const password = document.getElementById('password').value;
  const apellido = document.getElementById('apellido').value;
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const Cpassword = document.getElementById('confirmarPassword').value;
if (
    nombre == '' || telefono ==='' || Cpassword == '' || password == '' || apellido == '' ||email == ''){
    Swal.fire({
      icon: 'error',
      title: 'Los campos están vacíos',
      showConfirmButton: true,
  confirmButtonClass: 'swal-button' 
      
    });
  } else if (!expresionNombre.test(nombre)) {
    Swal.fire({
      icon: 'error',
      title: 'El nombre no es correcto',

    });
  } else if (!expresionApellido.test(apellido)) {
    Swal.fire({
      icon: 'error',
      title: 'El apellido no es correcto'
    });
  } else if (!expresionDocumento.test(documento)) {
    Swal.fire({
      icon: 'error',
      title: 'El documento no es correcto'
    });
  } else if (!expresionEmail.test(email)) {
    Swal.fire({
      icon: 'error',
      title: 'El email no es correcto'
    });
  } else if (!expresionTelefono.test(telefono)) {
    Swal.fire({
      icon: 'error',
      title: 'El teléfono no es correcto'
    });
  } else if (!expresionpassword.test(password) || !expresionpassword.test(Cpassword)) {
    Swal.fire({
      icon: 'error',
      title: 'La contraseña no es correcta'
    });
    if (password !== Cpassword) {
      Swal.fire({
        icon: 'error',
        title: 'Las contraseñas tienen que ser iguales'
      });
    }
  } else {
    Swal.fire({
      icon: 'success',
      title: 'Registro Exitoso',
      showConfirmButton: true,
    confirmButtonClass: 'swal-button' 
    });
  }
});
