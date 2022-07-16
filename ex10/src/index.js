const bob = document.querySelector('.face')
let moveDistance = 50

function moveBob() {
  moveDistance += 50
  bob.style.marginLeft = moveDistance + 'px'
}

bob.addEventListener('click', moveBob)