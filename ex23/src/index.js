const bubbleSpeech = document.querySelector('.bubble-speech')
let toptop = 0

function move() {
  bubbleSpeech.style.marginTop = toptop + 'px'
  toptop += 50
  if (toptop >= 300) {
    clearInterval(intervalID)

  }
}

let intervalID = setInterval(move, 1000)
