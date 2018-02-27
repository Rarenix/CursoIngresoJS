//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{	var imp;
	var impfinal;
	imp = prompt("ingrese importe");
	impfinal = parseFloat(imp * 1.21);
	document.getElementById("importe").value = impfinal;
}