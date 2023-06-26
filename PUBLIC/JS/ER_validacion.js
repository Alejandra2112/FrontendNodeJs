
function ER_validacion_numero_documento() {

    try {

        const ER_numero_documento = /^[0-9]{8,}$/

        const numero_documento = document.querySelector('#numero_documento');
        const FB_documento = document.querySelector('#FB_documento');

        if (ER_numero_documento.test(numero_documento.value)) {

            numero_documento.style.borderColor = 'green'
            FB_documento.innerHTML = '';
            FB_documento.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + numero_documento.value;
        


    } catch (error) {

        FB_documento.innerHTML = error;
        numero_documento.style.borderColor = 'red'
        FB_documento.style.color = 'red';


    }

}
function ER_validacion_nombre() {

    try {

        const ER_nombre = /^[A-Za-z\s]+$/

        const nombre = document.querySelector('#nombre');
        const FB_nombre = document.querySelector('#FB_nombre');

        nombre.value = nombre.value.toUpperCase()

        if (ER_nombre.test(nombre.value)) {

            nombre.style.borderColor = 'green'

            FB_nombre.innerHTML = '';
            FB_nombre.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + nombre.value;

    } catch (error) {

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = 'red'

        FB_nombre.style.color = 'red'

    }

}

function ER_validacion_apellido() {

    try {

        const ER_apellido = /^[A-Za-z\s]+$/

        const apellido = document.querySelector('#apellido');
        const FB_apellido = document.querySelector('#FB_apellido');

        apellido.value = apellido.value.toUpperCase()

        if (ER_apellido.test(apellido.value)) {

            apellido.style.borderColor = 'green'

            FB_apellido.innerHTML = '';
            FB_apellido.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + apellido.value;

    } catch (error) {

        FB_apellido.innerHTML = error;
        apellido.style.borderColor = 'red'
        FB_apellido.style.color = 'red'

    }

}

function ER_validacion_edad() {

    try {

        const ER_edad = /^[0-9]{2,3}$/

        numero_documento.style.borderColor = 'green'

        const edad = document.querySelector('#edad');
        const FB_edad = document.querySelector('#FB_edad');

        edad.value = edad.value.toUpperCase()

        if (ER_edad.test(edad.value)) {

            edad.style.borderColor = 'green'
            FB_edad.innerHTML = '';
            FB_edad.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + edad.value;;

    } catch (error) {

        FB_edad.innerHTML = error;
        edad.style.borderColor = 'red'
        FB_edad.style.color = 'red'

    }

}

function ER_validacion_correo() {

    try {

        const ER_correo = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

        const correo = document.querySelector('#correo');
        const FB_correo = document.querySelector('#FB_correo');

        if (ER_correo.test(correo.value)) {

            correo.style.borderColor = 'green'

            FB_correo.innerHTML = '';
            FB_correo.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + correo.value;

    } catch (error) {

        FB_correo.innerHTML = error;
        correo.style.borderColor = 'red'
        FB_correo.style.color = 'red'

    }

}

function ER_validacion_telefono() {

    try {

        const ER_telefono = /^[0-9]{10}$/

        const telefono = document.querySelector('#telefono');
        const FB_telefono = document.querySelector('#FB_telefono');

        if (ER_telefono.test(telefono.value)) {

            telefono.style.borderColor = 'green'

            FB_telefono.innerHTML = '';
            FB_telefono.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + telefono.value;;

    } catch (error) {

        FB_telefono.innerHTML = error;
        telefono.style.borderColor = 'red'
        FB_telefono.style.color = 'red'

    }

}

function ER_nombre_espacio () {

    try {

        const ER_nombre_espacio = /^[A-Z0-9]{3,4}$/

        const nombre_espacio = document.querySelector('#nombre_espacio');
        const FB_nombre_espacio = document.querySelector('#FB_nombre_espacio');

        nombre_espacio.value = nombre_espacio.value.toUpperCase()

        if (ER_nombre_espacio.test(nombre_espacio.value)) {

            nombre_espacio.style.borderColor = 'green'

            FB_nombre_espacio.innerHTML = '';
            FB_nombre_espacio.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + nombre_espacio.value;;

    } catch (error) {

        FB_nombre_espacio.innerHTML = error;
        nombre_espacio.style.borderColor = 'red'
        FB_nombre_espacio.style.color = 'red'

    }

}

function ER_area() {

    try {

        const ER_area = /^[0-9]+$/

        const area = document.querySelector('#area');
        const FB_area = document.querySelector('#FB_area');

        area.value = area.value.toUpperCase()

        if (ER_area.test(area.value)) {

            area.style.borderColor = 'green'

            FB_area.innerHTML = '';
            FB_area.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + area.value;;

    } catch (error) {

        FB_area.innerHTML = error;
        area.style.borderColor = 'red'
        FB_area.style.color = 'red'

    }

}

function ER_capacidad() {

    try {

        const ER_capacidad = /^[0-9]+$/

        const capacidad = document.querySelector('#capacidad');
        const FB_capacidad = document.querySelector('#FB_capacidad');

        capacidad.value = capacidad.value.toUpperCase()

        if (ER_capacidad.test(capacidad.value)) {

            capacidad.style.borderColor = 'green'

            FB_capacidad.innerHTML = '';
            FB_capacidad.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + capacidad.value;;

    } catch (error) {

        FB_capacidad.innerHTML = error;
        capacidad.style.borderColor = 'red'
        FB_capacidad.style.color = 'red'

    }

}

function ER_fecha_inicio() {
     
    const fecha_inicio = document.querySelector('#fecha_inicio');
    const fecha_fin = document.querySelector('#fecha_fin');

    const FB_fecha_inicio = document.querySelector('#FB_fecha_inicio');


    const fecha_actual = new Date()

    try {

        if (new Date(fecha_inicio.value) < fecha_actual) {

            throw `La fecha inicio ${fecha_inicio.value} no es valida`;


        }

        if (new Date(fecha_fin.value) < fecha_actual) {

            throw `La fecha salida ${fecha_fin.value} no es valida`;

        }

        else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

            throw 'La fecha de salida debe ser antes que la fecha de ingreso'

        }

        else if (isNaN(new Date(fecha_inicio.value))) {

            throw 'Debes seleccionar la fecha de inicio'
        }

        else {

            // console.log('Continua viendo precios de vuelos');
            fecha_inicio.style.borderColor = 'green';
            FB_fecha_inicio.innerHTML = '';
            // fecha_fin.style.borderColor = 'green';

        }
    } catch (error) {

        FB_fecha_inicio.innerHTML = error;
        FB_fecha_inicio.style.color = 'red';
        fecha_inicio.style.borderColor = 'red';
        // fecha_fin.style.borderColor = 'red';


    }
}

function ER_fecha_fin() {
     
    const fecha_inicio = document.querySelector('#fecha_inicio');
    const fecha_fin = document.querySelector('#fecha_fin');

    const FB_fecha_fin = document.querySelector('#FB_fecha_fin');


    const fecha_actual = new Date()

    try {

        if (new Date(fecha_inicio.value) < fecha_actual) {

            throw `La fecha inicio ${fecha_inicio.value} no es valida`;


        }

        if (new Date(fecha_fin.value) < fecha_actual) {

            throw `La fecha salida ${fecha_fin.value} no es valida`;

        }

        else if (new Date(fecha_inicio.value) > new Date(fecha_fin.value)) {

            throw 'La fecha de salida debe ser antes que la fecha de ingreso'

        }

        

        else {

            // console.log('Continua viendo precios de vuelos');
            // fecha_inicio.style.borderColor = 'green';
            FB_fecha_fin.innerHTML = '';
            fecha_fin.style.borderColor = 'green';

        }
    } catch (error) {

        // FB_fecha_inicio.innerHTML = error;
        // FB_fecha_inicio.style.color = 'red';
        // fecha_inicio.style.borderColor = 'red';
        FB_fecha_fin.innerHTML = error;
        FB_fecha_fin.style.color = 'red';
        fecha_fin.style.borderColor = 'red';
        


    }
}

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', (e)=> {

    e.preventDefault();

    ER_validacion_numero_documento();
    ER_validacion_nombre();
    ER_validacion_apellido();
    ER_validacion_edad();
    ER_validacion_correo();
    ER_validacion_telefono();


    ER_fecha_inicio()
    ER_fecha_fin()

})

const regresar = document.querySelector('#regresar').addEventListener('click', (e)=> {

    e.preventDefault();

    window.location.href = "/"

})




// module.exports = ER_validacion;