function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

// Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . 
// Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysMonth() {
  let days = document.querySelector('#days')

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let day = dezDaysList[i]
    let li = document.createElement('li')

    if (day === 24 || day === 31) {
      li.className = 'day holiday'
      li.innerHTML = day
      days.appendChild(li)
    } else if (day === 4 || day === 11 || day === 18) {
      li.className = 'day friday'
      li.innerHTML = day
      days.appendChild(li)
    } else if (day === 25) {
      li.className = 'day holiday friday'
      li.innerHTML = day
      days.appendChild(li)
    } else {
      li.className = 'day'
      li.innerHTML = day
      days.appendChild(li)
    }
  }
}

daysMonth()

// Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".

function holidayButton(buttonName) {
  let createButton = document.createElement('button')
  let divBtn = document.querySelector('.buttons-container')
  createButton.id = 'btn-holiday'

  createButton.innerHTML = buttonName
  divBtn.appendChild(createButton)
}

holidayButton('Feriados')

// Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .

function clickFeriados() {
  let getButton = document.querySelector('#btn-holiday')
  let holidayClass = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238, 238, 238)'
  let setNewColor = 'white'

  getButton.addEventListener('click', function () {
    for (let i = 0; i < holidayClass.length; i += 1) {
      if (holidayClass[i].style.backgroundColor === setNewColor) {
        holidayClass[i].style.backgroundColor = backgroundColor
      } else {
        holidayClass[i].style.backgroundColor = setNewColor
      }
    }
  })
}

clickFeriados()

// Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".

function fridayButton(buttonName) {
  let createButton = document.createElement('button')
  let divBtn = document.querySelector('.buttons-container')
  createButton.id = 'btn-friday'

  createButton.innerHTML = buttonName
  divBtn.appendChild(createButton)
}

fridayButton('Sexta-feira')

// Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.

function clickFriday() {
  let getButton = document.querySelector('#btn-friday')
  let fridayClass = document.querySelectorAll('.friday')
  let newText = 'SEXTOUUU'
  let fridaysDays = [4, 11, 18, 25]

  getButton.addEventListener('click', function () {
    for (let i = 0; i < fridayClass.length; i += 1) {
      if (fridayClass[i].innerHTML !== newText) {
        fridayClass[i].innerHTML = newText
      } else {
        fridayClass[i].innerHTML = fridaysDays[i]
      }
    }
  })
}

clickFriday()

// Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, 
// o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

function zoomIn() {
  let days = document.querySelector('#days')

  days.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px'
    event.target.style.fontWeight = '600'
  })
}

function zoomOut() {
  let days = document.querySelector('#days')

  days.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px'
    event.target.style.fontWeight = '200'
  })
}

zoomIn()
zoomOut()

// Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa 
// (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.

function task(taskName) {
  let span = document.createElement('span')
  let getTaskDiv = document.querySelector('.my-tasks')
  span.innerHTML = taskName

  getTaskDiv.appendChild(span)
}

task('Cozinhar')

// Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. 
// Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .

function taskColor(color) {
  let getTaskDiv = document.querySelector('.my-tasks')
  let newTask = document.createElement('div')

  newTask.className = 'task'
  newTask.style.backgroundColor = color
  getTaskDiv.appendChild(newTask)
}

taskColor('green')

// Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, 
// atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.

function classTask() {
  let selected = document.getElementsByClassName('task selected')
  let myTasks = document.querySelector('.task')

  myTasks.addEventListener('click', function(event){
    if (selected.length === 0){
      event.target.className = 'task selected'
    } else {
      event.target.className = 'task'
    }
  })
}

classTask()

// Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.

function dayColor() {
  let days = document.querySelector('#days')
  let selected = document.getElementsByClassName('task selected')
  let taskDiv = document.querySelector('.task')
  let taskColor = taskDiv.style.backgroundColor

  days.addEventListener('click', function(event){
    let targetColor = event.target.style.color;
    if (selected.length > 0 && targetColor !== taskColor) {
      let color = selected[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (targetColor === taskColor && selected.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  })
}

dayColor()