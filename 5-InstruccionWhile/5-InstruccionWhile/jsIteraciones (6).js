function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	numero = parseInt(prompt("Ingrese un numero"));

	while(contador<5){
	acumulador = numero + acumulador;
	contador++;
	numero = parseInt(prompt("Ingrese otro numero"));
}
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN