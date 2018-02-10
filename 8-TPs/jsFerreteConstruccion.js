/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{   var comprar;
    var largo;
    var ancho;
    largo =document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    compra = parseInt(largo*2 + ancho*2)*3;
    alert("CantidadDeAlambre" + compra);
}
function Circulo () 
{ var radio
  var mostrar
  var pi
  pi =parseFloat (3.1416);
 radio = document.getElementById("Radio").value;
 mostrar = parseFloat(radio * radio) *pi;
 alert ("ElRadioEs" + mostrar);
	
}
function Materiales () 
{
	var comprar;
    var largo;
    var ancho;
    var cal;
    var cemento;
    largo =document.getElementById("Largo").value;
    ancho = document.getElementById("Ancho").value;
    cal = parseInt(2);
    cemento = parseInt(3);
    largo = parseInt(largo);
    ancho = parseInt(ancho);
    compra = parseInt(largo*2 + ancho*2);
    alert("Se necesita, cal: "+ compra *cal + " cemento: " +compra * cemento );
}