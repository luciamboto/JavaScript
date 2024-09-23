let cotizacionUsuario = JSON.parse(localStorage.getItem('cotizacionUsuario')) || [];

function cotizacionPesos () {
    let precioDolar= 1240
    let precioMoto= document.getElementById("preciomoto").value
   
    let resultado= precioDolar*precioMoto
    
    let precioFinal= document.getElementById("precioFinal")
    precioFinal.textContent = resultado

   
   
    cotizacionUsuario.push(resultado)


    // Convertir el array a una cadena JSON
    let cotizacionUsuariojson= JSON.stringify(cotizacionUsuario)
    
    // Almacenar en localStorage
    window.localStorage.setItem('cotizacionUsuario', cotizacionUsuariojson) 

}
    



let botoncotizar= document.getElementById("botoncotizar")
 

botoncotizar.addEventListener("click", () => cotizacionPesos())





