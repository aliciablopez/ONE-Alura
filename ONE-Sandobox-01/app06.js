javascript
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 2;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    // concatenar cadena y variable: ´str´ + variable
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}
