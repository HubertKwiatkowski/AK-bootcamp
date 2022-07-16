const bob = document.querySelector('.face')
let moveDistance = 50
let position = 50

function moveBob() {
  moveDistance += 50
  console.log(moveDistance)
  bob.style.marginLeft = moveDistance + 'px'
  console.log(bob)
}

bob.addEventListener('click', moveBob)