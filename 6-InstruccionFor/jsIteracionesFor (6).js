function Mostrar()
{
    var contador = 0 ;
    var rep = prompt("ingrese numero");
    for(var num = 1 ; num < rep ;num ++ )
    {
        if(num %2==0){
            console.log(num);
            contador ++;
            alert("contador de pares es" + contador );
            
        }
        

    }




}//FIN DE LA FUNCIÓN