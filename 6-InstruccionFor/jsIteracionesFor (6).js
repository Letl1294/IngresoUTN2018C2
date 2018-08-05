function mostrar()
{
var numero = parseInt(prompt("Ingrese un numero"));
var par=0;
for(i=1;i<numero;i++){
    
    if(i%2==0){
        document.write(i+"<br>")
        par++;
    }

}

document.write("Total de pares "+par);

}//FIN DE LA FUNCIÓN