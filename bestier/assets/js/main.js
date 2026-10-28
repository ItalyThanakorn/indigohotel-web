const menuButton = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('#primary-nav');

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

const checkin = document.querySelector('#checkin');
const checkout = document.querySelector('#checkout');

function asLocalDate(date) {
  const localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return localDate.toISOString().slice(0, 10);
}

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
checkin.min = asLocalDate(today);
checkin.value = asLocalDate(today);
checkout.min = asLocalDate(tomorrow);
checkout.value = asLocalDate(tomorrow);

checkin.addEventListener('change', () => {
  const nextDay = new Date(`${checkin.value}T12:00:00`);
  nextDay.setDate(nextDay.getDate() + 1);
  checkout.min = asLocalDate(nextDay);
  if (checkout.value <= checkin.value) checkout.value = asLocalDate(nextDay);
});

document.querySelector('#bookingForm').addEventListener('submit', (event) => {
  event.preventDefault();
  window.alert('ขอบคุณที่สนใจ Bestier Hotel ระบบสำรองห้องพักจะพร้อมให้บริการเร็ว ๆ นี้');
});
