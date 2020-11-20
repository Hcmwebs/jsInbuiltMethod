document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div')

  squares.forEach(square =>{
    square.addEventListener('click', doThis)
  })

  function doThis(e){
    const squareArr = Array.from(squares);
    const index = squareArr.indexOf(e.target);
  }
})