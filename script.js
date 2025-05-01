//toggle icon navbar

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.nav-list');

// menuIcon.onclick = () => {
//   console.log(navbar); 
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active'); 
// }

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".nav-list");
    const icon = menuIcon.querySelector("i"); // Select the icon inside

    menuIcon.addEventListener("click", function () {
        navList.classList.toggle("active");

        // Toggle icon between bars (☰) and cross (✖)
        if (navList.classList.contains("active")) {
            icon.classList.replace("fa-bars", "fa-times"); // Show cross
        } else {
            icon.classList.replace("fa-times", "fa-bars"); // Show menu
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
  console.log("✅ DOM Loaded, Script Running!");

  let currentPage = window.location.pathname.split("/").pop().toLowerCase();
  console.log("📄 Current Page:", currentPage || "index.html"); // Show current page

  let navLinks = document.querySelectorAll(".nav-list a");
  console.log("🔗 Found", navLinks.length, "nav links."); // Log number of links

  if (navLinks.length === 0) {
      console.warn("❌ No navigation links found! Check your .nav-list selector.");
  }

  navLinks.forEach(link => {
      let linkPage = link.getAttribute("href").toLowerCase();
      console.log("🔍 Checking link:", linkPage); // Log each link being checked

      if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
          console.log("✅ Match found:", linkPage); 
          link.classList.add("active");
      }
  });
});






//for home page bg


let indexCurrentSlide = 0; // Keep track of the current slide
const indexSlides = document.querySelectorAll('.index-slide'); // Get all slides

function indexShowSlide(index) {
    // Hide all slides
    indexSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the current slide
    indexSlides[index].classList.add('active');
}

// Automatic slideshow
function indexStartSlideshow() {
    setInterval(() => {
        indexCurrentSlide = (indexCurrentSlide + 1) % indexSlides.length; // Loop back to the first slide
        indexShowSlide(indexCurrentSlide);
    }, 6000); // 6-second interval
}

// Initialize the slideshow
indexShowSlide(indexCurrentSlide); // Show the first slide initially
indexStartSlideshow();


//call

function makeCall(){
  window.location.href = "tel:+919372816443";
}

//for celebs testimonials


const celebSlides = document.querySelectorAll('.celeb-img-vid-container');
const videos = document.querySelectorAll('video'); // Select all video elements
let counter = 0;
const totalSlides = celebSlides.length;
let autoSlideInterval;
let isVideoPlaying = false; // Track if any video is playing

// Position slides initially
celebSlides.forEach((celebSlide, index) => {
  celebSlide.style.left = `${index * 100}%`;
});

function slideclip() {
  if (!isVideoPlaying) { // Prevent sliding if a video is playing
    celebSlides.forEach(celebSlide => {
      celebSlide.style.transform = `translateX(-${counter * 100}%)`;
    });
  }
}

// Function to go to the next slide
const nextbutton = () => {
  if (!isVideoPlaying) { // Prevent slide change if a video is playing
    counter = (counter + 1) % totalSlides;
    slideclip();
    resetAutoSlide();
  }
};

// Function to go to the previous slide
const prevbutton = () => {
  if (!isVideoPlaying) { // Prevent slide change if a video is playing
    counter = (counter - 1 + totalSlides) % totalSlides;
    slideclip();
    resetAutoSlide();
  }
};

// Function to start automatic sliding
function startAutoSlide() {
  if (!isVideoPlaying) {
    autoSlideInterval = setInterval(() => {
      nextbutton();
    }, 5000); // Change every 5 seconds
  }
}

// Function to stop automatic sliding
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Function to reset auto-slide when user interacts
function resetAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Detect when user hovers over slides (pause auto-slide)
document.querySelectorAll('.celeb-img-vid-container').forEach(element => {
  element.addEventListener('mouseenter', stopAutoSlide);
  element.addEventListener('mouseleave', startAutoSlide);
});

// Handle video interactions
videos.forEach(video => {
  video.addEventListener('play', () => {
    isVideoPlaying = true; // Mark video as playing
    stopAutoSlide(); // Stop auto-slide
  });

  video.addEventListener('pause', () => {
    isVideoPlaying = false; // Mark video as not playing
    startAutoSlide(); // Resume auto-slide
  });

  video.addEventListener('ended', () => {
    isVideoPlaying = false; // Mark video as not playing
    startAutoSlide(); // Resume auto-slide
  });
});

// Start auto-slide when the page loads
startAutoSlide();


// const celebSlides = document.querySelectorAll('.celeb-img-vid-container');
// var counter = 0;
// const totalSlides = celebSlides.length; // Get the total number of slides

// celebSlides.forEach(
//   (celebSlide, index) =>{
//     celebSlide.style.left = `${index * 100}%`;
//   }
// )

// function slideclip(){
//   celebSlides.forEach(
//     celebSlide =>{ celebSlide.style.transform = `translateX(-${counter * 100}%)`
// });
// }

// const nextbutton = () => {
//   counter++;
//   if (counter >= totalSlides) {
//     counter = 0; // Loop back to the first slide
//   }
//   slideclip();
// };


// const prevbutton = () => {
//   counter--;
//   if (counter < 0) {
//     counter = totalSlides - 1; // Loop back to the last slide
//   }
//   slideclip();
// };



// -----bef-aft-imges

var firstIndex=0;
function automaticSlide(){
  setTimeout(automaticSlide, 2000);
  var pics;
  const img= document.querySelectorAll('.beautifulb-img');
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
  const imgs= document.querySelectorAll('.beautifula-img');
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


//for video testimonials - initailize swiper

const swiper = new Swiper('.slider-wrapper', {
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

//for celebrities - initailize swiper

const swiperone = new Swiper('.details-slider-wrapper', {
  loop: true, 
  grabCursor: true,
  spaceBetween: 25,
  speed: 2000, 
  autoplay: {
    delay: 0, 
    disableOnInteraction: false, 
  },
  freeMode: true, 
  freeModeMomentum: false, 

  slidesPerView: 'auto', 
  centeredSlides: false, 

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 4
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





// for work with us 

document.getElementById('work-with-us-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!');
});




