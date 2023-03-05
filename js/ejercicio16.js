/* Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

let cadenaTexto = prompt('Ingrese su texto: ');

for (let i = cadenaTexto.length - 1; i >= 0; i--) {
  document.write(cadenaTexto[i]);
}
