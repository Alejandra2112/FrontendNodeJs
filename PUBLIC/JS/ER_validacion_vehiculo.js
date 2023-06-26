function ER_validacion_Espacio() {

    try {

        const ER_edad = /^S+[0-9]{2}$/


        const edad = document.querySelector('#Espacio');
        const FB_edad = document.querySelector('#FB_espacio');

        edad.value = edad.value.toUpperCase()

        if (ER_edad.test(edad.value)) {

            edad.style.borderColor = 'green'
            FB_edad.innerHTML = '';
            FB_edad.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + edad.value;;

    } catch (error) {
        const edad = document.querySelector('#Espacio');
        const FB_edad = document.querySelector('#FB_espacio');

        FB_edad.innerHTML = error;
        edad.style.borderColor = 'red'
        FB_edad.style.color = 'red'

    }

}
function ER_validacion_placa() {

    try {

        const ER_telefono = /^[A-Z]{3}-[0-9]{3}$/

        const telefono = document.querySelector('#Placa');
        const FB_telefono = document.querySelector('#FB_placa');

        if (ER_telefono.test(telefono.value)) {

            telefono.style.borderColor = 'green'

            FB_telefono.innerHTML = '';
            FB_telefono.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + telefono.value;;

    } catch (error) {
        const telefono = document.querySelector('#Placa');
        const FB_telefono = document.querySelector('#FB_placa');

        FB_telefono.innerHTML = error;
        telefono.style.borderColor = 'red'
        FB_telefono.style.color = 'red'

    }

}

const boton_crear = document.querySelector('#boton_crear').addEventListener('click', (e)=> {
    e.preventDefault();
    ER_validacion_Espacio();
    ER_validacion_placa();
})
