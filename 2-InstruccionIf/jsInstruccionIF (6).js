function mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);

if(edad>=18)
{
    alert("Es mayor");
}
else if(edad>=13 && edad<=17)
{
     alert("Es un adolescente");
}
else {
    alert("Es un niño");
}


}//FIN DE LA FUNCIÓN