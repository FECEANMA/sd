'use strict'
//5.11

let today = new Date();

today.setHours(0);
alert(today); // Sigue siendo el día de hoy, pero con la hora cambiada a 0.

today.setHours(0, 0, 0, 0);
alert(today); // Sigue siendo la fecha de hoy, pero ahora en formato 00:00:00 en punto.