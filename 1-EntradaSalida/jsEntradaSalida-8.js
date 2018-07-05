/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
var num1,num2,Resto;

num1 = document.getElementById("numeroDividendo").value;
num2 = document.getElementById("numeroDivisor").value;

Resto = parseInt(num1) % parseInt(num2);
alert("El resto es "+ Resto); 	
}


