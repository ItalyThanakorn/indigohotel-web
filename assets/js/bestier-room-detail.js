(() => {
  const rooms = {
    'superior-king': {
      nameEn: 'Superior King', nameTh: 'ซูพีเรียร์ คิง',
      descriptionEn: 'A room for two guests with one 6-foot king bed.',
      descriptionTh: 'ห้องพักสำหรับผู้เข้าพัก 2 ท่าน พร้อมเตียงคิงไซซ์ 1 เตียง ขนาด 6 ฟุต',
      booking: 'Superior King', photos: ['superiorking.jpg', 'superiorking2.jpg', 'superiorking3.jpg', 'superiorking4.jpg', 'superiorking5.jpg', 'superiorking6.jpg', 'superiorking7.jpg', 'superiorking8.jpg']
    },
    'superior-twin': {
      nameEn: 'Superior Twin', nameTh: 'ซูพีเรียร์ ทวิน',
      descriptionEn: 'A room for two guests with two separate 3.5-foot beds.',
      descriptionTh: 'ห้องพักสำหรับผู้เข้าพัก 2 ท่าน พร้อมเตียงขนาด 3.5 ฟุต 2 เตียง',
      booking: 'Superior Twin', photos: ['superiortwin.jpg', 'superiortwin2.jpg', 'superiortwin3.jpg', 'superiortwin4.jpg', 'superiortwin5.jpg']
    },
    triple: {
      nameEn: 'Triple', nameTh: 'ทริปเปิล',
      descriptionEn: 'A room for three guests with one 6-foot bed and one 3.5-foot bed.',
      descriptionTh: 'ห้องพักสำหรับผู้เข้าพัก 3 ท่าน พร้อมเตียงขนาด 6 ฟุต 1 เตียง และเตียงขนาด 3.5 ฟุต 1 เตียง',
      booking: 'Triple', photos: ['triple.jpg', 'triple2.jpg']
    },
    business: {
      nameEn: 'Business', nameTh: 'บิซิเนส',
      descriptionEn: 'A room for business travelers with one 6-foot bed.',
      descriptionTh: 'ห้องพักสำหรับผู้เดินทางเพื่อธุรกิจ พร้อมเตียงขนาด 6 ฟุต 1 เตียง',
      booking: 'Business', photos: ['business.jpg', 'business2.jpg', 'business3.jpg', 'business4.jpg', 'business5.jpg', 'business6.jpg', 'business7.jpg', 'business8.jpg', 'business9.jpg', 'business10.jpg', 'business11.jpg', 'business12.jpg', 'business13.jpg', 'business14.jpg', 'business15.jpg', 'business16.jpg']
    },
    deluxe: {
      nameEn: 'Deluxe', nameTh: 'ดีลักซ์',
      descriptionEn: 'A room with a seating area and one 6-foot bed.',
      descriptionTh: 'ห้องพักพร้อมพื้นที่นั่งเล่นและเตียงขนาด 6 ฟุต 1 เตียง',
      booking: 'Deluxe', photos: ['deluxe.jpg', 'deluxe2.jpg', 'deluxe3.jpg', 'deluxe4.jpg', 'deluxe5.jpg', 'deluxe6.jpg', 'deluxe7.jpg', 'deluxe8.jpg']
    }
  };

  const params = new URLSearchParams(window.location.search);
  const room = rooms[params.get('room')];
  if (!room) {
    window.location.replace('rooms.html');
    return;
  }

  const pageDescription = document.querySelector('#roomDetailDescription');
  const pageTitle = document.querySelector('#roomDetailTitle');
  const gallery = document.querySelector('#roomDetailGallery');
  const bookingLink = document.querySelector('#roomDetailBooking');

  const render = () => {
    const isThai = document.documentElement.lang === 'th';
    const roomName = isThai ? room.nameTh : room.nameEn;
    const roomDescription = isThai ? room.descriptionTh : room.descriptionEn;
    document.title = isThai ? `ห้อง${room.nameTh} | โรงแรมเบสเทียร์` : `${room.nameEn} Room | Bestier Hotel`;
    document.querySelector('meta[name="description"]').content = isThai
      ? `ชมภาพห้อง${room.nameTh} เพิ่มเติมของโรงแรมเบสเทียร์ หาดใหญ่`
      : `View more photos of the ${room.nameEn} room at Bestier Hotel in Hat Yai.`;
    pageTitle.textContent = isThai ? `ห้อง${room.nameTh}` : `${room.nameEn} Room`;
    pageDescription.textContent = roomDescription;
    document.querySelector('#roomDetailEyebrow').textContent = isThai ? 'รายละเอียดห้องพัก' : 'Room details';
    document.querySelector('#roomDetailBack').textContent = isThai ? 'กลับไปดูห้องพักทั้งหมด' : 'Back to all rooms';
    document.querySelector('#roomPhotoLabel').textContent = isThai ? 'ภาพห้องพัก' : 'Room photos';
    document.querySelector('#roomDetailCtaTitle').textContent = isThai ? 'สนใจห้องพักนี้หรือไม่' : 'Interested in this room?';
    document.querySelector('#roomDetailCtaDescription').textContent = isThai
      ? 'สอบถามห้องว่างและข้อมูลการเข้าพักกับโรงแรม'
      : 'Contact the hotel to ask about availability and your stay.';
    bookingLink.textContent = isThai ? 'สอบถามห้องนี้' : 'Enquire about this room';
    bookingLink.href = `booking.html?room=${encodeURIComponent(room.booking)}`;
    gallery.replaceChildren(...room.photos.map((photo, index) => {
      const figure = document.createElement('figure');
      figure.className = 'room-detail-photo';
      const link = document.createElement('a');
      link.href = `../assets/images/bestier/${photo}`;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const image = document.createElement('img');
      image.src = link.href;
      image.loading = 'lazy';
      image.decoding = 'async';
      image.alt = isThai
        ? `ห้อง${room.nameTh} ภาพที่ ${index + 1}`
        : `${room.nameEn} room, photo ${index + 1}`;
      link.append(image);
      figure.append(link);
      return figure;
    }));
  };

  render();
  document.addEventListener('bestierlanguagechange', render);
})();
