/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var Num1;
var Num2;
var numTotal;

Num1 = document.getElementById("numeroUno").value;

Num2 = document.getElementById("numeroDos").value;

numTotal = parseInt(Num1)+parseInt(Num2);

alert("El resultado es " +numTotal);

}

