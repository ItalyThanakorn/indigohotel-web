/* =====================================================================
   ข้อมูลเว็บไซต์ทั้งหมดอยู่ที่ไฟล์นี้ — แก้ที่นี่ที่เดียว ทุกหน้าอัปเดตตาม
   ข้อความ 2 ภาษาเขียนเป็น { th: "...", en: "..." }   (ข้อมูลห้องพักอยู่ที่ rooms.js)
   ===================================================================== */

const SITE = {
  name: "Bestier",
  logo: "assets/images/bestier-logo-lockup.png", // เว้นว่าง = แสดงชื่อเป็นตัวอักษร
  address: {
    th: "116 ถนนนิพัทธ์สงเคราะห์ 4 ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110",
    en: "116 Nipat Songkhro 4 Rd., Hat Yai, Songkhla 90110",
  },
  phone: { label: "074-813-380 ต่อ 4", tel: "+6674813380,4" },
  whatsapp: "+66 92 150 0002",
  line: "https://lin.ee/44mlplj",
  facebook: "https://www.facebook.com/BestierHotelHatyai",   // TODO: ใส่ลิงก์ Facebook Page (เว้นว่าง = ซ่อนปุ่ม)
  // แผนที่: ค่าเริ่มต้นค้นหาจากข้อความนี้ — ถ้าต้องการปักหมุดเป๊ะ ให้ใส่ลิงก์ embed จาก Google Maps (แชร์ > ฝังแผนที่) ที่ mapEmbed
  mapQuery: "Bestier Hotel Hat Yai",
  mapEmbed: "https://www.google.com/maps?q=Bestier+Hotel+Hat+Yai&output=embed",
  promo: { th: "", en: "" },   // โปรโมชันประจำเดือน (เว้นว่าง = ซ่อน)
  ota: [                        // ลิงก์จองผ่านตัวแทน (เว้นว่าง url = ซ่อน)
    { name: "Agoda", url: "" },
    { name: "Booking.com", url: "" },
    { name: "Trip.com", url: "" },
  ],
};

