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