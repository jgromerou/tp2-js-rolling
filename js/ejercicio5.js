/*
5- Realizar una página con un script que calcule el valor de la letra de un número 
de DNI (Documento nacional de identidad).

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de 
las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/

let dni = 0;
let letra = '';
let resto = 0;

do {
  dni = prompt('Introduce un numero de DNI:');
  if (!isNaN(dni)) {
    if (dni >= 0 && dni <= 99999999) {
      resto = dni % 23;

      switch (resto) {
        case 0:
          letra = 'T';
          break;
        case 1:
          letra = 'R';
          break;
        case 2:
          letra = 'W';
          break;
        case 3:
          letra = 'A';
          break;
        case 4:
          letra = 'G';
          break;
        case 5:
          letra = 'M';
          break;
        case 6:
          letra = 'Y';
          break;
        case 7:
          letra = 'F';
          break;
        case 8:
          letra = 'P';
          break;
        case 9:
          letra = 'D';
          break;
        case 10:
          letra = 'X';
          break;
        case 11:
          letra = 'B';
          break;
        case 12:
          letra = 'N';
          break;
        case 13:
          letra = 'J';
          break;
        case 14:
          letra = 'Z';
          break;
        case 15:
          letra = 'S';
          break;
        case 16:
          letra = 'Q';
          break;
        case 17:
          letra = 'V';
          break;
        case 18:
          letra = 'H';
          break;
        case 19:
          letra = 'L';
          break;
        case 20:
          letra = 'C';
          break;
        case 21:
          letra = 'K';
          break;
        case 22:
          letra = 'E';
          break;

        default:
          //en el caso que no sea un numero entre 0 y 22 muestra un error
          alert('Numero erroneo');
          break;
      }
      if (dni != null && dni != '') {
        //se muestra el dni con la letra
        alert(`DNI: ${dni}, Letra: ${letra}`);
      }
    } else {
      //numero < a 0 o > a 99999999
      alert('No es un número dni valido');
    }
  } else {
    // no es un número
    alert(dni + ` no es un número`);
  }
} while (dni != null);
