document.querySelectorAll('.faq-1st-accordion-item').forEach(item => {
    const header = item.querySelector('.faq-1st-accordion-header');
    const content = item.querySelector('.faq-1st-accordion-content');
    const toggleBtn = item.querySelector('.toggle-btn');
  
    header.addEventListener('click', () => {
      const isOpen = content.classList.contains('open');
  
      // Close all other items
      document.querySelectorAll('.faq-1st-accordion-content').forEach(c => {
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