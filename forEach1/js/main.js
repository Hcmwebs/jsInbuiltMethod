const squares = document.querySelectorAll('.squares');

squares.forEach(square => {

  square.addEventListener('mouseover', () => {
    square.style.backgroundColor = 'blue';
    square.style.transition = 'ease-in-out';
    square.style.transitionDuration = 1000;


  })
  square.addEventListener('click', () => {
    square.style.backgroundColor = 'green';
  })

  square.addEventListener('mouseout', () => {
    square.style.backgroundColor = 'red';
      square.style.transitionDuration = 1000;
  })

});


