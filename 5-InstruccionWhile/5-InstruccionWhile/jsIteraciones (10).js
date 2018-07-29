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
        alert("Negativos "+acumuladorneg);
        alert("Positivos "+acumuladorpos);
        alert("cantidad de positivos "+contadorpos);
        alert("cantidad de negativos "+contadorneg);
        alert("promedio positivo "+ acumuladorpos/contadorpos);
        alert("promedio negativo "+acumuladorneg/contadorneg);
        alert("Ceros "+cero);
        alert("Pares "+contadorpar);
        alert("positivos-negativos "+ (acumuladorpos+(acumuladorneg)));
        
    }