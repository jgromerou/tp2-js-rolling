/* Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.*/

let i = 0;
const cadenaTexto = prompt('Ingrese su cadena de texto: ');
let primeraVocalEncontrada,
  noTieneVocal = false;

cadenaTexto.toLowerCase();

while (!primeraVocalEncontrada && !noTieneVocal) {
  if (
    cadenaTexto[i] === 'a' ||
    cadenaTexto[i] === 'e' ||
    cadenaTexto[i] === 'i' ||
    cadenaTexto[i] === 'o' ||
    cadenaTexto[i] === 'u'
  ) {
    primeraVocalEncontrada = true;
  } else {
    i++;
    if (i == cadenaTexto.length) {
      noTieneVocal = true;
    }
  }
}

if (primeraVocalEncontrada) {
  alert(
    `La primera vocal encontrada es "${cadenaTexto[i]}" y su posicion es "${
      i + 1
    }"`
  );
} else {
  if (noTieneVocal) {
    alert('La cadena de texto no posee vocales.');
  }
}
