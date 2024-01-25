'use strict'

//5.12 Métodos JSON, toJSON

let user = {
    name: "John Smith",
    age: 35
  };
  
  // Convertir el objeto a JSON
  let userJSON = JSON.stringify(user);

alert(userJSON);
