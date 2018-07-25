function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero!=7){
	
	numero = prompt("Numero incorrecto ingrese otro numero");	
	}
	
	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN