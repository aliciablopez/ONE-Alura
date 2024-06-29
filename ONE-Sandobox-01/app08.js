javascript
// control del flujo: IF... THEN, 
alert('Bienvenido al juego del número secreto');

let numeroUsuario= 0
let numeroSecreto = 2;

while (numeroUsuario != numeroSecreto){ // != evalua desigualdad (no iguall)
  numeroUsuario = prompt('Elige un número entre 1 y 10');
  console.log(numeroUsuario == numeroSecreto); // evalua igualdad

  if (numeroUsuario == numeroSecreto) { // condición para True
    alert('Acertaste, el número es' ${numeroUsuario});
  } else { // Condición para False 
      if (numeroUsuario > numeroSecreto) { //Condicional anidado, condición para True
        alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + numeroUsuario) +'. El número es menor'; // concatenar cadena y variable: ´str´ + variable
      }else { // condición para False            
        alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + numeroUsuario) + `. El número es mayor` ; // concatenar cadena y variable: ´str´ + variable
      }     
  }  
}
