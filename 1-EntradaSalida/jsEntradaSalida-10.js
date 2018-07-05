/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var imp, desc, total;

imp = document.getElementById("importe").value;

desc=parseInt(imp)*0.25;

total=parseInt(imp) - desc;

document.getElementById("resultado").value = total

}
