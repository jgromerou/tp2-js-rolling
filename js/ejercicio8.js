/*
8- Crea script para generar pirámide siguiente con los números del 1 
al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……
*/
let numRepetir = prompt('Introduce la cantidad de números a repetir:');

if (!isNaN(numRepetir)) {
  if (numRepetir > 0 && numRepetir <= 50) {
    for (let i = 0; i <= numRepetir; i++) {
      for (let j = 1; j <= i; j++) {
        document.write(j);
      }
      document.write(`<br>`);
    }
  } else {
    alert('El número introducido no es válido.');
  }
} else {
  alert('No es un número');
}
