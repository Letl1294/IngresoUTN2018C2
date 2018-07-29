function mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var numero;
	var respuesta='si';

	respuesta = prompt("Desea ingresar un numero");
	respuesta = respuesta.toLowerCase();
	while(respuesta=='si')
	{
		numero = parseInt(prompt("Ingrese un numero"));
		contador++;
		if(contador == 1){
			maximo = numero;
			minimo = numero;

		}else if(contador>1 && numero<minimo){
			minimo = numero;
			}
		else if(contador>1 && numero>maximo){
			maximo = numero;
		}
			respuesta = prompt("Desea ingresar otro numero");
			respuesta = respuesta.toLowerCase();
	}

    document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN