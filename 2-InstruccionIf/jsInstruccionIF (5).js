function mostrar()
{ 
    var edad;

    edad = parseInt(document.getElementById("edad").value);
    
    if(edad<=13 || edad>=17){
        alert("No es Adolescente");
    }
    else{
        alert("Es un adolescente");
    }
//tomo la edad  


}//FIN DE LA FUNCIÓN