/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var ancho, largo, radio;
var alambre, circulo;
var bolsas= 2
var cal= 3;




function Rectangulo () 
{
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
alambre = (ancho*largo)*3;
alert("cantidad de alambre en m "+alambre);
}
function Circulo () 
{
radio = parseInt(document.getElementById("Radio").value);
circulo = (3.14*(radio*radio))*3;
alert("cantidad de alambre en m "+circulo);
}
function Materiales () 
{
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);

    if(ancho==1 && largo==1){
        bolsas = 2;
        cal = 3;
    }
    if(ancho>1 && largo==1){
            bolsas = (ancho*0.5)+2;
            cal = (ancho*0.75)+3;
     }   
    if(ancho==1 && largo>1){
            bolsas = (largo*0.5)+2;
            cal = (largo*0.75)+3;
    }
    if(largo>1 && ancho>1){
            bolsas = largo*2;
            cal = largo*3;
    }    
       alert("bolsas de cemento "+ bolsas + " bolsas de cal "+cal);
}
    
