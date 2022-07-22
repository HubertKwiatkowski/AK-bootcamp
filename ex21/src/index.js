const text = document.querySelector('.text')
const alert = 'Alert!!!'
const time = 2000

function showAlert() {
  const textDisplay = document.createElement('div')
  textDisplay.innerHTML = alert
  
  text.appendChild(textDisplay)
  // console.log('working')
}

setInterval(showAlert, 1000)