const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const track = document.querySelector('.work-track');
const cards = [...document.querySelectorAll('.project-card')];
const controls = document.querySelectorAll('.slider-button');
let currentSlide = 0;

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function moveSlider(direction) {
  const visibleCount = window.innerWidth <= 800 ? 1 : 3;
  const maxSlide = Math.max(0, cards.length - visibleCount);
  currentSlide = Math.min(maxSlide, Math.max(0, currentSlide + direction));
  const distance = cards[0].getBoundingClientRect().width + 24;
  track.style.transform = `translateX(-${currentSlide * distance}px)`;
}

controls.forEach((button) => {
  button.addEventListener('click', () => moveSlider(button.dataset.direction === 'next' ? 1 : -1));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') moveSlider(1);
  if (event.key === 'ArrowLeft') moveSlider(-1);
});

window.addEventListener('resize', () => moveSlider(0));

document.querySelectorAll('.reveal').forEach((element) => {
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      element.classList.add('visible');
      observer.disconnect();
    }
  }, { threshold: 0.12 });
  observer.observe(element);
});
