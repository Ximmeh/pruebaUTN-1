var aprobe = false;
if (aprobe == true) {
    console.log("Puedo salir!");
} 
else {
    console.log("tengo a volver a estudiar");
}

var x = 5;
if (x < 2) {
    console.log("La condicion es verdadera");
} else {
    console.log("la condicion es falsa.");
}

function clasificarValor(valor) {
    if (valor % 2 == 0) {
        console.log("Divisible entre 2.");
    } else if (valor % 3 == 0) {
        console.log("divisible por 3")
    }
    else {
        console.log("no es divisible entre las opciones");
    }
}

clasificarValor(7);

//ejemplo IMC
function interpretarIMC(indiceDeMasaCorporal){
    if (indiceDeMasaCorporal < 18.5) {
        console.log("Bajo peso");
    } else if (indiceDeMasaCorporal <= 24.9){
    console.log("peso normal");
    } else if (indiceDeMasaCorporal <= 29.9) {
    console.log("sobrepeso");
    } else {
    console.log("obeso");
        }
}

interpretarIMC(30);

//IF se ejecuta cuando es verdadero
nombre = "dalto";
if (nombre == "lucas") {
    alert( "tu nombre es " + nombre); //esto se ejecuta si es verdadero
}
else if (nombre == "dalto") {
    alert("tu nombre es " + nombre); 
} 