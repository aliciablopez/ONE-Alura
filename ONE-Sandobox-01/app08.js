javascript
alert('Bienvenido al juego del número secreto');

let numeroUsuario= prompt('Elige un número entre 1 y 10');
let numeroSecreto = 2;

console.log(numeroUsuario == numeroSecreto);

if (numeroUsuario == numeroSecreto) {
  alert('Acertaste, el número es': ${numeroUsuario});
} else { // condicionales anidados
    if (numeroUsuario > numeroSecreto) { //la condición es True
      alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + numeroUsuario) +'. El número es menor'; // concatenar cadena y variable: ´str´ + variable
    }else { // la condición es False            
      alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + numeroUsuario) + `. El número es mayor` ; // concatenar cadena y variable: ´str´ + variable
    }     
}  
