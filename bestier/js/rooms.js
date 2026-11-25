/* Room data and rendering shared by home, rooms and room-detail pages. */
const AMENITIES = {
  minibar: { th: "มินิบาร์ฟรี", en: "Complimentary minibar", icon: "fa-solid fa-mug-hot" },
  kettle: { th: "กาต้มน้ำร้อน", en: "Electric kettle", icon: "fa-solid fa-mug-saucer" },
  iron: { th: "เตารีดและที่รองรีด", en: "Iron and ironing board", icon: "fa-solid fa-shirt" },
  safe: { th: "ตู้เซฟ", en: "In-room safe", icon: "fa-solid fa-lock" },
  heater: { th: "เครื่องทำน้ำอุ่น", en: "Hot-water shower", icon: "fa-solid fa-shower" },
  charger: { th: "อุปกรณ์ชาร์จโทรศัพท์แบบดิจิทัล", en: "Digital phone charging device", icon: "fa-solid fa-plug" },
  dryer: { th: "ไดร์เป่าผม", en: "Hair dryer", icon: "fa-solid fa-wind" },
  dyson: { th: "ไดร์เป่าผม Dyson", en: "Dyson hair dryer", icon: "fa-solid fa-wind" },
  tv: { th: "สมาร์ททีวี 55 นิ้ว รองรับ Netflix", en: '55-inch Smart TV with Netflix', icon: "fa-solid fa-tv" },
  toiletries: { th: "ชุดของใช้ในห้องพัก เสื้อคลุมอาบน้ำและรองเท้าแตะ", en: "Toiletries, bathrobe and slippers", icon: "fa-solid fa-bath" },
  coffee: { th: "ชุดกาแฟแคปซูลฟรี", en: "Complimentary capsule coffee", icon: "fa-solid fa-mug-hot" },
};

const ROOM_AMENITIES = {
  standard: ["minibar", "kettle", "iron", "safe", "heater", "charger", "dryer", "tv", "toiletries"],
  premium: ["minibar", "kettle", "iron", "safe", "heater", "charger", "dyson", "tv", "toiletries", "coffee"],
};

const ROOMS = [
  { id: "superior-twin", name: "Superior Twin", guests: 2, price: 1290,
    beds: { th: "เตียงเดี่ยว 2 เตียง (3.5 ฟุต)", en: "2 single beds (3.5 ft)" },
    images: ["assets/images/superiortwin.jpg", "assets/images/superiortwin2.jpg", "assets/images/superiortwin3.jpg"], amenities: ROOM_AMENITIES.standard },
  { id: "superior-king", name: "Superior King", guests: 2, price: 1290,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/superiorking.jpg", "assets/images/superiorking2.jpg", "assets/images/superiorking4.jpg", "assets/images/superiorking5.jpg"], amenities: ROOM_AMENITIES.standard },
  { id: "business", name: "Business", guests: 2, price: 1690,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/business.jpg", "assets/images/business4.jpg", "assets/images/business5.jpg", "assets/images/business7.jpg"], amenities: ROOM_AMENITIES.premium },
  { id: "triple", name: "Triple", guests: 3, price: 1590,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต) และเตียงเดี่ยว 1 เตียง (3.5 ฟุต)", en: "1 bed (6 ft) and 1 single bed (3.5 ft)" },
    images: ["assets/images/triple.jpg", "assets/images/triple2.jpg", "assets/images/triple3.jpg"], amenities: ROOM_AMENITIES.premium },
  { id: "deluxe", name: "Deluxe", guests: 2, price: 1890,
    beds: { th: "เตียงเดี่ยว 1 เตียง (6 ฟุต)", en: "1 bed (6 ft)" },
    images: ["assets/images/deluxe.jpg", "assets/images/deluxe2.jpg", "assets/images/deluxe3.jpg", "assets/images/deluxe4.jpg"], amenities: ROOM_AMENITIES.premium },
];

(() => {
  const { t, pick } = i18n;
  const money = amount => `฿${Number(amount).toLocaleString()}`;
  const amenityIcon = icon => `<i class="${esc(icon)} amenity-icon" aria-hidden="true"></i>`;
  const image = (src, alt) => src
    ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async">`
    : `<div class="ph" role="img" aria-label="${esc(alt)}"></div>`;
  const facts = room => `<div class="meta"><span>${room.guests} ${t("common.guests")}</span><span>${esc(pick(room.beds))}</span></div>`;
  const price = room => room.price > 0
    ? `<p class="price"><small>${t("rooms.from")}</small> ${money(room.price)} <small>/ ${t("common.night")}</small></p>`
    : `<p class="price price--ask">${t("rooms.askPrice")}</p>`;
  const card = room => `<a class="room-card" href="room-detail.html?id=${esc(room.id)}"><div class="media">${image(room.images[0], room.name)}</div><h3>${esc(room.name)}</h3>${facts(room)}${price(room)}</a>`;
  const amenityList = ids => ids.map(id => {
    const amenity = AMENITIES[id];
    return amenity ? `<li>${amenityIcon(amenity.icon)}<span>${esc(pick(amenity))}</span></li>` : "";
  }).join("");

  function renderDetail(box) {
    const roomId = new URLSearchParams(location.search).get("id");
    const room = ROOMS.find(item => item.id === roomId) || ROOMS[0];
    const name = room.name;
    const inquiry = LINKS.lineChat(`${t("form.intro")}\n${t("form.room")}: ${name}`);
    document.title = `${name} | ${SITE.name}`;
    document.querySelectorAll("[data-room-title]").forEach(el => el.textContent = name);
    box.innerHTML = `<div class="detail"><div><div class="gallery">${room.images.map(src => image(src, name)).join("")}</div><h3>${t("common.amenities")}</h3><ul class="amenities">${amenityList(room.amenities)}</ul></div><aside class="booking-box">${price(room)}${facts(room)}<a class="btn btn--chat" href="${esc(inquiry)}" target="_blank" rel="noopener">${t("rooms.inquire")}</a></aside></div>`;
  }

  function render() {
    document.querySelectorAll("[data-rooms]").forEach(el => {
      const limit = Number(el.dataset.limit);
      el.innerHTML = (limit > 0 ? ROOMS.slice(0, limit) : ROOMS).map(card).join("");
    });
    const detail = document.getElementById("room-detail");
    if (detail) renderDetail(detail);
  }
  render();
  document.addEventListener("langchange", render);
})();
