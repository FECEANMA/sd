'use strict'
//5.9 
//Object.values para recorrer los valores de propiedad:

let user = {
  name: "Jose",
  age: 20
};

// bucle sobre los valores
for (let value of Object.values(user)) {
  alert(value); // John, luego 30
}