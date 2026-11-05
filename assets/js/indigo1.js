const siteBase = document.currentScript?.dataset.siteBase || '';

// --- Bilingual System ---
        function getInitialLanguage() {
            const savedLang = localStorage.getItem('indigo_lang');
            if (savedLang) return savedLang;

            const browserLang = navigator.language || navigator.userLanguage;
            return (browserLang && browserLang.toLowerCase().startsWith('th')) ? 'th' : 'en';
        }
let currentLang = getInitialLanguage();
        let activeHotelId = null;
        let hotelNavigationTimer = null;

        // 1. Translations
        const translations = {
            th: {
                slogan: 'ใกล้ที่ไหน พักที่นั่น ความสบายระดับพรีเมียมรอคุณอยู่ทุกสาขา',
                btn_explore: 'เข้าชม',
                btn_waitlist: 'เร็วๆนี้',
                btn_contact_short: 'ติดต่อ',
                modal_contact_title: 'ติดต่อเรา',
                loading_desc_prefix: 'กำลังเข้าสู่',
                loading_coming_soon: 'Coming Soon! เปิดบริการเร็วๆนี้',
                label_map: 'แผนที่ & ที่ตั้ง',
                label_phone: 'Call Center (074-813380)',
                label_line: 'LINE Official',
                label_whatsapp: 'WhatsApp',
                label_facebook: 'Facebook',
                fb_desc: 'ติดตามข่าวสาร & ทักแชท'
            },
            en: {
                slogan: 'Premium comfort awaits you at all 5 locations.',
                btn_explore: 'Explore',
                btn_waitlist: 'Soon',
                btn_contact_short: 'Contact',
                modal_contact_title: 'Contact Us',
                loading_desc_prefix: 'Entering',
                loading_coming_soon: 'Coming Soon! Opening Soon.',
                label_map: 'Map & Location',
                label_phone: 'Call Center (074-813380)',
                label_line: 'LINE Official',
                label_whatsapp: 'WhatsApp',
                label_facebook: 'Facebook',
                fb_desc: 'Visit our page & Inbox'
            }
        };

        // 2. Hotel Data
        const hotelData = {
            'indigo-hatyai': {
                label: { th: 'City Hotel', en: 'City Hotel' },
                name: { th: 'โรงแรมอินดิโก้ หาดใหญ่', en: 'Indigo Hotel Hat Yai' },
                modalName: { th: '1. Indigo Hotel Hat Yai', en: '1. Indigo Hotel Hat Yai' },
                hoverDesc: { th: 'ห้องใหญ่ ที่จอดรถสะดวก<br>ถนนเพชรเกษม เยื้อง BigC extra', en: 'Big rooms, Convenient parking<br>Phetkasem Rd, opposite BigC extra' },
                modalDesc: { th: 'สาขา 1: ถนนเพชรเกษม เยื้อง BigC extra', en: 'Branch 1: Phetkasem Road' },
                phone: { th: '074-813380 (กด 1)', en: '074-813380 (Press 1)' },
                phoneRaw: '074813380',
                line: '@indigohotel',
                lineUrl: 'https://line.me/ti/p/@indigohotel',
                mapUrl: 'https://maps.google.com/?q=Indigo+Hotel+Hatyai',
                address: { th: 'ถนนเพชรเกษม เยื้อง BigC extra', en: 'Phetkasem Road, opposite BigC extra' },
                whatsapp: 'https://wa.me/66826648886',
                facebookUrl: 'https://www.facebook.com/profile.php?id=61553135427528', 
                colorClass: 'text-indigo',
                iconHtml: '<i class="fa-solid fa-city text-indigo fa-shake" style="--fa-animation-duration: 3s;"></i>',
                barClass: 'bg-primary',
                barColor: '#c4b5fd',
                targetUrl: 'https://indigohatyai.com/index-hotel.html',
                isComingSoon: false
            },
            'indigo-hatyai-2': {
                label: { th: 'เขต 8', en: 'Khet 8' },
                name: { th: 'โรงแรมอินดิโก้ หาดใหญ่ 2', en: 'Indigo Hotel Hat Yai 2' },
                modalName: { th: '2. Indigo Hotel Hat Yai 2', en: '2. Indigo Hotel Hat Yai 2' },
                hoverDesc: { th: 'ห้องใหม่ ราคาสบายกระเป๋า<br>พิกัด เขต 8', en: 'New rooms, Affordable prices<br>Khet 8 Area' },
                modalDesc: { th: 'สาขา 2: พิกัด เขต 8', en: 'Branch 2: Khet 8 Area' },
                phone: { th: '074-813380 (กด 2)', en: '074-813380 (Press 2)' },
                phoneRaw: '074813380',
                line: '@indigohotel2',
                lineUrl: 'https://line.me/ti/p/@indigohotel2',
                mapUrl: 'https://maps.google.com/?q=Indigo+Hotel+Hatyai+2', 
                address: { th: 'พิกัด เขต 8', en: 'Khet 8 Area' },
                whatsapp: 'https://wa.me/66921700008',
                facebookUrl: '', 
                colorClass: 'text-indigo2',
                iconHtml: '<i class="fa-solid fa-building text-indigo2 fa-bounce" style="--fa-animation-duration: 3s;"></i>',
                barClass: 'bg-primary',
                barColor: '#a5b4fc',
                targetUrl: `${siteBase}indigo2/index.html`,
                isComingSoon: false
            },
            'indigo-hatyai-3': {
                label: { th: 'เร็วๆ นี้', en: 'Opening Soon' },
                name: { th: 'โรงแรมอินดิโก้ หาดใหญ่ 3', en: 'Indigo Hotel Hat Yai 3' },
                modalName: { th: '3. Indigo Hotel Hat Yai 3', en: '3. Indigo Hotel Hat Yai 3' },
                hoverDesc: { th: 'ใจกลางเมือง ย่านธุรกิจการค้า<br>โซนลีการ์เดนส์ พลาซ่า', en: 'City Center, Business District<br>Lee Gardens Plaza Zone' },
                modalDesc: { th: 'สาขา 3: โซนลีการ์เดนส์ พลาซ่า (เร็วๆนี้)', en: 'Branch 3: Lee Gardens Plaza (Soon)' },
                phone: '', 
                line: '',
                lineUrl: '',
                mapUrl: 'https://maps.google.com/?q=Lee+Gardens+Plaza+Hatyai',
                address: { th: 'โซนลีการ์เดนส์ พลาซ่า', en: 'Lee Gardens Plaza Zone' },
                whatsapp: '',
                facebookUrl: '', 
                colorClass: 'text-indigo3',
                iconHtml: '<i class="fa-solid fa-hotel text-indigo3 fa-fade" style="--fa-animation-duration: 2s;"></i>',
                barClass: 'bg-secondary',
                barColor: '#e0e7ff',
                targetUrl: `${siteBase}indigo3/index.html`,
                isComingSoon: false
            },
            'bestier': {
                label: { th: 'Luxury', en: 'Luxury' },
                name: { th: 'Bestier', en: 'Bestier' },
                sub: { th: 'By Indigo Hatyai', en: 'By Indigo Hatyai' },
                modalName: { th: '4. Bestier By Indigo Hatyai', en: '4. Bestier By Indigo Hatyai' },
                hoverDesc: { th: 'ห้องพักหรูหรา สไตล์พรีเมี่ยม<br>ถ.นิพัทธ์สงเคราะห์ 4 (หลัง ร.ร ญว)', en: 'Luxury rooms, Premium style<br>Nipat Songkhraw 4 Rd.' },
                modalDesc: { th: 'สาขา 4: ถ.นิพัทธ์สงเคราะห์ 4', en: 'Branch 4: Nipat Songkhraw 4 Rd.' },
                phone: { th: '074-813380 (กด 4)', en: '074-813380 (Press 4)' },
                phoneRaw: '074813380',
                line: '@bestier',
                lineUrl: 'https://line.me/ti/p/@bestier',
                mapUrl: 'https://maps.app.goo.gl/VKP1nrbNQ7dc6dJy8',
                address: { th: '116 ซอย 1 นิพัทธ์สงเคราะห์ 4 ต.หาดใหญ่ อ.หาดใหญ่ สงขลา 90110', en: '116 Soi 1, Niphat Songkhro 4, Hat Yai, Songkhla 90110' },
                whatsapp: 'https://wa.me/66921500002',
                facebookUrl: 'https://www.facebook.com/BestierHotelHatyai', 
                colorClass: 'text-bestier',
                iconHtml: '<i class="fa-solid fa-crown text-bestier fa-bounce" style="--fa-animation-duration: 3s;"></i>',
                barClass: 'bg-warning',
                barColor: '#fde047',
                targetUrl: `${siteBase}bestier/index.html`,
                isComingSoon: false
            },
            'pool-villa': {
                label: { th: 'Available', en: 'Available' },
                name: { th: 'อินดิโก้ บีชฟรอนท์ พูลวิลล่า', en: 'Indigo Beachfront Pool Villa' },
                modalName: { th: '5. Indigo Beachfront Pool Villa', en: '5. Indigo Beachfront Pool Villa' },
                hoverDesc: { th: 'พูลวิลล่าแบบส่วนตัว ติดชายหาด<br>หาดม่วงงาม อ.สิงหนคร', en: 'Private beachfront pool villa<br>Muang Ngam Beach, Singhanakhon' },
                modalDesc: { th: 'สาขา 5: หาดม่วงงาม อ.สิงหนคร', en: 'Branch 5: Muang Ngam Beach' },
                phone: { th: '074-813380 (กด 0)', en: '074-813380 (Press 0)' },
                phoneRaw: '074813380', 
                line: '@indigovilla',
                lineUrl: 'https://line.me/ti/p/@indigovilla',
                mapUrl: 'https://maps.google.com/?q=Muang+Ngam+Beach+Songkhla',
                address: { th: 'หาดม่วงงาม อ.สิงหนคร', en: 'Muang Ngam Beach, Singhanakhon' },
                whatsapp: '',
                facebookUrl: 'https://www.facebook.com/indigopoolvilla', 
                colorClass: 'text-beach',
                iconHtml: '<i class="fa-solid fa-water text-beach fa-beat-fade" style="--fa-animation-duration: 3s;"></i>',
                barClass: 'bg-info',
                barColor: '#67e8f9',
                targetUrl: `${siteBase}indigopoolvilla1/index.html`,
                isComingSoon: false
            }
        };

        function setLanguage(lang) {
            currentLang = lang;
            localStorage.setItem('indigo_lang', currentLang); 
            updateUI();
            
            if (activeHotelId && document.getElementById('contactModal').classList.contains('show')) {
                openContactModal(null, activeHotelId);
            }
        }

        function updateUI() {
            document.getElementById('btn-th').classList.toggle('active', currentLang === 'th');
            document.getElementById('btn-en').classList.toggle('active', currentLang === 'en');

            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[currentLang][key]) {
                    el.innerHTML = translations[currentLang][key];
                }
            });

            document.querySelectorAll('[data-hotel-id]').forEach(el => {
                const hotelId = el.getAttribute('data-hotel-id');
                const prop = el.getAttribute('data-hotel-prop');
                if (hotelData[hotelId] && hotelData[hotelId][prop]) {
                    el.innerHTML = hotelData[hotelId][prop][currentLang];
                }
            });
        }

        function openContactModal(event, hotelId) {
            if (event) event.stopPropagation(); 
            activeHotelId = hotelId; 
            
            const data = hotelData[hotelId];
            const t = translations[currentLang]; 

            const modalEl = document.getElementById('contactModal');
            const title = document.getElementById('contactModalTitle');
            const desc = document.getElementById('contactModalDesc');
            const list = document.getElementById('contactList');
            const modal = new bootstrap.Modal(modalEl);
            if (hotelNavigationTimer) clearTimeout(hotelNavigationTimer);

            title.innerHTML = `<i class="fa-solid fa-hotel me-2 ${data.colorClass}"></i> ${data.modalName[currentLang]}`;
            desc.innerText = data.modalDesc[currentLang];

            let htmlContent = '';

            if (data.mapUrl && data.mapUrl !== '#' && data.mapUrl.trim() !== '') {
                htmlContent += `
                <a href="${data.mapUrl}" target="_blank">
                    <div class="contact-icon-wrapper"><i class="fa-solid fa-location-dot fa-lg text-danger"></i></div>
                    <div>
                        <span class="d-block fw-semibold text-white">${t.label_map}</span>
                        <span class="d-block small text-white-50">${data.address[currentLang]}</span>
                    </div>
                </a>`;
            }

            let phoneText = typeof data.phone === 'object' ? data.phone[currentLang] : data.phone;
            if (phoneText && phoneText.trim() !== '') {
                htmlContent += `
                <a href="tel:${data.phoneRaw}">
                    <div class="contact-icon-wrapper"><i class="fa-solid fa-phone fa-lg text-primary"></i></div>
                    <div>
                        <span class="d-block fw-semibold text-white">${t.label_phone}</span>
                        <span class="d-block small text-white-50">${phoneText}</span>
                    </div>
                </a>`;
            }

            if (data.lineUrl && data.lineUrl.trim() !== '') {
                htmlContent += `
                <a href="${data.lineUrl}" target="_blank">
                    <div class="contact-icon-wrapper"><i class="fa-brands fa-line fa-xl text-success"></i></div>
                    <div>
                        <span class="d-block fw-semibold text-white">${t.label_line}</span>
                        <span class="d-block small text-white-50">${data.line}</span>
                    </div>
                </a>`;
            }

            if (data.whatsapp && data.whatsapp.trim() !== '') {
                htmlContent += `
                <a href="${data.whatsapp}" target="_blank">
                    <div class="contact-icon-wrapper"><i class="fa-brands fa-whatsapp fa-xl text-success"></i></div>
                    <div>
                        <span class="d-block fw-semibold text-white">${t.label_whatsapp}</span>
                        <span class="d-block small text-white-50">Chat with us</span>
                    </div>
                </a>`;
            }

            if (data.facebookUrl && data.facebookUrl.trim() !== '' && data.facebookUrl !== '#') {
                htmlContent += `
                <a href="${data.facebookUrl}" target="_blank">
                    <div class="contact-icon-wrapper"><i class="fa-brands fa-facebook fa-xl" style="color: #1877F2;"></i></div>
                    <div>
                        <span class="d-block fw-semibold text-white">${t.label_facebook}</span>
                        <span class="d-block small text-white-50">${t.fb_desc}</span>
                    </div>
                </a>`;
            }

            if (htmlContent === '') {
                 htmlContent = `<p class="text-white-50 text-center small mt-2 opacity-50">More information coming soon.</p>`;
            }

            list.innerHTML = htmlContent;
            modal.show();
        }

        function selectHotel(hotelId) {
            const data = hotelData[hotelId];
            const t = translations[currentLang];
            if (!data) return;

            const modalEl = document.getElementById('loadingModal');
            const title = document.getElementById('modalTitle');
            const desc = document.getElementById('modalDesc');
            const icon = document.getElementById('modalIcon');
            const bar = document.getElementById('progressBar');
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);

            if (hotelNavigationTimer) clearTimeout(hotelNavigationTimer);
            bar.style.width = '0%';
            bar.className = `progress-bar ${data.barClass}`;
            bar.style.backgroundColor = data.barColor;
            title.innerText = data.name[currentLang];
            icon.innerHTML = data.iconHtml;
            desc.innerText = data.isComingSoon
                ? t.loading_coming_soon
                : `${t.loading_desc_prefix} ${data.name[currentLang]}...`;

            modal.show();
            setTimeout(() => { bar.style.width = '100%'; }, 100);

            hotelNavigationTimer = setTimeout(() => {
                hotelNavigationTimer = null;
                modal.hide();
                if (!data.isComingSoon && data.targetUrl) {
                    window.location.href = data.targetUrl;
                }
            }, 1500);
        }
        document.getElementById('loadingModal').addEventListener('hidden.bs.modal', () => {
            if (hotelNavigationTimer) {
                clearTimeout(hotelNavigationTimer);
                hotelNavigationTimer = null;
            }
        });

        updateUI();
