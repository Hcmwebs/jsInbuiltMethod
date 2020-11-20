document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div')

  squares.forEach (square =>{
    square.addEventListener('click', doThis)
  })

  const dothis = () =>{
    alert('I have been clicked')
  }
})