// Remember favorites locally and keep the count visible while browsing.
const favoriteCount = document.querySelector('#favorite-count');
let savedFavorites = [];
const favoriteKeys = [...document.querySelectorAll('.villa-card')].map(card => card.dataset.favoriteId).filter(Boolean);
try {
  const storedFavorites = JSON.parse(localStorage.getItem('indigo-favorites') || '[]');
  savedFavorites = storedFavorites.map(item => typeof item === 'number' ? favoriteKeys[item] : item).filter(item => favoriteKeys.includes(item));
} catch { savedFavorites = []; }
function updateFavorites() {
  document.querySelectorAll('.favorite').forEach(button => {
    const key = button.closest('.villa-card').dataset.favoriteId;
    const saved = savedFavorites.includes(key);
    button.classList.toggle('saved', saved);
    button.textContent = saved ? '♥' : '♡';
    button.setAttribute('aria-pressed', String(saved));
  });
  if (favoriteCount) favoriteCount.textContent = savedFavorites.length;
}
document.querySelectorAll('.favorite').forEach(button => button.addEventListener('click', () => {
  const key = button.closest('.villa-card').dataset.favoriteId;
  savedFavorites = savedFavorites.includes(key) ? savedFavorites.filter(item => item !== key) : [...savedFavorites, key];
  localStorage.setItem('indigo-favorites', JSON.stringify(savedFavorites));
  updateFavorites();
}));
updateFavorites();

// Tap a villa photo for the full-screen, zoomable gallery view.
const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('.lightbox-caption');
function closeLightbox() {
  lightbox.classList.remove('open','zoomed');
  lightbox.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('.photo-button').forEach(button => button.addEventListener('click', () => {
  const image = button.querySelector('img');
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = image.alt;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
}));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.lightbox-zoom').addEventListener('click', () => lightbox.classList.toggle('zoomed'));
lightboxImage.addEventListener('click', () => lightbox.classList.toggle('zoomed'));
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });

// Open a villa detail card with its photo, stay size, facilities and price.
const villaModal = document.querySelector('#villa-modal');
const modalImage = villaModal.querySelector('.modal-photo img');
const modalTitle = villaModal.querySelector('#modal-title');
const modalTags = villaModal.querySelector('.modal-tags');
const modalDescription = villaModal.querySelector('.modal-description');
const modalPrice = villaModal.querySelector('.modal-price');
function closeVillaModal() {
  villaModal.classList.remove('open');
  villaModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('no-scroll');
}
document.querySelectorAll('[data-villa-open]').forEach(button => button.addEventListener('click', () => {
  const card = button.closest('.villa-card');
  const image = card.querySelector('.photo-button img');
  modalImage.src = image.src;
  modalImage.alt = image.alt;
  modalTitle.textContent = card.querySelector('.villa-title h3').textContent;
  modalTags.innerHTML = [...card.querySelectorAll('.villa-details span')].map(tag => `<span>${tag.textContent}</span>`).join('');
  modalDescription.textContent = card.querySelector('.villa-desc').textContent;
  modalPrice.innerHTML = card.querySelector('.villa-price > span').innerHTML;
  villaModal.classList.add('open');
  villaModal.setAttribute('aria-hidden','false');
  document.body.classList.add('no-scroll');
  villaModal.querySelector('.modal-close').focus();
}));
villaModal.querySelector('.modal-close').addEventListener('click', closeVillaModal);
villaModal.addEventListener('click', event => { if (event.target === villaModal) closeVillaModal(); });
villaModal.querySelector('.modal-contact').addEventListener('click', closeVillaModal);

