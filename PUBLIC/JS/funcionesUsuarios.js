const url = 'https://backnodejs.onrender.com/api/usuarios/usuarios'

const listarUsuarios = async () => {
  let body = document.getElementById('contenido');
  if (body) {
    let mensaje = '';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const usuarios = data.usuario; // Asegúrate de que la estructura de datos sea correcta
        usuarios.map((usuario) => {
          const fechaA = new Date(usuario.fecha).toLocaleDateString();
        
          mensaje += `<tr><td>${usuario.tipo_documento}</td>` +
            `<td>${usuario.documento}</td>` +
            `<td>${usuario.nombre}</td>` +
            `<td>${usuario.apellido}</td>` +
            `<td>${usuario.correo}</td>` +
            `<td>${usuario.telefono}</td>` +
            `<td>${usuario.rol}</td>` +
            `<td>${usuario.estado ? 'Activo' : 'Inactivo'}</td>`+
            `<td>${fechaA} 
            </td>` +
            `<td>
              <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(usuario)})'><i class = "fe fe-edit fe-24"></i></a>
              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${usuario._id}")'><i class = "fe fe-delete fe-24"></i></a>
            </td></tr>`;
        });
        body.innerHTML = mensaje;
      })
  }
};

listarUsuarios();

const IniciarSesion = async (e) => {
    e.preventDefault();
    let contrasena = document.getElementById('contrasena').value;
    let usuario = document.getElementById('usuario').value;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const usuarios = data.usuario;
        const usuarioEncontrado = usuarios.find(u => (u.documento.toString() === usuario || u.correo === usuario) && u.password === contrasena);
        if (usuarioEncontrado) {
          window.location.href = 'usuariosL';
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Inicio de sesión fallido',
            
          });
        }
      });
  };
  
  
if(document.querySelector('#inicioSesion'))
{
    document.querySelector('#inicioSesion')
    .addEventListener('click', IniciarSesion)
}

const registrarUsuario = async () => {
  // Captura de valores de datos enviados desde el formulario
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confirmarPassword').value;
 

  let usuario = {
    tipo_documento: tipo_documento,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    password: password
  };

  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' && correo !== '' && telefono !== '' && password !== '' && confirmarPassword !== '') {
    if (password.length > 0 && confirmarPassword.length > 0 && password === confirmarPassword) {
      const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
      const expresionTelefono = /^[0-9]{10}$/;
      const expresionDocumento = /^[0-9]{8,10}$/;
      const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
      const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
      const expresionpassword = /^[a-zA-Z0-9]{8,}$/;
      const expresionCpassword = /^[a-zA-Z0-9]{8,}$/;
      
      if (!expresionNombre.test(nombre) || !expresionApellido.test(apellido) || !expresionDocumento.test(documento) || !expresionEmail.test(correo) || !expresionTelefono.test(telefono) || !expresionpassword.test(password) || !expresionCpassword.test(confirmarPassword)) {
        Swal.fire({
          icon: 'error',
          title: 'No se pudo registrar'
        });
        return;
      }

      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(usuario),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
      .then(response => response.json())
      .then(json => {
        // alert(json.usuario);
      });
    } else {
      Swal.fire({
        title: 'La contraseña y la confirmación de contraseña no coinciden. Por favor verifique',
        icon: 'error'
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Los campos están vacíos',
      showConfirmButton: true,
      confirmButtonClass: 'swal-button' 
    });
  }
};


if(document.querySelector('#btnRegistrar'))
{
    document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarUsuario)
}



