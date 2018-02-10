//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var perimetro;
	var ancho;
	var largo;
	ancho =document.getElementById("ancho").value;
	largo =document.getElementById("largo").value;
	perimetro = parseInt(largo * 2) + (ancho * 2)* 6;
	alert ("ElPerimetroEs" + perimetro )
}

