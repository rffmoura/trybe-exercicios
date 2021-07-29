// 9 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 10
let b = 8
let c = 3

var parImpar = false

if ((a % 2 === 1 || b % 2 === 1 || c % 2 === 1)) {
    parImpar = true
}

console.log(parImpar)