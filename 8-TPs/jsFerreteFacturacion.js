/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var numero1;
var numero2;
var numero3;
var suma;
var promedio;
var precioFinal;
function Sumar () 
{
numero1 = parseInt(document.getElementById("PrecioUno").value);
numero2 = parseInt(document.getElementById("PrecioDos").value);
numero3 = parseInt(document.getElementById("PrecioTres").value);
suma = numero1+numero2+numero3;
alert(suma);
}
function Promedio () 
{
promedio = suma/3,
alert(promedio);
}
function PrecioFinal () 
{
precioFinal = suma*1.21;
alert(precioFinal);
}