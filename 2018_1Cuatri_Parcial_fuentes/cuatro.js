function mostrar()
{
 
var numero = parseInt(prompt("Ingrese un numero"));
var numero1 = parseInt(prompt("Ingrese otro numero"));
var resul;

if(numero == numero1){

    numero = numero.toString();
    numero1 = numero1.toString();

alert(numero + numero1);  

} else if(numero>numero1) {

    resul = parseInt(numero - numero1);

    alert(resul);

} if(numero<numero1) {

    resul= numero + numero1;

    if(resul>10){

        alert("La suma es " + resul + " y supero el 10");

    } else {
       
        alert(resul);

    }


}

}
