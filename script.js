document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('alertPlaceholder').innerHTML =
    `<div class="alert alert-success">Thanks for your message! I’ll reply soon.</div>`;
  e.target.reset();
});
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.custom-navbar');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
// Scroll logic to toggle navbar color

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});
