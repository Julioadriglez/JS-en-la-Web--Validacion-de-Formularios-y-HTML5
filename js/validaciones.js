const inputNacimento = document.querySelector('#birth');

inputNacimento.addEventListener('blur', (event) => {
    validarNacimiento(event.target);
});
function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    mayorDeEdad(fechaCliente);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad";
    }

    input.setCustomValidity(mensaje);
}
function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());
    return diferenciaFechas <= fechaActual;
}
