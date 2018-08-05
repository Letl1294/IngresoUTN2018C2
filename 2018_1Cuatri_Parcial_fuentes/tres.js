function mostrar()
{
var precio = parseInt(prompt("ingrese el precio del producto "));
var descuento = parseInt(prompt("Ingrese el descuento del producto"));
var final = -((precio*descuento)/100)+precio;

document.getElementById("elPrecioFinal").value = final;


}
