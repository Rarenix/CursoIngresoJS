/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{    
    var sumar;
    var precioUno;
    var precioDos;
    var precioTres;
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    sumar = parseInt(precioUno + precioDos + precioTres);
    alert ("LaSumaEs" + sumar);
      
	
}
function Promedio ()

{   var promedio;
    var precioUno;
    var precioDos;
    var precioTres;
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);
    promedio = parseInt(precioUno + precioDos + precioTres) / 3;
    alert ("ElPromedioEs" + promedio); 

	
}
function PrecioFinal () 
{
    var precioFinal;
    var precioUno;
    var precioDos;
    var precioTres;
    precioUno = document.getElementById("PrecioUno").value;
    precioDos = document.getElementById("PrecioDos").value;
    precioTres = document.getElementById("PrecioTres").value;
    precioUno = parseInt(precioUno);
    precioDos = parseInt (precioDos);
    precioTres = parseInt(precioTres);
    precioFinal = parseInt(precioUno + precioDos + precioTres) * 1.21;
    alert("ElPrecioFinalEs" + precioFinal);
	
}