/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

const cadenaTexto = prompt('Ingrese la cadena de texto: ');
let vocales = 0;

cadenaTexto.toLowerCase();

for (let i = 0; i < cadenaTexto.length; i++) {
  if (
    cadenaTexto[i] === 'a' ||
    cadenaTexto[i] === 'e' ||
    cadenaTexto[i] === 'i' ||
    cadenaTexto[i] === 'o' ||
    cadenaTexto[i] === 'u'
  ) {
    vocales++;
  }
}

document.write(
  `El número de vocales en la cadena de texto es: <strong>${vocales}</strong>`
);
