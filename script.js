document.addEventListener('DOMContentLoaded', function () {

  /* ============================
      HAMBURGER TOGGLE (MOBILE)
  ============================ */
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
  }
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('underline');
      entry.target.classList.remove('underline-out');
    } else {
      entry.target.classList.add('underline-out');
      entry.target.classList.remove('underline');
    }
  });
}, { threshold: 0.4 });

// observe ALL titles with the class
document.querySelectorAll('.section-title').forEach(title => observer.observe(title));


  /* ======================================================
      FADE-IN ANIMATION FOR EXPERTISE TITLE ON LOAD
  ====================================================== */
  if (expertiseTitle) {
    expertiseTitle.style.animation = 'fadeInUp 1s ease-out';
  }
});


document.querySelectorAll('.form-group.float input, .form-group.float textarea')
  .forEach((field) => {

    // add filled class on load (for autofill)
    if (field.value.trim() !== "") {
      field.parentElement.classList.add("filled");
    }

    field.addEventListener("focus", () => {
      field.parentElement.classList.add("focused");
    });

    field.addEventListener("blur", () => {
      field.parentElement.classList.remove("focused");

      if (field.value.trim() === "") {
        field.parentElement.classList.remove("filled");
      } else {
        field.parentElement.classList.add("filled");
      }
    });

    field.addEventListener("input", () => {
      if (field.value.trim() === "") {
        field.parentElement.classList.remove("filled");
      } else {
        field.parentElement.classList.add("filled");
      }
    });
});
document.querySelectorAll('.section-title').forEach(t => {
  console.log("Observing:", t.textContent);
});
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
