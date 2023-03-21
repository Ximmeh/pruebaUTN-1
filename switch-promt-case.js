/*SWITCH permite multiples caminos a partir de la
evaluacion de una sola expresion/condición.*/

/*PROMT valores por teclado. En pantalla aparece un cuadro para llenar.
let nombre = prompt ("dime tu nombre");   //al completar se convierte en el valor de la variable.
alert ("hola  + nombre") //toma el nombre ingresado en el prompt*/



var color = prompt("Escribí un color primario");

switch(color) {
    case "rojo":
    console.log("Es ROJO");
    break;

    case "azul":
    console.log("Es AZUL");
    break;
    
    case "amarillo":
    console.log("Es AMARILLO");
    break;

    default:
        console.log("el color ingresado no es valido");
    break;
}