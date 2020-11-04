/* =======================================
OPERADORES DE COMPARAÇÃO

>   MAIOR
>   MENOR 
>=  MAIOR IGUAL A 
<=  MENOS IGUAL A
==  IGUAL A
=== IGUAL E DO MESMO TIPO
!=  DIFERENTE DE
!== DIFERENTE, INCLUSIVE DO TIPO

==========================================*/

console.log( 5 > 4 )     // true
console.log( 5 < 4 )    // false
console.log( 5 >= 4 )  // true
console.log( 5 <= 4 ) // true

console.log( 4 == "4" )      // true
console.log( 4 === "4" )    // false
console.log( 4 != "5" )    // true
console.log( 4 !== "5" )  // true

// DESAFIO 1
const idade =  17

// verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if(idade >= 18) {
  console.log('Deixar entrar')
} else {
  console.log('Bloquear a entrada')
}

// se a pessoa tiver 17 anos
if(idade = 17) {
  // avisar para voltar quando tiver 18 anos
  console.log("Volte quando fizer 18 anos")
}

/* =======================================
OPERADORES LÓGICOS

    && "E" As duas condições devem ser verdadeiras para que a condição final seja verdadeira.

    || "OU" Uma das condições deve ser verdadeira para que a condição final seja verdadeira.

    ! "NÃO" nega uma condição

==========================================*/

console.log( 5 == 5 && 6 == 6) //true
console.log( 5 == 5 && 6 != 6) //false

console.log( 5 != 5 || 6 == 6) //true
console.log( 5 == 5 || 6 != 6) //true

console.log(!( 5 > 6)) // true
console.log(!( 5 < 6)) // true




// DESAFIO 1 - REFATORADO
const idade =  17

// verificar se a pessoa é maior ou igual a 18 anos
// se sim, deixar entrar, se não, bloquear a entrada
if(!(idade >= 18) || idade === 17) {
  console.log('Bloquear a entrada')  
} else {
  console.log('Deixar entrar')
}

/* =======================================
    OPERADORES ARITMÉTICOS

    * Multiplicação
    / Divisão
    % Resto da divisão
    + Adição
    - Subtração
==========================================*/

console.log( 2 * 2 )     // 4
console.log( 2 / 2 )    // 1
console.log ( 2 % 5 )  // 0.5
console.log( 2 + 2 )  // 4
console.log( 2 - 2 ) // 0



