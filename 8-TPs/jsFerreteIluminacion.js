/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var lamparitas;
     var precio=35;
     var marca;
     var brut;

    lamparitas=parseInt(document.getElementById("Cantidad").value);
    marca=document.getElementById("Marca").value;

    switch(lamparitas){
    case 1:
    precio=precio;
    break;
    case 2:
    precio = precio*2;
    break;
    case 3:
    if(marca == "ArgentinaLuz"){
        precio=(precio*0.15+(precio))*lamparitas;
    }else if(marca == "FelipeLamparas"){
         precio=(precio*0.25+(precio))*lamparitas;
    }else if(marca != "ArgentinaLuz" || "FelipeLamparas" ){
        precio=(precio*0.05+(precio))*lamparitas;
    }
    break;
    case 4:
    if(marca == "ArgentinaLuz" || "FelipeLamparas"){
        precio=(precio*0.25+(precio))*lamparitas;
    }else{
        precio=(precio*0.20+(precio))*lamparitas;
    }
    break;
    case 5:
    if(marca == "ArgentinaLuz"){
        precio=(precio*0.40+(precio))*lamparitas;
    }else{
        precio=(precio*0.30+(precio))*lamparitas;
        }
    break;
    default:
        precio=(precio*0.5+(precio))*lamparitas;
    break;
    }
    document.getElementById("precioDescuento").value = precio;
    if(precio > 120){
      brut=(precio*0.10+(precio))*lamparitas;
        alert("Usted pago " +brut+ " de IIBB, siendo" +precio+ "el impuesto que se pagó");
    }
}