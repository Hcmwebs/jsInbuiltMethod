const images = [
  'img/savannaSunset.jpg',
  'img/giantKingFisher.jpg',
  'img/stars.jpg',
];
const img = document.getElementById('img');
let current = 0;
let timer = 10000;



window.addEventListener('DOMContentLoaded', () => {
  //==== change image automatically====
  const changeImage = () => {
    setInterval(showNext, timer);
  };

  //==== show next image
  const showNext = () => {
    current++;
    if (current > images.length - 1) {
      current = 0;
    }
    img.src = images[current];
  };

  changeImage();
});


//==== change image manually====

