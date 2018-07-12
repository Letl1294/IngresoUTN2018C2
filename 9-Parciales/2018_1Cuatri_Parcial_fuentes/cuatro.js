function mostrar()
{
var num1,num2,resul;

num1 = prompt("Ingrese un numero");
num2 = prompt("Ingrese otro numero");

if(num1==num2)
{
alert(num1+num2);
}
else if(parseInt(num1)>parseInt(num2))
{
alert(num1-num2);
}
else
{
resul = parseInt(num1)+parseInt(num2); 
    if(resul>10)
     {
        alert("La suma es "+resul+" y supero a 10");
     }
    else
     {
        alert("La suma es "+resul);
     }

}

}
