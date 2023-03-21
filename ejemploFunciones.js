/*Proximo en la fila
En informatica una cola (queue) es una estructura de datos abstracto en la cual los elementos se mantienen en orden. Los nuevos elementos se pueden añadir al final de la cola y los elementos previos se retirran al principio de la cola.
Define una funcion proximoEnLaFila que tome un arreglo (arreglo) y un numero (elemento) como argumentos. Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo. La funcion proximoEnLaFila debe retornar el elemento que fue removido.*/

 /* 1°_ 2 parametros
 2° agregar el numero final
 3° eleminar el primero 
 4° retornar el que fue removido*/
 
 function proximoEnLaFila(arreglo, elemento){
arreglo.push(elemento); //agregar al final del arreglo.
return arreglo.shift(); //remover el primer elemento.
 }

 var miArreglo = [1, 2, 3, 4, 5];

 console.log("Antes: " + JSON.stringify(miArreglo)); //JSON.strigify muestra el arreglo 
 
 console.log(proximoEnLaFila(miArreglo, 6));

 console.log("Despues de " + JSON.stringify(miArreglo));


