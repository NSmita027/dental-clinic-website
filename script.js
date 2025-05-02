document.addEventListener('DOMContentLoaded', function() {
  console.log("✅ DOM Loaded, Script Running!");

  // ====================== NAVIGATION ======================
  const menuIcon = document.querySelector('[data-menu-toggle]') || document.getElementById('menu-icon');
  const navList = document.querySelector('[data-nav-list]') || document.querySelector('.nav-list');
  const dropLink = document.querySelector('[data-dropdown-trigger]') || document.getElementById('treatments-link');
  const dropdownMenu = document.querySelector('[data-dropdown-menu]') || document.querySelector('.dropdown-menu');

  // Toggle mobile menu
  if (menuIcon && navList) {
    menuIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      navList.classList.toggle('open');
      navList.classList.toggle('active');
      
      // Toggle icon (supports both bx-x and FontAwesome)
      menuIcon.classList.toggle('bx-x');
      const icon = menuIcon.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });
  }

  // Toggle dropdown on mobile
  if (dropLink && dropdownMenu) {
    dropLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.stopPropagation();
        dropdownMenu.classList.toggle('open');
      }
    });
  }

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navList && menuIcon) {
      if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
        navList.classList.remove('open');
        navList.classList.remove('active');
        dropdownMenu?.classList.remove('open');
        
        // Reset icon
        menuIcon?.classList.remove('bx-x');
        const icon = menuIcon?.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    }
  });

  // Active link highlighting
  let currentPage = window.location.pathname.split("/").pop().toLowerCase();
  console.log("📄 Current Page:", currentPage || "index.html");

  let navLinks = document.querySelectorAll(".nav-list a");
  console.log("🔗 Found", navLinks.length, "nav links.");

  navLinks.forEach(link => {
    let linkPage = link.getAttribute("href").toLowerCase();
    console.log("🔍 Checking link:", linkPage);

    if (currentPage === linkPage || (currentPage === "" && linkPage === "index.html")) {
      console.log("✅ Match found:", linkPage); 
      link.classList.add("active");
    }
  });

  // ====================== HOMEPAGE SLIDESHOW ======================
  if (document.querySelector('.index-slide')) {
    let indexCurrentSlide = 0;
    const indexSlides = document.querySelectorAll('.index-slide');

    function indexShowSlide(index) {
      indexSlides.forEach((slide) => {
        slide.classList.remove('active');
      });
      indexSlides[index].classList.add('active');
    }

    function indexStartSlideshow() {
      setInterval(() => {
        indexCurrentSlide = (indexCurrentSlide + 1) % indexSlides.length;
        indexShowSlide(indexCurrentSlide);
      }, 6000);
    }

    indexShowSlide(indexCurrentSlide);
    indexStartSlideshow();
  }

  // ====================== TESTIMONIALS SLIDER ======================
  if (document.querySelector('.celeb-img-vid-container')) {
    const celebSlides = document.querySelectorAll('.celeb-img-vid-container');
    const videos = document.querySelectorAll('video');
    let counter = 0;
    const totalSlides = celebSlides.length;
    let autoSlideInterval;
    let isVideoPlaying = false;

    celebSlides.forEach((celebSlide, index) => {
      celebSlide.style.left = `${index * 100}%`;
    });

    function slideclip() {
      if (!isVideoPlaying) {
        celebSlides.forEach(celebSlide => {
          celebSlide.style.transform = `translateX(-${counter * 100}%)`;
        });
      }
    }

    const nextbutton = () => {
      if (!isVideoPlaying) {
        counter = (counter + 1) % totalSlides;
        slideclip();
        resetAutoSlide();
      }
    };

    const prevbutton = () => {
      if (!isVideoPlaying) {
        counter = (counter - 1 + totalSlides) % totalSlides;
        slideclip();
        resetAutoSlide();
      }
    };

    function startAutoSlide() {
      if (!isVideoPlaying) {
        autoSlideInterval = setInterval(() => {
          nextbutton();
        }, 5000);
      }
    }

    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    document.querySelectorAll('.celeb-img-vid-container').forEach(element => {
      element.addEventListener('mouseenter', stopAutoSlide);
      element.addEventListener('mouseleave', startAutoSlide);
    });

    videos.forEach(video => {
      video.addEventListener('play', () => {
        isVideoPlaying = true;
        stopAutoSlide();
      });

      video.addEventListener('pause', () => {
        isVideoPlaying = false;
        startAutoSlide();
      });

      video.addEventListener('ended', () => {
        isVideoPlaying = false;
        startAutoSlide();
      });
    });

    startAutoSlide();
  }

  // ====================== BEFORE/AFTER SLIDERS ======================
  if (document.querySelector('.beautifulb-img')) {
    var firstIndex = 0;
    function automaticSlide() {
      setTimeout(automaticSlide, 2000);
      var pics;
      const img = document.querySelectorAll('.beautifulb-img');
      for(pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
      }
      firstIndex++;
      if(firstIndex > img.length) {
        firstIndex = 1;
      }
      img[firstIndex - 1].style.display = "block";
    }
    automaticSlide();
  }

  if (document.querySelector('.beautifula-img')) {
    var firstIdx = 0;
    function autoSlide() {
      setTimeout(autoSlide, 2000);
      var photos;
      const imgs = document.querySelectorAll('.beautifula-img');
      for(photos = 0; photos < imgs.length; photos++) {
        imgs[photos].style.display = "none";
      }
      firstIdx++;
      if(firstIdx > imgs.length) {
        firstIdx = 1;
      }
      imgs[firstIdx - 1].style.display = "block";
    }
    autoSlide();
  }

  // ====================== SWIPER SLIDERS ======================
  // Initialize only if elements exist
  if (document.querySelector('.slider-wrapper')) {
    const swiper = new Swiper('.slider-wrapper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
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
        400: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }

  if (document.querySelector('.details-slider-wrapper')) {
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
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }
    });
  }

  if (document.querySelector('.people-slider-wrapper')) {
    const swiperpeople = new Swiper('.people-slider-wrapper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
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
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }
    });
  }

  // ====================== OTHER FUNCTIONS ======================
  window.makeCall = function() {
    window.location.href = "tel:+919372816443";
  };
});