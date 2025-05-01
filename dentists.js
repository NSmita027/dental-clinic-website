
var firstIndex=0;
function automaticSlide(){
  setTimeout(automaticSlide, 3000);
  var pics;
  const img= document.querySelectorAll('.cli-den-img');
  for(pics=0; pics<img.length;pics++){
    img[pics].style.display = "none";
  }
  firstIndex++
  if(firstIndex > img.length){
    firstIndex =1;
  }
  img[firstIndex -1].style.display="block";
}

automaticSlide();


// clinic-hours andheri

// var firstandhIndex=0;
// function andheriautomaticSlide(){
//   setTimeout(andheriautomaticSlide, 1000);
//   var andheripics;
//   const andhimg= document.querySelectorAll('.clinic-dental-img');
//   for(andheripics=0; andheripics<andhimg.length;andheripics++){
//     andhimg[andheripics].style.display = "none";
//   }
//   firstandhIndex++
//   if(firstandhIndex > andhimg.length){
//     firstandhIndex =1;
//   }
//   andhimg[firstandhIndex -1].style.display="block";
// }

// andheriautomaticSlide();

// clinic-hours south mumbai

// var firstIndex=0;
// function automaticSlide(){
//   setTimeout(automaticSlide, 3000);
//   var pics;
//   const img= document.querySelectorAll('.clinic-dental-SouthMumbai-img');
//   for(pics=0; pics<img.length;pics++){
//     img[pics].style.display = "none";
//   }
//   firstIndex++
//   if(firstIndex > img.length){
//     firstIndex =1;
//   }
//   img[firstIndex -1].style.display="block";
// }

// automaticSlide();

// clinic-hours colaba

// var firstIndex=0;
// function automaticSlide(){
//   setTimeout(automaticSlide, 3000);
//   var pics;
//   const img= document.querySelectorAll('.clinic-dental-Colaba-img');
//   for(pics=0; pics<img.length;pics++){
//     img[pics].style.display = "none";
//   }
//   firstIndex++
//   if(firstIndex > img.length){
//     firstIndex =1;
//   }
//   img[firstIndex -1].style.display="block";
// }

// automaticSlide();

// for people - user

const swiperpeople = new Swiper('.people-slider-wrapper', {
  loop: true,
  grabCursor : true,
  spaceBetween : 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    },
  }

});