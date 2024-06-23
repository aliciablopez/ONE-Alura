/*
const numero = prompt("Introduce un número:");

if (numero != 0) {
  console.log("El número es positivo o negativo");
} else {
  console.log("El número es cero");
}
  Falso


const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else {
  console.log("El número es negativo o cero");
}
Falso: el cero no es positivo ni negativo.
*/

const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
/*Verdadero
Si numero es mayor que 0, se ejecuta la primera instrucción y se muestra el mensaje "El número es positivo". Si numero es menor que 0, se ejecuta la segunda instrucción y se muestra el mensaje "El número es negativo". Si numero es igual a 0, se ejecuta la tercera instrucción y se muestra el mensaje "El número es cero".*/
