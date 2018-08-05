function mostrar()
{
var marca;
var peso;
var temperatura;
var pregunta = "si";
var tempPar=0;
var pesoMax;
var marcaMax;
var pesoMin;
var flag=0;
var contTemp=0;
promedio=0;
contador=0; 

while(pregunta=="si"){

    marca = prompt("ingrese una marca");
    peso = parseInt(prompt("Ingrese el peso"));
    temperatura = parseInt(prompt("Ingrese la temperatura de almacenamiento"));

    while(peso<1 || peso>100){

        peso = parseInt(prompt("Peso invalido. Ingrese otro"));

    }

    while(temperatura<-30 || temperatura >30){

        temperatura = parseInt(prompt("Temperatura invalida. Ingrese otra")); 

    }

    if(temperatura>0 && temperatura%2==0){

        tempPar++;

    }

    if(peso>pesoMax || flag == 0){

        pesoMax = peso;
        marcaMax = marca;

    }

    if(temperatura<0){

        contTemp++;

    }

    promedio = peso + promedio;
    contador++;

    if(peso<pesoMin || flag == 0){
        
        pesoMin = peso;

    }

    flag = 1;

    pregunta = prompt("Desea Ingresar otro producto");
    pregunta = pregunta.toLowerCase();

    }

document.write("Temperatura pares: " + tempPar + "<br>");
document.write("La marca de producto mas pesado: " + marcaMax + "<br>");
document.write("Productos a menos de 0º: " + contTemp + "<br>");
document.write("Promedio: " + promedio/contador + "<br>");
document.write("El peso maximo: " + pesoMax + " El peso Minimo: " + pesoMin + "<br>");

}


