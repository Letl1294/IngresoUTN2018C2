/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1,num2,Total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    Total = parseInt(num1) + parseInt(num2);
    alert("El resultado es "+Total);
}

function restar()
{
    var num1,num2,Total;

    num1 = document.getElementById("numeroUno").value;
	num2 = document.getElementById("numeroDos").value;
    Total = parseInt(num1) - parseInt(num2);
    alert("El resultado es "+Total);
}

function multiplicar()
{ 
    var num1,num2,Total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    Total = parseInt(num1) * parseInt(num2);
	alert("El resultado es "+Total);
}

function dividir()
{
	var num1,num2,Total;

    num1 = document.getElementById("numeroUno").value;
    num2 = document.getElementById("numeroDos").value;
    Total = parseInt(num1) / parseInt(num2);
    alert("El resultado es "+Total);
}

