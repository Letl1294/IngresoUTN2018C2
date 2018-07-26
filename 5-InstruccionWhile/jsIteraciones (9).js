function mostrar()
{
    var numero;
	var contador=0;
	var min;
	var max;
	// declarar variables
	
	var respuesta='si';

	do{
		numero = parseInt(prompt("Ingrese un numero"));
		contador++;
      
	  if(contador==1){
		max = numero;
		min = numero;
	  }

	  if(numero>max){
		  max = numero;
	  }

	  if(numero<minimo){
		  min = numero;
	  }

	  respuesta = prompt("Desea ingresar otro numero");
	}while(respuesta == "si");

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;

}

//