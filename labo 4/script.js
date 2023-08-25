/* hacer un  */
const copas = document.getElementById("cantidadCopas")
copas.innerText = 6;
const boton = document.getElementById("boton")

boton.addEventListener("dblclick",() => {
     copas.innerText = 7
} )
