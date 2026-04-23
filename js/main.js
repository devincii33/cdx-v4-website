/* ============================================================
   Creative Direxion — main.js
   ============================================================ */

/* ── Navigation: scroll class ── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── Navigation: hamburger ── */
(function () {
  const btn = document.querySelector('.nav-hamburger');
  const overlay = document.querySelector('.nav-overlay');
  if (!btn || !overlay) return;

  const toggle = (open) => {
    btn.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    btn.setAttribute('aria-expanded', String(open));
  };

  btn.addEventListener('click', () => toggle(!overlay.classList.contains('open')));

  overlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggle(false);
  });
})();

/* ── Navigation: active link ── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ── Scroll-triggered reveal ── */
(function () {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('visible'));
  }
})();

/* ── Contact form ── */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  const success = document.querySelector('.form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    /* Simulate async send — replace with real endpoint (e.g. Netlify Forms) */
    setTimeout(() => {
      form.style.display = 'none';
      if (success) {
        success.classList.add('show');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 1200);
  });
})();
