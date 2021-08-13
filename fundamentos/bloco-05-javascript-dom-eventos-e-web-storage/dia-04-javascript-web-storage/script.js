let body = document.body
let principal = document.querySelector('.principal')
let colorButton = document.createElement('button')
let backgroundButton = document.createElement('button')
let fontButton = document.createElement('button')
let linehHeightButton = document.createElement('button')
let fontSizeButton = document.createElement('button')

fontSizeButton.className = 'fontSize'
fontSizeButton.innerText = "Aumenta tamanho da letra"
linehHeightButton.className = 'lineHeight'
linehHeightButton.innerText = 'Aumenta espaço entrelinhas'
fontButton.className = 'fontFamily'
fontButton.innerText = 'Mudar estilo de Fonte'
backgroundButton.innerText = 'Mudar cor de fundo'
backgroundButton.className = 'background'
colorButton.innerText = 'Mudar de cor'
colorButton.className = 'colorButton'
principal.appendChild(colorButton)
principal.appendChild(backgroundButton)
principal.appendChild(fontButton)
principal.appendChild(linehHeightButton)
principal.appendChild(fontSizeButton)



window.onload = function () {
  function textColor(color) {
    colorButton.addEventListener('click', function () {
      body.style.color = color
    })
  }

  textColor('green')

  function background(color) {
    backgroundButton.addEventListener('click', function () {
      body.style.backgroundColor = color
    })
  }

  background('black')

  function changeFontFamily(fontFamily) {
    fontButton.addEventListener('click', function () {
      body.style.fontFamily = fontFamily
    })
  }

  changeFontFamily('arial')

  function line(px){    
    linehHeightButton.addEventListener('click', function(){
      body.style.lineHeight = px
    })
  }

  line('30px')

  function fontSize(px) {
    fontSizeButton.addEventListener('click', function(){
      body.style.fontSize = px
    })
  }

  fontSize('20px')
}



