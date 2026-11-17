document.documentElement.classList.add("js");

// Text shown by the Thai and English language switch.
const messages = {
  th: {
    // Shared navigation and interface labels
    "common.skip": "ข้ามไปยังเนื้อหา",
    "common.brand": "Bestier หน้าแรก",
    "common.menu": "เมนู",
    "common.navigation": "เมนูหลัก",
    "common.language": "เลือกภาษา",
    "common.home": "หน้าแรก",
    "common.rooms": "ห้องพัก",
    "common.facilities": "บริการและสิ่งอำนวยความสะดวก",
    "common.contact": "ติดต่อเรา",
    "common.viewRooms": "ดูห้องพัก",
    "common.exploreRooms": "เลือกห้องพักที่เหมาะกับคุณ",
    "common.viewFacilities": "ดูบริการทั้งหมด",
    "common.contactDetails": "ดูข้อมูลติดต่อ",
    "common.footer.contact": "ติดต่อด่วน",
    "common.footer.phone": "โทร 074-813-380",
    "common.footer.line": "LINE @Bestier",
    "common.footer.note": "ข้อมูลอาจเปลี่ยนแปลงได้ โปรดติดต่อโรงแรมเพื่อยืนยัน",
    // Home page
    "home.title": "Bestier | โรงแรมหาดใหญ่",
    "home.description": "โรงแรม Bestier หาดใหญ่ มีห้องพัก 40 ห้อง 5 ประเภท พร้อมบริการและสิ่งอำนวยความสะดวกครบครัน",
    "home.hero.alt": "อาคารโรงแรม Bestier",
    "home.hero.eyebrow": "โรงแรม Bestier · หาดใหญ่",
    "home.hero.title1": "พักสบาย",
    "home.hero.title2": "ใกล้ทุกที่ในหาดใหญ่",
    "home.hero.description": "โรงแรมสไตล์พรีเมียม บรรยากาศทันสมัย พร้อมพื้นที่พักผ่อนและบริการที่ใส่ใจในทุกรายละเอียด",
    "home.benefits.label": "จุดเด่นของ Bestier",
    "home.benefit.frontDesk.label": "เคาน์เตอร์ต้อนรับ",
    "home.benefit.frontDesk.detail": "เปิดตลอด 24 ชั่วโมง",
    "home.benefit.parking.label": "ที่จอดรถ",
    "home.benefit.parking.detail": "มีทั้งในและนอกอาคาร",
    "home.benefit.tukTuk.label": "รถตุ๊กตุ๊กฟรี",
    "home.benefit.tukTuk.detail": "ในระยะ 1 กม. ทุกวัน 09:00–19:00 น.",
    "home.intro.eyebrow": "ยินดีต้อนรับสู่ Bestier",
    "home.intro.title": "พักผ่อนในแบบที่คุณชอบ",
    "home.intro.copy": "เลือกห้องพักที่เหมาะกับทริปของคุณ แล้วใช้เวลาพักผ่อนได้อย่างเต็มที่ Bestier เตรียมพื้นที่และบริการที่ใส่ใจ เพื่อให้คุณพักได้อย่างสบายใจ",
    "home.intro.alt": "บรรยากาศภายในโรงแรม",
    "home.stats.rooms": "ห้องพัก",
    "home.stats.types": "ประเภทห้อง",
    "home.rooms.eyebrow": "ห้องพัก Bestier",
    "home.rooms.title": "เลือกห้องที่เหมาะกับทริป",
    "home.rooms.copy": "ดูราคา รูปแบบเตียง และจุดเด่นของแต่ละห้อง",
    "home.rooms.open": "ดูรายละเอียดห้อง",
    "home.rooms.notice": "ราคาต่อคืนอาจเปลี่ยนตามวันเข้าพัก โปรดติดต่อเพื่อยืนยัน",
    "home.rooms.all": "ดูห้องพักและราคาทั้งหมด",
    "home.feature.alt": "พื้นที่พักผ่อนภายใน Bestier",
    "home.feature.eyebrow": "ใส่ใจทุกรายละเอียด",
    "home.feature.title": "รายละเอียดที่ทำให้เข้าพักสบายขึ้น",
    "home.feature.copy": "พื้นที่พักผ่อนและรายละเอียดการบริการต่าง ๆ ถูกเตรียมไว้เพื่อให้การเข้าพักของคุณราบรื่นและสบายขึ้น",
    "home.closing.eyebrow": "วางแผนเข้าพักที่หาดใหญ่",
    "home.closing.title": "พร้อมต้อนรับคุณที่ Bestier",
    // Room list and room detail pages
    "rooms.title": "ห้องพัก | Bestier",
    "rooms.description": "ดูรายละเอียดห้องพัก Bestier ทั้ง 5 ประเภท จำนวนห้อง จำนวนผู้เข้าพัก และรูปแบบเตียง",
    "rooms.hero.alt": "ห้องพักของโรงแรม Bestier",
    "rooms.hero.eyebrow": "ห้องพัก Bestier",
    "rooms.hero.title": "ห้องพักสำหรับทุกการเดินทาง",
    "rooms.hero.description": "เลือกห้องที่เหมาะกับจำนวนผู้เข้าพักและรูปแบบเตียงที่ต้องการ",
    "rooms.list.eyebrow": "เลือกห้องที่ใช่",
    "rooms.list.title": "ห้องพักทั้ง 5 ประเภท",
    "rooms.list.copy": "เรียงตามราคาต่อคืนจากสูงไปต่ำ พร้อมดูจำนวนผู้เข้าพักและรูปแบบเตียง",
    "rooms.rate.notice": "ราคาที่แสดงเป็นราคาต่อคืน อาจเปลี่ยนตามวันเข้าพัก โปรดสอบถามโรงแรมก่อนจอง",
    "rooms.card.open": "ดูรูปภาพและรายละเอียด",
    "rooms.rate.unit": "ต่อคืน",
    "rooms.detail.highlights": "รายละเอียดห้อง",
    "rooms.label.count": "จำนวนห้อง",
    "rooms.label.guests": "ผู้เข้าพัก",
    "rooms.label.beds": "รูปแบบเตียง",
    "rooms.value.rooms": "ห้อง",
    "rooms.value.guests": "ท่าน",
    "roomDetail.title": "รายละเอียดห้องพัก | Bestier",
    "roomDetail.description": "ดูราคาและรายละเอียดห้องพักของ Bestier",
    "roomDetail.titlePrefix": "ห้องพัก",
    "roomDetail.descriptionPrefix": "รายละเอียดห้องพัก",
    "roomDetail.notFound.title": "ไม่พบข้อมูลห้องพัก",
    "roomDetail.notFound.description": "ไม่พบห้องที่เลือก กรุณากลับไปยังรายการห้องพักแล้วเลือกอีกครั้ง",
    "roomDetail.back": "กลับไปที่ห้องพักทั้งหมด",
    "roomDetail.rate": "ราคาห้องพัก",
    "roomDetail.rateUnit": "ต่อคืน",
    "roomDetail.rateNotice": "ราคาอาจเปลี่ยนตามวันเข้าพัก โปรดสอบถามโรงแรมก่อนจอง",
    "roomDetail.amenities": "สิ่งอำนวยความสะดวกในห้อง",
    "roomDetail.amenitiesEyebrow": "สิ่งที่เตรียมไว้ในห้องพัก",
    "roomDetail.amenitiesCopy": "รวมอุปกรณ์และของใช้ที่เตรียมไว้ให้ในห้องนี้",
    "roomDetail.dysonAmenity": "ไดร์เป่าผม Dyson",
    "roomDetail.contact": "สอบถามห้องนี้",
    "rooms.twin.alt": "ห้องซูพีเรีย ทวิน มีเตียงเดี่ยวสองเตียง",
    "rooms.twin.name": "ซูพีเรีย ทวิน",
    "rooms.twin.beds": "เตียงเดี่ยว 2 เตียง ขนาด 3.5 ฟุต",
    "rooms.twin.highlight": "เตียงเดี่ยว 2 เตียง ขนาด 3.5 ฟุต สำหรับผู้เข้าพัก 2 ท่าน",
    "rooms.twin.photo2": "ภาพที่ 2 ของห้องซูพีเรีย ทวิน",
    "rooms.twin.photo3": "ภาพที่ 3 ของห้องซูพีเรีย ทวิน",
    "rooms.king.alt": "ห้องซูพีเรีย คิง พร้อมเตียงขนาด 6 ฟุต",
    "rooms.king.name": "ซูพีเรีย คิง",
    "rooms.king.beds": "เตียง 1 เตียง ขนาด 6 ฟุต",
    "rooms.king.highlight": "เตียงขนาด 6 ฟุต สำหรับผู้เข้าพัก 2 ท่าน",
    "rooms.king.photo2": "ภาพที่ 2 ของห้องซูพีเรีย คิง",
    "rooms.king.photo3": "ภาพที่ 3 ของห้องซูพีเรีย คิง",
    "rooms.business.alt": "ห้องบิสซิเนส",
    "rooms.business.name": "บิสซิเนส รูม",
    "rooms.business.beds": "เตียง 1 เตียง ขนาด 6 ฟุต",
    "rooms.business.highlight": "เตียงขนาด 6 ฟุต พร้อมกาแฟแคปซูลฟรี",
    "rooms.business.photo2": "ภาพที่ 2 ของห้องบิสซิเนส",
    "rooms.business.photo3": "ภาพที่ 3 ของห้องบิสซิเนส",
    "rooms.triple.alt": "ห้องทริปเปิล สำหรับผู้เข้าพัก 3 ท่าน",
    "rooms.triple.name": "ทริปเปิล รูม",
    "rooms.triple.beds": "เตียง 6 ฟุต 1 เตียง และเตียง 3.5 ฟุต 1 เตียง",
    "rooms.triple.highlight": "พักได้ 3 ท่าน มีเตียง 6 ฟุตและ 3.5 ฟุต พร้อมกาแฟแคปซูลฟรี",
    "rooms.triple.photo2": "ภาพที่ 2 ของห้องทริปเปิล",
    "rooms.deluxe.alt": "ห้องดีลักซ์ พร้อมเตียงขนาด 6 ฟุต",
    "rooms.deluxe.name": "ดีลักซ์ รูม",
    "rooms.deluxe.beds": "เตียง 1 เตียง ขนาด 6 ฟุต",
    "rooms.deluxe.highlight": "เตียงขนาด 6 ฟุต พร้อมกาแฟแคปซูลฟรี",
    "rooms.deluxe.photo2": "ภาพที่ 2 ของห้องดีลักซ์",
    "rooms.deluxe.photo3": "ภาพที่ 3 ของห้องดีลักซ์",
    "rooms.closing.eyebrow": "อยากให้ช่วยเลือกห้องไหม",
    "rooms.closing.title": "สอบถามข้อมูลห้องพัก",
    // Facilities page
    "facilities.title": "บริการและสิ่งอำนวยความสะดวก | Bestier",
    "facilities.description": "สิ่งอำนวยความสะดวกภายในห้องพัก Bestier บริการต้อนรับ ที่จอดรถ และรถตุ๊กตุ๊กฟรีในระยะ 1 กิโลเมตร",
    "facilities.hero.alt": "พื้นที่ส่วนกลางของ Bestier",
    "facilities.hero.eyebrow": "บริการและสิ่งอำนวยความสะดวก",
    "facilities.hero.title": "สิ่งจำเป็นที่เราพร้อมให้คุณ",
    "facilities.hero.description": "บริการและของใช้ที่ช่วยให้เข้าพักได้สะดวก ตั้งแต่มาถึงจนถึงเวลาออกเดินทาง",
    "facilities.section.eyebrow": "พร้อมดูแลตลอดการเข้าพัก",
    "facilities.section.title": "สะดวกสบายตลอดการเข้าพัก",
    "facilities.reception.alt": "เคาน์เตอร์ต้อนรับของโรงแรม",
    "facilities.reception.label": "บริการภายในโรงแรม",
    "facilities.reception.title": "บริการที่โรงแรม",
    "facilities.reception.point1": "เคาน์เตอร์ต้อนรับเปิดตลอด 24 ชั่วโมง",
    "facilities.reception.point2": "มีเครื่องดื่มต้อนรับและน้ำดื่มที่เคาน์เตอร์เช็กอิน",
    "facilities.reception.point3": "ที่จอดรถทั้งด้านในและด้านนอกอาคาร",
    "facilities.reception.point4": "มีลิฟต์ให้บริการ",
    "facilities.transport.alt": "บรรยากาศและการเดินทางรอบโรงแรม",
    "facilities.transport.label": "เดินทางรอบเมือง",
    "facilities.transport.title": "รถตุ๊กตุ๊กฟรีใกล้โรงแรม",
    "facilities.transport.copy": "มีบริการรับส่งฟรีในระยะ 1 กิโลเมตร ทุกวัน เวลา 09:00–19:00 น. ไปยังคาเฟ่ ร้าน 7-Eleven ร้านโลตัส และร้านอาหารเช้าใกล้โรงแรม",
    "facilities.room.eyebrow": "ในห้องพักทุกประเภท",
    "facilities.room.title": "สิ่งอำนวยความสะดวกในห้องพัก",
    "facilities.room.copy": "มีให้ใช้ในห้องพักทุกประเภท",
    "facilities.room.item1": "มินิบาร์ฟรี และกาต้มน้ำร้อน",
    "facilities.room.item2": "เตารีดและที่รองรีด",
    "facilities.room.item3": "ตู้เซฟ",
    "facilities.room.item4": "ไดร์เป่าผม และเครื่องทำน้ำอุ่น",
    "facilities.room.item5": "ที่ชาร์จโทรศัพท์แบบดิจิทัล",
    "facilities.room.item6": "สมาร์ททีวีขนาด 55 นิ้ว รองรับ Netflix",
    "facilities.extra.alt": "ไดร์เป่าผม Dyson ที่มีให้บริการในห้องพักบางประเภท",
    "facilities.extra.title": "เพิ่มเติมในบางห้อง",
    "facilities.extra.copy": "ห้องทริปเปิล บิสซิเนส และดีลักซ์ มีชุดกาแฟแคปซูลฟรีและไดร์เป่าผม Dyson",
    "facilities.supplies.imageAlt": "มินิบาร์และกาต้มน้ำภายในห้องพัก",
    "facilities.supplies.item1": "ร่ม",
    "facilities.supplies.item2": "ไม้แขวนเสื้อและถุงใส่ผ้าสำหรับส่งซัก",
    "facilities.supplies.item3": "แปรงสีฟัน ยาสีฟัน คอตตอนบัด และหวี",
    "facilities.supplies.item4": "แชมพู ครีมนวด โลชั่น และสบู่เหลว",
    "facilities.supplies.item5": "หมวกคลุมอาบน้ำ เสื้อคลุมอาบน้ำ และรองเท้าแตะ",
    "facilities.supplies.item6": "เครื่องชั่งน้ำหนัก",
    "facilities.supplies.item7": "แฟ้มกระดาษและดินสอ",
    "facilities.closing.eyebrow": "ครบครันเพื่อการพักผ่อนที่สบาย",
    "facilities.closing.title": "สอบถามข้อมูลเพิ่มเติม",
    // Contact page
    "contact.title": "ติดต่อและข้อมูลการเข้าพัก | Bestier",
    "contact.description": "ที่ตั้ง Bestier และช่องทางติดต่อเพื่อสอบถามข้อมูลและการจองห้องพัก",
    "contact.hero.alt": "ด้านหน้าโรงแรม Bestier",
    "contact.hero.eyebrow": "ข้อมูลติดต่อและการเข้าพัก",
    "contact.hero.title": "ติดต่อ Bestier",
    "contact.hero.description": "ดูที่ตั้ง ช่องทางติดต่อ และข้อมูลสำคัญก่อนเข้าพัก",
    "contact.location.eyebrow": "ที่ตั้งของเราในหาดใหญ่",
    "contact.location.title": "ที่ตั้งโรงแรม",
    "contact.location.address": "116 ถนนนิพัทธ์สงเคราะห์ 4 ตำบลหาดใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110",
    "contact.location.landmark": "อยู่ด้านหลังธนาคารแห่งประเทศไทย และใกล้โรงเรียนหาดใหญ่วิทยาลัย",
    "contact.location.map": "เปิดตำแหน่งใน Google Maps",
    "contact.channels.eyebrow": "ช่องทางติดต่อ",
    "contact.channels.title": "ช่องทางติดต่อ",
    "contact.channels.line": "LINE Official Account",
    "contact.channels.phone": "โทรศัพท์",
    "contact.policies.eyebrow": "ก่อนเข้าพัก",
    "contact.policies.title": "ข้อมูลสำคัญสำหรับผู้เข้าพัก",
    "contact.policy.checkin.title": "เช็กอินและเช็กเอาต์",
    "contact.policy.checkin.id": "ตอนเช็กอิน กรุณาแจ้งชื่อ-นามสกุล แสดงบัตรประชาชน ใบขับขี่ หรือหนังสือเดินทาง และแจ้งทะเบียนรถ",
    "contact.policy.checkin.time": "เช็กอินตั้งแต่ 14:00 น. และเช็กเอาต์ภายใน 12:00 น.",
    "contact.policy.checkin.late": "เช็กเอาต์หลัง 12:00 น. คิดค่าธรรมเนียม 200 บาทต่อชั่วโมง เริ่มคิดตั้งแต่ 13:00 น. หากเกิน 3 ชั่วโมง คิดค่าห้องตามราคาหนึ่งคืน",
    "contact.policy.deposit.title": "เงินมัดจำคีย์การ์ด",
    "contact.policy.deposit.amount": "มัดจำ 500 บาท หรือ 50 ริงกิตต่อห้อง ชำระเป็นเงินสดตอนเช็กอิน",
    "contact.policy.deposit.refund": "รับเงินคืนเมื่อคืนห้องและส่งคีย์การ์ดให้พนักงาน โดยคืนให้ผู้ที่ลงทะเบียนเข้าพักเท่านั้น",
    "contact.policy.rules.title": "ข้อปฏิบัติระหว่างเข้าพัก",
    "contact.policy.rules.smoking": "ห้ามสูบบุหรี่ บุหรี่ไฟฟ้า หรือกัญชาภายในห้องพัก ฝ่าฝืนปรับ 5,000 บาท",
    "contact.policy.rules.dye": "งดทำสีผมภายในห้องพัก",
    "contact.policy.rules.damage": "หากผ้าเช็ดตัว ผ้าปูที่นอน หรืออุปกรณ์ของโรงแรมเสียหาย ผู้เข้าพักต้องรับผิดชอบค่าเสียหาย",
    "contact.policy.rules.food": "ห้ามนำทุเรียนและมังคุดเข้ามาภายในโรงแรม",
    "contact.policy.rules.pets": "ไม่อนุญาตให้นำสัตว์เลี้ยงเข้าพัก"
  },
  en: {
    // Shared navigation and interface labels
    "common.skip": "Skip to content",
    "common.brand": "Bestier home",
    "common.menu": "Menu",
    "common.navigation": "Main navigation",
    "common.language": "Choose language",
    "common.home": "Home",
    "common.rooms": "Rooms",
    "common.facilities": "Services & facilities",
    "common.contact": "Contact",
    "common.viewRooms": "View rooms",
    "common.exploreRooms": "Find your room",
    "common.viewFacilities": "Explore facilities",
    "common.contactDetails": "Contact details",
    "common.footer.contact": "Quick contact",
    "common.footer.phone": "Call 074-813-380",
    "common.footer.line": "LINE @Bestier",
    "common.footer.note": "Details may change. Please contact the hotel to confirm.",
    // Home page
    "home.title": "Bestier | Hotel in Hat Yai",
    "home.description": "Bestier Hotel in Hat Yai has 40 rooms across five categories, with thoughtful services and facilities.",
    "home.hero.alt": "Bestier hotel building",
    "home.hero.eyebrow": "BESTIER HOTEL · HAT YAI",
    "home.hero.title1": "Feel at ease",
    "home.hero.title2": "in the heart of Hat Yai",
    "home.hero.description": "A modern, premium-style hotel with welcoming spaces and thoughtful service throughout your stay.",
    "home.benefits.label": "Bestier guest benefits",
    "home.benefit.frontDesk.label": "Front desk",
    "home.benefit.frontDesk.detail": "Open 24 hours",
    "home.benefit.parking.label": "Parking",
    "home.benefit.parking.detail": "Indoor and outdoor spaces",
    "home.benefit.tukTuk.label": "Complimentary tuk-tuk",
    "home.benefit.tukTuk.detail": "Within 1 km · Daily, 09:00–19:00",
    "home.intro.eyebrow": "WELCOME TO BESTIER",
    "home.intro.title": "A stay that suits your trip",
    "home.intro.copy": "Choose a room that fits your plans and take time to unwind. Bestier offers thoughtful spaces and service for a comfortable stay.",
    "home.intro.alt": "Inside the hotel",
    "home.stats.rooms": "rooms",
    "home.stats.types": "room types",
    "home.rooms.eyebrow": "ROOMS AT BESTIER",
    "home.rooms.title": "Find a room that fits your trip",
    "home.rooms.copy": "Compare rates, bed setups, and room highlights.",
    "home.rooms.open": "View room details",
    "home.rooms.notice": "Rates are per night and may vary by date. Please contact the hotel to confirm.",
    "home.rooms.all": "View all rooms and rates",
    "home.feature.alt": "A lounge area at Bestier",
    "home.feature.eyebrow": "A THOUGHTFUL STAY",
    "home.feature.title": "Helpful details for an easier stay",
    "home.feature.copy": "Relax in welcoming spaces, with thoughtful service and details to help your stay go smoothly.",
    "home.closing.eyebrow": "PLAN YOUR HAT YAI STAY",
    "home.closing.title": "We look forward to welcoming you",
    // Room list and room detail pages
    "rooms.title": "Rooms | Bestier",
    "rooms.description": "Explore all five Bestier room types, including room count, guest capacity, and bed setup.",
    "rooms.hero.alt": "A guest room at Bestier",
    "rooms.hero.eyebrow": "ROOMS AT BESTIER",
    "rooms.hero.title": "A room for every kind of trip",
    "rooms.hero.description": "Choose the room that fits your group and preferred bed setup.",
    "rooms.list.eyebrow": "FIND YOUR ROOM",
    "rooms.list.title": "Five room types",
    "rooms.list.copy": "Rooms are sorted by nightly rate, highest to lowest. Compare guest capacity and bed setup.",
    "rooms.rate.notice": "Displayed rates are per night and may vary by date. Please contact the hotel to confirm before booking.",
    "rooms.card.open": "View photos and details",
    "rooms.rate.unit": "per night",
    "rooms.detail.highlights": "Room details",
    "rooms.label.count": "Rooms",
    "rooms.label.guests": "Guests",
    "rooms.label.beds": "Bed setup",
    "rooms.value.rooms": "rooms",
    "rooms.value.guests": "guests",
    "roomDetail.title": "Room details | Bestier",
    "roomDetail.description": "View Bestier room prices and details.",
    "roomDetail.titlePrefix": "Room",
    "roomDetail.descriptionPrefix": "Room details",
    "roomDetail.notFound.title": "Room not found",
    "roomDetail.notFound.description": "We couldn't find that room. Return to the room list and choose a room to view its details.",
    "roomDetail.back": "Back to all rooms",
    "roomDetail.rate": "Room rate",
    "roomDetail.rateUnit": "per night",
    "roomDetail.rateNotice": "Rates may vary by date. Please contact the hotel to confirm before booking.",
    "roomDetail.amenities": "In-room amenities",
    "roomDetail.amenitiesEyebrow": "IN-ROOM DETAILS",
    "roomDetail.amenitiesCopy": "Equipment and everyday essentials prepared for this room.",
    "roomDetail.dysonAmenity": "Dyson hair dryer",
    "roomDetail.contact": "Ask about this room",
    "rooms.twin.alt": "Superior Twin room with two single beds",
    "rooms.twin.name": "Superior Twin",
    "rooms.twin.beds": "Two 3.5-foot single beds",
    "rooms.twin.highlight": "Two 3.5-foot single beds for up to two guests.",
    "rooms.twin.photo2": "Superior Twin room photo 2",
    "rooms.twin.photo3": "Superior Twin room photo 3",
    "rooms.king.alt": "Superior King room with a 6-foot bed",
    "rooms.king.name": "Superior King",
    "rooms.king.beds": "One 6-foot bed",
    "rooms.king.highlight": "One 6-foot bed for up to two guests.",
    "rooms.king.photo2": "Superior King room photo 2",
    "rooms.king.photo3": "Superior King room photo 3",
    "rooms.business.alt": "Business Room",
    "rooms.business.name": "Business Room",
    "rooms.business.beds": "One 6-foot bed",
    "rooms.business.highlight": "One 6-foot bed and complimentary capsule coffee.",
    "rooms.business.photo2": "Business Room photo 2",
    "rooms.business.photo3": "Business Room photo 3",
    "rooms.triple.alt": "Triple Room for up to three guests",
    "rooms.triple.name": "Triple Room",
    "rooms.triple.beds": "One 6-foot bed and one 3.5-foot bed",
    "rooms.triple.highlight": "Sleeps three, with one 6-foot bed and one 3.5-foot bed, plus complimentary capsule coffee.",
    "rooms.triple.photo2": "Triple Room photo 2",
    "rooms.deluxe.alt": "Deluxe Room with a 6-foot bed",
    "rooms.deluxe.name": "Deluxe Room",
    "rooms.deluxe.beds": "One 6-foot bed",
    "rooms.deluxe.highlight": "One 6-foot bed and complimentary capsule coffee.",
    "rooms.deluxe.photo2": "Deluxe Room photo 2",
    "rooms.deluxe.photo3": "Deluxe Room photo 3",
    "rooms.closing.eyebrow": "NEED HELP CHOOSING?",
    "rooms.closing.title": "Ask us about room availability",
    // Facilities page
    "facilities.title": "Services & facilities | Bestier",
    "facilities.description": "Explore Bestier room amenities, guest services, parking, and complimentary tuk-tuk rides within one kilometre.",
    "facilities.hero.alt": "A shared space at Bestier",
    "facilities.hero.eyebrow": "SERVICES & FACILITIES",
    "facilities.hero.title": "Thoughtful essentials, ready for you",
    "facilities.hero.description": "Services and in-room essentials to make your stay comfortable, from arrival to departure.",
    "facilities.section.eyebrow": "HERE FOR YOUR STAY",
    "facilities.section.title": "Comfort throughout your stay",
    "facilities.reception.alt": "The hotel reception counter",
    "facilities.reception.label": "AT THE HOTEL",
    "facilities.reception.title": "Hotel services",
    "facilities.reception.point1": "24-hour front desk",
    "facilities.reception.point2": "Welcome drinks and drinking water at check-in",
    "facilities.reception.point3": "Indoor and outdoor parking",
    "facilities.reception.point4": "Elevator",
    "facilities.transport.alt": "Getting around near the hotel",
    "facilities.transport.label": "GETTING AROUND",
    "facilities.transport.title": "Complimentary local tuk-tuk rides",
    "facilities.transport.copy": "Free rides within 1 kilometre are available daily from 09:00 to 19:00. Nearby stops include cafes, 7-Eleven, Lotus's, and breakfast restaurants.",
    "facilities.room.eyebrow": "IN EVERY ROOM",
    "facilities.room.title": "In-room amenities",
    "facilities.room.copy": "Available in every room type",
    "facilities.room.item1": "Complimentary minibar and electric kettle",
    "facilities.room.item2": "Iron and ironing board",
    "facilities.room.item3": "In-room safe",
    "facilities.room.item4": "Hair dryer and hot-water shower",
    "facilities.room.item5": "Digital phone charger",
    "facilities.room.item6": "55-inch Smart TV with Netflix support",
    "facilities.extra.alt": "Dyson hair dryer available in selected room types",
    "facilities.extra.title": "Extra touches in selected rooms",
    "facilities.extra.copy": "Triple, Business, and Deluxe rooms include complimentary capsule coffee and a Dyson hair dryer.",
    "facilities.supplies.imageAlt": "The minibar and kettle in a guest room",
    "facilities.supplies.item1": "Umbrella",
    "facilities.supplies.item2": "Hangers and laundry bag",
    "facilities.supplies.item3": "Toothbrush, toothpaste, cotton buds, and comb",
    "facilities.supplies.item4": "Shampoo, conditioner, lotion, and body wash",
    "facilities.supplies.item5": "Shower cap, bathrobe, and slippers",
    "facilities.supplies.item6": "Weighing scale",
    "facilities.supplies.item7": "Paper folder and pencil",
    "facilities.closing.eyebrow": "EVERYTHING YOU NEED FOR A COMFORTABLE STAY",
    "facilities.closing.title": "Need more information?",
    // Contact page
    "contact.title": "Contact & stay information | Bestier",
    "contact.description": "Find Bestier's location and contact details for room enquiries and reservations.",
    "contact.hero.alt": "The front of Bestier hotel",
    "contact.hero.eyebrow": "CONTACT & STAY INFORMATION",
    "contact.hero.title": "Contact Bestier",
    "contact.hero.description": "Find our location, contact channels, and useful information for your stay.",
    "contact.location.eyebrow": "FIND US IN HAT YAI",
    "contact.location.title": "Hotel location",
    "contact.location.address": "116 Niphat Songkhro 4 Road, Hat Yai Subdistrict, Hat Yai District, Songkhla 90110, Thailand",
    "contact.location.landmark": "Behind the Bank of Thailand and near Hatyaiwittayalai School.",
    "contact.location.map": "Open in Google Maps",
    "contact.channels.eyebrow": "GET IN TOUCH",
    "contact.channels.title": "Contact channels",
    "contact.channels.line": "LINE Official Account",
    "contact.channels.phone": "Phone",
    "contact.policies.eyebrow": "BEFORE YOU ARRIVE",
    "contact.policies.title": "Important information for guests",
    "contact.policy.checkin.title": "Check-in and check-out",
    "contact.policy.checkin.id": "At check-in, please provide your full name, a Thai ID card, driver's licence, or passport, and your vehicle registration number.",
    "contact.policy.checkin.time": "Check-in is from 14:00. Check-out is by 12:00.",
    "contact.policy.checkin.late": "Late check-out after 12:00 is charged at THB 200 per hour from 13:00. More than 3 hours late is charged at the full nightly room rate.",
    "contact.policy.deposit.title": "Key-card deposit",
    "contact.policy.deposit.amount": "A cash deposit of THB 500 or MYR 50 per room is due at check-in.",
    "contact.policy.deposit.refund": "The deposit is refunded when the room and key card are returned. The refund is given only to a registered guest.",
    "contact.policy.rules.title": "House rules",
    "contact.policy.rules.smoking": "Smoking, e-cigarettes, and cannabis are not allowed in guest rooms. A THB 5,000 fine applies.",
    "contact.policy.rules.dye": "Hair dyeing is not allowed in guest rooms.",
    "contact.policy.rules.damage": "Guests are responsible for damage to towels, bed linen, or hotel equipment.",
    "contact.policy.rules.food": "Durian and mangosteen are not allowed in the hotel.",
    "contact.policy.rules.pets": "Pets are not permitted."
  }
};

