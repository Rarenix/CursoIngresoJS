function Mostrar()
{	var contador=0;
	var acumulador=0;
	var numero;
	while(contador<5)
	contador ++;
	numero = prompt("ingrese numero")
	numero = parseInt(numero);
	acumulador+=numero;
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN