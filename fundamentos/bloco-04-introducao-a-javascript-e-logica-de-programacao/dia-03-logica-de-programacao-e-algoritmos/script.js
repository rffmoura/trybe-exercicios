// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
// imprima na tela um quadrado feito de asteriscos de lado de tamanho n . 

let n = 5
let symbol = "*"
let line = ""

for (let i = 0; i < n; i += 1){
    line += symbol
}

for (let i = 0; i < n; i += 1){
    console.log(line)
}
