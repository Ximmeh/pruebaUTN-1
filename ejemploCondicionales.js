/*En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes que se espera que haga un golfista para introducir la pelota en el hoyo.
Hay un nombre diferente dependiendo de que tan por encima o por debajo del par esten tus golpes.
Tu funcion tomara los argumentos par y golpes.
Retornara la cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor prioridad:

Golpes              Retornar
1                  "Hole-in-One!"
<= par - 2         "Eagle"
par - 1            "Birdie"
par                "Par"
par + 1            "Bogey"
par + 2            "Doble Bogey"
>= par + 3         "Go Home!"

par y goles siempre seran numericos y positivos.*/

function puntajeDeGolf(par, golpes) {
    if (golpes == 1) {
    return "Hole in One!";
    } else if (golpes <= par - 2) {
    return "Eagle";
    } else if (golpes == par - 1) {
    return "Birdie";
    } else if (golpes == par) {
    return "Par";
    } else if (golpes == par + 1) {
    return "Bogey";
    } else if (golpes == par + 2) {
    return "Doble Bogey";
    } else if (golpes >= par + 3) {
    return "GO HOME!";
    }
} //DESCONTRAER
console.log(puntajeDeGolf(4, 9));

//EJERCICIO 2 - DESCONTRAER
function clasificarValor(valor) {
var respuesta;
switch (valor) {  //SWITCH nos permite clasificar el valor
case 1:
    respuesta = "alpha";
    break;
case 2:
    respuesta = "Beta";
    break;
case 3:
    respuesta = "Gamma";
    break;
case 4:
    respuesta = "Delta";
    break;
  }
return respuesta; 
}
console.log(clasificarValor(3)); 

//EJERCICIO 3 -DESCONTRAER
var producto = "pizza";

switch (producto) { 
case "pizza":
console.log("La pizza basica cuesta $10.55");
break;
case "hamburguesa":
    console.log("La hamburguesa clasica cuesta $9.66");
break;
case "gaseosa":
    console.log("la gaseosa Coca Cola cuesta $45");
    break;
}

//EJERCICIO 4 
function seleccionarIdioma(valor) {
var idioma;
switch (valor) {
    case 1:
    idioma = "Español";
    break;
    case 2:
    idioma = "Italiano";
    break;
    case 3:
    idioma = "ingles";
    break;
    default: 
    idioma = "Portugues";
    break;
}
return idioma;
}
console.log(seleccionarIdioma(9));

4:29