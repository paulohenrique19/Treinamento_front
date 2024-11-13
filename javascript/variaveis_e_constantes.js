/*

Variáveis, declaração.

Diferenças entre var, let e const:

var permite que a variável seja declarada e tenha seu valor modificado várias vezes, com escopo de função ou global.
let permite que a variável seja declarada uma vez e tenha seu valor modificado várias vezes, com escopo de bloco.
const permite que a variável seja declarada uma vez, com escopo de bloco, e não permite reatribuição do valor da variável (mas permite modificar objetos e arrays).



*/

/*Usar `` permite escrever multiplas linhas */

let a = "TESTE"

console.log(`
    
    TESTE
    TESTE
    TESTE
    ${a}

    `)

/* Realizar operações entre números e não números pode retornar um valor como "NaN": not a number */


/*Conversão de tipos */

console.log(true)
console.log(false)
console.log(False)
console.log(typeof Number("9"))
console.log(typeof String(9))

/*.toString() e String() converte para texto 
  Number() converte para numero
  Boolean() converte para booleano
    */


/*Operador ternário */

let b = 10

console.log(b >= 10 ? "maior/igual a 10" : "menor que 10")