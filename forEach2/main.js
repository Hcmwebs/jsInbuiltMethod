const images = ['img/savannaSunset.jpg','img/giantKingFisher.jpg','img/stars.jpg'];
const img =document.getElementById('img');
let current = 0;
let timer = 1000;

//==== change image====

window.addEventListener('DOMContentLoaded', changeImage)

function changeImage() {
  images.forEach(image => {
    image
  })
}

//==== show next image

function showNext(){
current++;
if (current > images.length - 1){
  current = 0;
}

changeImage();

}

setInterval('showNext', timer )
