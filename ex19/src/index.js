const time = 3000
const text = document.querySelector('.text')


function showText() {
  text.innerHTML = 'BOOOOOOOM'
}

setTimeout(showText, time)

function deleteText() {
  text.innerHTML = ''
}

setTimeout(deleteText, 10000)