function mostrar()
{
//tomo la edad  
var edad,civ;
edad = document.getElementById("edad").value;
civ = document.getElementById("estadoCivil").value;	

if(edad<18 && civ!="Soltero"){
    alert("Es muy joven para no ser soltero");
}

}//FIN DE LA FUNCIÓN