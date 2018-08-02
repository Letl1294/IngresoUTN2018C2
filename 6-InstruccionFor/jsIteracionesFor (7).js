function mostrar()
{
var numero=parseInt(prompt("Ingrese un numero"));
var contador = 0;

for(var i=0;i<numero;i++){

    if(numero%i==0){
    console.log(i);
    contador++;
    }
    
}
console.log("Divisores "+contador)
}//FIN DE LA FUNCIÓN