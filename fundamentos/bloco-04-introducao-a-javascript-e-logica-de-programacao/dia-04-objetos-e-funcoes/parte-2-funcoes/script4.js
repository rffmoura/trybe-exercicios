// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function nomes(arr){
    let maiorPalavra = arr[0]
    for(let i in arr){
        if (maiorPalavra.length < arr[i].length){
            maiorPalavra = arr[i]
        }
    }
    return maiorPalavra
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))