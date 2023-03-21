
//AND && cuando dos condiciones se tienen que cumplir
var edad = 18;
var dni = false;
console.log (edad >=18 && dni==true);
/*en la consola aparece TRUE, pero si cambio el valor de la VAR DNI 
por False en la consola aparece FALSE ya que se tiene que cumplir si o si*/

console.log ("------");

//OR || se tiene que cumplir una de las condiciones
console.log (edad >= 18 || dni == true);

//! pone el valor contrario, en consola muestra TRUE
var edad = 18;
var dni = !false;
console.log (dni);