// Simple form handler (no backend yet)
const form = document.getElementById('contactForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  message.textContent = "Thanks for reaching out! We'll get back to you soon.";
  form.reset();
});
