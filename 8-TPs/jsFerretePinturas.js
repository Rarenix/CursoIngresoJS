/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{ 
    var fahrenheit;
    var grado;
    grado = document.getElementById("Temperatura").value;
    fahrenheit =parseFloat(grado-32)*5/9 ;
    alert (" C°= " + fahrenheit);

	
}

function CentigradosFahrenheit () 
{
	var fahrenheit;
    var grado;
    grado = document.getElementById("Temperatura").value;
    fahrenheit =parseFloat(9*grado/5) + 32;
    alert (" F°= " + fahrenheit);
}
