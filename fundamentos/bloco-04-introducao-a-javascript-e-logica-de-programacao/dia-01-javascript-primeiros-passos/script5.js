// 5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

let a = 120
let b = 30
let c = 30

let sumAngles = a + b + c

if (sumAngles === 180){
    console.log(true)
} else if (sumAngles < 0){
    console.log("Erro: valor inválido")
} else {
    console.log(false)
}