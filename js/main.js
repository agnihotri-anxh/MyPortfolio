// ── MOBILE TOGGLE ACTIONS ──
const mobileToggle = document.getElementById('mobile-toggle');
const navLinks = document.getElementById('nav-links');

if (mobileToggle && navLinks) {
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      mobileToggle.classList.remove('open');
      navLinks.classList.remove('open');
    }
  });
}

// ── SERVICE CARDS HOVER/CLICK TOGGLE ──
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    serviceCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// ── NAVIGATION SYNC ON SCROLL ──
const sections = document.querySelectorAll('section[id], footer[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentSection = '';
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(sec => {
    const secTop = sec.offsetTop - 150;
    const secHeight = sec.offsetHeight;
    if (scrollPosition >= secTop && scrollPosition < (secTop + secHeight)) {
      currentSection = sec.getAttribute('id');
    }
  });

  navAnchors.forEach(anchor => {
    anchor.classList.remove('active');
    if (anchor.getAttribute('href') === `#${currentSection}`) {
      anchor.classList.add('active');
    }
  });
});
