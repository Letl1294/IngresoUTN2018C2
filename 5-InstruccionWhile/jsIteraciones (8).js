function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	
	while(respuesta=="si"){
		respuesta = respuesta.toLowerCase();
		contador = parseInt(prompt("Ingrese un numero"));
		
		if(contador>0)
		{
			positivo = contador + positivo; 
		}
         else if(contador<0)
		 {
			negativo = contador * negativo;
		 }
		respuesta=prompt("Quiere ingresar otro numero");
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN