document.getElementById('header-container').style.backgroundColor = "green"
document.getElementById('footer-container').style.backgroundColor = "darkgreen"
document.querySelector('.emergency-tasks').style.backgroundColor = 'orange'
document.querySelector('.no-emergency-tasks').style.backgroundColor = 'yellow'

let h3Emergency = [document.getElementsByTagName('h3')[0], document.getElementsByTagName('h3')[1]]
for (let i = 0; i < h3Emergency.length; i ++){
  h3Emergency[i].style.backgroundColor = 'pink'
}


let h3NoEmergency = [document.getElementsByTagName('h3')[2], document.getElementsByTagName('h3')[3]]
for (let i = 0; i < h3Emergency.length; i ++){
  h3NoEmergency[i].style.backgroundColor = 'black'
}
