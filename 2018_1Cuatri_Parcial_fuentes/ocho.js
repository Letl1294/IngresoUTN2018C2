function mostrar()
{

var letra;
var numero;
var respuesta = "si";
var contadorpar=0;
var contadorimpar=0;
var contadorcero=0;
var acumpos = 0;
var contadorpos = 0;
var acumneg = 0;
var flag = 0;
var minimo = 0;
var letraMin;
var maximo = 0;
var letraMax;

while(respuesta=="si"){

    letra = prompt("Ingrese una letra");
    letra = letra.toLowerCase();
    numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
   
   while(numero < -100 || numero > 100 ){

    numero = parseInt(prompt("Numero no valido, ingrese otro"));

   }

   if(numero>0 && numero%2==0){

    contadorpar++;

   }

   if(numero%2!=0){

   contadorimpar++;

   }

   if(numero==0){

    contadorcero++;

   }

   if(numero>0){

    acumpos = numero + acumpos;
    contadorpos++;

   }

   if(numero<0){

    acumneg = numero + acumneg;

   }

   if(numero<minimo || flag==0){

    minimo = numero;
    letraMin = letra;
   
    }

   if(numero>maximo || flag==0) {

    maximo = numero;
    letraMax = letra;
      
   }
 
   flag = 1;

respuesta = prompt("Desea ingresar mas datos");
respuesta = respuesta.toLowerCase();

}

document.write("Total Pares " + contadorpar + "<br>");
document.write("Total Impares " + contadorimpar + "<br>");
document.write("Total Ceros " + contadorcero + "<br>");
document.write("Promedio " + acumpos/contadorpos + "<br>");
document.write("La suma de los negativos es " + acumneg + "<br>");
document.write("El numero maximo " + maximo + " letra maximo " + letraMax + "<br>" );
document.write("El numero minimo " + minimo + " letra minima " + letraMin + "<br>");

}
