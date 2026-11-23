/* ข้อมูลห้องพัก — เพิ่ม/แก้ไขที่นี่ที่เดียว หน้าแรก, rooms.html และ room-detail.html อัปเดตเอง
   price: ราคาเริ่มต้นต่อคืน (บาท) — 0 = แสดงข้อความ "สอบถามราคาทาง LINE"
   images: ภาพแรกใช้บนการ์ด ส่วนหน้ารายละเอียดแสดงทุกภาพ */
const amenities = premium => ({
  th: ["มินิบาร์", "กาต้มน้ำร้อน", "เตารีดและที่รองรีด", "ตู้เซฟ",
       premium ? "ไดร์เป่าผม Dyson" : "ไดร์เป่าผม", "สมาร์ททีวี 55 นิ้ว รองรับ Netflix",
       "ชุดของใช้ในห้องพักครบชุด พร้อมเสื้อคลุมอาบน้ำและรองเท้าแตะ", ...(premium ? ["ชุดกาแฟแคปซูลฟรี"] : [])],
  en: ["Minibar", "Kettle", "Iron and ironing board", "In-room safe",
       premium ? "Dyson hair dryer" : "Hair dryer", '55" smart TV with Netflix',
       "Full toiletries set, bathrobe and slippers", ...(premium ? ["Complimentary capsule coffee set"] : [])],
});

const ROOMS = [
  { id: "superior-twin", name: "Superior Twin", guests: 2, price: 0,
    beds: { th: "เตียงเดี่ยว 2 เตียง (3.5 ฟุต)", en: "2 single beds (3.5 ft)" },
    images: ["assets/images/superiortwin.jpg", "assets/images/superiortwin2.jpg", "assets/images/superiortwin3.jpg", "assets/images/superiortwin4.jpg"],
    amenities: amenities(false) },
  { id: "superior-king", name: "Superior King", guests: 2, price: 0,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/superiorking.jpg", "assets/images/superiorking2.jpg", "assets/images/superiorking7.jpg", "assets/images/superiorking5.jpg"],
    amenities: amenities(false) },
  { id: "business", name: "Business", guests: 2, price: 0,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/business.jpg", "assets/images/business4.jpg", "assets/images/business10.jpg", "assets/images/business9.jpg"],
    amenities: amenities(true) },
  { id: "triple", name: "Triple", guests: 3, price: 0,
    beds: { th: "เตียง 6 ฟุต 1 เตียง และเตียงเดี่ยว 3.5 ฟุต 1 เตียง", en: "One 6 ft bed and one 3.5 ft single bed" },
    images: ["assets/images/triple.jpg", "assets/images/triple2.jpg", "assets/images/minibar.jpg"],
    amenities: amenities(true) },
  { id: "deluxe", name: "Deluxe", guests: 2, price: 0,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/deluxe.jpg", "assets/images/deluxe3.jpg", "assets/images/deluxe5.jpg", "assets/images/deluxe4.jpg"],
    amenities: amenities(true) },
];

(() => {
  const { t, pick } = i18n;
  const money = n => "฿" + Number(n).toLocaleString();
  const pic = (src, alt) => src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`
    : `<div class="ph" role="img" aria-label="${esc(alt)}"></div>`;
  const facts = r => `<div class="meta"><span>${r.guests} ${t("common.guests")}</span><span>${esc(pick(r.beds))}</span></div>`;
  const price = r => r.price > 0
    ? `<p class="price"><small>${t("rooms.from")}</small> ${money(r.price)} <small>/ ${t("common.night")}</small></p>`
    : `<p class="price price--ask">${t("rooms.askPrice")}</p>`;

  const card = r => `
    <a class="room-card" href="room-detail.html?id=${esc(r.id)}">
      <div class="media">${pic(r.images[0], pick(r.name))}</div>
      <h3>${esc(pick(r.name))}</h3>${facts(r)}${price(r)}
    </a>`;

  function renderDetail(box) {
    const id = new URLSearchParams(location.search).get("id");
    const r = ROOMS.find(x => x.id === id) || ROOMS[0];
    const name = pick(r.name);
    const inquiry = LINKS.lineChat(`${t("form.intro")}\n${t("form.room")}: ${name}`);
    document.title = `${name} | ${SITE.name}`;
    document.querySelectorAll("[data-room-title]").forEach(el => (el.textContent = name));
    box.innerHTML = `
      <div class="detail">
        <div>
          <div class="gallery">${(r.images.length ? r.images : [null, null, null]).map(src => pic(src, name)).join("")}</div>
          <h3>${t("common.amenities")}</h3>
          <ul class="amenities">${pick(r.amenities).map(a => `<li>${esc(a)}</li>`).join("")}</ul>
        </div>
        <aside class="booking-box">${price(r)}${facts(r)}
          <a class="btn btn--chat" href="${esc(inquiry)}" target="_blank" rel="noopener">${t("rooms.inquire")}</a>
        </aside>
      </div>`;
  }

  function render() {
    // รายการห้อง: <div class="grid grid--3" data-rooms data-limit="3"></div>
    document.querySelectorAll("[data-rooms]").forEach(el => {
      el.innerHTML = ROOMS.slice(0, +el.dataset.limit || undefined).map(card).join("");
    });
    // หน้ารายละเอียด: room-detail.html?id=business
    const box = document.getElementById("room-detail");
    if (box) renderDetail(box);
  }
  render();
  document.addEventListener("langchange", render);
})();
