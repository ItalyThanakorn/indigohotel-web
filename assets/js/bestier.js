// เมนูมือถือ: เปิด/ปิดเมนูและปรับสถานะสำหรับโปรแกรมอ่านหน้าจอ
const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');
const pageLoader = document.querySelector('.page-loader');

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

function updateLoaderLanguage() {
  if (!pageLoader) return;
  const brand = pageLoader.querySelector('.page-loader-brand');
  const message = pageLoader.querySelector('.page-loader-message');
  brand.textContent = document.documentElement.lang === 'th' ? 'เบสเทียร์' : 'BESTIER';
  message.textContent = document.documentElement.lang === 'th' ? 'กำลังโหลดหน้าเว็บ' : 'Loading page';
}
updateLoaderLanguage();
document.addEventListener('bestierlanguagechange', updateLoaderLanguage);

const currentDirectory = new URL('.', window.location.href).pathname;
const pendingNavigationKey = 'bestierPendingNavigation';

function hidePageLoader() {
  if (!pageLoader) return;
  pageLoader.classList.remove('is-visible');
  pageLoader.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('is-navigating');
}

let arrivedFromInternalNavigation = false;
try {
  const pendingNavigation = JSON.parse(sessionStorage.getItem(pendingNavigationKey) || 'null');
  sessionStorage.removeItem(pendingNavigationKey);
  arrivedFromInternalNavigation = pendingNavigation
    && pendingNavigation.path === `${window.location.pathname}${window.location.search}`
    && Date.now() - pendingNavigation.startedAt < 15000;
} catch {
  // เบราว์เซอร์บางโหมดอาจปิดการใช้งานพื้นที่จัดเก็บข้อมูล
}

if (arrivedFromInternalNavigation && pageLoader) {
  if (pageLoader) {
    pageLoader.classList.add('is-visible');
    pageLoader.setAttribute('aria-hidden', 'false');
    document.body.classList.add('is-navigating');
  }
  if (document.readyState === 'complete') {
    hidePageLoader();
  } else {
    window.addEventListener('load', hidePageLoader, { once: true });
  }
}

document.addEventListener('click', (event) => {
  const clickedElement = event.target instanceof Element ? event.target : event.target.parentElement;
  const link = clickedElement?.closest('a[href]');
  const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  if (!link || event.defaultPrevented || event.button !== 0 || isModifiedClick) {
    return;
  }
  const opensSeparateTab = link.target && link.target !== '_self';
  if (opensSeparateTab || link.hasAttribute('download')) {
    return;
  }

  const destination = new URL(link.href, window.location.href);
  if (destination.origin !== window.location.origin || !destination.pathname.startsWith(currentDirectory)) return;
  if (destination.pathname === window.location.pathname && destination.search === window.location.search) return;

  try {
    sessionStorage.setItem(pendingNavigationKey, JSON.stringify({
      path: `${destination.pathname}${destination.search}`,
      startedAt: Date.now()
    }));
  } catch {
    // ยังแสดงตัวโหลดในหน้าปัจจุบันได้ แม้พื้นที่จัดเก็บข้อมูลจะใช้ไม่ได้
  }
  pageLoader.classList.add('is-visible');
  pageLoader.setAttribute('aria-hidden', 'false');
  document.body.classList.add('is-navigating');
});

window.addEventListener('pageshow', hidePageLoader);

// อ่านวันเข้าพักและจำนวนผู้เข้าพักจาก URL เพื่อเติมลงในแบบฟอร์ม
const params = new URLSearchParams(window.location.search);
const checkin = document.querySelector('[name="checkin"]');
const checkout = document.querySelector('[name="checkout"]');

// แปลงวันที่ตามเขตเวลาของเครื่อง ป้องกันวันที่คลาดเคลื่อนหนึ่งวัน
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

// เลือกจำนวนผู้เข้าพักและประเภทห้องจากค่าที่ส่งมากับ URL
const guestSelect = document.querySelector('[name="guests"]');
if (guestSelect && params.has('guests')) {
  const requestedGuests = params.get('guests');
  const option = [...guestSelect.options].find((item) => (
    item.value === requestedGuests || item.textContent.trim() === requestedGuests
  ));
  if (option) guestSelect.value = option.value;
}

const roomSelect = document.querySelector('[name="roomType"]');
if (roomSelect && params.has('room')) {
  const option = [...roomSelect.options].find((item) => item.value === params.get('room'));
  if (option) roomSelect.value = option.value;
}

// เตรียมอีเมลคำขอสอบถามห้องพักให้ลูกค้าตรวจสอบและส่งเอง
const reservationForm = document.querySelector('#reservationForm');
if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(reservationForm);
    const isThaiPage = document.documentElement.lang === 'th';
    const fields = [
      [isThaiPage ? 'ชื่อผู้ติดต่อ' : 'Name', formData.get('guestName')],
      [isThaiPage ? 'อีเมล' : 'Email', formData.get('guestEmail')],
      [isThaiPage ? 'เบอร์โทรศัพท์' : 'Phone number', formData.get('guestPhone') || (isThaiPage ? 'ไม่ระบุ' : 'Not provided')],
      [isThaiPage ? 'เช็กอิน' : 'Check-in', formData.get('checkin')],
      [isThaiPage ? 'เช็กเอาต์' : 'Check-out', formData.get('checkout')],
      [isThaiPage ? 'ประเภทห้อง' : 'Room type', roomSelect?.selectedOptions[0]?.textContent.trim() || ''],
      [isThaiPage ? 'จำนวนผู้เข้าพัก' : 'Guests', guestSelect?.selectedOptions[0]?.textContent.trim() || ''],
      [isThaiPage ? 'คำขอเพิ่มเติม' : 'Additional requests', formData.get('requests')?.trim() || (isThaiPage ? 'ไม่มี' : 'None')]
    ];
    const subject = isThaiPage
      ? `คำขอสอบถามห้องพักโรงแรมเบสเทียร์ - ${formData.get('guestName')}`
      : `Bestier Hotel room enquiry - ${formData.get('guestName')}`;
    const body = [
      isThaiPage ? 'เรียน โรงแรมเบสเทียร์' : 'Hello Bestier Hotel,',
      '',
      isThaiPage ? 'ขอสอบถามห้องพักตามรายละเอียดด้านล่าง' : 'I would like to enquire about a room with the following details:',
      ...fields.map(([label, value]) => `${label}: ${value}`),
      '',
      isThaiPage ? 'กรุณาติดต่อกลับเพื่อแจ้งห้องว่างและยืนยันราคา' : 'Please contact me to confirm availability and rates.',
      isThaiPage ? 'หมายเหตุ: อีเมลฉบับนี้เป็นคำขอสอบถาม ยังไม่ใช่การยืนยันการจอง' : 'Note: This is an enquiry and does not confirm a reservation.'
    ].join('\n');
    document.querySelector('#bookingStatus').textContent = isThaiPage
      ? 'กำลังเปิดโปรแกรมอีเมล กรุณาตรวจสอบรายละเอียดและกดส่งในโปรแกรมอีเมล คำขอนี้ยังไม่ถือเป็นการยืนยันห้องพัก'
      : 'Opening your email app. Review the details and send the message there. This enquiry does not confirm a reservation.';
    window.location.href = `mailto:lolggwpxddd@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// แกลเลอรีห้องพัก: เลื่อนภาพ อัปเดตเลขลำดับ และรองรับปุ่มลูกศร
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
