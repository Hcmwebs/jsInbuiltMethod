document.addEventListener('DOMContentLoaded', () => {

  const squares = document.querySelectorAll('.grid div');
  const playerDisplay = document.querySelector('#player');
  let currentPlayer = 'playerX'

  squares.forEach(square =>{
    square.addEventListener('click', doThis)
  })

  function doThis(e){
    const squareArr = Array.from(squares);
    const index = squareArr.indexOf(e.target);
    playerDisplay.innerHTML = currentPlayer;

    if(currentPlayer === 'Victor'){
      squares[index].classList.add('playerX');
      currentPlayer = 'Eric'
    }
    else{
      squares[index].classList.add('playerO')
      currentPlayer = 'playerX'
    }
  }
})