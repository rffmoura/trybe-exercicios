// 8 - Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .

let a = 10
let b = 7
let c = 5

let parImpar = false

if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)){
    parImpar = true
}

console.log(parImpar)