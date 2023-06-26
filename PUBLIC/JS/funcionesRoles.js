const url = 'http://localhost:8094/api/roles/roles';

const ListarRoles = async () => {
    let body = document.getElementById('contenido');
    if (body) {
        let mensaje = '';

        fetch(url)
            .then(res => res.json())
            .then(data => {
                const rol = data.roles; // Asegúrate de que la estructura de datos sea correcta
                rol.map((roles) => {
                    mensaje += `<tr><td>${roles.nombreRol}</td>` +
                        `<td>${roles.descripcionRol}</td>` +
                        `<td>${roles.estado ? 'Activo' : 'Inactivo'}</td>` +
                        `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1"  onclick='editar(${JSON.stringify(roles)})'><i class = "fe fe-edit fe-24"></i></a>
              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${roles._id}")'><i class = "fe fe-delete fe-24"></i></a>
            </td></tr>`;
                });
                body.innerHTML = mensaje;
            });
    }
};

ListarRoles();

const registrarRoles = async () => {
    let nombreRol = document.getElementById('nombrerol').value;
    let descripcionRol = document.getElementById('descripcion').value;

    let permisos = [];

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            permisos.push(checkbox.value);
        }
    });


    let roles = {
        nombreRol: nombreRol,
        descripcionRol: descripcionRol,
        permisos: permisos,
    };

    if (nombreRol !== '' && descripcionRol !== '' && permisos.length !== 0 )  {
      if(nombreRol !== 'Administrador' && nombreRol !== 'Viligilante' && nombreRol !== 'Residente') {
        Swal.fire({
          icon: 'error',
          title: 'Tienes el nombre incorrecto',
          text: 'Por favor, completa los campos obligatorios'
        });
        return
      
      }
      const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
      const expresionDescripcion = /^[\s\S]*$/;
      if(!expresionDescripcion.test(descripcionRol) || !expresionNombre.test(nombreRol)){
        Swal.fire({
          icon: 'error',
          title: 'No se pudo registrar'
        });
        return
      }
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(roles),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then(response => response.json())
            .then(json => {
              console.log(json.roles)
                Swal.fire({
                  icon: 'success',
                  title: '¡Éxito!',
                  text: json.roles,
                  showCancelButton: false,
                  showConfirmButton: true,
                  allowOutsideClick: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = 'rolesL';
                  }
                });
              });

    }else {
        Swal.fire({
          icon: 'error',
          title: 'Tienes campos vacios',
          text: 'Por favor, completa los campos obligatorios'
        });
      }
    }
if (document.querySelector('#btnRegistrar')) {
    document.querySelector('#btnRegistrar')
        .addEventListener('click', registrarRoles);
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
      let roles = {
        _id: _id
      };

      fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(roles),
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
            text: 'Se eliminó el rol correctamente',
            timer: 2000, 
            timerProgressBar: true
          }).then(() => {
            location.reload();
          });
        }
      });
    }
  });
};
  
  
const editar = (roles) => {
    document.getElementById('_id').value = '';
    document.getElementById('nombrerol').value;
    document.getElementById('descripcion').value;
    document.getElementById('estado').value;
    document.getElementById('permisos').value = roles.permisos;

    document.getElementById('_id').value = roles._id;
    document.getElementById('nombrerol').value = roles.nombreRol;
    document.getElementById('descripcion').value = roles.descripcionRol;
    document.getElementById('estado').value = roles.estado;
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = roles.permisos.includes(checkbox.value);
    });
};


const actualizarRoles = async () => {
    let nombreRol = document.getElementById('nombrerol').value;
    let descripcionRol = document.getElementById('descripcion').value;
    let estado = document.getElementById('estado').value;
    let permisos = [];
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            permisos.push(checkbox.value);
        }
    });

    let roles = {
        _id: document.getElementById('_id').value,
        nombreRol: nombreRol,
        estado: estado,
        descripcionRol: descripcionRol,
        permisos: permisos,
        tipoModificacion: 'Unitaria'
    };

    if (nombreRol !== '' && estado !== '' && descripcionRol !== '' && permisos.length !== 0) {
      if(nombreRol !== 'Administrador' && nombreRol !== 'Viligilante' && nombreRol !== 'Residente') {
        Swal.fire({
          icon: 'error',
          title: 'Tienes el nombre incorrecto',
          text: 'Por favor, completa los campos obligatorios'
        });
        return
      }
      const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
      const expresionDescripcion = /^[\s\S]*$/;
      if(!expresionDescripcion.test(descripcionRol) || !expresionNombre.test(nombreRol)){
        Swal.fire({
          icon: 'error',
          title: 'No se pudo modificar'
        });
        return
      }
        fetch(url, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(roles),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .then(json => {
                Swal.fire({
                  icon: 'success',
                  title: 'Roles',
                  text: json.roles,
                  allowOutsideClick: true, 
                  willClose: () => {
                    window.location.href = "rolesL"; 
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

if (document.querySelector('#btnActualizar')) {
    document.querySelector('#btnActualizar')
        .addEventListener('click', actualizarRoles);
}