// Room facts and image filenames used by the shared room-detail template.
const roomCatalog = {
  "superior-twin": {
    nameKey: "rooms.twin.name",
    count: 3,
    guests: 2,
    bedsKey: "rooms.twin.beds",
    highlightKey: "rooms.twin.highlight",
    rate: 1290,
    images: [
      { src: "superiortwin.jpg", altKey: "rooms.twin.alt" },
      { src: "superiortwin2.jpg", altKey: "rooms.twin.photo2" },
      { src: "superiortwin5.jpg", altKey: "rooms.twin.photo3" }
    ]
  },
  "superior-king": {
    nameKey: "rooms.king.name",
    count: 21,
    guests: 2,
    bedsKey: "rooms.king.beds",
    highlightKey: "rooms.king.highlight",
    rate: 1290,
    images: [
      { src: "superiorking.jpg", altKey: "rooms.king.alt" },
      { src: "superiorking2.jpg", altKey: "rooms.king.photo2" },
      { src: "superiorking6.jpg", altKey: "rooms.king.photo3" }
    ]
  },
  business: {
    nameKey: "rooms.business.name",
    count: 3,
    guests: 2,
    bedsKey: "rooms.business.beds",
    highlightKey: "rooms.business.highlight",
    hasDysonHairDryer: true,
    rate: 1690,
    images: [
      { src: "business.jpg", altKey: "rooms.business.alt" },
      { src: "business8.jpg", altKey: "rooms.business.photo2" },
      { src: "business5.jpg", altKey: "rooms.business.photo3" }
    ]
  },
  triple: {
    nameKey: "rooms.triple.name",
    count: 4,
    guests: 3,
    bedsKey: "rooms.triple.beds",
    highlightKey: "rooms.triple.highlight",
    hasDysonHairDryer: true,
    rate: 1590,
    images: [
      { src: "triple.jpg", altKey: "rooms.triple.alt" },
      { src: "triple2.jpg", altKey: "rooms.triple.photo2" }
    ]
  },
  deluxe: {
    nameKey: "rooms.deluxe.name",
    count: 9,
    guests: 2,
    bedsKey: "rooms.deluxe.beds",
    highlightKey: "rooms.deluxe.highlight",
    hasDysonHairDryer: true,
    rate: 1890,
    images: [
      { src: "deluxe.jpg", altKey: "rooms.deluxe.alt" },
      { src: "deluxe2.jpg", altKey: "rooms.deluxe.photo2" },
      { src: "deluxe3.jpg", altKey: "rooms.deluxe.photo3" }
    ]
  }
};

