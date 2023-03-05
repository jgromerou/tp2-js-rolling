/*
7- Haz un script que escriba una pirámide inversa de los números del 1 al número
que indique el usuario (no mayor de 50) de la siguiente forma : (suponiendo que
indica 30).
303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1*/

let numRepetir = prompt('Introduce la cantidad de números a repetir:');

if (!isNaN(numRepetir)) {
  if (numRepetir > 0 && numRepetir <= 50) {
    let i, j;
    for (let i = numRepetir; i >= 1; i--) {
      for (let j = i; j >= 1; j--) {
        document.write(i);
      }
      document.write(`<br>`);
    }
  } else {
    alert('El número introducido no es válido.');
  }
} else {
  alert('No es un número');
}
