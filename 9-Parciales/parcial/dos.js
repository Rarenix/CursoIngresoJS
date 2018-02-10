function Mostrar()
{ var importe;
  var importeFinal;
  importe = prompt("Ingrese el importe: ");
  importeFinal = parseInt(importe *1.21);
  document.getElementById("importeFinal").value = importeFinal;


  
}
