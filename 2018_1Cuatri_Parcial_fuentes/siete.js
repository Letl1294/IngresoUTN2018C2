function mostrar()
{

var nota;
var acumnota=0;
var sexo;
var flag=0; 
var notabaja;   
var sexoNotaBaja;
var varMayor60=0;
var contador=0;

for(var i=0;i<5;i++){

nota = parseInt(prompt("Ingrese la nota"));
sexo = prompt("Ingrese el sexo");
sexo = sexo.toLowerCase();

while(nota<0 || nota>10){

    nota = parseInt(prompt("Error, reingrese nota"));

}

while(sexo!="m" && sexo!="f"){

    sexo = prompt("Error, reingrese sexo");

}

acumnota = nota + acumnota;
contador++;

if(nota<notabaja || flag == 0 ){

    notabaja = nota;
    sexoNotaBaja = sexo;

    flag = 1;

}

if(nota>6 && sexo == "m"){
 
    varMayor60++;

}

}

alert("Promedio " + acumnota/contador );
alert("La nota mas baja " + notabaja + " Sexo " + sexoNotaBaja);
alert("Varones con nota mayor a 6: " + varMayor60);

}




