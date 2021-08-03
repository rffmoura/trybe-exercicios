// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValor(arr){
    let maior = 0

    for (let i in arr){
        if (arr[maior] < arr[i]){
            maior = i
        }
    }
    return maior
}

console.log(maiorValor([2, 4, 6, 7, 10, 0, -3]))