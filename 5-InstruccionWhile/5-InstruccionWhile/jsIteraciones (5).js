function mostrar()
{
var sexo = prompt("ingrese f ó m .");
sexo = sexo.toLowerCase();

while(sexo!="f" && sexo!="m"){
    sexo = prompt("Incorrecto ingrese otra vez");
    sexo = sexo.toLowerCase();
}
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN