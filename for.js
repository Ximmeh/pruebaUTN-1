/*el ciclo FOR realiza un bucle una determinada cantidad de veces.
Es un bucle controlado por un contador, que de hecho, lo tiene implicito en 
su sintaxis.
Esta conformado por:
Inicializacion de la variable que utilizaremos en la condicion (se ejecuta solo
una vez al principio del ciclo).
Condicion de fin de ciclo (se evalua esta expresion al comienzo de 
cada itineracion).
Modificacion de la variable (se ejecuta al final de cada itineracion).*/
//i se utiliza por convencion INDICE
for (var i=1; i<=10; i++) {
    console.log("Vuelta Nro" + i);
}