const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
}
const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
}
const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
}

// 1 - Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const edit1 = (obj, key, value) => {
  return (obj[key] = value)
}
edit1(lesson2, "turno", "manhã")
console.log(lesson2)

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listOfKeys = (obj) => Object.keys(obj)
console.log(listOfKeys(lesson2))

// 3 - Crie uma função para mostrar o tamanho de um objeto.
const sizeOfObject = (obj) => Object.keys(obj).length
console.log(sizeOfObject(lesson2))

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const listOfValues = (obj) => Object.values(obj)
console.log(listOfValues(lesson2))

// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 .
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 })
console.log(allLessons)

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalOfStudents = () => {
  const students1 = allLessons.lesson1.numeroEstudantes
  const students2 = allLessons.lesson2.numeroEstudantes
  const students3 = allLessons.lesson3.numeroEstudantes
  return students1 + students2 + students3
}
console.log(totalOfStudents())

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, value) => Object.values(obj)[value]
console.log(getValueByNumber(lesson1, 0))

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  const array = Object.entries(obj)
  let verification = false
  for (let i in array) {
    if (array[i][0] === key && array[i][1] === value) {
      verification = true
    }
  }
  return verification
}
console.log(verifyPair(lesson3, "materia", "Maria Clara"))
