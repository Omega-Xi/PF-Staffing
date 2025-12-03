const menuBtn=document.getElementById("mobile-menu-btn");
const mobileMenu=document.querySelector(".mobile-nav-links")
const sections = document.querySelectorAll('section');
menuBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  mobileMenu.style.display = 
    mobileMenu.style.display === "flex" ? "none" : "flex";
});
document.addEventListener('click', (e) => {
  if (e.target !== menuBtn) {
    mobileMenu.style.display = "none";
  }
});
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
sections.forEach(section => {
  observer.observe(section);
});