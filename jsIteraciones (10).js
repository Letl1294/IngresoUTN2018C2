function mostrar()
{
    var numero;
    var positivo;
    var negativo;
    var acumuladorpos=0;
    var acumuladorneg=0;
    var cero=0;
    var contadorpar=0;
    var contadorneg=0;
    var contadorpos=0;
    var pregunta;
    
    pregunta = prompt("Desea ingresar un numero");
    pregunta = pregunta.toLowerCase();

    while(pregunta=="si")
    {
        numero = parseInt(prompt("Ingrese un numero"));
        if(numero>0){
            positivo = numero;
            acumuladorpos = numero + acumuladorpos;
            contadorpos++;
             if (numero%2==0){
                contadorpar++;
            }

        }else if(numero<0){
            negativo = numero;
            acumuladorneg = numero + (acumuladorneg);
            contadorneg++;
        }
        else if(numero==0){
                cero++;
        }
       
        pregunta = prompt("Desea ingresar otro numero");
        pregunta = pregunta.toLowerCase();
        }
        document.write("Negativos " + acumuladorneg + "<br>");
        document.write("Positivos "+acumuladorpos + "<br>");
        document.write("cantidad de positivos "+contadorpos + "<br>");
        document.write("cantidad de negativos "+contadorneg + "<br>");
        document.write("promedio positivo "+ acumuladorpos/contadorpos + "<br>");
        document.write("promedio negativo "+acumuladorneg/contadorneg + "<br>");
        document.write("Ceros "+cero + "<br>");
        document.write("Pares "+contadorpar + "<br>");
        document.write("positivos-negativos "+ (acumuladorpos+(acumuladorneg + "<br>")));
        
    }