const url = 'http://localhost:8094/api/reservas/reservas';

const listarReservas = async () => {
  let body = document.getElementById('contenido');
  if (body) {
    let mensaje = '';

    fetch(url)
      .then(res => res.json())
      .then(data => {
        const reserva = data.reservas;
        reserva.map((reservas) => {
          const fechaInicio = new Date(reservas.fecha).toLocaleDateString();
          const fechaFin = new Date(reservas.fechaFinal).toLocaleDateString();


          if (reservas.capacidad === null || reservas.capacidad === undefined) {
            reservas.capacidad = 'N/A';
          } if (reservas.vehiculo === '') {
            reservas.vehiculo = 'N/A';
          } if (reservas.parqueadero === '') {
            reservas.parqueadero = 'N/A';
          }


          mensaje += `<tr><td>${reservas.tipoEspacio}</td>` +
            `<td>${reservas.espacio}</td>` +
            `<td>${reservas.propietario}</td>` +
            `<td>${fechaInicio}</td>` +
            `<td>${fechaFin}</td>` +
            `<td>${reservas.vehiculo}</td>` +
            `<td>${reservas.parqueadero}</td>` +
            `<td>${reservas.capacidad}</td>` +
            `<td>
              <a class="waves-effect waves-light btn modal-trigger" href="#modal1" onclick='editar(${JSON.stringify(reservas)})'><i class = "fe fe-edit fe-24"></i></a>

              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${reservas._id}")'><i class = "fe fe-delete fe-24"></i></a>
            </td></tr>`;
        });
        body.innerHTML = mensaje;
      })
  }
};

listarReservas();

const registrarReserva = async () => {
  // Captura de valores de datos enviados desde el formulario
  let tipoEspacio = document.getElementById('tipoEspacio').value;
  let espacio = document.getElementById('espacio').value;
  let propietario = document.getElementById('propietario').value;
  let fechaFinal = document.getElementById('fechaFin').value;
  let vehiculo = document.getElementById('vehiculo').value;
  let parqueadero = document.getElementById('parqueadero').value;
  let capacidad = document.getElementById('capacidad').value;

  let reservas = {
    tipoEspacio: tipoEspacio,
    espacio: espacio,
    propietario: propietario,
    fechaFinal: fechaFinal,
    vehiculo: vehiculo,
    parqueadero: parqueadero,
    capacidad: capacidad
  };

  if (tipoEspacio !== '' && espacio !== '' && propietario !== '') {
    const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;
    if (!expresionNombre.test(propietario)) {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo registrar'
      });
      return;
    }

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(reservas),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(response => response.json())
      .then(json => {
        Swal.fire({
          icon: 'success',
          title: '¡Éxito!',
          text: json.reservas,
          showCancelButton: false,
          showConfirmButton: true,
          allowOutsideClick: false
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = 'reservas';
          }
        });
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar la solicitud',
          text: error.message
        });
      });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Tienes campos vacios',
      text: 'Por favor, completa los campos obligatorios'
    });
  }
  console.log(reservas);
}


if (document.querySelector('#btnRegistrarR')) {
  document.querySelector('#btnRegistrarR')
    .addEventListener('click', registrarReserva);
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
      let reservas = {
        _id: _id
      };

      fetch(url, {
        method: 'DELETE',
        mode: 'cors',
        body: JSON.stringify(reservas),
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
              text: 'Se eliminó la reserva correctamente',
            }).then(() => {
              location.reload();
            });
          }
        });
    }
  });
};



const editar = (reservas) => {
  document.getElementById('_id').value = '';
  document.getElementById('tipoEspacio').value;
  document.getElementById('espacio').value;
  document.getElementById('propietario').value
  document.getElementById('fechaFin').value
  document.getElementById('vehiculo').value
  document.getElementById('parqueadero').value
  document.getElementById('capacidad').value


  document.getElementById('_id').value = reservas._id
  document.getElementById('tipoEspacio').value = reservas.tipoEspacio
  document.getElementById('espacio').value = reservas.espacio
  document.getElementById('propietario').value = reservas.propietario
  document.getElementById('fechaFin').value = reservas.fechaFinal ? reservas.fechaFinal.substring(0, 10) : '';
  document.getElementById('vehiculo').value = reservas.vehiculo
  document.getElementById('parqueadero').value = reservas.parqueadero
  document.getElementById('capacidad').value = reservas.capacidad

}