const LINKS = {
  lineChat: (text = "") => `https://lin.ee/44mlplj/${SITE.line}/?${encodeURIComponent(text)}`,
  tel: `tel:${SITE.phone.tel}`,
  whatsapp: `https://wa.me/${SITE.whatsapp.replace(/\D/g, "")}`,
  map: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`,
  mapEmbed: SITE.mapEmbed || `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`,
};

/* สิ่งอำนวยความสะดวก — หน้าแรกแสดง 4 รายการแรก, desc ไม่ใส่ก็ได้ */
const FACILITIES = [
  { name: { th: "รถตุ๊กตุ๊กฟรี", en: "Free tuk-tuk" },
    desc: { th: "ฟรีในระยะ 1 กม. ไปคาเฟ่ 7-Eleven โลตัส และร้านอาหารเช้า ให้บริการ 09:00–19:00 น.",
            en: "Complimentary rides within 1 km to cafés, 7-Eleven, Lotus's and breakfast spots, 09:00–19:00." } },
  { name: { th: "ที่จอดรถ", en: "Parking" },
    desc: { th: "ที่จอดรถทั้งด้านในและด้านนอกอาคาร", en: "Indoor and outdoor parking." } },
  { name: { th: "เคาน์เตอร์ต้อนรับ 24 ชั่วโมง", en: "24-hour front desk" },
    desc: { th: "พร้อมลิฟต์ เครื่องดื่มต้อนรับและน้ำดื่มที่เคาน์เตอร์เช็กอิน", en: "With lift, plus welcome drinks and drinking water at the check-in counter." } },
  { name: { th: "Wi-Fi ความเร็วสูง", en: "High-speed Wi-Fi" } },
  { name: { th: "ระบบรักษาความปลอดภัย", en: "Security system" } },
  { name: { th: "บริการทำความสะอาด", en: "Housekeeping" } },
  { name: { th: "จัดตกแต่งเตียงวันพิเศษ", en: "Special-occasion bed decoration" },
    desc: { th: "มีค่าบริการ สอบถามทาง LINE", en: "Chargeable — ask us on LINE." } },
  { name: { th: "มุมถ่ายรูป", en: "Photo spots" } },
];

const NEARBY = [
  { th: "โรงเรียนหาดใหญ่วิทยาลัย (ญ.ว.)", en: "Hatyai Wittayalai School" },
  { th: "ใจกลางเมืองหาดใหญ่", en: "Hat Yai city centre" },
  { th: "ด้านหลังธนาคารแห่งประเทศไทย", en: "Behind the Bank of Thailand" },
  { th: "7-Eleven และโลตัส", en: "7-Eleven and Lotus's" },
  { th: "คาเฟ่และร้านอาหารเช้า", en: "Cafés and breakfast restaurants" },
];

/* สาขาในเครือ — url ใส่ได้เมื่อมี (เว้นว่าง = ไม่มีลิงก์) */
const BRANCHES = [
  { name: { th: "โรงแรมอินดิโก้ สาขาเพรชเกษม", en: "Indigo Hotel Phetkasem Road" }, note: { th: "ตรงข้าม Big C Extra", en: "Opposite Big C Extra" }, url: "" },
  { name: { th: "โรงแรมอินดิโก้ 2 สาขาเขต 8", en: "Indigo Hotel 2 Khet 8" }, note: { th: "หาดใหญ่", en: "Hat Yai" }, url: "" },
  { name: { th: "โรงแรมอินดิโก้ 3 สาขาลีการ์เดนส์", en: "Indigo Hotel 3 Lee Gardens" }, note: { th: "โซนลีการ์เดนส์", en: "Lee Gardens area" }, url: "" },
  { name: { th: "อินดิโก้ บีชฟรอนท์ พูลวิลล่า สาขาทะเลม่วงงาม", en: "Indigo Beachfront Pool Villa" }, note: { th: "สิงหนคร", en: "Singhanakhon" }, url: "" },
];

/* แกลเลอรี — cat ต้องตรงกับ id ใน categories; src ที่ไม่มีไฟล์จะแสดงเป็นรูปแตก ให้ตรวจชื่อไฟล์ */
const GALLERY = {
  categories: [
    { id: "rooms", label: { th: "ห้องพัก", en: "Rooms" } },
    { id: "common", label: { th: "พื้นที่ส่วนกลาง", en: "Common areas" } },
    { id: "details", label: { th: "รายละเอียด", en: "Details" } },
  ],
  items: [
    { cat: "common", src: "assets/images/Building1.jpg", alt: { th: "ด้านหน้าโรงแรม", en: "Hotel front" } },
    { cat: "common", src: "assets/images/breakspace.jpg", alt: { th: "พื้นที่ต้อนรับ", en: "Lobby" } },
    { cat: "common", src: "assets/images/center.jpg", alt: { th: "มุมนั่งพักผ่อน", en: "Lounge garden" } },
    { cat: "common", src: "assets/images/counter.jpg", alt: { th: "เคาน์เตอร์ต้อนรับ", en: "Front desk" } },
    { cat: "common", src: "assets/images/hallway.jpg", alt: { th: "ทางเดินชั้นห้องพัก", en: "Corridor" } },
    { cat: "rooms", src: "assets/images/superiorking.jpg", alt: { th: "Superior King", en: "Superior King" } },
    { cat: "rooms", src: "assets/images/superiortwin.jpg", alt: { th: "Superior Twin", en: "Superior Twin" } },
    { cat: "rooms", src: "assets/images/business.jpg", alt: { th: "Business", en: "Business" } },
    { cat: "rooms", src: "assets/images/deluxe.jpg", alt: { th: "Deluxe", en: "Deluxe" } },
    { cat: "rooms", src: "assets/images/triple.jpg", alt: { th: "Triple", en: "Triple" } },
    { cat: "details", src: "assets/images/superiorking5.jpg", alt: { th: "ห้องน้ำ", en: "Bathroom" } },
    { cat: "details", src: "assets/images/minibar.jpg", alt: { th: "มินิบาร์", en: "Minibar" } },
    { cat: "details", src: "assets/images/dyson.jpg", alt: { th: "ไดร์เป่าผม Dyson", en: "Dyson hair dryer" } },
    { cat: "details", src: "assets/images/business16.jpg", alt: { th: "ชุดของใช้ในห้องพัก", en: "Amenities" } },
  ],
};

/* นโยบายการเข้าพัก (หน้า contact) */
const POLICIES = [
  { title: { th: "เช็กอินและเช็กเอาต์", en: "Check-in & check-out" }, items: [
    { th: "เช็กอินตั้งแต่ 14:00 น. เช็กเอาต์ภายใน 12:00 น.", en: "Check-in from 14:00; check-out by 12:00." },
    { th: "แจ้งชื่อ-นามสกุล แสดงบัตรประชาชน ใบขับขี่ หรือหนังสือเดินทาง และแจ้งทะเบียนรถ", en: "Please give your full name, show an ID card, driver's licence or passport, and provide your vehicle registration." },
    { th: "เช็กเอาต์หลัง 12:00 น. คิดชั่วโมงละ 200 บาท เริ่มตั้งแต่ 13:00 น. หากเกิน 3 ชั่วโมง คิดตามราคาห้องพักต่อวัน", en: "Late check-out is THB 200 per hour from 13:00. Beyond 3 hours, the full room rate for the day applies." },
  ] },
  { title: { th: "เงินมัดจำคีย์การ์ด", en: "Key card deposit" }, items: [
    { th: "มัดจำห้องละ 500 บาท หรือ 50 ริงกิต ชำระเป็นเงินสดตอนเช็กอิน", en: "A deposit of THB 500 or MYR 50 per room, paid in cash at check-in." },
    { th: "รับเงินมัดจำคืนจากพนักงานต้อนรับเมื่อคืนห้องและส่งคืนกุญแจ โดยคืนให้เฉพาะผู้ที่ลงทะเบียนเข้าพัก", en: "Refunded by the front desk when you return the room and key, to the registered guest only." },
  ] },
  { title: { th: "ข้อปฏิบัติ", en: "House rules" }, items: [
    { th: "ห้ามสูบบุหรี่ บุหรี่ไฟฟ้า หรือกัญชาภายในห้องพัก หากฝ่าฝืนมีค่าปรับ 5,000 บาท", en: "No smoking, vaping or cannabis in the rooms. A fine of THB 5,000 applies." },
    { th: "งดทำสีผมภายในห้องพัก หากผ้าเช็ดตัว ผ้าปูที่นอน หรืออุปกรณ์ของโรงแรมเสียหาย ผู้เข้าพักต้องรับผิดชอบค่าเสียหาย", en: "Please do not dye hair in the rooms. Guests are responsible for damage to towels, linen or hotel equipment." },
    { th: "ห้ามนำทุเรียน มังคุด และสัตว์เลี้ยงเข้ามาภายในโรงแรม", en: "Durian, mangosteen and pets are not allowed in the hotel." },
  ] },
];

/* helper สำหรับ renderer ต่างๆ (กัน HTML แทรกจากข้อมูล) */
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
