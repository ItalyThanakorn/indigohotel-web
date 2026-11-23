/* สลับภาษา TH / EN
   - ข้อความคงที่: ใส่ data-i18n="key" ที่ element แล้วเพิ่ม key ใน DICT
   - data-i18n-label → aria-label,  data-i18n-alt → alt
   - ข้อมูลหลายภาษาใน config.js/rooms.js ใช้ i18n.pick({ th, en })
   - เพิ่มภาษาใหม่: เพิ่ม object ใน DICT + ปุ่มใน navigation.js */
(() => {
  const DICT = {
    th: {
      "nav.home": "หน้าแรก", "nav.rooms": "ห้องพัก", "nav.facilities": "สิ่งอำนวยความสะดวก", "nav.contact": "ติดต่อเรา",
      "cta.book": "จองผ่าน LINE", "cta.rooms": "ดูห้องพัก",
      "hero.title": "ยินดีต้อนรับสู่\nBESTIER",
      "hero.text": "โรงแรมใจกลางหาดใหญ่ ใกล้ ญ.ว. ห้องพักสะอาด ทันสมัย ทักจองตรงรับโปรโมชันพิเศษ",
      "hl.1": "จองตรงรับโปรโมชันพิเศษ", "hl.2": "ใกล้ ญ.ว. ใจกลางเมืองหาดใหญ่", "hl.3": "รถตุ๊กตุ๊กฟรีในระยะ 1 กม.", "hl.4": "เคาน์เตอร์ต้อนรับ 24 ชั่วโมง",
      "book.in": "วันเข้าพัก", "book.out": "วันออก", "book.rooms": "จำนวนห้อง", "book.contact": "เบอร์โทร / LINE ID", "book.search": "สอบถามห้องว่างผ่าน LINE",
      "form.intro": "สวัสดีครับ/ค่ะ สอบถามห้องพัก Bestier", "form.room": "ประเภทห้อง",
      "about.title": "เรื่องราวของเรา", "about.alt": "พื้นที่ส่วนกลางของโรงแรม Bestier",
      "about.p1": "Bestier ตั้งอยู่ใจกลางเมืองหาดใหญ่ ด้านหลังธนาคารแห่งประเทศไทย ใกล้โรงเรียนหาดใหญ่วิทยาลัย มีห้องพัก 40 ห้อง 5 ประเภท ตกแต่งสไตล์พรีเมียมและทันสมัย",
      "about.p2": "ทักสอบถามห้องว่างและจองตรงกับโรงแรมผ่าน LINE เพื่อรับโปรโมชันพิเศษ",
      "rooms.title": "ห้องพักของเรา", "rooms.from": "เริ่มต้น", "rooms.askPrice": "สอบถามราคาและโปรโมชันทาง LINE",
      "rooms.ota": "จองผ่านตัวแทน", "rooms.inquire": "ทักสอบถามห้องนี้ทาง LINE",
      "loc.title": "ทำเลที่ตั้ง", "loc.open": "เปิดใน Google Maps", "loc.map": "แผนที่โรงแรม Bestier",
      "loc.text": "อยู่ใจกลางเมืองหาดใหญ่ เดินทางสะดวก ใกล้แหล่งของกินและจุดสำคัญต่างๆ",
      "fac.title": "สิ่งอำนวยความสะดวก", "fac.more": "ดูทั้งหมด",
      "gal.title": "แกลเลอรี", "gal.all": "ทั้งหมด",
      "br.title": "สาขาในเครือ", "br.text": "หากสาขานี้เต็ม ยังมีสาขาอื่นในเครือให้เลือก",
      "cta.title": "จองตรงกับโรงแรม รับโปรโมชันพิเศษ", "cta.text": "ทักแอดมินทาง LINE เพื่อสอบถามห้องว่างและราคาได้ทันที",
      "common.guests": "ท่าน", "common.night": "คืน", "common.back": "กลับไปหน้าห้องพัก", "common.amenities": "สิ่งอำนวยความสะดวกในห้อง", "common.skip": "ข้ามไปยังเนื้อหา",
      "quick.label": "ติดต่อด่วน", "quick.line": "LINE", "quick.call": "โทร", "quick.wa": "WhatsApp", "quick.fb": "Facebook",
      "contact.title": "ติดต่อเรา", "contact.official": "ติดต่อและจองผ่านช่องทางทางการเหล่านี้เท่านั้น เพื่อความปลอดภัยของคุณ",
      "contact.name": "ชื่อ-นามสกุล", "contact.phone": "เบอร์โทร / LINE ID", "contact.message": "ข้อความ", "contact.send": "ส่งข้อความผ่าน LINE",
      "policy.title": "นโยบายการเข้าพัก",
      "footer.about": "โรงแรมใจกลางหาดใหญ่ ใกล้โรงเรียนหาดใหญ่วิทยาลัย", "footer.explore": "เมนู", "footer.contact": "ติดต่อ", "footer.rights": "สงวนลิขสิทธิ์",
    },
    en: {
      "nav.home": "Home", "nav.rooms": "Rooms", "nav.facilities": "Facilities", "nav.contact": "Contact",
      "cta.book": "Book via LINE", "cta.rooms": "View rooms",
      "hero.title": "Welcome to\nBESTIER",
      "hero.text": "A clean, modern hotel in the heart of Hat Yai, near Hatyai Wittayalai School. Message us to book direct and get special offers.",
      "hl.1": "Book direct for special offers", "hl.2": "Central Hat Yai, near Hatyai Wittayalai", "hl.3": "Free tuk-tuk within 1 km", "hl.4": "24-hour front desk",
      "book.in": "Check-in", "book.out": "Check-out", "book.rooms": "Rooms", "book.contact": "Phone / LINE ID", "book.search": "Check availability on LINE",
      "form.intro": "Hello, I'd like to enquire about a room at Bestier", "form.room": "Room type",
      "about.title": "Our story", "about.alt": "Common area at Bestier",
      "about.p1": "Bestier sits in the centre of Hat Yai, behind the Bank of Thailand and close to Hatyai Wittayalai School. Forty rooms in five types, designed in a modern, premium style.",
      "about.p2": "Message us on LINE to check availability and book direct for special offers.",
      "rooms.title": "Our rooms", "rooms.from": "From", "rooms.askPrice": "Ask for rates and offers on LINE",
      "rooms.ota": "Also available on", "rooms.inquire": "Ask about this room on LINE",
      "loc.title": "Location", "loc.open": "Open in Google Maps", "loc.map": "Map of Bestier",
      "loc.text": "In central Hat Yai, with easy access to food and the city's main sights.",
      "fac.title": "Facilities", "fac.more": "View all",
      "gal.title": "Gallery", "gal.all": "All",
      "br.title": "Our other branches", "br.text": "If this branch is full, our other branches are ready for you.",
      "cta.title": "Book direct with the hotel", "cta.text": "Message us on LINE to check availability and rates right away.",
      "common.guests": "guests", "common.night": "night", "common.back": "Back to rooms", "common.amenities": "Room amenities", "common.skip": "Skip to content",
      "quick.label": "Quick contact", "quick.line": "LINE", "quick.call": "Call", "quick.wa": "WhatsApp", "quick.fb": "Facebook",
      "contact.title": "Contact us", "contact.official": "Please book and contact us only through these official channels, for your safety.",
      "contact.name": "Full name", "contact.phone": "Phone / LINE ID", "contact.message": "Message", "contact.send": "Send via LINE",
      "policy.title": "Stay policies",
      "footer.about": "A hotel in central Hat Yai, near Hatyai Wittayalai School.", "footer.explore": "Explore", "footer.contact": "Contact", "footer.rights": "All rights reserved.",
    },
  };
  const KEY = "hotel-lang";
  let lang = document.documentElement.lang || "th";
  try { lang = localStorage.getItem(KEY) || lang; } catch (e) {}
  if (!DICT[lang]) lang = "th";

  const t = key => DICT[lang][key] ?? DICT.th[key] ?? key;
  const pick = value => (typeof value === "string" ? value : value?.[lang] ?? value?.th ?? "");

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => (el.textContent = t(el.dataset.i18n)));
    document.querySelectorAll("[data-i18n-label]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nLabel)));
    document.querySelectorAll("[data-i18n-alt]").forEach(el => (el.alt = t(el.dataset.i18nAlt)));
    document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("is-active", b.dataset.lang === lang));
  }
  function set(next) {
    if (!DICT[next]) return;
    lang = next;
    try { localStorage.setItem(KEY, next); } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent("langchange", { detail: next }));
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-lang]"); if (b) set(b.dataset.lang); });
  window.i18n = { t, pick, set, apply, get lang() { return lang; } };
  apply();
})();
