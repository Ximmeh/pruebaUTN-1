/*PROBLEMA A
Ingresar monto de dinero que tiene y mostrar el helado mas caro que puedan comprar.
Si hay dos o mas, mostrar ambos.
Indicar el vuelto*/
dineroCofla = prompt ("Cuanto dinero tienes Cofla?");


if (dineroCofla > 0.6 && dineroCofla < 1) {
    alert("comprate el helado de agua");
    alert("y te sobran " + (dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla <1.6) {
    alert("comprate el helado de crema");
    alert("y te sobran " + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla <1.9) {
    alert("comprate el helado de chocolate");
    alert("y te sobran " + (dineroCofla - 1.6));
}
else if (dineroCofla >= 2 && dineroCofla <2.6) {
    alert("comprate el helado de frutilla");
    alert("y te sobran " + (dineroCofla - 2));
}
else if (dineroCofla >= 2.6) {
    alert("comprate el helado de tramontana");
    alert("y te sobran " + (dineroCofla - 2.6));
}
else {
    alert("lo siento no puedes comprar");
}


/*PROBLEMA B*/

/*PROBLEMA C
Si el sospechoso miente, le da una descarga
Si no miente, no hacer nada.
Si el aparato no se decide, aclarar que la pregunta debe ser mas clara.*/
