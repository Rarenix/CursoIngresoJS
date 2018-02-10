//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var perimetro;
	var lado;
	lado = document.getElementById("lado").value;
	perimetro = parseInt(lado * 3);
	alert("elPerimetroEs" + perimetro);
	
}

