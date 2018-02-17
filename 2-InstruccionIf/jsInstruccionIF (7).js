function Mostrar()
{   var edad
    var ecivil
    edad = document.getElementById("edad").value;
    ecivil = document.getElementById("estadoCivil").value;
    if (edad < 18 && ecivil != "Soltero" ){
    alert ("es muy pequeño para NO ser soltero");}
}
