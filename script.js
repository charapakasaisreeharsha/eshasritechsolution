document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navbar = document.querySelector('.navbar');
  const aboutTitle = document.querySelector('.about-title');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // Add shadow to navbar on scroll
  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Toggle dropdown on click for touch devices
  const dropdownLinks = document.querySelectorAll('.dropdown > a');
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const content = link.nextElementSibling;
      content.classList.toggle('active');
    });
  });

  // Add underline to about title and section header h2 when scrolled into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('underline-out');
        entry.target.classList.add('underline');
      } else {
        entry.target.classList.remove('underline');
        entry.target.classList.add('underline-out');
      }
    });
  }, { threshold: 0.5 });

  observer.observe(aboutTitle);

  // Observe the section header h2
  const sectionHeaderTitle = document.querySelector('.section-header h2');
  if (sectionHeaderTitle) {
    observer.observe(sectionHeaderTitle);
  }
});


