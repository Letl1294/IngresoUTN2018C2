function mostrar()
{
//tomo la edad  
var meses = document.getElementById('mes').value;
//alert (mesDelAño);
switch(meses)
{
    case "Enero" :
    case "Febrero" :
    case "Marzo" :
    case "Abril" :
    case "Mayo" :
    case "Junio" :
    alert("Falta para el invierno");
    break;
    case "Julio" :
    case "Agosto" :
    case "Septiembre" :
    alert("Abrigate hace frio");
    break;
    case "Octubre":
    case "Noviembre" :
    case "Diciembre" :
    alert("Ya pasamos el frio, ahora calor");
    break;
}





}//FIN DE LA FUNCIÓN