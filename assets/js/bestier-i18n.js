(() => {
  const translations = {
    'อีเมล': 'Email',
    'โรงแรมมีห้องพักทั้งหมด 40 ห้อง แบ่งเป็น Superior Twin 3 ห้อง, Superior King 21 ห้อง, Business 3 ห้อง, Triple 4 ห้อง และ Deluxe 9 ห้อง ตกแต่งในสไตล์พรีเมียม หรูหรา และทันสมัย': 'The hotel has 40 rooms across five types: 3 Superior Twin, 21 Superior King, 3 Business, 4 Triple, and 9 Deluxe rooms, with a premium, luxurious, and modern style.',
    'มินิบาร์ฟรี · กาต้มน้ำร้อน · ไดร์เป่าผม': 'Complimentary minibar · Kettle · Hair dryer',
    'กาแฟแคปซูลฟรี · ไดร์เป่าผม Dyson': 'Complimentary capsule coffee · Dyson hair dryer',
    'สิ่งอำนวยความสะดวกในห้องพัก': 'In-Room Amenities',
    'รายละเอียดที่ช่วยให้พักสบาย': 'Details for a Comfortable Stay',
    'เตรียมทุกอย่างไว้ให้พร้อม ตั้งแต่ของใช้ประจำวันไปจนถึงความบันเทิงในห้อง': 'Everything is ready for your stay, from everyday essentials to in-room entertainment.',
    'ความสะดวกในห้อง': 'In-Room Conveniences',
    'มินิบาร์ฟรี · กาต้มน้ำร้อน · เตารีดและที่รองรีด · ตู้เซฟ · ที่ชาร์จโทรศัพท์แบบดิจิทัล': 'Complimentary minibar · Kettle · Iron and ironing board · In-room safe · Digital phone charger',
    'พักผ่อนและความบันเทิง': 'Relaxation and Entertainment',
    'Smart TV ขนาด 55 นิ้ว รองรับ Netflix · เครื่องทำน้ำอุ่น · ไดร์เป่าผม': '55-inch Smart TV with Netflix · Water heater · Hair dryer',
    'ของใช้ในห้องพัก': 'Guest Essentials',
    'ร่ม · ไม้แขวนเสื้อ · ชุดแปรงสีฟันและยาสีฟัน · แชมพู · ครีมนวด · โลชั่น · สบู่เหลว · คัตตอนบัด · หวี · หมวกคลุมอาบน้ำ · เสื้อคลุมอาบน้ำ · ถุงซักรีด · รองเท้าแตะ · เครื่องชั่งน้ำหนัก · แฟ้มกระดาษและดินสอ': 'Umbrella · Hangers · Toothbrush and toothpaste · Shampoo · Conditioner · Lotion · Body wash · Cotton buds · Comb · Shower cap · Bathrobe · Laundry bag · Slippers · Weighing scale · Paper folder and pencil',
    'สิทธิพิเศษในบางประเภทห้อง': 'Room-Type Extras',
    'ห้อง Triple, Business และ Deluxe มีชุดกาแฟแคปซูลฟรีและไดร์เป่าผม Dyson': 'Triple, Business, and Deluxe rooms include complimentary capsule coffee and a Dyson hair dryer.',
    'ห้องพัก 40 ห้อง ใน 5 รูปแบบ ตกแต่งสไตล์พรีเมียม หรูหรา และทันสมัย พร้อม Wi-Fi ฟรี ที่จอดรถ และสิ่งอำนวยความสะดวกสำหรับผู้เข้าพัก': '40 rooms in five types, styled with premium, luxurious, and modern touches, plus free Wi-Fi, parking, and guest amenities.',
    'มีพื้นที่จอดรถสะดวกทั้งโซนด้านในและด้านนอกอาคาร': 'Convenient parking is available in both the indoor and outdoor areas.',
    'ที่จอดรถสะดวก มีพื้นที่จอดทั้งโซนด้านในและด้านนอกอาคาร': 'Convenient parking is available in both indoor and outdoor areas.',
    'มีลิฟต์ให้บริการ': 'Elevator available',
    'มี Welcome drink และน้ำดื่มฟรีบริเวณจุดเช็กอิน': 'Complimentary welcome drink and drinking water at check-in',
    'ข้อมูลก่อนเข้าพัก': 'Before Your Stay',
    'นโยบายการเข้าพัก': 'Stay Policies',
    'เตรียมข้อมูลให้พร้อมและตรวจสอบเงื่อนไขสำคัญก่อนเดินทาง': 'Prepare your details and review these important policies before travelling.',
    'เวลาเข้าพัก': 'Stay Times',
    'เช็กอินและเช็กเอาต์': 'Check-in and Check-out',
    '14:00 น. เป็นต้นไป': 'From 14:00',
    'ภายใน 12:00 น.': 'By 12:00',
    'โปรดแจ้งชื่อและนามสกุล แสดงบัตรประชาชน ใบขับขี่ หรือหนังสือเดินทาง และแจ้งทะเบียนรถตอนลงทะเบียน': 'Please provide your full name, present your national ID, driver’s license, or passport, and provide your vehicle registration number when checking in.',
    'เงินประกัน': 'Key Card Deposit',
    'มัดจำคีย์การ์ด': 'Key Card Deposit',
    '500 บาท': 'THB 500',
    'หรือ 50 ริงกิต / ห้อง': 'or MYR 50 per room',
    'ชำระเป็นเงินสดตอนเช็กอิน รับเงินคืนเมื่อคืนห้องและคีย์การ์ด โดยคืนให้ผู้ลงทะเบียนเข้าพักเท่านั้น': 'Pay in cash at check-in. The deposit is refunded when the room and key card are returned, to the registered guest only.',
    'ชำระเป็นเงินสดตอนเช็กอิน รับคืนเมื่อคืนห้องและคีย์การ์ด โดยคืนให้ผู้ลงทะเบียนเข้าพักเท่านั้น': 'Pay in cash at check-in. The deposit is refunded when the room and key card are returned, to the registered guest only.',
    'เช็กเอาต์ล่าช้า': 'Late Check-out',
    'ค่าธรรมเนียม': 'Fee',
    '200 บาท': 'THB 200',
    'ต่อชั่วโมง': 'per hour',
    'เริ่มคิดค่าธรรมเนียมตั้งแต่ 13:00 น. หากเกิน 3 ชั่วโมง คิดค่าห้องพักเป็น 1 วัน': 'The fee starts at 13:00. Staying more than 3 hours past check-out incurs a full day’s room charge.',
    'ข้อกำหนดระหว่างเข้าพัก': 'During Your Stay',
    'เพื่อดูแลห้องพักและผู้เข้าพักทุกท่าน': 'For the comfort of all guests',
    'ห้ามสูบบุหรี่ บุหรี่ไฟฟ้า และกัญชาภายในห้องพัก มีค่าปรับ 5,000 บาท': 'Smoking, vaping, and cannabis are prohibited in guest rooms. A THB 5,000 fee applies.',
    'ห้ามทำสีผมในห้องพัก หากผ้าเช็ดตัว ผ้าปูที่นอน หรืออุปกรณ์ของโรงแรมเสียหาย ผู้เข้าพักต้องรับผิดชอบ': 'Hair dyeing is not allowed in guest rooms. Guests are responsible for damage to towels, bed linen, or hotel property.',
    'ห้ามนำทุเรียน มังคุด และสัตว์เลี้ยงเข้ามาภายในโรงแรม': 'Durian, mangosteen, and pets are not allowed in the hotel.',
    'อีเมล:': 'Email:',
    'อีเมล: bestierhotel.hatyai@gmail.com': 'Email: bestierhotel.hatyai@gmail.com',
    'bestierhotel.hatyai@gmail.com': 'bestierhotel.hatyai@gmail.com',
    'ดูรูปห้องเพิ่มเติม': 'View more room photos',
    'ชมภาพพื้นที่ส่วนกลางและบริเวณรอบโรงแรม เพื่อประกอบการวางแผนเข้าพัก': 'Explore the hotel common areas and surroundings as you plan your stay.',
    'สวนและมุมนั่งพักกลางแจ้ง': 'Garden and outdoor seating',
    'เลือกห้องพักจาก 5 รูปแบบ พร้อมอินเทอร์เน็ตไร้สายฟรี ที่จอดรถส่วนตัว และสิ่งอำนวยความสะดวกสำหรับผู้เข้าพัก': 'Choose from five room types, with free wireless internet, private parking, and guest amenities.',
    'บรรยากาศโรงแรมเบสเทียร์': 'Bestier Hotel atmosphere',
    'บรรยากาศ': 'Atmosphere',
    'โรงแรม': 'Hotel',
    'โรงแรมตั้งอยู่ในหาดใหญ่': 'Located in Hat Yai',
    'ดูตำแหน่งและเส้นทางไปโรงแรมบนแผนที่': 'View the hotel location and directions on the map.',
    'เวลาเช็กอิน / เช็กเอาต์': 'Check-in / check-out times',
    'เช็กอิน 14:00 น. เป็นต้นไป': 'Check-in from 14:00',
    'เช็กเอาต์ไม่เกิน 12:00 น.': 'Check-out by 12:00',
    'บริการรถตุ๊กตุ๊กรับ–ส่งฟรี ภายในรัศมี 1 กิโลเมตร': 'Free tuk-tuk shuttle service within a 1-kilometer radius',
    'เมื่อส่งแบบฟอร์ม ระบบจะส่งคำขอไปยังอีเมลของโรงแรมเพื่อให้เจ้าหน้าที่ติดต่อกลับ คำขอนี้ยังไม่ถือเป็นการยืนยันการจอง': 'The form sends your enquiry to the hotel email so staff can follow up. This enquiry does not confirm a reservation.',
    'ข้อมูลในแบบฟอร์มจะถูกส่งผ่านผู้ให้บริการแบบฟอร์มภายนอกไปยังอีเมลของโรงแรมเพื่อดำเนินการตามคำขอ โดยไม่ถือเป็นการยืนยันการจอง': 'Your form details are sent through an external form service to the hotel email so the team can handle your enquiry. This does not confirm a reservation.',
    'หากส่งแบบฟอร์มไม่สำเร็จ โปรดติดต่อโรงแรมที่': 'If the form does not send, contact the hotel at',
    'กำลังส่งคำขอ กรุณารอสักครู่…': 'Sending your enquiry…',
    'ส่งคำขอเรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อแจ้งห้องว่างและราคา การส่งคำขอนี้ยังไม่ยืนยันการจอง': 'Your enquiry was sent. The hotel team will contact you about availability and rates. This does not confirm a reservation.',
    'ส่งคำขอไม่สำเร็จ โปรดลองอีกครั้ง หรือติดต่อโรงแรมผ่านอีเมลด้านล่าง': 'We could not send your enquiry. Please try again or contact the hotel using the email below.',
    'สอบถามห้องว่างและราคาได้ที่โรงแรม': 'Contact the hotel to check availability and rates.',
    'การจองจะสมบูรณ์เมื่อโรงแรมยืนยันแล้ว': 'Your reservation is complete once confirmed by the hotel.',
    'ดูภาพรวมประเภทห้องพัก': 'View the room type overview',
    'ราคาห้องพักอาจเปลี่ยนแปลงตามช่วงเวลา กรุณาสอบถามราคาและห้องว่างกับโรงแรมก่อนจอง': 'Room rates may vary by season. Please confirm rates and availability with the hotel before booking.',
    'WhatsApp': 'WhatsApp',
    'ห้องพักสำหรับผู้เข้าพัก 2 ท่าน เหมาะสำหรับผู้ที่ต้องการแยกเตียง พร้อมเตียงขนาด 3.5 ฟุต 2 เตียง': 'A room for two guests who prefer separate beds, with two 3.5-foot beds.',
    'ห้องพักสำหรับผู้เดินทางเพื่อธุรกิจ พร้อมเตียงขนาด 6 ฟุต 1 เตียง': 'A room for business travelers with one 6-foot bed.',
    'ห้องพักพร้อมพื้นที่นั่งเล่นและเตียงขนาด 6 ฟุต 1 เตียง': 'A room with a seating area and one 6-foot bed.',
    'ส่งคำขอสอบถามห้องพัก': 'Send a room enquiry',
    'หน้าแรก': 'Home',
    'ห้องพัก': 'Rooms',
    'บรรยากาศโรงแรม': 'Hotel Gallery',
    'ติดต่อ': 'Contact',
    'สำรองห้องพัก': 'Book a Room',
    'เปิดเมนู': 'Open menu',
    'เมนูหลัก': 'Main navigation',
    'โรงแรมเบสเทียร์ หาดใหญ่': 'Bestier Hotel, Hat Yai',
    'Bestier Hotel — โรงแรมเบสเทียร์ หาดใหญ่': 'Bestier Hotel — Hat Yai',
    'ที่พักในหาดใหญ่': 'A stay in Hat Yai',
    'โรงแรมเบสเทียร์': 'Bestier Hotel',
    'เบสเทียร์': 'Bestier Hotel',
    'ห้องพักและบริการสำหรับการเข้าพัก': 'Rooms and services for your stay',
    'ในอำเภอหาดใหญ่ จังหวัดสงขลา': 'in Hat Yai, Songkhla',
    'ยินดีต้อนรับ': 'Welcome',
    'ข้อมูลการเข้าพัก': 'Stay information',
    'หาดใหญ่ จังหวัดสงขลา': 'Hat Yai, Songkhla',
    'ค้นหาห้องพัก': 'Find a room',
    'รายละเอียดการเข้าพัก': 'Stay details',
    'เลือกวันเข้าพักและจำนวนผู้เข้าพัก': 'Select your dates and number of guests',
    'เช็กอิน': 'Check-in',
    'เช็กเอาต์': 'Check-out',
    'ผู้เข้าพัก': 'Guests',
    '1 ท่าน': '1 guest',
    '2 ท่าน': '2 guests',
    '3 ท่าน': '3 guests',
    '4 ท่าน': '4 guests',
    'เช็กห้องว่าง': 'Check availability',
    'เกี่ยวกับโรงแรม': 'About the hotel',
    'ข้อมูลโรงแรม': 'Hotel information',
    'โรงแรม': 'Hotel',
    'Bestier Hotel ให้บริการห้องพักในอำเภอหาดใหญ่ จังหวัดสงขลา': 'Bestier Hotel offers accommodation in Hat Yai, Songkhla.',
    'เลือกห้องพักที่ใช่จาก 5 รูปแบบ พร้อมฟรี Wi-Fi ที่จอดรถส่วนตัว และบริการครบวงจร': 'Choose from five room types, with free wireless internet, private parking, and hotel services.',
    'ข้อมูลติดต่อ': 'Contact information',
    'สวนและมุมนั่งพักกลางแจ้งของ Bestier Hotel': 'Outdoor garden and seating area at Bestier Hotel',
    'พื้นที่ส่วนกลางของ Bestier Hotel': 'Hotel common area',
    'ห้องพักของเรา': 'Our rooms',
    'เลือกห้องพัก': 'Choose a room',
    'ที่เหมาะกับคุณ': 'that suits you',
    'เลือกห้องพักตามจำนวนผู้เข้าพักและรูปแบบเตียง': 'Choose a room by guest capacity and bed arrangement.',
    'ภาพห้องพักทั้งห้ารูปแบบ': 'Photos of all five room types',
    'ดูห้องก่อนหน้า': 'Previous room',
    'ก่อนหน้า': 'Previous',
    'ดูห้องถัดไป': 'Next room',
    'ถัดไป': 'Next',
    'เลื่อนดูภาพห้องพัก': 'Scroll through room photos',
    'ซูพีเรียร์ คิง': 'Superior King',
    'ซูพีเรียร์ ทวิน': 'Superior Twin',
    'ทริปเปิล': 'Triple',
    'บิซิเนส': 'Business',
    'ดีลักซ์': 'Deluxe',
    'ผู้เข้าพัก 2 ท่าน · ฿1,290': '2 guests · ฿1,290',
    'ผู้เข้าพัก 3 ท่าน · ฿1,590': '3 guests · ฿1,590',
    'ผู้เข้าพัก 2 ท่าน · ฿1,690': '2 guests · ฿1,690',
    'ผู้เข้าพัก 2 ท่าน · ฿1,890': '2 guests · ฿1,890',
    'ผู้เข้าพัก 3 ท่าน': '3 guests',
    'ห้อง Superior King พร้อมเตียงคิงไซซ์': 'Superior King room with a king bed',
    'ห้อง Superior Twin พร้อมเตียงแยกสองเตียง': 'Superior Twin room with two separate beds',
    'ห้อง Superior Twin พร้อมเตียงคู่': 'Superior Twin room with two separate beds',
    'ห้อง Business สำหรับการเดินทางเพื่อธุรกิจ': 'Business room for business travelers',
    'ห้อง Deluxe โทนอบอุ่นพร้อมพื้นที่นั่งเล่น': 'Deluxe room with a warm tone and sitting area',
    'ห้อง Triple สำหรับผู้เข้าพักสามท่าน': 'Triple room for three guests',
    'ห้อง Business พร้อมเตียงขนาด 6 ฟุต': 'Business room with a 6-foot bed',
    'ห้อง Deluxe พร้อมพื้นที่นั่งเล่น': 'Deluxe room with a sitting area',
    'ใช้ปุ่มก่อนหน้าและถัดไป หรือปัดภาพเพื่อดูห้องพัก ·': 'Use the previous and next buttons, or swipe to browse rooms ·',
    'ดูรายละเอียดทั้งหมด': 'View all details',
    'ภาพและข้อมูลโรงแรม': 'Hotel photos and information',
    'ข้อมูล': 'Information',
    'ของโรงแรม': 'about the hotel',
    'ดูภาพพื้นที่ส่วนกลางและบรรยากาศของโรงแรม': 'Explore the hotel’s common areas and atmosphere.',
    'ดูบรรยากาศโรงแรม': 'Explore the hotel',
    'ข้อมูลโรงแรม Bestier Hotel': 'Bestier Hotel information',
    'ดูข้อมูลต่างๆของโรงแรม': 'Learn more about the hotel.',
    'ดูข้อมูลโรงแรม': 'View hotel information',
    'บริการของโรงแรม': 'Hotel services',
    'สิ่งอำนวยความสะดวก': 'Facilities',
    'บริการสำหรับ': 'Services for',
    'ดูข้อมูล Wi-Fi ที่จอดรถ แผนกต้อนรับ รถตุ๊กตุ๊กรับ-ส่ง และมินิบาร์ด้านล่าง': 'See details below about wireless internet, parking, reception, the tuk-tuk shuttle, and the minibar.',
    'อินเทอร์เน็ตไร้สาย': 'Wireless internet',
    'ที่จอดรถ': 'parking',
    'แผนกต้อนรับ': 'reception',
    'รถตุ๊กตุ๊กรับ-ส่ง': 'tuk-tuk shuttle',
    'และมินิบาร์ด้านล่าง': 'and minibar below.',
    'Wi-Fi ฟรี': 'Free wireless internet',
    'อินเทอร์เน็ตไร้สายฟรี พร้อมใช้งานทั่วพื้นที่โรงแรม': 'Free wireless internet is available throughout the hotel.',
    'ที่จอดรถส่วนตัว': 'Private parking',
    'ที่จอดรถส่วนตัวฟรี สะดวกสบายตลอดการเข้าพัก': 'Free private parking is available during your stay.',
    'แผนกต้อนรับ 24 ชั่วโมง': '24-hour reception',
    'แผนกต้อนรับพร้อมให้บริการตลอด 24 ชั่วโมง': 'Reception is available 24 hours a day.',
    'รถตุ๊กตุ๊กรับ-ส่งฟรีในรัศมี 1 กิโลเมตร เวลา 09:00–19:00 น.': 'Free tuk-tuk shuttle within a 1-kilometer radius, 09:00–19:00.',
    'มินิบาร์ฟรี': 'Complimentary minibar',
    'มินิบาร์ฟรีภายในห้องพัก': 'Complimentary minibar in the room.',
    'มุมตกแต่งบริเวณโถงของ Bestier Hotel': 'Decorative feature in the hotel lobby',
    'บรรยากาศและวิวของโรงแรม': 'Hotel atmosphere and views',
    'บรรยากาศและวิว': 'Hotel atmosphere and views',
    'ชมภาพพื้นที่ต้อนรับ มุมนั่งพัก และบริเวณรอบโรงแรม': 'See the reception area, lounge spaces, and hotel surroundings.',
    'ดูรูปภาพเพิ่มเติม': 'View more photos',
    'ภาพบรรยากาศ Bestier Hotel': 'Bestier Hotel atmosphere',
    'กลับขึ้นด้านบน': 'Back to top',
    'ภาพบรรยากาศโรงแรมเบสเทียร์': 'Bestier Hotel atmosphere',
    'พักสบายใจกลางหาดใหญ่': 'A comfortable stay in Hat Yai',
    'รู้จัก': 'Meet',
    'ยินดีต้อนรับสู่โรงแรมเบสเทียร์ · หาดใหญ่': 'Welcome to Bestier Hotel · Hat Yai',
    'เริ่มต้นการเข้าพักที่เคาน์เตอร์ต้อนรับ': 'Begin your stay at the reception desk',
    'พื้นที่พักผ่อนและสวนกลางแจ้ง': 'Outdoor garden and a place to unwind',
    'มุมนั่งพักภายในล็อบบี้': 'A quiet corner in the lobby',
    'เลือกห้องพักได้ 5 รูปแบบ พร้อมอินเทอร์เน็ตไร้สายฟรี ที่จอดรถส่วนตัว และสิ่งอำนวยความสะดวกสำหรับผู้เข้าพัก': 'Choose from five room types, with free Wi-Fi, private parking, and guest facilities.',
    'เคาน์เตอร์ต้อนรับของโรงแรม': 'Hotel reception desk',
    'สวนและมุมนั่งพักกลางแจ้งของโรงแรม': 'Hotel garden and outdoor seating area',
    'ภาพสไลด์': 'carousel',
    'ภาพ': 'slide',
    'ควบคุมภาพสไลด์': 'Slideshow controls',
    'เลือกภาพ': 'Choose a photo',
    'ภาพก่อนหน้า': 'Previous photo',
    'ภาพถัดไป': 'Next photo',
    'แสดงภาพที่ 1': 'Show photo 1',
    'แสดงภาพที่ 2': 'Show photo 2',
    'แสดงภาพที่ 3': 'Show photo 3',
    'แสดงภาพที่ 4': 'Show photo 4',
    'ภาพที่ 1 จาก 4': 'Photo 1 of 4',
    'ภาพที่ 2 จาก 4': 'Photo 2 of 4',
    'ภาพที่ 3 จาก 4': 'Photo 3 of 4',
    'ภาพที่ 4 จาก 4': 'Photo 4 of 4',
    'ที่ตั้งโรงแรม': 'Hotel location',
    'ที่ตั้งในหาดใหญ่': 'Located in Hat Yai',
    'ที่อยู่โรงแรม': 'Hotel address',
    'และแผนที่': 'and map',
    '116 ซอย 1 นิพัทธ์สงเคราะห์ 4 ตำบลหาดใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110': '116 Soi 1 Niphat Songkhro 4, Hat Yai, Songkhla 90110, Thailand',
    'เปิด Google Maps': 'Open map',
    'แผนที่ Bestier Hotel หาดใหญ่': 'Map to Bestier Hotel, Hat Yai',
    'สอบถามห้องพัก': 'Room enquiries',
    'ดูห้องว่าง': 'Check room availability',
    'และราคา': 'and rates',
    'ติดต่อเรา': 'Contact us',
    'ดูห้องพัก': 'View rooms',
    'ติดต่อ | Bestier Hotel': 'Contact | Bestier Hotel',
    'ที่อยู่ เบอร์โทรศัพท์ และข้อมูลการเดินทางไปยัง Bestier Hotel หาดใหญ่': 'Address, phone number, and directions to Bestier Hotel in Hat Yai.',
    'ตั้งอยู่ในหาดใหญ่': 'Located in Hat Yai',
    'ติดต่อโรงแรมเพื่อสอบถามข้อมูลห้องพัก การเดินทาง และบริการ': 'Contact the hotel for room, travel, and service information.',
    'ติดต่อเรา': 'Contact us',
    'ที่อยู่และแผนที่': 'Address and map',
    'ใช้แผนที่นี้เพื่อเปิดตำแหน่งโรงแรมและดูเส้นทาง': 'Open the map to view the hotel location and directions.',
    'เปิดแผนที่โรงแรม': 'Open hotel map',
    'ที่อยู่': 'Address',
    'โทรศัพท์': 'Phone',
    'อีเมล': 'Email',
    'ไลน์': 'LINE',
    'LINE': 'LINE',
    'เวลาเช็คอิน / เช็คเอาท์': 'Check-in / check-out times',
    'เช็คอิน 14:00 น. เป็นต้นไป': 'Check-in from 14:00',
    'เช็คเอาท์ไม่เกิน 12:00 น.': 'Check-out by 12:00',
    'สิ่งอำนวยความสะดวก': 'Facilities',
    'อินเทอร์เน็ตไร้สาย (Wi-Fi) ฟรี': 'Free wireless internet',
    'ที่จอดรถส่วนตัวฟรี': 'Free private parking',
    'แผนกต้อนรับบริการ 24 ชั่วโมง': '24-hour reception',
    'รถตุ๊กตุ๊กรับ-ส่งฟรีภายในรัศมี 1 กิโลเมตร': 'Free tuk-tuk shuttle within a 1-kilometer radius',
    'ให้บริการเวลา 09:00–19:00 น.': 'Available 09:00–19:00',
    'มินิบาร์ฟรีภายในห้องพัก': 'Complimentary minibar in the room',
    '116 ซอย 1 นิพัทธ์สงเคราะห์ 4 · หาดใหญ่ · สงขลา 90110': '116 Soi 1 Niphat Songkhro 4 · Hat Yai · Songkhla 90110',
    'สำรองห้องพัก | Bestier Hotel': 'Room enquiry | Bestier Hotel',
    'ส่งคำขอสำรองห้องพักกับ Bestier Hotel หาดใหญ่': 'Send a room enquiry to Bestier Hotel in Hat Yai.',
    'จองห้องพัก': 'Room enquiry',
    'ระบุวันเข้าพักและประเภทห้องที่สนใจ แล้วติดต่อโรงแรมเพื่อสอบถามห้องว่าง': 'Enter your stay dates and preferred room, then contact the hotel to check availability.',
    'ข้อมูลการจอง': 'Enquiry details',
    'จองที่พัก': 'Request a stay',
    'ชื่อผู้ติดต่อ': 'Your name',
    'เบอร์โทรศัพท์ (ไม่บังคับ)': 'Phone number (optional)',
    'ประเภทห้องที่สนใจ': 'Room type',
    'ยังไม่แน่ใจ': 'Not sure yet',
    'จำนวนผู้เข้าพัก': 'Number of guests',
    'คำขอเพิ่มเติม': 'Additional requests',
    'เช่น เวลาเดินทางถึง หรือความต้องการพิเศษ': 'For example, arrival time or special requests',
    'ติดต่อโรงแรมโดยตรง': 'Contact the hotel directly',
    'สอบถามข้อมูลกับโรงแรม': 'Ask the hotel',
    'กรุณาติดต่อโรงแรมโดยตรงเพื่อสอบถามห้องว่างและราคา': 'Contact the hotel directly to check availability and rates.',
    'เช็กอินตั้งแต่ 14:00 น. เป็นต้นไป': 'Check-in from 14:00',
    'เช็กเอาท์ไม่เกิน 12:00 น.': 'Check-out by 12:00',
    'ราคาและห้องว่างยืนยันโดยทีมงาน': 'Rates and availability are confirmed by the hotel team.',
    'การจองสมบูรณ์เมื่อได้รับการยืนยันจากโรงแรม': 'Your reservation is complete when confirmed by the hotel.',
    'เปิดแผนที่ Bestier': 'Open hotel map',
    'ติดต่อสำรองห้องพัก': 'Room enquiry contacts',
    'ห้องพัก | Bestier Hotel': 'Rooms | Bestier Hotel',
    'ดูประเภทห้อง จำนวนผู้เข้าพัก และราคาห้องพักของ Bestier Hotel หาดใหญ่': 'View room types, guest capacity, and rates at Bestier Hotel in Hat Yai.',
    'ประเภทห้องพัก': 'Room types',
    'รายละเอียดและราคาห้องพัก': 'Room details and rates',
    'และราคา': 'and rates',
    'เลือกดูภาพ รายละเอียด จำนวนผู้เข้าพัก และราคาของห้องพักแต่ละประเภท': 'Browse photos, details, guest capacity, and rates for each room type.',
    'เปรียบเทียบประเภทห้อง จำนวนผู้เข้าพัก และราคา แล้วติดต่อโรงแรมเพื่อตรวจสอบห้องว่าง': 'Compare room types, capacity, and rates, then contact the hotel to check availability.',
    '01 · ห้องพักเตียงคิงไซซ์': '01 · King room',
    'ห้องพักสำหรับผู้เข้าพัก 2 ท่าน พร้อมเตียงคิงไซซ์ 1 เตียง ขนาด 6 ฟุต': 'For two guests, with one 6-foot king bed.',
    'ผู้เข้าพัก 2 ท่าน': '2 guests',
    'ราคาปกติ ฿1,290': 'Standard rate ฿1,290',
    'สอบถามห้องนี้': 'Enquire about this room',
    '02 · ห้องพักเตียงคู่': '02 · Twin room',
    'ห้องเตียงคู่สำหรับผู้เข้าพัก 2 ท่าน เหมาะสำหรับผู้ที่ต้องการเตียงแยก เตียงแยก 2 เตียงขนาด 3.5 ฟุต': 'For two guests who prefer separate beds, with two 3.5-foot beds.',
    'ราคาปกติ ฿1,290': 'Standard rate ฿1,290',
    '03 · ห้องพักสำหรับ 3 ท่าน': '03 · Room for three',
    'รองรับผู้เข้าพัก 3 ท่าน พร้อมเตียงขนาด 6 ฟุต 1 เตียง และเตียงขนาด 3.5 ฟุต 1 เตียง': 'For three guests, with one 6-foot bed and one 3.5-foot bed.',
    'ราคาปกติ ฿1,590': 'Standard rate ฿1,590',
    '04 · ห้องพักสำหรับผู้เดินทางเพื่อธุรกิจ': '04 · Business room',
    'ห้องพักสำหรับผู้เดินทางเพื่อธุรกิจ เตียงเดี่ยว 1 เตียงขนาด 6 ฟุต': 'A room for business travellers, with one 6-foot bed.',
    'ราคาปกติ ฿1,690': 'Standard rate ฿1,690',
    '05 · ห้องพักพร้อมพื้นที่นั่งเล่น': '05 · Room with sitting area',
    'ห้องพักพร้อมพื้นที่นั่งเล่น เตียงเดี่ยว 1 เตียงขนาด 6 ฟุต': 'A room with a sitting area and one 6-foot bed.',
    'ราคาปกติ ฿1,890': 'Standard rate ฿1,890',
    'เปิดดูภาพรวมประเภทห้องพักจากโปสเตอร์โรงแรม': 'Open the hotel room overview poster',
    'โปสเตอร์รวมประเภทห้องพัก Bestier และรายละเอียดราคา': 'Bestier room types and rates poster',
    'กดภาพเพื่อเปิดรายละเอียดเต็มขนาด': 'Select the image to view it at full size',
    'ราคาปกติอ้างอิงจากภาพข้อมูลห้องพักที่ได้รับ อาจมีการเปลี่ยนแปลงหรือข้อเสนอเฉพาะช่วงเวลา': 'Standard rates are based on the hotel’s room information and may change or vary with seasonal offers.',
    'ราคาปกติอ้างอิงจากภาพข้อมูลห้องพักที่ได้รับ อาจมีการเปลี่ยนแปลงหรือข้อเสนอเฉพาะช่วงเวลา กรุณาสอบถามราคาและห้องว่างกับโรงแรมก่อนจอง': 'Standard rates are based on the hotel’s room information and may change or vary with seasonal offers. Please confirm rates and availability with the hotel before booking.',
    'กรุณาสอบถามราคาและห้องว่างกับโรงแรมก่อนจอง': 'Please confirm rates and availability with the hotel before booking.',
    'สอบถามข้อมูลการเข้าพัก': 'Ask about your stay',
    'แจ้งวันเข้าพักและประเภทห้องที่สนใจเพื่อสอบถามห้องว่าง': 'Share your stay dates and preferred room to check availability.',
    'เริ่มต้นจองห้องพัก': 'Start a room enquiry',
    'บรรยากาศโรงแรม | Bestier Hotel': 'Hotel gallery | Bestier Hotel',
    'ชมบรรยากาศและพื้นที่ต่าง ๆ ของ Bestier Hotel หาดใหญ่ ทั้งบริเวณต้อนรับ พื้นที่นั่งเล่น และด้านนอกอาคาร': 'Explore the reception, lounge, and outdoor areas at Bestier Hotel in Hat Yai.',
    'หน้าแรก Bestier Hotel': 'Bestier Hotel home',
    'ด้านหน้าอาคาร Bestier Hotel': 'Exterior of Bestier Hotel',
    'ด้านหน้าอาคารโรงแรมเบสเทียร์': 'Exterior of Bestier Hotel',
    'ด้านหน้าอาคารโรงแรม': 'Hotel exterior',
    'บรรยากาศ': 'Hotel atmosphere',
    'ชมพื้นที่ต้อนรับ มุมนั่งพัก และรายละเอียดภายในโรงแรม': 'Explore the reception, lounge spaces, and interior details.',
    'พื้นที่ภายในโรงแรม': 'Inside the hotel',
    'มุมต่าง ๆ สำหรับ': 'Spaces for',
    'การเข้าพัก': 'your stay',
    'รวมภาพบรรยากาศของพื้นที่ส่วนกลางและบริเวณรอบโรงแรม': 'A collection of photos of the hotel’s common areas and surroundings',
    'รวมภาพบรรยากาศของพื้นที่ส่วนกลางและบริเวณรอบโรงแรม เพื่อให้เห็นสถานที่จริงก่อนวางแผนเข้าพัก': 'A collection of photos of the hotel’s common areas and surroundings so you can see the property before planning your stay.',
    'เพื่อให้เห็นสถานที่จริงก่อนวางแผนเข้าพัก': 'so you can see the property before planning your stay.',
    'ภาพบรรยากาศภายในโรงแรม': 'Photos of the hotel',
    'สวนและพื้นที่นั่งเล่นกลางแจ้งของโรงแรม': 'Hotel garden and outdoor seating',
    'สวนและมุมนั่งเล่นกลางแจ้ง': 'Garden and outdoor seating',
    'เคาน์เตอร์ต้อนรับของ Bestier Hotel': 'Reception desk at Bestier Hotel',
    'เคาน์เตอร์ต้อนรับ': 'Reception desk',
    'พื้นที่นั่งพักภายในล็อบบี้': 'Seating area in the lobby',
    'พื้นที่นั่งพักในล็อบบี้': 'Lobby seating area',
    'มุมตกแต่งภายในโรงแรมและช่องแสงด้านข้าง': 'Interior feature and side windows',
    'รายละเอียดการตกแต่งภายใน': 'Interior details',
    'โถงทางเดินภายในโรงแรม': 'Hotel corridor',
    'โถงทางเดิน': 'Corridor',
    'บันไดและโถงภายในอาคาร': 'Staircase and interior landing',
    'พื้นที่ภายในอาคาร': 'Interior space',
    'รายละเอียดด้านหน้าอาคาร Bestier Hotel': 'Exterior details of Bestier Hotel',
    'สอบถามข้อมูลโรงแรม': 'Hotel enquiries',
    'ติดต่อทีมงานเพื่อสอบถามรายละเอียดห้องพักและบริการ': 'Contact our team for room and service information.',
    'ติดต่อโรงแรม': 'Contact the hotel',
    'กำลังเตรียมการเข้าพักของคุณ': 'Preparing your stay',
    'ห้องพักบรรยากาศสงบในโทนธรรมชาติ': 'A calm guest room in natural tones',
    'เปิดเมนูหลัก': 'Open main menu',
    'Facebook : BestierHotelHatyai': 'Facebook: BestierHotelHatyai',
    'Line : @bestier': 'Line: @bestier',
    'BESTIER HOTEL': 'BESTIER HOTEL'
  };

  const pageText = {
    'index.html': {
      title: ['โรงแรมเบสเทียร์ หาดใหญ่', 'Bestier Hotel — Hat Yai'],
      description: ['โรงแรมเบสเทียร์ หาดใหญ่ ที่พักพร้อมบริการและสิ่งอำนวยความสะดวกสำหรับการเข้าพัก', 'Bestier Hotel in Hat Yai, with guest rooms and hotel facilities.']
    },
    'rooms.html': {
      title: ['ห้องพัก | โรงแรมเบสเทียร์', 'Rooms | Bestier Hotel'],
      description: ['ดูประเภทห้อง จำนวนผู้เข้าพัก และราคาห้องพักของโรงแรมเบสเทียร์ หาดใหญ่', 'View room types, guest capacity, and rates at Bestier Hotel in Hat Yai.']
    },
    'view.html': {
      title: ['บรรยากาศโรงแรม | โรงแรมเบสเทียร์', 'Hotel gallery | Bestier Hotel'],
      description: ['ชมบรรยากาศและพื้นที่ต่าง ๆ ของโรงแรมเบสเทียร์ หาดใหญ่ ทั้งบริเวณต้อนรับ พื้นที่นั่งเล่น และด้านนอกอาคาร', 'Explore the reception, lounge, and outdoor areas at Bestier Hotel in Hat Yai.']
    },
    'contact.html': {
      title: ['ติดต่อ | โรงแรมเบสเทียร์', 'Contact | Bestier Hotel'],
      description: ['ที่อยู่ เบอร์โทรศัพท์ และข้อมูลการเดินทางไปยังโรงแรมเบสเทียร์ หาดใหญ่', 'Address, phone number, and directions to Bestier Hotel in Hat Yai.']
    },
    'booking.html': {
      title: ['สำรองห้องพัก | โรงแรมเบสเทียร์', 'Room enquiry | Bestier Hotel'],
      description: ['ส่งคำขอสำรองห้องพักกับโรงแรมเบสเทียร์ หาดใหญ่', 'Send a room enquiry to Bestier Hotel in Hat Yai.']
    }
  };

  const reverse = Object.fromEntries(Object.entries(translations).map(([th, en]) => [en, th]));
  const thaiOnly = {
    'WhatsApp': 'วอตส์แอป',
    'Bestier': 'เบสเทียร์',
    'Bestier Hotel': 'โรงแรมเบสเทียร์',
    'Superior King': 'ซูพีเรียร์ คิง',
    'Superior Twin': 'ซูพีเรียร์ ทวิน',
    'Triple': 'ทริปเปิล',
    'Business': 'บิซิเนส',
    'Deluxe': 'ดีลักซ์',
    'Wi-Fi': 'อินเทอร์เน็ตไร้สาย',
    'อินเทอร์เน็ตไร้สาย (Wi-Fi) ฟรี': 'อินเทอร์เน็ตไร้สายฟรี',
    'LINE': 'ไลน์',
    'Google Maps': 'แผนที่ออนไลน์',
    'BESTIER HOTEL': 'โรงแรมเบสเทียร์',
    '© 2026 BESTIER HOTEL. ALL RIGHTS RESERVED.': '© 2026 โรงแรมเบสเทียร์ สงวนลิขสิทธิ์ทั้งหมด',
    'Facebook : BestierHotelHatyai': 'เฟซบุ๊ก: BestierHotelHatyai',
    'Line : @bestier': 'ไลน์: @bestier',
    'Bestier Hotel — โรงแรมเบสเทียร์ หาดใหญ่': 'โรงแรมเบสเทียร์ หาดใหญ่',
    'Bestier Hotel offers accommodation in Hat Yai, Songkhla.': 'โรงแรมเบสเทียร์ให้บริการที่พักในอำเภอหาดใหญ่ จังหวัดสงขลา',
    'Bestier Hotel in Hat Yai, with guest rooms and hotel facilities.': 'โรงแรมเบสเทียร์ หาดใหญ่ พร้อมห้องพักและสิ่งอำนวยความสะดวก',
    '116 Soi 1 Niphat Songkhro 4, Hat Yai, Songkhla 90110, Thailand': '116 ซอย 1 นิพัทธ์สงเคราะห์ 4 ตำบลหาดใหญ่ อำเภอหาดใหญ่ จังหวัดสงขลา 90110',
    '116 Soi 1 Niphat Songkhro 4 · Hat Yai · Songkhla 90110': '116 ซอย 1 นิพัทธ์สงเคราะห์ 4 · หาดใหญ่ · สงขลา 90110',
    'Bestier Hotel, Hat Yai': 'โรงแรมเบสเทียร์ หาดใหญ่',
    'Bestier Hotel home': 'หน้าแรกโรงแรมเบสเทียร์',
    'Bestier Hotel · Hat Yai': 'โรงแรมเบสเทียร์ · หาดใหญ่',
    'A calm guest room in natural tones': 'ห้องพักบรรยากาศสงบในโทนธรรมชาติ',
    'หน้าแรก Bestier Hotel': 'หน้าแรกโรงแรมเบสเทียร์',
    'Bestier by Indigo Hat Yai Hotel': 'โรงแรมเบสเทียร์ หาดใหญ่',
    'สวนและมุมนั่งพักกลางแจ้งของ Bestier Hotel': 'สวนและมุมนั่งพักกลางแจ้งของโรงแรมเบสเทียร์',
    'พื้นที่ส่วนกลางของ Bestier Hotel': 'พื้นที่ส่วนกลางของโรงแรมเบสเทียร์',
    'มุมตกแต่งบริเวณโถงของ Bestier Hotel': 'มุมตกแต่งบริเวณโถงของโรงแรมเบสเทียร์',
    'แผนที่ Bestier Hotel หาดใหญ่': 'แผนที่โรงแรมเบสเทียร์ หาดใหญ่',
    'ติดต่อ | Bestier Hotel': 'ติดต่อ | โรงแรมเบสเทียร์',
    'ห้องพัก | Bestier Hotel': 'ห้องพัก | โรงแรมเบสเทียร์',
    'บรรยากาศโรงแรม | Bestier Hotel': 'บรรยากาศโรงแรม | โรงแรมเบสเทียร์',
    'สำรองห้องพัก | Bestier Hotel': 'สำรองห้องพัก | โรงแรมเบสเทียร์',
    'ห้อง Superior King พร้อมเตียงคิงไซซ์': 'ห้องซูพีเรียร์ คิง พร้อมเตียงคิงไซซ์',
    'ห้อง Superior Twin พร้อมเตียงคู่': 'ห้องซูพีเรียร์ ทวิน พร้อมเตียงคู่',
    'ห้อง Triple สำหรับผู้เข้าพักสามท่าน': 'ห้องทริปเปิล สำหรับผู้เข้าพักสามท่าน',
    'ห้อง Business สำหรับการเดินทางเพื่อธุรกิจ': 'ห้องบิซิเนส สำหรับผู้เดินทางเพื่อธุรกิจ',
    'ห้อง Deluxe โทนอบอุ่นพร้อมพื้นที่นั่งเล่น': 'ห้องดีลักซ์โทนอบอุ่นพร้อมพื้นที่นั่งเล่น',
    'โปสเตอร์รวมประเภทห้องพัก Bestier และรายละเอียดราคา': 'โปสเตอร์รวมประเภทห้องพักเบสเทียร์และรายละเอียดราคา',
    'ด้านหน้าอาคาร Bestier Hotel': 'ด้านหน้าอาคารโรงแรมเบสเทียร์',
    'เคาน์เตอร์ต้อนรับของ Bestier Hotel': 'เคาน์เตอร์ต้อนรับของโรงแรมเบสเทียร์',
    'รายละเอียดด้านหน้าอาคาร Bestier Hotel': 'รายละเอียดด้านหน้าอาคารโรงแรมเบสเทียร์',
    'ชมบรรยากาศและพื้นที่ต่าง ๆ ของ Bestier Hotel หาดใหญ่ ทั้งบริเวณต้อนรับ พื้นที่นั่งเล่น และด้านนอกอาคาร': 'ชมบรรยากาศและพื้นที่ต่าง ๆ ของโรงแรมเบสเทียร์ หาดใหญ่ ทั้งบริเวณต้อนรับ พื้นที่นั่งเล่น และด้านนอกอาคาร',
    'ได้โดยตรง': 'ได้โดยตรง'
  };
  const langKey = 'bestierLanguage';
  const getInitialLanguage = () => {
    try {
      const saved = sessionStorage.getItem(langKey);
      if (saved === 'th' || saved === 'en') return saved;
    } catch { /* Storage may be unavailable. */ }
    return (navigator.languages || [navigator.language]).some((language) => /^th(?:-|$)/i.test(language)) ? 'th' : 'en';
  };
  let language = getInitialLanguage();

  const translateValue = (value, targetLanguage) => {
    if (targetLanguage === 'en') return translations[value] || value;
    return thaiOnly[value] || reverse[value] || value
      .replace(/Bestier Hotel/gi, 'โรงแรมเบสเทียร์')
      .replace(/Bestier/gi, 'เบสเทียร์')
      .replace(/Superior King/gi, 'ซูพีเรียร์ คิง')
      .replace(/Superior Twin/gi, 'ซูพีเรียร์ ทวิน')
      .replace(/Triple/gi, 'ทริปเปิล')
      .replace(/Business/gi, 'บิซิเนส')
      .replace(/Deluxe/gi, 'ดีลักซ์')
      .replace(/Wi-Fi/gi, 'อินเทอร์เน็ตไร้สาย')
      .replace(/Google Maps/gi, 'แผนที่ออนไลน์')
      .replace(/Hat Yai/gi, 'หาดใหญ่');
  };

  const applyLanguage = (targetLanguage) => {
    language = targetLanguage;
    document.documentElement.lang = language;
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (textWalker.nextNode()) {
      const node = textWalker.currentNode;
      if (node.parentElement?.closest('[data-no-translate]')) continue;
      if (!node.__bestierSourceText) node.__bestierSourceText = node.nodeValue.replace(/\s+/g, ' ').trim();
      const source = node.__bestierSourceText;
      if (!source) continue;
      const translated = translateValue(source, language);
      const leading = node.nodeValue.match(/^\s*/)?.[0] || '';
      const trailing = node.nodeValue.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${translated}${trailing}`;
    }

    document.querySelectorAll('[alt], [aria-label], [aria-roledescription], [title], [placeholder]').forEach((element) => {
      ['alt', 'aria-label', 'aria-roledescription', 'title', 'placeholder'].forEach((attribute) => {
        if (!element.hasAttribute(attribute)) return;
        const sourceAttribute = attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
        const sourceKey = `bestierSource${sourceAttribute}`;
        if (!(sourceKey in element.dataset)) element.dataset[sourceKey] = element.getAttribute(attribute);
        element.setAttribute(attribute, translateValue(element.dataset[sourceKey], language));
      });
    });

    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    const metadata = pageText[pageName];
    if (metadata) {
      document.title = metadata.title[language === 'en' ? 1 : 0];
      const description = document.querySelector('meta[name="description"]');
      if (description) description.content = metadata.description[language === 'en' ? 1 : 0];
    }

    document.querySelectorAll('.brand-logo').forEach((logo) => {
      const link = logo.closest('.wordmark');
      if (!link) return;
      let localName = link.querySelector('.localized-brand-name');
      if (!localName) {
        localName = document.createElement('span');
        localName.className = 'localized-brand-name';
        link.append(localName);
      }
      logo.hidden = language === 'th';
      localName.hidden = language !== 'th';
    });

    document.querySelectorAll('.room-poster').forEach((poster) => {
      poster.hidden = language === 'th';
    });
    document.querySelectorAll('.location-map').forEach((map) => {
      const mapUrl = new URL(map.src);
      mapUrl.searchParams.set('hl', language);
      map.src = mapUrl.toString();
    });

    let toggle = document.querySelector('.language-toggle');
    const nav = document.querySelector('#primary-nav');
    if (!toggle && nav) {
      toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = 'language-toggle';
      toggle.addEventListener('click', () => {
        const nextLanguage = language === 'th' ? 'en' : 'th';
        try { sessionStorage.setItem(langKey, nextLanguage); } catch { /* Storage may be unavailable. */ }
        applyLanguage(nextLanguage);
      });
      nav.append(toggle);
    }
    if (toggle) {
      toggle.innerHTML = `<span class="language-option${language === 'th' ? ' is-active' : ''}" lang="th">TH</span><span aria-hidden="true">|</span><span class="language-option${language === 'en' ? ' is-active' : ''}" lang="en">EN</span>`;
      toggle.setAttribute('aria-label', language === 'th' ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai');
    }
    document.dispatchEvent(new CustomEvent('bestierlanguagechange', { detail: { language } }));
  };

  applyLanguage(language);
})();
