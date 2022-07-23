const circle = document.querySelector('.circle')
let xAxis = 0
let yAxis = 0


function control(event) {
  // if (event.key === 'ArrowLeft') {
  //   console.log('go left')
  // } else if (event.key === 'ArrowRight') {
  //   console.log('go right')
  // } else if (event.key === 'ArrowUp') {
  // console.log('go up')
  // } else if (event.key === 'ArrowDown') {
  //   console.log('go down')
  // }  

  switch (event.key) {
    case 'ArrowLeft':
      console.log('left')
      xAxis -= 50
      if (xAxis <= 0) {
        xAxis = 0
      }
      circle.style.left = xAxis + 'px'
      break
    case 'ArrowRight':
      console.log('right')
      xAxis += 50
      circle.style.left = xAxis + 'px'
      break
    case 'ArrowUp':
      console.log('up')
      yAxis -= 50
      if (yAxis <= 0) {
        yAxis = 0
      }
      circle.style.top = yAxis + 'px'
      break
    case 'ArrowDown':
      console.log('down')
      yAxis += 50
      circle.style.top = yAxis + 'px'
      break
    default:
      console.log('wrong key')
  }

}
document.addEventListener('keydown', control)