
const botonC = document.getElementById("botonC");
botonC.addEventListener("click", function(e){
e.preventDefault();
const regexMotivo = /^[A-Za-z ]{1,25}$/;
const regexDesc = /^(?=.*[A-Za-z])[\w ]{1,100}$/;
const regexValor = /^\d{1,9}$/;
const regexCuota = /^\d{1,2}$/;
   try{
       if (document.getElementById("motivo").value == "" || document.getElementById("descripcion").value == "" || document.getElementById("valor").value == "" || document.getElementById("cuota").value==""){
           throw new Error("Ninguno de los campos puede ir vacio");
       }else if(regexMotivo.test(document.getElementById("motivo").value)==false){
           throw new Error("El motivo no es valido");
       }else if(regexDesc.test(document.getElementById("descripcion").value)==false){
           throw new Error("El descripcion no es valida");
       }else if(regexValor.test(document.getElementById("valor").value)==false){
           throw new Error("El valor ingresado no es valido");
       }else if(regexCuota.test(document.getElementById("cuota").value)==false){
           throw new Error("La cuota ingresada no es permitida");
       }
       alert("Gracias por utilizar el software, proximamente disponible!")

   }catch(error){
       alert("Error: "+error);
  }

})