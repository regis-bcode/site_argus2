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

  const demoOverlay = document.createElement('section');
  demoOverlay.id = 'demo-overlay';
  demoOverlay.className = 'demo-overlay';
  demoOverlay.setAttribute('aria-hidden', 'true');
  demoOverlay.innerHTML = `
    <div class="demo-modal" role="dialog" aria-modal="true" aria-label="Solicitar demonstração">
      <button class="demo-close" type="button" aria-label="Fechar">✕</button>
      <h2>Solicitar Demonstração Estratégica</h2>
      <p>Recebemos seu interesse. Nosso time comercial irá conduzir uma avaliação inicial para montar a melhor demonstração para CCIH, NSP, Qualidade e Diretoria.</p>
      <div class="grid-2">
        <article class="card"><h3>Etapa 1 — Diagnóstico inicial</h3><p>Mapeamento do cenário assistencial e dos principais riscos regulatórios.</p></article>
        <article class="card"><h3>Etapa 2 — Demonstração guiada</h3><p>Apresentação orientada aos seus fluxos reais (sem proposta genérica).</p></article>
      </div>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="mailto:comercial@argusbc.com.br">Enviar e-mail agora</a>
        <a class="btn btn-outline" href="contact.html">Preencher formulário completo</a>
      </div>
    </div>
  `;
  document.body.appendChild(demoOverlay);

  const openDemo = () => {
    demoOverlay.classList.add('open');
    demoOverlay.setAttribute('aria-hidden', 'false');
  };

  const closeDemo = () => {
    demoOverlay.classList.remove('open');
    demoOverlay.setAttribute('aria-hidden', 'true');
  };

  document.querySelectorAll('.js-open-demo').forEach((trigger) => {
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openDemo();
    });
  });

  const closeButton = demoOverlay.querySelector('.demo-close');
  closeButton?.addEventListener('click', closeDemo);
  demoOverlay.addEventListener('click', (event) => {
    if (event.target === demoOverlay) closeDemo();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeDemo();
  });

  const sameOriginLinks = document.querySelectorAll('a[href]');
  sameOriginLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || link.target === '_blank') return;
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
      if (link.classList.contains('js-open-demo')) return;
      event.preventDefault();
      document.body.classList.add('page-leave');
      window.setTimeout(() => {
        window.location.href = href;
      }, 250);
    });
  });
});
