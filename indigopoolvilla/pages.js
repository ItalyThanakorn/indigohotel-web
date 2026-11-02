const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const opened = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(opened));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded','false');
  }));
}

const villaCards = [...document.querySelectorAll('[data-listing]')];
const listingForm = document.querySelector('#page-search-form');
const listingStatus = document.querySelector('#page-filter-result');
function filterListings() {
  if (!villaCards.length) return;
  const area = document.querySelector('#page-area')?.value || '';
  const guestCount = Number(document.querySelector('#page-guests')?.value || 0);
  const roomCount = Number(document.querySelector('#page-rooms')?.value || 0);
  const visible = villaCards.filter(card => {
    const matchesArea = !area || card.dataset.area === area;
    const matchesGuests = !guestCount || Number(card.dataset.guests) >= guestCount;
    const matchesRooms = !roomCount || Number(card.dataset.bedrooms) >= roomCount;
    card.hidden = !(matchesArea && matchesGuests && matchesRooms);
    return !card.hidden;
  }).length;
  if (listingStatus) listingStatus.textContent = visible ? `แสดงบ้านพัก ${visible} หลังตามตัวเลือกของคุณ` : 'ยังไม่พบบ้านพักที่ตรงกับตัวเลือก ลองปรับตัวกรองอีกครั้ง';
}

if (listingForm) {
  const params = new URLSearchParams(location.search);
  if (params.has('area')) {
    const requestedArea = params.get('area');
    document.querySelector('#page-area').value = requestedArea;
    document.querySelectorAll('[data-filter-area]').forEach(button => button.classList.toggle('selected', button.dataset.filterArea === requestedArea));
  }
  listingForm.addEventListener('submit', event => { event.preventDefault(); filterListings(); });
  document.querySelectorAll('[data-filter-area]').forEach(button => button.addEventListener('click', () => {
    document.querySelector('#page-area').value = button.dataset.filterArea;
    document.querySelectorAll('[data-filter-area]').forEach(item => item.classList.toggle('selected', item === button));
    filterListings();
    document.querySelector('#villa-listings').scrollIntoView({behavior:'smooth',block:'start'});
  }));
  filterListings();
}

// Keep favorite choices in sync with the homepage.
const pageFavorites = [...document.querySelectorAll('[data-page-favorite]')];
let favoriteIndexes = [];
try { favoriteIndexes = JSON.parse(localStorage.getItem('indigo-favorites') || '[]'); } catch { favoriteIndexes = []; }
function drawPageFavorites() {
  pageFavorites.forEach(button => {
    const key = button.dataset.pageFavorite;
    const saved = favoriteIndexes.includes(key);
    button.classList.toggle('saved', saved);
    button.textContent = saved ? '♥ บันทึกแล้ว' : '♡ บันทึกรายการ';
    button.setAttribute('aria-pressed', String(saved));
  });
}
pageFavorites.forEach(button => button.addEventListener('click', () => {
  const key = button.dataset.pageFavorite;
  favoriteIndexes = favoriteIndexes.includes(key) ? favoriteIndexes.filter(item => item !== key) : [...favoriteIndexes, key];
  localStorage.setItem('indigo-favorites', JSON.stringify(favoriteIndexes));
  drawPageFavorites();
}));
drawPageFavorites();

// Turn the contact form into a ready-to-paste inquiry without silently sending it.
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  const villaChoice = document.querySelector('#villa-choice');
  const requestedVilla = new URLSearchParams(location.search).get('villa');
  if (requestedVilla && villaChoice) villaChoice.value = requestedVilla;
  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const inquiry = [
      'สวัสดีค่ะ/ครับ สนใจสอบถามพูลวิลล่า',
      `ชื่อ: ${data.get('name')}`,
      `บ้านพัก: ${data.get('villa') || 'ยังไม่ได้เลือก'}`,
      `วันที่เข้าพัก: ${data.get('date') || 'ขอสอบถามวันว่าง'}`,
      `จำนวนผู้เข้าพัก: ${data.get('guests') || 'ยังไม่ระบุ'}`,
      `รายละเอียดเพิ่มเติม: ${data.get('message') || '-'}`
    ].join('\n');
    const status = document.querySelector('#contact-status');
    try {
      await navigator.clipboard.writeText(inquiry);
      status.textContent = 'คัดลอกข้อความสอบถามแล้ว กดปุ่ม LINE ด้านซ้ายแล้ววางข้อความเพื่อส่งได้เลย';
    } catch {
      status.textContent = `คัดลอกข้อความนี้ไปส่งใน LINE ได้เลย: ${inquiry}`;
    }
  });
}

const revealItems = document.querySelectorAll('.page-hero-copy,.page-intro,.area-detail-card,.reason-card,.step-card,.faq-list,.contact-panel,.contact-card');
revealItems.forEach((item, index) => {
  item.classList.add('reveal-ready');
  item.style.setProperty('--reveal-delay', `${(index % 3) * 80}ms`);
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
  }), {threshold:.1});
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('revealed'));
