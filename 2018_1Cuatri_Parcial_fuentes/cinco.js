function mostrar()
{
var planeta = prompt("Ingrese un planeta del sistema solar");
planeta = planeta.toLowerCase();

    switch(planeta){

        case "tierra":
        alert("Aca vivimos");
        break;

        case "marte":
        case "mercurio":
        case "venus":
        case "mercurio": 
        alert("Aca hacer mas calor");
        break;

        case "jupiter":
        case "urano":
        case "saturno":
        case "pluton":
        alert("Aca hace mas frio");
        break;

        default:
        alert("No es un planeta valido");
        
    }

}
