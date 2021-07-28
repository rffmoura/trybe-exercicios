// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let a = 10
let b = 5
let c = 20

if(a > b && a > c){
    console.log("o maior número é: " + a)
} else if(b > a && b > c) {
    console.log("o maior número é: " + b)
} else {
    console.log("o maior número é: " + c)
}