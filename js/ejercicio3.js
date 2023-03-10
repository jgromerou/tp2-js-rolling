/*
3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp
*/

let sumaCadenas = '';

do {
  const cadena = prompt('Introduce una cadena de texto:');

  if (sumaCadenas === null || sumaCadenas === '') {
    sumaCadenas += cadena;
  } else {
    sumaCadenas += '-' + cadena;
  }
} while (confirm('¿Quiere seguir escribiendo?'));

document.write(sumaCadenas);
