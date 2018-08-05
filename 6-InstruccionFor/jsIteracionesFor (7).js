function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
var div=0;

for(var i=1;i<numero;i++){

    if(numero%i==0){
        document.write(i+"<br>");
        div++;
    }

}

document.write("Total de divisores "+div );

}//FIN DE LA FUNCIÓN