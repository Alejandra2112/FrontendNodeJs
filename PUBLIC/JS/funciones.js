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
            `<td><a class="waves-effect waves-light btn modal-trigger" href="#modal1"  onclick='editar(${JSON.stringify(roles)})'>Editar</a>
              <a class="waves-effect waves-light btn modal-trigger red" href="#" onclick='eliminar("${roles._id}")'>Eliminar</a>
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

  if (nombreRol !== '' && descripcionRol !== '' && permisos.length > 0) {
    let roles = {
      nombreRol: nombreRol,
      descripcionRol: descripcionRol,
      permisos: permisos,
    };

    fetch(url, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(roles),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(response => response.json())
      .then(data => {
        alert(JSON.stringify(data.roles));
        window.location.href = 'RolesL';
      });
  } else {
    alert('No se pudo registrar el rol. Por favor complete todos los campos.');
  }
};

const eliminar = (_id) => {
  if (confirm('¿Está seguro de realizar la eliminación?') == true) {
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
          alert(json.mensaje);
        } else {
          alert('Rol eliminado exitosamente');
        }
        location.reload();
      });
  }
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

  console.log(roles);

  if (nombreRol !== '') {
    fetch(url, {
      method: 'PUT',
      mode: 'cors',
      body: JSON.stringify(roles),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(response => response.json())
      .then(json => {
        alert(json.roles);
        window.location.href = "rolesL";
        console.log(JSON.stringify(roles)); 
      });
  } else {
    alert('No se pudo realizar la modificación');
  }
};

if (document.querySelector('#btnActualizar')) {
  document.querySelector('#btnActualizar')
    .addEventListener('click', actualizarRoles);
}

if (document.querySelector('#actualizar')) {
  document.querySelector('#btnRegistrar')
    .addEventListener('click', registrarRoles);
}
