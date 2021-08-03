// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function menorValor(arr){
    let menor = 0

    for (let i in arr){
        if (arr[menor] > arr[i]){
            menor = i
        }
    }
    return menor
}

console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))