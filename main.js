
let termycond = confirm("¿Acepta los terminos y condiciones? ")

let estaciones = ["verano", "invierno", "otoño", "primavera"]
console.log ("La estacion mas calurosa es "+ estaciones [0])

let estacion = prompt("¿Cual es la estacion mas calurosa del año?")


if (estacion == "verano") {
    alert("¡Correcto! El Verano es la más cálida de las cuatro estaciones del año y se caracteriza porque los días son más largos y las noches más cortar")
} else if (estacion == "invierno") {
    alert(" Incorrecto, estas en el polo opuesto")
} else if (estacion == "otoño") {
    alert("Incorrecto, te pasaste de estacion")
} else if (estacion == "primavera") {
    alert("Incorrecto pero estas cerca...")
}
else if (estacion != "verano") {
    alert("Incorrecto, introduce una estacion valida")
}




 function duracion (dias,meses) {
let resultado 
resultado=dias*meses
return resultado
}

let duraciontotal = duracion (30,3) 
console.log ("Cantidad de dias que dura cada estacion: " + duraciontotal)

