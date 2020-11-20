document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div')

  squares.forEach (square =>{
    square.addEventListener('click', doThis)
  })

  function dothis() {
    alert('I have been clicked')
  }
})