const inRoomAmenities = [
  { icon: "bi-cup-hot", key: "facilities.room.item1" },
  { icon: "bi-grid-3x3-gap", key: "facilities.room.item2" },
  { icon: "bi-shield-lock", key: "facilities.room.item3" },
  { icon: "bi-droplet-half", key: "facilities.room.item4" },
  { icon: "bi-phone", key: "facilities.room.item5" },
  { icon: "bi-tv", key: "facilities.room.item6" },
  { icon: "bi-umbrella", key: "facilities.supplies.item1" },
  { icon: "bi-bag", key: "facilities.supplies.item2" },
  { icon: "bi-brush", key: "facilities.supplies.item3" },
  { icon: "bi-droplet-half", key: "facilities.supplies.item4" },
  { icon: "bi-person-standing", key: "facilities.supplies.item5" },
  { icon: "bi-speedometer2", key: "facilities.supplies.item6" },
  { icon: "bi-journal-text", key: "facilities.supplies.item7" }
];

function renderInRoomAmenities(language) {
  const dictionary = messages[language];
  const roomId = new URLSearchParams(window.location.search).get("room");
  const room = roomId && Object.prototype.hasOwnProperty.call(roomCatalog, roomId)
    ? roomCatalog[roomId]
    : null;

  document.querySelectorAll("[data-in-room-amenities]").forEach((list) => {
    const items = [];
    const amenities = [...inRoomAmenities];

    if (list.hasAttribute("data-room-specific-amenities") && room && room.hasDysonHairDryer) {
      amenities.push({ icon: "bi-wind", key: "roomDetail.dysonAmenity" });
    }

    amenities.forEach((amenity) => {
      if (!Object.prototype.hasOwnProperty.call(dictionary, amenity.key)) {
        console.error(`Missing ${language} translation: ${amenity.key}`);
        return;
      }

      const item = document.createElement("li");
      const icon = document.createElement("i");
      const label = document.createElement("span");

      icon.className = `bi ${amenity.icon}`;
      icon.setAttribute("aria-hidden", "true");
      label.textContent = dictionary[amenity.key];
      item.append(icon, label);
      items.push(item);
    });

    list.replaceChildren(...items);
  });
}

