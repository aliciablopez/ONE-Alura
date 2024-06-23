//Seguimento paso a paso de las clases
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Elije un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

// Condicional simple: SI comparación es TRUE, ejecutar Instrucción 1. SI NO, ejecutar Instrucción 2
if (numeroUsuario == numeroSecreto) {
  //Template String: Agregar valor de la variable en la respuesta: ${nombreVariable´} Comilla invertida = acento agudo
  alert(`Acertaste, el número es: ${numeroUsuario}`);
  } 
else {
  alert('Lo siento, no acertaste el número. El número secreto era ' + numeroSecreto);
}

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario

console.log('Valor de intento:', numeroUsuario);

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', numeroUsuario == numeroSecreto);

if (numeroUsuarioo == numeroSecreto) {
  console.log('Adivinaste');
}
else{
  console.log('Lo siento, no acertaste el número. El número secreto era ' + numeroSecreto);
}