const actualizarReserva = async () => {
  let tipoEspacio = document.getElementById('tipoEspacio').value;
  let espacio = document.getElementById('espacio').value;
  let propietario = document.getElementById('propietario').value
  let fechaFinal = document.getElementById('fechaFin').value
  let vehiculo = document.getElementById('vehiculo').value
  let parqueadero = document.getElementById('parqueadero').value
  let capacidad = document.getElementById('capacidad').value

  


  let reservas = {
    _id: document.getElementById('_id').value,
    tipoEspacio: tipoEspacio,
    espacio: espacio,
    propietario: propietario,
    fechaFinal: fechaFinal,
    vehiculo: vehiculo,
    parqueadero: parqueadero,
    capacidad: capacidad,
    tipoModificacion: 'Unitaria'
  };

  console.log(reservas)
  if (reservas.capacidad === null || reservas.capacidad === undefined) {
    reservas.capacidad = 'N/A';
  } if (reservas.vehiculo === '') {
    reservas.vehiculo = 'N/A';
  } if (reservas.parqueadero === '') {
    reservas.parqueadero = 'N/A';
  }



  if (tipoEspacio !== '' && espacio !== '' && propietario !== '' && fechaFinal !== '') {
    const expresionNombre = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚ])\s*[a-zA-ZáéíóúÁÉÍÓÚ\s]*$/;

  if(!expresionNombre.test(propietario))
  {
    Swal.fire({
      icon: 'error',
      title: 'No se pudo modificar'
    });
    return
  }

    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(reservas),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        Swal.fire({
          icon: 'success',
          title: 'Reservas',
          text: json.reservas,
          allowOutsideClick: true, 
          willClose: () => {
            window.location.replace("reservas");
            
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
  editarButton.addEventListener('click', actualizarReserva);
}


const tipoEspacioSelect = document.getElementById('tipoEspacio');
const propietarioInput = document.getElementById('propietario');
const capacidadInput = document.getElementById('capacidad');
const vehiculoInput = document.getElementById('vehiculo');
const parqueaderoInput = document.getElementById('parqueadero');
const espacioSelect = document.getElementById('espacio');

tipoEspacioSelect.addEventListener('change', function() {
  const tipoEspacio = tipoEspacioSelect.value;

  propietarioInput.value = '';
  capacidadInput.value = '';
  vehiculoInput.value = '';
  parqueaderoInput.value = '';
  propietarioInput.style.display = 'none';
  capacidadInput.style.display = 'none';
  vehiculoInput.style.display = 'none';
  parqueaderoInput.style.display = 'none';

  if (tipoEspacio === 'Zona humeda') {
    propietarioInput.style.display = 'block';
    capacidadInput.style.display = 'block';
    espacioSelect.innerHTML = `
      <option value="Piscina">Piscina</option>
      <option value="Sauna">Sauna</option>
    `;
  } else if (tipoEspacio === 'Salon Social') {
    propietarioInput.style.display = 'block';
    capacidadInput.style.display = 'block';
    espacioSelect.innerHTML = `
    <option value="Salon Social">Salon Social</option>
  `;
  } 
  else if (tipoEspacio === 'Parqueadero') {
    propietarioInput.style.display = 'block';
    vehiculoInput.style.display = 'block';
    espacioSelect.innerHTML = `
    <option value="Parqueadero">Parqueadero</option>
  `;
  } 
  else if (tipoEspacio === 'opcion') {
    propietarioInput.style.display = 'block';
    capacidadInput.style.display = 'block';
    vehiculoInput.style.display = 'block';
    parqueaderoInput.style.display = 'block';
  }
});
