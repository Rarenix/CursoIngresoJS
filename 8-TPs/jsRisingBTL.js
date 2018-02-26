/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() 
{
    var edad = document.getElementById("Edad").value;
    var sexo = document.getElementById("Sexo").value;
    var ecivil = document.getElementById("EstadoCivil").value;
    var sueldo = document.getElementById("Suledo").value;
    var legajo = document.getElementById("Legajo").value;
    var nacionalizados = document.getElementById("Nacionalidad").value;
    edad = prompt("ingrese Edad");
    sexo = prompt("ingrese Sexo");
    ecivil = prompt("ingrese EstadoCivil");
    sueldo = prompt("ingrese sueldo");
    legajo = prompt("ingrese Legajo");
    nación = prompt("ingrese Nacionalidad");
    edad = parseInt(edad = 0);
        while (edad > 18  || edad < 90)
        {
            alert("usted tiene " + edad);
            break;
        }
             if (sexo = "m")
        {
                alert("Usted es hombre");
        }
             else (edad = "f" )
                 alert("usted es mujer");   
}
