// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let chess = "Cavalo"

switch(chess.toLowerCase()){
    case "rei":
        console.log("Uma casa pra qualquer direção")
        break
    case "rainha":
        console.log("Diagonal, horizontal e vertical")
        break
    case "bispo":
        console.log("Diagonal")
        break
    case "cavalo":
        console.log("Anda em L")
        break
    case "torre":
        console.log("Horizontal e vertical")
        break
    case "peão":
        console.log("Uma casa pra frente, na primeira jogada podem ser duas casas")
        break
    default:
        console.log("Peça inválida")
        break
}