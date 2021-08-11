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

createDaysOfTheWeek();

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function daysMonth () {
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

function holidayButton(buttonName) {
  let createButton = document.createElement('button')
  let divBtn = document.querySelector('.buttons-container')
  createButton.id = 'btn-holiday'

  createButton.innerHTML = buttonName
  divBtn.appendChild(createButton)
}

holidayButton('Feriados')

function clickFeriados() {
  let getButton = document.querySelector('#btn-holiday')
  let holidayClass = document.querySelectorAll('.holiday')
  let backgroundColor = 'rgb(238, 238, 238)'
  let setNewColor = 'white'
  
  getButton.addEventListener('click', function(){
    for(let i = 0; i < holidayClass.length; i += 1){
      if (holidayClass[i].style.backgroundColor === setNewColor){
        holidayClass[i].style.backgroundColor = backgroundColor
      } else {
        holidayClass[i].style.backgroundColor = setNewColor
      }
    }
  })
}

clickFeriados()

function fridayButton(buttonName) {
  let createButton = document.createElement('button')
  let divBtn = document.querySelector('.buttons-container')
  createButton.id = 'btn-friday'

  createButton.innerHTML = buttonName
  divBtn.appendChild(createButton)
}

fridayButton('Sexta-feira')

function clickFriday() {
  let getButton = document.querySelector('#btn-friday')
  let fridayClass = document.querySelectorAll('.friday')
  let newText = 'SEXTOUUU'
  let fridaysDays = [4, 11, 18, 25]

  getButton.addEventListener('click', function(){
    for(let i = 0; i < fridayClass.length; i += 1){
      if (fridayClass[i].innerHTML !== newText){
        fridayClass[i].innerHTML = newText
      } else {
        fridayClass[i].innerHTML = fridaysDays[i]
      }
    }
  })
}

clickFriday()