function formatRoomPrice(rate, language) {
  const formattedRate = new Intl.NumberFormat(language === "th" ? "th-TH" : "en-US").format(rate);
  return language === "th" ? `฿${formattedRate}` : `THB ${formattedRate}`;
}

function renderRoomCardPrices(language) {
  document.querySelectorAll("[data-room-card-price]").forEach((element) => {
    const roomId = element.dataset.roomCardPrice;
    const room = roomCatalog[roomId];
    if (!room) {
      console.error(`Missing room data for price card: ${roomId}`);
      return;
    }
    element.textContent = formatRoomPrice(room.rate, language);
  });
}

// Choose a supported language from the browser's ordered preferences.
function getBrowserLanguage() {
  const preferences = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];
  const supported = preferences
    .map((language) => language.toLowerCase().split("-")[0])
    .find((language) => language === "th" || language === "en");
  return supported || "en";
}

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem("bestier-language");
    if (savedLanguage === "th" || savedLanguage === "en") {
      return savedLanguage;
    }
  } catch (error) {
    console.warn("Could not read the saved language preference.", error);
  }
  return getBrowserLanguage();
}

// Update translated text, accessible labels, page metadata, and room details.
function applyLanguage(language) {
  const dictionary = messages[language];
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    } else {
      console.error(`Missing ${language} translation: ${key}`);
    }
  });

  document.querySelectorAll("[data-i18n-alt], [data-i18n-aria-label]").forEach((element) => {
    ["alt", "aria-label"].forEach((attribute) => {
      const key = element.dataset[`i18n${attribute === "alt" ? "Alt" : "AriaLabel"}`];
      if (!key) {
        return;
      }
      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.setAttribute(attribute, dictionary[key]);
      } else {
        console.error(`Missing ${language} translation: ${key}`);
      }
    });
  });

  const titleKey = `${document.body.dataset.page}.title`;
  const descriptionKey = `${document.body.dataset.page}.description`;
  if (Object.prototype.hasOwnProperty.call(dictionary, titleKey)) {
    document.title = dictionary[titleKey];
  } else {
    console.error(`Missing ${language} translation: ${titleKey}`);
  }

  const description = document.querySelector('meta[name="description"]');
  if (description && Object.prototype.hasOwnProperty.call(dictionary, descriptionKey)) {
    description.setAttribute("content", dictionary[descriptionKey]);
  } else if (description) {
    console.error(`Missing ${language} translation: ${descriptionKey}`);
  }

  renderInRoomAmenities(language);
  renderRoomDetail(language);
  renderRoomCardPrices(language);

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === language));
  });
}

