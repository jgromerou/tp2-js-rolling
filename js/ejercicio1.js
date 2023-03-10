/*
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = parseInt(prompt('Ingrese su edad: '));

if (isNaN(edad) || edad < 0 || edad > 110) {
  document.write(`No es una edad válida o se ingresó caracteres de textos.`);
} else {
  if (edad >= 18) {
    document.write(`Si puede conducir con la edad de ${edad}`);
  } else {
    document.write(`No puede conducir con la edad de ${edad}`);
  }
}
