function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var num;

	while(respuesta=="si"){
		
		numero = parseInt(prompt("Ingrese un numero"));
		
		if(numero>0)
		{
			positivo = numero + positivo; 
		}
         else if(numero<0)
		 {
			negativo = numero * negativo;
            contador++;
		 }
	
		respuesta=prompt("Quiere ingresar otro numero");
		respuesta = respuesta.toLowerCase();
	}

document.getElementById('suma').value=positivo;
			if(contador == 0){
			negativo = 0;
		 }
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN