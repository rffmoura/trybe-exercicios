// 1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = num => {
  let res = 1
  for (let i = 2; i <= num; i += 1) {
    res *= i
  }

  return res
}

console.log(fatorial(5))