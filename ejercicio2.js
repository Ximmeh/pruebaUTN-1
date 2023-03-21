//ingresar dos num mediante PROMT y almacenar sus valores en dos variables distintas.
var num1 = prompt ("Ingrese el num1");
var num2 = prompt ("Ingrese el num2");

//realizar una RESTA entre los dos valores en JS.
var resta = num1-num2;

//almacenar el resultado de la variable

//importar el archivo JS desde una pagina HTML

/*Si el resultado de la resta es mayor a 0, mostrar mediante pantalla un console.log()
o un alert() el mensaje "es mayor a 0"
Si es mayor a 0 comparar si el numero es par, en caso de que lo sea, mostrar el ensaje
"ES PAR" en caso de que no que diga "ES IMPAR"*/
if (resta>0) {
    console.log("es mayor a 0");
    let imparpar = resta % 2;

    if(imparpar == 0) {
        console.log("es par");
    }
    else {
        console.log("es impar");
    }
//En caso que sea menor a 0, mostrar un mensaje que diga "es menor o igual a 0".
} else {
    console.log("es menor o igual a 0");
}

