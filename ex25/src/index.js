const mouth = document.querySelector('.mouth')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

function happySad(e) {
  switch(e.key) {
    case 'ArrowUp':
      mouth.classList.remove('sad', 'neutral')
      mouth.classList.add('happy')
      break
    case 'ArrowDown':
      mouth.classList.remove('happy', 'neutral')
      mouth.classList.add('sad')
      break
    case 'ArrowLeft':
      left.classList.toggle('eye-close')
      break
    case 'ArrowRight':
      right.classList.toggle('eye-close')
      break
    default:
      mouth.classList.remove('sad', 'happy')
      mouth.classList.add('neutral')
      break
  }
}


document.addEventListener('keydown', happySad)