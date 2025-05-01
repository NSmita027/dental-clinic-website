//dental-implants section

// document.querySelectorAll('.feature-card').forEach((card) => {
//     card.addEventListener('mouseenter', () => {
//       card.style.backgroundColor = '#fffcfa'; 
//     });
//     card.addEventListener('mouseleave', () => {
//       card.style.backgroundColor = '#f8f4ee'; 
//     });
//   });
  
  //for basal-implants-slider
  
  
  const slides = document.querySelectorAll(".slide")
  var counter = 0;
  
  slides.forEach(
    (slide, index) => {
      slide.style.left = `${index * 100}%`
    }
  )
  
  const goPrev = () => {
    if(counter >0){
      counter--;
      slideImage()
    }
  }
  
  const goNext = () => {
    if(counter < slides.length -1){
      counter++;
      slideImage()
    }
  }
  
  const slideImage = () => {
    slides.forEach(
      (slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
      }
    )
  }

  // -----bef-aft-imges

var firstIndex=0;
function automaticSlide(){
  setTimeout(automaticSlide, 2000);
  var pics;
  const img= document.querySelectorAll('.dentalb-img');
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
  const imgs= document.querySelectorAll('.dentala-img');
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

//for dental testimonials

//smile-makeover-testimonials

const dentalswiper = new Swiper('.makeover-dentalslider-wrapper', {
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

  
  //for video testimonials - initailize swiper
  
  const basalswiper = new Swiper('.basal-slider-wrapper', {
    loop: true,
    grabCursor:true,
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
      400: {
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
  
  
  
  // for paragraphs - dental implants
  
  
  document.querySelectorAll('.accordion-item').forEach(item => {
    const header = item.querySelector('.accordion-header');
    const content = item.querySelector('.accordion-content');
    const toggleBtn = item.querySelector('.toggle-btn');
  
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');
  
      // Close all other items
      document.querySelectorAll('.accordion-content').forEach(c => {
        c.classList.remove('open');
      });
  
      document.querySelectorAll('.toggle-btn').forEach(btn => btn.textContent = '+');
  
      // Toggle current item
      if (!isOpen) {
        content.classList.add('open');
        toggleBtn.textContent = 'x';
      } else {
        content.classList.remove('open');
        toggleBtn.textContent = '+';
      }
    });
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