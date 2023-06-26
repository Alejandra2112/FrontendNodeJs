const boton= document.getElementById("boton");
boton.addEventListener("click", function(e){
    e.preventDefault();
    try{
        if (document.getElementById("Fecha").value == false){
            throw new Error("Debe ingresar la fecha limite");
        }
    const Fecha= document.getElementById("Fecha").value;
    let fechaActual = new Date();
    let fechaLimite = new Date(Fecha);
    if (fechaLimite < fechaActual){
        alert("La fecha limite es inferior a la echa de creacion por lo que es invalida, vuelvala a ingresar")
    }
    else{
        alert("Gracias por usar nuestra version de prueba, por favor espere por futuras actualizaciones :)");
    }
}catch(error){
    alert(error)
}
})



 
