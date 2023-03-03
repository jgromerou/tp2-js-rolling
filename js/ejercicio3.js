/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let sumaCadenas = '';

do {
  let cadena = prompt('Introduce una cadena de texto:');
  if (sumaCadenas == '' || sumaCadenas == null) {
    sumaCadenas = sumaCadenas + cadena;
  } else {
    sumaCadenas = sumaCadenas + '-' + cadena;
  }
} while (confirm('¿Quiere seguir escribiendo?'));

document.write(sumaCadenas);
