/*
14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – 
entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, 
deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
*/
let cadenaTexto = prompt('Ingrese la cadena de texto: ');

for (let i = 0; i < cadenaTexto.length; i++) {
  if (i === cadenaTexto.length - 1) {
    document.write(cadenaTexto[i]);
  } else {
    document.write(cadenaTexto[i] + '-');
  }
}
