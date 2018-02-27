//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	var perimetro;
	var lado;
	lado = prompt("ingrese base");
	perimetro = parseInt(lado*3 );
	alert("elPerimetroEs" + perimetro);
	lado = document.getElementById("lado").value=perimetro;
}

