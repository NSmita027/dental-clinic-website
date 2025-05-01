// cosmetic-dentistry unveiling new smiles

// const slides = document.querySelectorAll(".slide")
// var counter = 0;

// slides.forEach(
//   (slide, index) => {
//     slide.style.left = `${index * 100}%`
//   }
// )

// const goPrev = () => {
//   if(counter >0){
//     counter--;
//     slideImage()
//   }
// }

// const goNext = () => {
//   if(counter < slides.length -1){
//     counter++;
//     slideImage()
//   }
// }

// const slideImage = () => {
//   slides.forEach(
//     (slide) => {
//       slide.style.transform = `translateX(-${counter * 100}%)`
//     }
//   )
// }

//   types of cosmetic dentistry




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