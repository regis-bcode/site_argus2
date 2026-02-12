document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');

  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const expanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!expanded));
      mobileMenu.classList.toggle('open');
    });
  }

  const revealElements = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealElements.length) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  const parallaxItems = document.querySelectorAll('[data-parallax]');
  if (parallaxItems.length) {
    const onScroll = () => {
      const viewportHeight = window.innerHeight || 1;
      parallaxItems.forEach((item) => {
        const speed = Number(item.getAttribute('data-parallax')) || 0.12;
        const rect = item.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        item.style.setProperty('--parallax-y', `${-progress * speed * 100}px`);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  const sameOriginLinks = document.querySelectorAll('a[href]');
  sameOriginLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || link.target === '_blank') return;
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      event.preventDefault();
      document.body.classList.add('page-leave');
      window.setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  });

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
});
