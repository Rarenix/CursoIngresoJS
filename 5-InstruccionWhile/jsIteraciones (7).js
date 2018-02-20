function Mostrar()
{	var contador=0;
	var acumulador=0;
	var respuesta;
	var numero;
	respuesta = true;
	while (respuesta == true)
{
	numero = prompt("Ingrese un numero");
	console.log(numero)
	if (numero == null)
	{
		break;

}	
	else if (isNaN(numero)== true) 
{ 
	alert("no es correcto ");
	continue

}	numero = parseInt(numero);
	acumulador = acumulador + numero;
	contador ++
	respuesta = confirm ("¿desea continuar?" );
	console.log(contador);
 
	
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;
	

}//FIN DE LA FUNCIÓN