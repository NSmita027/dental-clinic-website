document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.getElementById('nav-list');
    const dropLink = document.getElementById('treatments-link');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    // Only hook up the menu-toggle if both elements are present
    if (menuIcon && navList) {
      menuIcon.addEventListener('click', () => {
        navList.classList.toggle('open');
        const icon = menuIcon.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      });
    }
  
    // Only hook up the treatments dropdown on mobile if it exists
    if (dropLink && dropdownMenu) {
      dropLink.addEventListener('click', e => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          dropdownMenu.classList.toggle('open');
        }
      });
    }
  
    // Close drawer if clicking outside  
    document.addEventListener('click', e => {
      if (navList && menuIcon) {
        if (!navList.contains(e.target) && !menuIcon.contains(e.target)) {
          navList.classList.remove('open');
          if (dropdownMenu) dropdownMenu.classList.remove('open');
          const icon = menuIcon.querySelector('i');
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      }
    });
});