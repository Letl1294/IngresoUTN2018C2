function mostrar()
{
//tomo la edad  
var edad, civ;

edad = document.getElementById("edad").value;
civ = document.getElementById("estadoCivil").value;

if(edad<18 && civ != "soltero")
{
alert("Es muy pequeño para no ser soltero");
}	


}//FIN DE LA FUNCIÓN