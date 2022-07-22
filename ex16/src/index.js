const circle = document.querySelector('.circle')
let movement = 80

function klikadelko() {
  movement += 10
  console.log('klik-klik')
  circle.style.setProperty('top', movement + 'px')
  if (movement > 200) {
    circle.removeEventListener('click', klikadelko)
  }
}

circle.addEventListener('click', klikadelko)