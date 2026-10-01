const revealEls = document.querySelectorAll('.manifesto, .project, .approach-title, .approach-grid, .service-row, .statement, .price, .contact');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal', 'visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach((el) => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

const poster = document.querySelector('.hero-poster');
if (poster && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2;
    const y = (event.clientY / window.innerHeight - 0.5) * 2;
    poster.style.transform = `translate(${x * 8}px, ${y * 8}px) rotate(${x * 1.3}deg)`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
