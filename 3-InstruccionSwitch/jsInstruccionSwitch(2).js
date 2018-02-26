function Mostrar()
{
//tomo la edad  
    var mesDelAño = document.getElementById('mes').value;
    switch(mesDelAño)
{   case "Julio":
    case "Agosto":
    alert("Abrigate que hace frio");
    break;
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "abril":
    alert ("Ya paso el frio ahora calor");
    break;
    default:
    alert("falta para el invierno");
    
    }

}//FIN DE LA FUNCIÓN