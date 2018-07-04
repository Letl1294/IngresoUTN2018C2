/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var Nombre;
	Nombre = prompt("Escriba su Nombre");
	document.getElementById("elNombre").value = Nombre;

}

