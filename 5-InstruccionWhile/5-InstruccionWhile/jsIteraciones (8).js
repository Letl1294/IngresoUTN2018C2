function mostrar()
{

	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';
	respuesta = prompt("Desea ingresar un numero");
	respuesta = respuesta.toLowerCase();

	while(respuesta=="si"){
		numero=parseInt(prompt("Ingrese un numero"));
		if(numero>0){
			positivo = numero+positivo; 
			
		}else{
			negativo = numero*negativo;
		}
		respuesta = prompt("Desea ingresar otro numero");
		respuesta = respuesta.toLowerCase();
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN