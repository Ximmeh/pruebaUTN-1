/*function mostrarMensaje() {
    console.log("¡Hola, Mundo!");
}
mostrarMensaje();*/

function sumar(a, b) { //parametros es el valor que va a tomar o recibir cuando llamemos a la funcion
   var suma = a + b;
   console.log("El resultado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(10, 5);

//Variable GLOBALES:Se pueden usar en cualquier lugar del programa, porq esta definida en el programa principal.
var miVariableGlobal = 5;
console.log(miVariableGlobal);

function miFuncion () {
    console.log(miVariableGlobal);
}

miFuncion()
console.log(miVariableGlobal);

//VARIABLES LOCALES: definidas dentro de esa funcion
function miFuuncion() {
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

//Al llamar a la funcion (miVariableLocal()) tiene prioridad la variable LOCAL 
//Al ver el valor (console.log(miVariableGlobal))


