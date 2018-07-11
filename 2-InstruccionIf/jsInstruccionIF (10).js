function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var num;

num = Math.floor(Math.random()*10+1);

//alert("Número aleatorio entre 1 y 10:"+ num);

if(num<=4)
{
alert(num + " Vamos la proxima se puede");
}
else if(num>4 && num<9)
{
alert(num + " Aprobo");
}
else
{
alert(num + " Excelente");
}
}//FIN DE LA FUNCIÓN