
function ER_validacion_Apartamento() {

    try {

        const ER_apartamento = /^S+[0-9]{3}$/

        const numero_documento = document.querySelector('#Apartamento');
        const FB_documento = document.querySelector('#FB_documento');

        if (ER_apartamento.test(numero_documento.value)) {

            numero_documento.style.borderColor = 'green';
            FB_documento.innerHTML = '';
            FB_documento.style.color = 'green';
        }

        else throw 'Lo siento, no es valido ' + numero_documento.value;
        


    } catch (error) {
        const FB_documento = document.querySelector('#FB_documento');
        const numero_documento = document.querySelector('#Apartamento');
        numero_documento.style.borderColor = 'red';
        FB_documento.innerHTML = error;
        FB_documento.style.color = 'red';


    }

}
function ER_validacion_Propietario() {

    try {

        const ER_nombre = /^[A-Za-z\s]{3,}$/

        const nombre = document.querySelector('#propietario');
        const FB_nombre = document.querySelector('#FB_nombre');

        nombre.value = nombre.value.toUpperCase()

        if (ER_nombre.test(nombre.value)) {

            nombre.style.borderColor = 'green'

            FB_nombre.innerHTML = '';
            FB_nombre.style.color = 'green'
        }

        else throw 'Lo siento, no es valido ' + nombre.value;

    } catch (error) {
        const nombre = document.querySelector('#propietario');
        const FB_nombre = document.querySelector('#FB_nombre');

        FB_nombre.innerHTML = error;
        nombre.style.borderColor = 'red'

        FB_nombre.style.color = 'red'

    }

}


const boton_crear = document.querySelector('#boton_crear').addEventListener('click', (e)=> {

    e.preventDefault();
    ER_validacion_Apartamento();
    ER_validacion_Propietario();
})


// module.exports = ER_validacion;