let nombre = prompt("Ingrese su nombre: ");
let apellido = prompt("Ingrese su apellido: ");


if((nombre !="") && (apellido !="")){
    confirm("¿Desea ingresar?");
    console.log("Gracias por elegirnos: " + nombre + " " + apellido);
} 
else {
    alert("Los datos solicitados son obligatorios");
}


