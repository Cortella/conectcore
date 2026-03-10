/* ═══════════════════════════════════════════════════════════
   CONECTCORE — Main JavaScript
   Smooth interactions, scroll reveals, carousel & counters
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
  initCounters();
  initCertificatesCarousel();
  initLightbox();
  initContactForm();
  initSmoothScroll();
  initParallax();
});

/* ═══════════════════ NAVIGATION ═══════════════════ */
function initNavigation() {
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');

  // Scroll detection for frosted glass effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 20) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  // Mobile menu toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  // Close mobile menu on link click
  links.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Active link highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

/* ═══════════════════ SCROLL REVEAL ═══════════════════ */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

/* ═══════════════════ COUNTERS ═══════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.metric__number');

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-count'));
  const duration = 2000;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuart(progress);
    const current = Math.floor(easedProgress * target);

    el.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

/* ═══════════════════ CERTIFICATES CAROUSEL ═══════════════════ */
function initCertificatesCarousel() {
  const track = document.getElementById('certTrack');
  const prevBtn = document.getElementById('certPrev');
  const nextBtn = document.getElementById('certNext');

  if (!track) return;

  let currentIndex = 0;
  const cards = track.querySelectorAll('.cert-card');
  const totalCards = cards.length;
  let cardsVisible = getCardsVisible();

  function getCardsVisible() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 1.2;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function getCardWidth() {
    const card = cards[0];
    if (!card) return 0;
    const style = window.getComputedStyle(track);
    const gap = parseInt(style.gap) || 24;
    return card.offsetWidth + gap;
  }

  function updatePosition() {
    const cardWidth = getCardWidth();
    const maxIndex = Math.max(0, totalCards - Math.floor(cardsVisible));
    currentIndex = Math.min(currentIndex, maxIndex);
    currentIndex = Math.max(0, currentIndex);
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(0, currentIndex - 1);
    updatePosition();
  });

  nextBtn.addEventListener('click', () => {
    const maxIndex = Math.max(0, totalCards - Math.floor(cardsVisible));
    currentIndex = Math.min(maxIndex, currentIndex + 1);
    updatePosition();
  });

  // Touch/Drag support
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;

  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
    track.style.transition = 'none';
  });

  track.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    const cardWidth = getCardWidth();
    currentTranslate = -(currentIndex * cardWidth) + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  });

  track.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    const diff = e.pageX - startX;
    const threshold = 80;
    if (diff < -threshold) {
      const maxIndex = Math.max(0, totalCards - Math.floor(cardsVisible));
      currentIndex = Math.min(maxIndex, currentIndex + 1);
    } else if (diff > threshold) {
      currentIndex = Math.max(0, currentIndex - 1);
    }
    updatePosition();
  });

  track.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      track.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      updatePosition();
    }
  });

  // Touch events
  track.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX;
    track.style.transition = 'none';
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    const cardWidth = getCardWidth();
    currentTranslate = -(currentIndex * cardWidth) + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
    const diff = e.changedTouches[0].pageX - startX;
    const threshold = 50;
    if (diff < -threshold) {
      const maxIndex = Math.max(0, totalCards - Math.floor(cardsVisible));
      currentIndex = Math.min(maxIndex, currentIndex + 1);
    } else if (diff > threshold) {
      currentIndex = Math.max(0, currentIndex - 1);
    }
    updatePosition();
  });

  // Resize handler
  window.addEventListener('resize', () => {
    cardsVisible = getCardsVisible();
    updatePosition();
  });
}

/* ═══════════════════ LIGHTBOX ═══════════════════ */
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');

  document.querySelectorAll('.cert-card img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

/* ═══════════════════ CONTACT FORM ═══════════════════ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    // Simulate form submission
    setTimeout(() => {
      btn.textContent = '✓ Mensagem Enviada!';
      btn.style.background = '#25D366';
      btn.style.opacity = '1';

      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }, 1500);
  });
}

/* ═══════════════════ SMOOTH SCROLL ═══════════════════ */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = document.getElementById('nav').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/* ═══════════════════ PARALLAX (subtle) ═══════════════════ */
function initParallax() {
  const hero = document.querySelector('.hero');
  const gradient = document.querySelector('.hero__gradient');

  if (!hero || !gradient) return;

  // Only on desktop to avoid performance issues on mobile
  if (window.innerWidth < 768) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        const heroHeight = hero.offsetHeight;

        if (scrolled < heroHeight) {
          const parallaxValue = scrolled * 0.3;
          gradient.style.transform = `translateY(${parallaxValue}px)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Subtle mouse follow on hero gradient (desktop only)
  hero.addEventListener('mousemove', (e) => {
    if (window.innerWidth < 768) return;

    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      gradient.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}
