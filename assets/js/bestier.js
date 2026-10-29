const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

if (menuButton && primaryNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const params = new URLSearchParams(window.location.search);
const checkin = document.querySelector('[name="checkin"]');
const checkout = document.querySelector('[name="checkout"]');

function asLocalDate(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

if (checkin && checkout) {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  checkin.min = asLocalDate(today);
  checkout.min = asLocalDate(tomorrow);
  checkin.value = params.get('checkin') || checkin.value || asLocalDate(today);
  checkout.value = params.get('checkout') || checkout.value || asLocalDate(tomorrow);
  if (checkin.value < checkin.min) checkin.value = checkin.min;
  const nextDay = new Date(`${checkin.value}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  checkout.min = asLocalDate(nextDay);
  if (checkout.value <= checkin.value) checkout.value = checkout.min;
  checkin.addEventListener('change', () => {
    const next = new Date(`${checkin.value}T12:00:00`);
    next.setDate(next.getDate() + 1);
    checkout.min = asLocalDate(next);
    if (checkout.value <= checkin.value) checkout.value = checkout.min;
  });
}

const guestSelect = document.querySelector('[name="guests"]');
if (guestSelect && params.has('guests')) {
  const option = [...guestSelect.options].find((item) => item.value === params.get('guests') || item.textContent.trim() === params.get('guests'));
  if (option) guestSelect.value = option.value;
}

const roomSelect = document.querySelector('[name="roomType"]');
if (roomSelect && params.has('room')) {
  const option = [...roomSelect.options].find((item) => item.value === params.get('room'));
  if (option) roomSelect.value = option.value;
}

const reservationForm = document.querySelector('#reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('#bookingStatus').textContent = 'เว็บไซต์นี้ยังไม่ได้เชื่อมต่อระบบรับคำขอจอง ข้อมูลที่กรอกยังไม่ถูกส่ง กรุณาติดต่อ bestierhotel.hatyai@gmail.com เพื่อสอบถามห้องว่างและยืนยันการจอง';
  });
}

const galleryTrack = document.querySelector('#roomGalleryTrack');
if (galleryTrack) {
  const galleryCards = [...galleryTrack.querySelectorAll('.room-gallery-card')];
  const previousButton = document.querySelector('[data-gallery-prev]');
  const nextButton = document.querySelector('[data-gallery-next]');
  const galleryCount = document.querySelector('.gallery-count');
  const stepSize = () => {
    const firstCard = galleryCards[0];
    const styles = window.getComputedStyle(galleryTrack);
    return firstCard.getBoundingClientRect().width + parseFloat(styles.columnGap || styles.gap || 0);
  };
  const updateGallery = () => {
    const maxScroll = galleryTrack.scrollWidth - galleryTrack.clientWidth;
    const activeIndex = Math.round(galleryTrack.scrollLeft / stepSize());
    previousButton.disabled = galleryTrack.scrollLeft <= 1;
    nextButton.disabled = galleryTrack.scrollLeft >= maxScroll - 1;
    galleryCount.textContent = `${String(Math.min(activeIndex + 1, galleryCards.length)).padStart(2, '0')} / ${String(galleryCards.length).padStart(2, '0')}`;
  };
  const moveGallery = (direction) => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    galleryTrack.scrollBy({ left: direction * stepSize(), behavior: reducedMotion ? 'auto' : 'smooth' });
  };

  previousButton.addEventListener('click', () => moveGallery(-1));
  nextButton.addEventListener('click', () => moveGallery(1));
  galleryTrack.addEventListener('scroll', updateGallery, { passive: true });
  galleryTrack.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') moveGallery(-1);
    if (event.key === 'ArrowRight') moveGallery(1);
  });
  window.addEventListener('resize', updateGallery);
  updateGallery();
}
