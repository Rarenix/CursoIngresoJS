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
    var sueldo = document.getElementById("Sueldo").value;
    var legajo = document.getElementById("Legajo").value;
    var nacionalidad = document.getElementById("Nacionalidad").value;
        while (edad <= 18  || edad >= 90 ||isNaN(edad))
        {   edad= prompt("ingrese edad");
            edad = document.getElementById("Edad").value=edad;
        } 
        sexo = prompt("ingrese sexo");
        while(sexo = "m" && "f" )
        {    
            sexo = document.getElementById("Sexo").value = sexo;
            break;
            ecivil = prompt("ingrese estado civil").value=ecivil;
                switch(ecivil){
                    case "1":document.getElementById("EstadoCivil").value = "soltero"
                    case "2":document.getElementById("EstadoCivil").value ="casado"
                    case "3":document.getElementById("EstadoCivil").value ="divorsiado"
                    case "4":document.getElementById("EstadoCivil").value ="viudo"
        }     
    }           while (sueldo <8000 ){
        sueldo = prompt("ingrese sueldo");
        sueldo = parseInt(sueldo);        
    }   sueldo = document.getElementById("Sueldo").value=sueldo;
}
