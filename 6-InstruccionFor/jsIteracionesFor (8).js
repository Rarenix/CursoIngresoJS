function Mostrar()
{   var num = prompt("ingrese numero");
    var contador = 0;
    for(var i = 2 ; i < num ; i++)
    {
        if(num % i ==0)
        {
            console.log(i);
            contador ++;
            alert("el numero no es primo");
        
        }
        else if (num=1)
        alert ("este numero es primo");


    }
}//FIN DE LA FUNCIÓN