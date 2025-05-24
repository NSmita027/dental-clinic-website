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
    
      const slides = document.querySelectorAll('.index-slide');
      let currentSlide = 0;
      const slideInterval = 5000; // Change slide every 5 seconds
      
      // Hide all slides except the first one
      slides.forEach((slide, index) => {
          if (index !== 0) {
              slide.style.opacity = '0';
          }
      });
      
      // Function to move to the next slide
      function nextSlide() {
          // Hide current slide
          slides[currentSlide].style.opacity = '0';
          
          // Move to next slide or back to first slide
          currentSlide = (currentSlide + 1) % slides.length;
          
          // Show new current slide
          slides[currentSlide].style.opacity = '1';
      }
      
      // Start the slideshow
      setInterval(nextSlide, slideInterval);

  }

  // ====================== TESTIMONIALS SLIDER ======================
  if (document.querySelector('.celeb-img-vid-container')) {
    
    const slider = document.querySelector('.celeb-slider');
    const testimonials = document.querySelectorAll('.celeb-img-vid-container');
    let currentIndex = 0;
    const totalItems = testimonials.length;
    
    // Initialize videos to pause when not in view
    const videos = document.querySelectorAll('.celeb-video video');
    videos.forEach(video => {
        video.pause();
    });
    
    // Function to display specific slide
    function goToSlide(index) {
        // Ensure index is within bounds
        if (index < 0) {
            index = totalItems - 1;
        } else if (index >= totalItems) {
            index = 0;
        }
        
        // Pause all videos
        videos.forEach(video => {
            video.pause();
        });
        
        // Calculate position to scroll to
        const slideWidth = testimonials[0].offsetWidth;
        slider.scrollLeft = index * slideWidth;
        
        // Update current index
        currentIndex = index;
        
        // Auto-play video if current slide has one
        const currentSlide = testimonials[currentIndex];
        const currentVideo = currentSlide.querySelector('video');
        if (currentVideo) {
            // Small timeout to ensure scroll is complete before playing
            setTimeout(() => {
                currentVideo.play().catch(e => {
                    console.log("Auto-play prevented by browser. User must interact first.");
                });
            }, 300);
        }
    }
    
    // Next button function
    window.nextbutton = function() {
        goToSlide(currentIndex + 1);
    };
    
    // Previous button function
    window.prevbutton = function() {
        goToSlide(currentIndex - 1);
    };
    
    // Auto-advance the slider every 8 seconds
    const autoSlideInterval = setInterval(() => {
        nextbutton();
    }, 8000);
    
    // Stop auto-advance when user interacts with the slider
    slider.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
    });
    
    // Handle swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - show next slide
            nextbutton();
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right - show previous slide
            prevbutton();
        }
    }
    
    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextbutton();
        } else if (e.key === 'ArrowLeft') {
            prevbutton();
        }
    });
    
    // Optional: Handle scroll on slider to detect when a new slide comes into view
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft;
        const slideWidth = testimonials[0].offsetWidth;
        const newIndex = Math.round(scrollPosition / slideWidth);
        
        if (newIndex !== currentIndex) {
            currentIndex = newIndex;
            
            // Pause all videos
            videos.forEach(video => {
                video.pause();
            });
            
            // Auto-play video if current slide has one
            const currentSlide = testimonials[currentIndex];
            const currentVideo = currentSlide.querySelector('video');
            if (currentVideo) {
                setTimeout(() => {
                    currentVideo.play().catch(e => {
                        console.log("Auto-play prevented by browser. User must interact first.");
                    });
                }, 300);
            }
        }
    });
    
    // Initialize first slide
    goToSlide(0);

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