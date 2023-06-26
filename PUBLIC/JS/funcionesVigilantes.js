const url = 'http://localhost:8094/api/vigilantes/vigilantes';

const ListarVigilantes = async () => {
  let body = document.getElementById('contenido');
  if (body) {
    let mensaje = '';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const vigilante = data.vigilantes;
        vigilante.map((vigilantes) => {
          const fechaNacimiento = new Date(vigilantes.fechaNacimiento);
          const hoy = new Date();
          let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
          if (hoy.getMonth() < fechaNacimiento.getMonth()) {
            edad--;
          }
            else if (hoy.getMonth() === fechaNacimiento.getMonth() && hoy.getDate() < fechaNacimiento.getDate()) {
            edad--;
          }

          if (vigilantes.estado == 'Activo'){
            
          }

          mensaje += `<tr><td>${vigilantes.tipo_documento}</td>` +
            `<td>${vigilantes.documento}</td>` +
            `<td>${vigilantes.nombre}</td>` +
            `<td>${vigilantes.apellido}</td>` +
            `<td>${vigilantes.correo}</td>` +
            `<td>${vigilantes.telefono}</td>` +
            `<td>${edad}</td>` +
            `<td>${vigilantes.estado ? 'Activo' : 'Inactivo'}</td>` +
            `<td>
              <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(vigilantes)})'><i class = "fe fe-edit fe-24"></i></a>
              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${vigilantes._id}")'><i class = "fe fe-delete fe-24"></i></a>
            </td></tr>`;
        });
        body.innerHTML = mensaje;
      })
  }
};


ListarVigilantes()

const registrarVigilantes = async () => {
  let tipo_documento = document.getElementById('tipo').value;
  let documento = document.getElementById('numero').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let fechaNacimiento = document.getElementById('fechaNacimiento').value;

  let vigilantes = {
    tipo_documento: tipo_documento,
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    telefono: telefono,
    correo: correo,
    fechaNacimiento: fechaNacimiento,

  };
  
  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' 
  && telefono !== '' && correo !== '' && fechaNacimiento !== '') {
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
    const expresionTelefono = /^[0-9]{10}$/;
    const expresionDocumento = /^[0-9]{8,10}$/;
    const expresionNombre =/^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    
    if(!expresionTelefono.test(telefono)  || !expresionApellido.test(apellido) || !expresionNombre.test(nombre)
      || ! expresionDocumento.test(documento) || !expresionEmail.test(correo)){
        Swal.fire({
          icon: 'error',
          title: 'No se pudo registrar'
        });
        return
      }

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(vigilantes),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
    .then(response => response.json())
            .then(json => {
                Swal.fire({
                  icon: 'success',
                  title: '¡Éxito!',
                  text: json.vigilantes,
                  showCancelButton: false,
                  showConfirmButton: true,
                  allowOutsideClick: false
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = 'vigilantesL';
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
      let vigilantes = {
        _id: _id
      };

      fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(vigilantes),
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
            text: 'Se eliminó el vigilante correctamente',
          }).then(() => {
            location.reload();
          });
        }
      });      
    }
  });
};


if (document.querySelector('#btnRegistrar')) {
  document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarVigilantes);
}

const editar = (vigilantes) => {
  document.getElementById('_id').value = '';
  document.getElementById('tipoDocumento').value;
  document.getElementById('documento').value;
  document.getElementById('nombre').value;
  document.getElementById('apellido').value;
  document.getElementById('correo').value;
  document.getElementById('telefono').value;
  document.getElementById('fechaNacimiento').value;
  document.getElementById('estado').value;

  document.getElementById('_id').value = vigilantes._id;
  document.getElementById('tipoDocumento').value = vigilantes.tipo_documento;
  document.getElementById('documento').value = vigilantes.documento;
  document.getElementById('nombre').value = vigilantes.nombre;
  document.getElementById('apellido').value = vigilantes.apellido;
  document.getElementById('correo').value = vigilantes.correo;
  document.getElementById('telefono').value = vigilantes.telefono;
  document.getElementById('fechaNacimiento').value = vigilantes.fechaNacimiento ? vigilantes.fechaNacimiento.substring(0, 10) : '';
  document.getElementById('estado').value = vigilantes.estado;
}

const actualizarVigilante= async() => {
  let tipo_documento = document.getElementById('tipoDocumento').value;
  let documento = document.getElementById('documento').value;
  let nombre = document.getElementById('nombre').value;
  let apellido = document.getElementById('apellido').value;
  let correo = document.getElementById('correo').value;
  let telefono = document.getElementById('telefono').value;
  let fechaNacimiento = document.getElementById('fechaNacimiento').value;
  let estado = document.getElementById('estado').value;
  

  let vigilantes = {
    _id: document.getElementById('_id').value,
    tipo_documento: tipo_documento,
    estado: estado, 
    documento: documento,
    nombre: nombre,
    apellido: apellido,
    correo: correo,
    telefono: telefono,
    fechaNacimiento: fechaNacimiento,
    tipoModificacion: 'Unitaria'
  };

  console.log(vigilantes)
  

  if (tipo_documento !== '' && documento !== '' && nombre !== '' && apellido !== '' 
  && telefono !== '' && correo !== '' && fechaNacimiento !== '') {
    const expresionEmail = /^([a-zA-Z0-9]+)\@[a-zA-Z]+\.[a-zA-Z]+$/;
    const expresionTelefono = /^[0-9]{10}$/;
    const expresionDocumento = /^[0-9]{8,10}$/;
    const expresionNombre =/^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    const expresionApellido = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    
    if(!expresionTelefono.test(telefono)  || !expresionApellido.test(apellido) || !expresionNombre.test(nombre)
      || ! expresionDocumento.test(documento) || !expresionEmail.test(correo)){
        Swal.fire({
          icon: 'error',
          title: 'No se pudo modificar'
        });
        return
      }
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(vigilantes),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(response => response.json())
    .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'Vigilantes',
          text: json.vigilantes,
          allowOutsideClick: true, 
          willClose: () => {
            window.location.href = "vigilantesL"; 
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

if(document.querySelector('#btnActualizar'))
{
    document.querySelector('#btnActualizar')
    .addEventListener('click',actualizarVigilante)
}



