/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
var Nombre, Edad;
	Nombre = document.getElementById("elNombre").value;	
    Edad = document.getElementById("laEdad").value;
    alert("Su Nombre es "+Nombre+" Su Edad es "+Edad);
}

