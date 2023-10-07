//el usuario ingresa un numero para decidir cuantos alumnos evaluar
let numAlumnos = parseInt(prompt("ingrese alumnos a evaluar"));

//se inicia el bucle 
for (bucle = 1; bucle <= numAlumnos; bucle++){
    //usuario ingresa su nombre
    let alumno = prompt("ingresa tu nombre");
    //usuario engresa sus tres notas
    let nota1 = parseInt(prompt("ingresa tu primer nota"));
    let nota2 = parseInt(prompt("ingresa tu segunda nota"));
    let nota3 = parseInt(prompt("ingresa tu tercer nota"));
    //calcula el promedio
    let resultado = parseInt((nota1 + nota2 + nota3) / 3);
    
    //muestra el resultado verdadero
    if (resultado >= 7){
        alert(`${alumno}: tu promedio es ${resultado} aprobado`);
    } else {
        alert(`${alumno}: tu promedio es ${resultado} desaprobado`);
    }
 }