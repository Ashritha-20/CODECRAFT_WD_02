const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section");

// Add scroll effect to navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Highlight active section
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60; // offset for navbar height
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
