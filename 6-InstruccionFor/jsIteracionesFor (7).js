function Mostrar()
{
    var contador = 0 ;
    var rep = prompt("ingrese numero");
    for(var i = rep ; i > 0 ; i++ )
    {
        if(rep % i ==0)
        {
            console.log(i);
            contador ++;
            alert("contador de pares es" + contador );
        }    
    }
}//FIN DE LA FUNCIÓN