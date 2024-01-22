'use strict'

//5.6 Iterables: En una cadena o string, el bucle for..of recorre sus caracteres:
let word = "HOLA"
for (let uno of word) {
    // Se dispara 4 veces: una vez por cada carácter
    alert( uno ); // H,O,L,A
  }