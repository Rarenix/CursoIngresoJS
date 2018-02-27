//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var num;
var num2;
var resultado;
num = prompt("ingrese primer numero ");
num2 = prompt("ingrese segundo numero ");
num = parseInt(num);
num2 = parseInt(num2);
	if (num = num2){
	resultado = num*num2;
	document.write (resultado);
	}
else if (num > num2){
	resultado = num - num2;
	document.write (resultado);

}else
 resultado = num + num2 ;
 document.write (resultado);
}