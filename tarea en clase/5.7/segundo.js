'use strict'

//5.7 Map y Set
// Map
let productoPrecio = new Map([
    ['pepino', 500],
    ['tomates', 350],
    ['cebollas',    50]
  ]);
  
  // iterando sobre las claves (verduras)
  for (let vegetable of productoPrecio.keys()) {
    alert(vegetable); // claves: pepino, tomates, cebollas
  }
  
  // iterando sobre los valores (precios)
  for (let amount of productoPrecio.values()) {
    alert(amount); // valores: 500, 350, 50
  }
  
  // iterando sobre las entradas [clave, valor]
  for (let entry of productoPrecio) { // lo mismo que recipeMap.entries()
    alert(entry); // claves y valores: pepino,500 (etc)
};
// Set
let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) 
alert(value);