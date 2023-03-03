/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let sumaNumeros = 0;
let numero = '';

do {
  numero = prompt('Introduce una cadena de números:');
  if (!isNaN(numero)) {
    if (numero != null && numero != '') {
      console.log(numero);
      sumaNumeros = sumaNumeros + parseInt(numero);
    }
  } else {
    alert(`${numero} no es un Número`);
  }
} while (numero != null);

document.write(`La Suma Total es: ${sumaNumeros}`);
