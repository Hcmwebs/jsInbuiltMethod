const images = ['img/highView.jpg', 'img/snowMountains.jpg','img/walk.jpg','img/sunset.jpg','img/savannaSunset.jpg','img/giantKingFisher.jpg'];
const img =document.getElementById('img');

window.addEventListener('DOMContentLoaded',() =>{
    images.forEach(image => {
    img.src = image;
  });
setInterval (() =>{}, 3000)

})
