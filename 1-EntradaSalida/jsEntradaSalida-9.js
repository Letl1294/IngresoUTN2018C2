/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
 var imp,porciento,aum,total;

 imp=document.getElementById("sueldo").value;
 
 aum= 1.1;

 porciento = parseInt(imp) * aum;

 alert(porciento);


	
}
