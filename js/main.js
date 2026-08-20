// ==========================================================================
// PORTFOLIO TEMPLATE — shared behavior for every page
// ==========================================================================

(() => {
  /* ---- Dark mode: apply saved/system preference before first paint ---- */
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || saved === 'light') {
    document.documentElement.setAttribute('data-theme', saved);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  /* ---- Dark mode toggle button ---- */
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isDark = () => {
      const explicit = document.documentElement.getAttribute('data-theme');
      if (explicit) return explicit === 'dark';
      return prefersDark.matches;
    };
    themeToggle.setAttribute('aria-pressed', isDark() ? 'true' : 'false');
    themeToggle.addEventListener('click', () => {
      const next = isDark() ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeToggle.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
    });
  }

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links  = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('is-open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('is-open');
      document.body.classList.remove('nav-open');
    }));
  }

  /* ---- Reveal-on-scroll ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---- Footer year ---- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- Custom cursor dot (desktop only, purely decorative) ---- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    document.body.appendChild(dot);
    window.addEventListener('mousemove', (e) => {
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    });
  }
});
