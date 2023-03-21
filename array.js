/*ARRAYS nos permiten almacenar varios valores en una misma estructura*/
var miArreglo = ["John", 24];
console.log(miArreglo);

var estudiantes = ["nora", "diego", "ester"];
//console.log(estudiantes);
console.log(estudiantes[2]);
estudiantes[1] = "Maria";
console.log(estudiantes);


// ARRAYS ANIDADOS
var listasDeEstudiantes = [["Nora", 97], ["Gino", 78]];
                 //indices       0           1
        //indices internos     0    1       0      1
//console.log(listasDeEstudiantes);
console.log(listasDeEstudiantes[0]);
console.log(listasDeEstudiantes[1][1]);

var miListaDeCompras = [["cereal", 3], ["leche", 2], ["galletas", 4], ["pan", 5]]
console.log("Voy a comprar " + miListaDeCompras[0][1] + " unidades de " + miListaDeCompras[0][0] + ".");
console.log("Voy a comprar " + miListaDeCompras[2][1] + " unidades de " + miListaDeCompras[2][0] + ".");


//METODOS
var estaciones;
var estacion;
var estaciones = ["otoño", "invierno", "primavera"];
/*estaciones.push("verano"); //agrega un elemento al final
console.log(estaciones);*/
/*estaciones.pop(); //saca al ultimo elemento
console.log(estaciones);
estacion = estaciones.pop(); //tmb lo retorna
console.log(estaciones);
console.log(estacion);*/
/*estaciones.shift();  //remueve el primer elemento
//console.log(estaciones);*/
estaciones.unshift("verano"); //agrega un elemento al principio
console.log(estaciones);



