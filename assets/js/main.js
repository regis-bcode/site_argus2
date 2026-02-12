document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('open');
    });
  }

  const accordions = document.querySelectorAll('.accordion-item');
  accordions.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      item.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const cards = carousel.querySelectorAll('.card');
    const prev = carousel.querySelector('.prev');
    const next = carousel.querySelector('.next');
    if (!track || cards.length === 0 || !prev || !next) return;

    let index = 0;
    const perView = window.matchMedia('(max-width: 960px)').matches ? 1 : 3;
    const maxIndex = Math.max(cards.length - perView, 0);

    const update = () => {
      const cardWidth = cards[0].getBoundingClientRect().width + 16;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    };

    next.addEventListener('click', () => {
      index = Math.min(index + 1, maxIndex);
      update();
    });

    prev.addEventListener('click', () => {
      index = Math.max(index - 1, 0);
      update();
    });

    window.addEventListener('resize', update);
    update();
  });

  const spyLinks = document.querySelectorAll('[data-scrollspy] a[href^="#"]');
  spyLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      const target = id ? document.querySelector(id) : null;
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
});
