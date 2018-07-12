function mostrar()
{
//tomo la edad  
var meses = document.getElementById('mes').value;

    switch (meses)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto" :
    case "Octubre":
    case "Diciembre":
    alert("Este mes tienen 31 dias");
    break;
    case "Febrero":
    alert("Este mes tiene 28 dias");
    break;
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":
    alert("Estos meses tiene 30 dias");
    break;
}
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN