function Mostrar()
{
    var largo;
    var ancho;
    var perimetro;
    largo = document.getElementById("alrgo").value;
    ancho = document.getElementById("ancho").value;
    perimetro = parseInt(largo * 2)+parseInt(ancho *2) *3;
    alert ("elPerimetro" + perimetro);



}
