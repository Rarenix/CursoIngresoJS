//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{   var importe;
	var  importFinal;
	importe = prompt("ingrese importe");
	importeFinal = parseFloat(importe * 1.21);
	document.getElementById("importe").value = importeFinal;
	
}

