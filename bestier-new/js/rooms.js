/* ข้อมูลห้องพัก — เพิ่ม/แก้ไขที่นี่ที่เดียว หน้าแรก, rooms.html และ room-detail.html อัปเดตเอง
   images: ใส่พาธรูป เช่น "assets/images/deluxe-1.jpg" (ถ้าเว้นว่าง จะแสดงกล่องสี placeholder) */
const ROOMS = [
  { id: "deluxe", name: { th: "ห้องดีลักซ์", en: "Deluxe Room" }, size: 45, guests: 2, price: 0, images: [],
    desc: { th: "ใส่รายละเอียดห้องพักที่นี่", en: "Room description goes here." },
    amenities: { th: ["เตียงคิงไซส์", "ห้องน้ำหินอ่อน", "Wi-Fi ความเร็วสูง", "มินิบาร์"], en: ["King bed", "Marble bathroom", "High-speed Wi-Fi", "Minibar"] }, 
    images: ["assets/images/deluxe.jpg", "assets/images/deluxe2.jpg", "assets/images/deluxe5.jpg"] },
  { id: "business", name: { th: "ห้องธุรกิจ", en: "Business Room" }, size: 80, guests: 3, price: 0, images: [],
    desc: { th: "ใส่รายละเอียดห้องพักที่นี่", en: "Room description goes here." },
    amenities: { th: ["ห้องนั่งเล่นแยก", "ห้องน้ำหินอ่อน", "Wi-Fi ความเร็วสูง"], en: ["Separate living room", "Marble bathroom", "High-speed Wi-Fi"] }, 
    images: ["assets/images/business.jpg", "assets/images/business8.jpg", "assets/images/business10.jpg"] },
  { id: "triple", name: { th: "ห้องสามคน", en: "Triple Room" }, size: 150, guests: 3, price: 0, images: [],
    desc: { th: "ใส่รายละเอียดห้องพักที่นี่", en: "Room description goes here." },
    amenities: { th: ["เตียงเดี่ยว 1 เตียง ขนาด 6 ฟุต และเตียงเดี่ยว 1 เตียง ขนาด 3.5 ฟุต", "ห้องน้ำหินอ่อน", "Wi-Fi ความเร็วสูง"], en: ["One 6-foot single bed and one 3.5-foot single bed", "Marble bathroom", "High-speed Wi-Fi"] },
    images: ["assets/images/triple.jpg", "assets/images/triple2.jpg", "assets/images/minibar.jpg"] },
];

(() => {
  const t = k => i18n.t(k), L = () => i18n.lang;
  const money = n => "฿" + Number(n).toLocaleString();
  const pic = (src, alt, cls = "") => src
    ? `<img src="${src}" alt="${alt}" loading="lazy">`
    : `<div class="ph ${cls}" role="img" aria-label="${alt}"></div>`;
  const facts = r => `<div class="meta"><span>${r.size} ${t("common.sqm")}</span><span>${r.guests} ${t("common.guests")}</span></div>`;
  const price = r => `<p class="price">${money(r.price)} <small>/ ${t("common.night")}</small></p>`;

  const card = r => `
    <a class="room-card" href="room-detail.html?id=${r.id}">
      <div class="media">${pic(r.images[0], r.name[L()], "ph--tall")}</div>
      <h3>${r.name[L()]}</h3>${facts(r)}${price(r)}
    </a>`;

  function render() {
    // รายการห้อง: <div class="grid grid--3" data-rooms data-limit="3"></div>
    document.querySelectorAll("[data-rooms]").forEach(el => {
      el.innerHTML = ROOMS.slice(0, +el.dataset.limit || ROOMS.length).map(card).join("");
    });
    // หน้ารายละเอียด: room-detail.html?id=suite
    const box = document.getElementById("room-detail");
    if (!box) return;
    const r = ROOMS.find(x => x.id === new URLSearchParams(location.search).get("id")) || ROOMS[0];
    document.querySelectorAll("[data-room-title]").forEach(el => (el.textContent = r.name[L()]));
    const imgs = r.images.length ? r.images : [null, null, null];
    box.innerHTML = `
      <div class="detail">
        <div>
          <div class="gallery">${imgs.map(s => pic(s, r.name[L()])).join("")}</div>
          <p class="lead">${r.desc[L()]}</p>
          <h3>${t("common.amenities")}</h3>
          <ul class="amenities">${r.amenities[L()].map(a => `<li>${a}</li>`).join("")}</ul>
        </div>
        <aside class="booking-box">${price(r)}${facts(r)}<a class="btn" href="contact.html">${t("cta.book")}</a></aside>
      </div>`;
  }
  render();
  document.addEventListener("langchange", render);
})();