// Render the selected room from the URL without duplicating detail-page markup.
function renderRoomDetail(language) {
  const detailPage = document.querySelector("[data-room-detail-page]");
  if (!detailPage) {
    return;
  }

  const dictionary = messages[language];
  const roomId = new URLSearchParams(window.location.search).get("room");
  const room = roomId && Object.prototype.hasOwnProperty.call(roomCatalog, roomId)
    ? roomCatalog[roomId]
    : null;
  const notFound = document.querySelector("[data-room-not-found]");
  const description = document.querySelector('meta[name="description"]');

  if (!room) {
    detailPage.hidden = true;
    notFound.hidden = false;
    document.title = `${dictionary["roomDetail.notFound.title"]} | Bestier`;
    if (description) {
      description.setAttribute("content", dictionary["roomDetail.notFound.description"]);
    }
    return;
  }

  notFound.hidden = true;
  detailPage.hidden = false;
  const roomName = dictionary[room.nameKey];
  detailPage.querySelector("[data-room-name]").textContent = roomName;
  detailPage.querySelector("[data-room-count]").textContent = `${room.count} ${dictionary["rooms.value.rooms"]}`;
  detailPage.querySelector("[data-room-guests]").textContent = `${room.guests} ${dictionary["rooms.value.guests"]}`;
  detailPage.querySelector("[data-room-beds]").textContent = dictionary[room.bedsKey];
  detailPage.querySelector("[data-room-highlight]").textContent = dictionary[room.highlightKey];
  detailPage.querySelector("[data-room-price]").textContent = formatRoomPrice(room.rate, language);

  const imageBase = "../assets/images/bestier/";
  const heroImage = detailPage.querySelector("[data-room-hero]");
  heroImage.src = `${imageBase}${room.images[0].src}`;
  heroImage.alt = dictionary[room.images[0].altKey];

  const gallery = detailPage.querySelector("[data-room-gallery]");
  gallery.replaceChildren();
  room.images.slice(1).forEach((image) => {
    const galleryImage = document.createElement("img");
    galleryImage.src = `${imageBase}${image.src}`;
    galleryImage.alt = dictionary[image.altKey];
    galleryImage.loading = "lazy";
    gallery.append(galleryImage);
  });

  document.title = `${dictionary["roomDetail.titlePrefix"]} ${roomName} | Bestier`;
  if (description) {
    description.setAttribute("content", `${dictionary["roomDetail.descriptionPrefix"]} ${roomName}. ${dictionary[room.highlightKey]}`);
  }
}

// Apply the selected language and keep it when the visitor changes pages.
let currentLanguage = getInitialLanguage();
applyLanguage(currentLanguage);

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.language;
    applyLanguage(currentLanguage);
    try {
      window.localStorage.setItem("bestier-language", currentLanguage);
    } catch (error) {
      console.warn("Could not save the language preference.", error);
    }
  });
});

// Mobile navigation controls, including keyboard dismissal.
const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open", !isExpanded);
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      menuButton.focus();
    }
  });
}

// Keep the footer copyright year current.
document.querySelectorAll("[data-current-year]").forEach((year) => {
  year.textContent = String(new Date().getFullYear());
});
