/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
…….
*/

let finPiramide = 30;

for (let i = 0; i <= finPiramide; i++) {
  for (let j = 1; j <= i; j++) {
    document.write(i);
  }
  document.write(`<br>`);
}
