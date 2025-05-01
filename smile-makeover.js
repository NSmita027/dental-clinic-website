// smile-makeover- smile-gallery

var firstIndex=0;
function automaticSlide(){
  setTimeout(automaticSlide, 2000);
  var pics;
  const img= document.querySelectorAll('.b-img');
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

var firstIdx = 0;
function autoSlide(){
  setTimeout(autoSlide, 2000);
  var photos;
  const imgs= document.querySelectorAll('.a-img');
  for(photos=0; photos<imgs.length;photos++){
    imgs[photos].style.display = "none";
  }
  firstIdx++
  if(firstIdx > imgs.length){
    firstIdx =1;
  }
  imgs[firstIdx -1].style.display="block";
}

autoSlide();


//smile-makeover-testimonials


const makeoverswiper = new Swiper('.makeover-slider-wrapper', {
  loop: true,
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

  // Prevent accidental swipes when interacting with media
  watchSlidesProgress: true,
  preventClicks: true,
  preventClicksPropagation: false,

  // responsive breakpoints
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