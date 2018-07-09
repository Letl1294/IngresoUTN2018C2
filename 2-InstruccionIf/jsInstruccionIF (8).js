function mostrar()
{
//tomo la edad 
var edad, civ;

edad = document.getElementById("edad").value;
civ = document.getElementById("estadoCivil").value;

if(edad<18 && civ!=Soltero){
}
else if(edad>=18 && civ=="Soltero"){
 alert("Es soltero y no es menor");
}


}//FIN DE LA FUNCIÓN