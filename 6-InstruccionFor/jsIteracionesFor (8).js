function mostrar()
{
var numero=parseInt(prompt("Ingrese un numero"));
var prim=0;

for(var i=1;i<numero;i++){

    if(numero%i==0){
        prim++;
    }

}
if(prim>2)
{

    alert("No es primo");

}else{

    alert("Es primo");
}

}//FIN DE LA FUNCIÓN