// Hero carousel: selectable dots plus a slow, hands-free advance.
const heroImages = [
  {src:'images/p1.png', alt:'Indigo Beachfront Pool Villa พร้อมสระว่ายน้ำส่วนตัว', title:'บ้านพักพูลวิลล่า', area:'หัวหิน · ชะอำ · ปราณบุรี', line:'เลือกบ้านพักที่ใช่ สำหรับทริปพิเศษของคุณ'},
  {src:'images/casa-azul.jpg', alt:'พูลวิลล่าชะอำพร้อมสระว่ายน้ำ', title:'ชวนคนที่คุณรัก', area:'มาพักผ่อนริมทะเล', line:'บ้านพักกว้าง สระส่วนตัว พร้อมช่วงเวลาดี ๆ'},
  {src:'images/villa-sol.jpg', alt:'พูลวิลล่าปราณบุรีท่ามกลางธรรมชาติ', title:'พักผ่อนให้เต็มที่', area:'ในแบบที่เป็นคุณ', line:'เลือกพูลวิลล่าสำหรับครอบครัวและกลุ่มเพื่อน'}
];
const hero = document.querySelector('.hero');
const heroImage = hero.querySelector('.hero-image');
const heroHeading = hero.querySelector('h1');
const heroLine = hero.querySelector('.hero-caption p');
let heroIndex = 0;
function showHero(index) {
  heroIndex = (index + heroImages.length) % heroImages.length;
  const slide = heroImages[heroIndex];
  heroImage.classList.add('changing');
  window.setTimeout(() => {
    heroImage.src = slide.src;
    heroImage.alt = slide.alt;
    heroHeading.innerHTML = `${slide.title}<br><em>${slide.area}</em>`;
    heroLine.textContent = slide.line;
    heroImage.classList.remove('changing');
  }, 180);
}
let heroTimer = window.setInterval(() => showHero(heroIndex + 1), 6500);
hero.addEventListener('mouseenter', () => window.clearInterval(heroTimer));
hero.addEventListener('mouseleave', () => { heroTimer = window.setInterval(() => showHero(heroIndex + 1), 6500); });

// Review carousel with short sample quotes.
const reviews = [
  {quote:'“บ้านพักสะอาด บรรยากาศดีมาก ได้ใช้เวลากับครอบครัวเต็มที่ เด็ก ๆ สนุกกับสระว่ายน้ำ ไว้มีโอกาสจะกลับมาพักอีกค่ะ”', author:'คุณลูกค้า Indigo Beachfront Pool Villa · หัวหิน'},
  {quote:'“ไปกันหลายคนแต่บ้านกว้างขวาง มีพื้นที่ทำกิจกรรมด้วยกันครบ จองและประสานงานง่ายมากค่ะ”', author:'คุณลูกค้า Indigo Beachfront Pool Villa · ชะอำ'},
  {quote:'“บรรยากาศสงบ เป็นส่วนตัว ตื่นเช้ามาได้พักจริง ๆ เหมาะกับทริปครอบครัวมากครับ”', author:'คุณลูกค้า Indigo Beachfront Pool Villa · ปราณบุรี'}
];
let reviewIndex = 0;
const reviewQuote = document.querySelector('.review-card blockquote');
const reviewAuthor = document.querySelector('.review-author');
const reviewDots = [...document.querySelectorAll('.review-dots button')];
function showReview(index) {
  reviewIndex = (index + reviews.length) % reviews.length;
  reviewQuote.classList.add('quote-changing');
  window.setTimeout(() => {
    reviewQuote.textContent = reviews[reviewIndex].quote;
    reviewAuthor.textContent = reviews[reviewIndex].author;
    reviewQuote.classList.remove('quote-changing');
  }, 150);
  reviewDots.forEach((dot, dotIndex) => dot.classList.toggle('on', dotIndex === reviewIndex));
}
document.querySelector('.review-prev').addEventListener('click', () => showReview(reviewIndex - 1));
document.querySelector('.review-next').addEventListener('click', () => showReview(reviewIndex + 1));
reviewDots.forEach((dot, index) => dot.addEventListener('click', () => showReview(index)));

// Reveal content as it enters the viewport.
const revealTargets = document.querySelectorAll('.about-copy,.section-heading,.villa-card,.area-card,.benefits article,.review-card,.contact-cta');
revealTargets.forEach((item, index) => {
  item.classList.add('reveal-ready');
  item.style.setProperty('--reveal-delay', `${(index % 4) * 70}ms`);
});
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  }), {threshold:0.12});
  revealTargets.forEach(item => revealObserver.observe(item));
} else revealTargets.forEach(item => item.classList.add('revealed'));

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') { closeLightbox(); closeVillaModal(); }
  if (event.key === 'ArrowRight' && lightbox.classList.contains('open')) lightbox.classList.add('zoomed');
  if (event.key === 'ArrowLeft' && lightbox.classList.contains('open')) lightbox.classList.remove('zoomed');
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
menuButton.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(opened));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
}));