const registrarUsuarioF = async () => {
  // Captura de valores de datos enviados desde el formulario
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let password = document.getElementById('password').value;
  let confirmarPassword = document.getElementById('confirmarPassword').value;
  let rol = document.getElementById('rol').value;

  let usuario = {
    tipo_documento: tipo_documento,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    password: password,
    rol: rol
  };

  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' && correo !== '' && telefono !== '' && password !== '' && rol !== '') {
    if (password.length > 0 && confirmarPassword.length > 0 && password === confirmarPassword) {
      const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
      const expresionTelefono = /^[0-9]{10}$/
      const expresionDocumento = /^[0-9]{8,10}$/;
      const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
      const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
      const expresionpassword =  /^[a-zA-Z0-9]{8,}$/;
      const expresionCpassword =  /^[a-zA-Z0-9]{8,}$/;
        if(!expresionNombre.test(nombre) ||  !expresionApellido.test(apellido) || !expresionDocumento.test(documento) 
        ||  !expresionEmail.test(correo) || !expresionTelefono.test(telefono) || !expresionpassword.test(password) || !expresionCpassword.test(confirmarPassword)){
          Swal.fire({
            icon: 'error',
            title: 'No se pudo registrar'
          });
          return
        }
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(usuario),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then(response => response.json())
        .then(json => {
          Swal.fire({
            title: json.usuario,
            icon: 'success'
          }).then(() => {
            window.location.href = 'usuariosL';
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'La contraseña y la confirmación de contraseña no coinciden. Por favor verifique',
            icon: 'error'
          });
        })
        .catch(() => {
          Swal.fire({
            title: 'Tienes los campos vacíos',
            icon: 'error'
          });
        });
    } else {
      Swal.fire({
        title: 'La contraseña y la confirmación de contraseña no coinciden. Por favor verifique',
        icon: 'error'
      });
    }
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Tienes campos vacios',
      text: 'Por favor, completa los campos vacios'
    });
  }
  console.log(usuario)
};

  
if(document.querySelector('#btnRegistrarF')){
  document.querySelector('#btnRegistrarF')
  .addEventListener('click', (e) => {
  e.preventDefault();
  registrarUsuarioF(); 
})
}



const eliminar = (_id) => {
    Swal.fire({
      title: '¿Está seguro de realizar la eliminación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Captura de valores de datos enviados desde el formulario
        let usuario = {
          _id: _id
        };
  
        fetch(url, {
          method: 'DELETE',
          mode: 'cors',
          body: JSON.stringify(usuario),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(json => {
          if (json.mensaje) {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: json.mensaje
            });
          } else {
            Swal.fire({
              icon: 'success',
              title: 'Eliminación Exitosa',
              text: 'Se eliminó el usuario correctamente',
            }).then(() => {
              location.reload();
            });
          }
        });
      }
    })
  }        
  
const editar = (usuario) => {
  let _id =  document.getElementById('_id').value = '';
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let rol = document.getElementById('nombrerol').value;
  let estado = document.getElementById('estado').value;
  

  document.getElementById('_id').value = usuario._id
  document.getElementById('tipoDocumento').value = usuario.tipo_documento;
  document.getElementById('documento').value = usuario.documento;
  document.getElementById('nombre').value = usuario.nombre;
  document.getElementById('apellido').value = usuario.apellido;
  document.getElementById('correo').value = usuario.correo;
  document.getElementById('telefono').value = usuario.telefono;
  document.getElementById('nombrerol').value = usuario.rol;
  document.getElementById('estado').value = usuario.estado

}
const actualizarUsuario = async() => {
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let rol = document.getElementById('nombrerol').value;
  let estado = document.getElementById('estado').value;
  

  let usuario = {
    _id: document.getElementById('_id').value,
    tipo_documento: tipo_documento,
    estado: estado, 
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    rol: rol,
    tipoModificacion: 'Unitaria'
  };

  console.log(usuario)
  

  if (documento !== '' && tipo_documento !== '' && estado !== '' && nombre !== '' && apellido !== '' && correo 
  !== '' && telefono !== '' && rol !== '') {
  const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
  const expresionTelefono = /^[0-9]{10}$/
  const expresionDocumento = /^[0-9]{8,10}$/;
  const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
  const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/
    if(!expresionNombre.test(nombre) ||  !expresionApellido.test(apellido) || !expresionDocumento.test(documento) 
    ||  !expresionEmail.test(correo) || !expresionTelefono.test(telefono)){
      Swal.fire({
        icon: 'error',
        title: 'No se pudo modificar'
      });
      return
    }
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(usuario),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      
    .then(response => response.json())
    .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'Usuarios',
          text: json.usuario,
          allowOutsideClick: true, 
          willClose: () => {
            window.location.href = "usuariosL"; 
          }
        });
      });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Tienes campos vacios',
      text: 'Por favor, completa los campos obligatorios'
    });
  }
}


const editarButton = document.querySelector('#btnActualizar');
if (editarButton) {
    editarButton.addEventListener('click', actualizarUsuario);
}
