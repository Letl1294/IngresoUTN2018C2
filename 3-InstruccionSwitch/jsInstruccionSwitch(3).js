function mostrar()
{
//tomo la edad  
var meses = document.getElementById('mes').value;

//alert (mesDelAño);
	switch (meses)
{
    case "Febrero" :
    alert("Este mes no tiene más de 29 días");
    break;
    default:
    alert("Este mes tiene 30 o mas dias");
    
}


}//FIN DE LA FUNCIÓN