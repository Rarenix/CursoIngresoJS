//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	var ancho;	
	var largo;
	var perimetro;
	largo = document.getElementById("largo").value;
	ancho = document.getElementById("ancho").value;
	perimetro = parseInt (ancho * 2) + parseInt (largo * 2 )* 6;
	alert ("el perimetro es " + perimetro );

}

