function mostrar()
{
var numero=parseInt(prompt("Ingrese un numero"));
var contador = 0;

for(var i=1;i<numero;i++){
    if(i%2==0){
        console.log(i);
        contador++;
    }

}
console.log("pares "+contador);



}//FIN DE LA FUNCIÓN