// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindrome(str){
    let reverse = str.split("").reverse().join("")
    if (reverse === str){
        return true
    } else {
        return false
    }
}


console.log(verificaPalindrome("arara"))