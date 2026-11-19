/* สลับภาษา TH / EN — ใส่ data-i18n="key" ที่ element แล้วเพิ่ม key ใน DICT
   (แก้ไขข้อความทั้งหมดของเว็บได้ที่นี่ / เพิ่มภาษาใหม่ได้โดยเพิ่ม object และปุ่มใน navigation.js) */
(() => {
  const DICT = {
    th: {
      "nav.home": "หน้าแรก", "nav.rooms": "ห้องพัก", "nav.facilities": "สิ่งอำนวยความสะดวก", "nav.contact": "ติดต่อเรา",
      "cta.book": "จองห้องพัก", "cta.rooms": "ดูห้องพัก",
      "hero.title": "ยินดีต้อนรับสู่\nBESTIER", "hero.text": "ใส่ข้อความต้อนรับสั้นๆ ของโรงแรมที่นี่",
      "book.in": "เช็คอิน", "book.out": "เช็คเอาท์", "book.guests": "จำนวนผู้เข้าพัก", "book.search": "ตรวจสอบห้องว่าง",
      "about.title": "เรื่องราวของเรา", "rooms.title": "ห้องพักของเรา", "fac.title": "สิ่งอำนวยความสะดวก",
      "fac.spa": "สปาและเวลเนส", "fac.dining": "ห้องอาหาร", "fac.pool": "สระว่ายน้ำ",
      "fac.fitness": "ฟิตเนส", "fac.meeting": "ห้องประชุมและจัดเลี้ยง", "fac.concierge": "คอนเซียร์จ",
      "common.viewAll": "ดูทั้งหมด", "common.guests": "ท่าน", "common.night": "คืน", "common.sqm": "ตร.ม.",
      "common.back": "กลับไปหน้าห้องพัก", "common.amenities": "สิ่งอำนวยความสะดวกในห้อง",
      "common.placeholder": "แทนที่ข้อความตัวอย่างนี้ด้วยเนื้อหาจริงของโรงแรม",
      "contact.title": "ติดต่อเรา", "contact.name": "ชื่อ-นามสกุล", "contact.email": "อีเมล",
      "contact.message": "ข้อความ", "contact.send": "ส่งข้อความ",
      "footer.about": "ใส่คำอธิบายสั้นๆ เกี่ยวกับโรงแรม", "footer.explore": "เมนู", "footer.contact": "ติดต่อ", "footer.rights": "สงวนลิขสิทธิ์",
    },
    en: {
      "nav.home": "Home", "nav.rooms": "Rooms", "nav.facilities": "Facilities", "nav.contact": "Contact",
      "cta.book": "Book now", "cta.rooms": "View rooms",
      "hero.title": "Welcome to\nBESTIER", "hero.text": "Add a short welcome message here.",
      "book.in": "Check-in", "book.out": "Check-out", "book.guests": "Guests", "book.search": "Check availability",
      "about.title": "Our story", "rooms.title": "Our rooms", "fac.title": "Facilities",
      "fac.spa": "Spa & wellness", "fac.dining": "Dining", "fac.pool": "Swimming pool",
      "fac.fitness": "Fitness centre", "fac.meeting": "Meetings & events", "fac.concierge": "Concierge",
      "common.viewAll": "View all", "common.guests": "guests", "common.night": "night", "common.sqm": "m²",
      "common.back": "Back to rooms", "common.amenities": "Room amenities",
      "common.placeholder": "Replace this sample text with your own content.",
      "contact.title": "Contact us", "contact.name": "Full name", "contact.email": "Email",
      "contact.message": "Message", "contact.send": "Send message",
      "footer.about": "A short description of the hotel goes here.", "footer.explore": "Explore", "footer.contact": "Contact", "footer.rights": "All rights reserved.",
    },
  };
  const KEY = "hotel-lang";
  let lang = document.documentElement.lang || "th";
  try { lang = localStorage.getItem(KEY) || lang; } catch (e) {}
  if (!DICT[lang]) lang = "th";

  const t = k => DICT[lang][k] || k;
  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
  }
  function set(l) {
    if (!DICT[l]) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: l }));
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-lang]"); if (b) set(b.dataset.lang); });
  window.i18n = { t, set, get lang() { return lang; } };
  apply();
})();
