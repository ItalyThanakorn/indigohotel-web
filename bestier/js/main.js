/* ส่วนประกอบที่สร้างจากข้อมูลใน config.js — ใส่ data-render="ชื่อ" ที่ element แล้วเพิ่ม renderer ใน RENDER
   ทุก renderer จะถูกเรียกใหม่อัตโนมัติเมื่อสลับภาษา */
(() => {
  const { t, pick } = i18n;
  const ext = 'target="_blank" rel="noopener"';

  const RENDER = {
    contact: el => {
      const rows = [
        `<li>${esc(pick(SITE.address))}</li>`,
        `<li><a href="${LINKS.tel}">${esc(SITE.phone.label)}</a></li>`,
        `<li>LINE <a href="${esc(LINKS.lineChat())}" ${ext}>${esc(SITE.line)}</a></li>`,
        `<li>WhatsApp <a href="${LINKS.whatsapp}" ${ext}>${esc(SITE.whatsapp)}</a></li>`,
        SITE.facebook && `<li><a href="${esc(SITE.facebook)}" ${ext}>Facebook</a></li>`,
      ];
      el.innerHTML = rows.filter(Boolean).join("");
    },
    address: el => (el.textContent = pick(SITE.address)),
    promo: el => { const text = pick(SITE.promo); el.hidden = !text; el.textContent = text; },
    ota: el => {
      const items = SITE.ota.filter(o => o.url);
      el.hidden = !items.length;
      el.innerHTML = items.length
        ? `<span>${t("rooms.ota")}</span>${items.map(o => `<a href="${esc(o.url)}" ${ext}>${esc(o.name)}</a>`).join("")}` : "";
    },
    facilities: el => {
      el.innerHTML = FACILITIES.slice(0, +el.dataset.limit || undefined).map(f =>
        `<li><h3>${esc(pick(f.name))}</h3>${f.desc ? `<p>${esc(pick(f.desc))}</p>` : ""}</li>`).join("");
    },
    nearby: el => (el.innerHTML = NEARBY.map(n => `<li>${esc(pick(n))}</li>`).join("")),
    map: el => {
      el.innerHTML = `<iframe class="map" src="${esc(LINKS.mapEmbed)}" title="${esc(t("loc.map"))}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
    },
    branches: el => {
      el.innerHTML = BRANCHES.map(b => {
        const body = `<h3>${esc(pick(b.name))}</h3><p>${esc(pick(b.note))}</p>`;
        return b.url ? `<a class="branch" href="${esc(b.url)}" ${ext}>${body}</a>` : `<div class="branch">${body}</div>`;
      }).join("");
    },
    policies: el => {
      el.innerHTML = POLICIES.map(p =>
        `<div class="policy"><h3>${esc(pick(p.title))}</h3><ul>${p.items.map(i => `<li>${esc(pick(i))}</li>`).join("")}</ul></div>`).join("");
    },
    gallery: el => {
      const active = el.dataset.filter || "all";
      const tabs = [{ id: "all", label: t("gal.all") }, ...GALLERY.categories.map(c => ({ id: c.id, label: pick(c.label) }))];
      const items = GALLERY.items.filter(i => active === "all" || i.cat === active);
      el.innerHTML = `
        <div class="tabs">${tabs.map(tab => `<button type="button" data-filter="${tab.id}" aria-pressed="${tab.id === active}">${esc(tab.label)}</button>`).join("")}</div>
        <div class="gallery-grid">${items.map(i => `<img src="${esc(i.src)}" alt="${esc(pick(i.alt))}" loading="lazy" decoding="async">`).join("")}</div>`;
      if (!el.dataset.bound) {
        el.dataset.bound = "1";
        el.addEventListener("click", e => {
          const b = e.target.closest("[data-filter]");
          if (b) { el.dataset.filter = b.dataset.filter; RENDER.gallery(el); }
        });
      }
    },
  };

  function render() {
    document.querySelectorAll("[data-render]").forEach(el => RENDER[el.dataset.render]?.(el));
    document.querySelectorAll("[data-line-cta]").forEach(a => (a.href = LINKS.lineChat(t("form.intro"))));
    document.querySelectorAll("[data-map-link]").forEach(a => (a.href = LINKS.map));
  }
  render();
  document.addEventListener("langchange", render);

  /* ฟอร์มทั้งหมด (data-line-form): รวมค่าที่กรอกเป็นข้อความ แล้วเปิดแชท LINE OA — ไม่ต้องมี backend */
  document.addEventListener("submit", e => {
    const form = e.target.closest?.("[data-line-form]");
    if (!form) return;
    e.preventDefault();
    const lines = [...new FormData(form)]
      .filter(([, value]) => String(value).trim())
      .map(([name, value]) => `${form.elements[name].labels?.[0]?.textContent ?? name}: ${value}`);
    window.open(LINKS.lineChat([t("form.intro"), ...lines].join("\n")), "_blank", "noopener");
  });

  /* วันที่ขั้นต่ำของฟอร์มสอบถาม */
  const checkIn = document.getElementById("in"), checkOut = document.getElementById("out");
  if (checkIn && checkOut) {
    checkIn.min = new Date().toISOString().slice(0, 10);
    checkIn.addEventListener("change", () => {
      checkOut.min = checkIn.value;
      if (checkOut.value && checkOut.value < checkIn.value) checkOut.value = checkIn.value;
    });
  }

  /* Structured data (Hotel) สำหรับ Google */
  if (/^https?:$/.test(location.protocol)) {
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org", "@type": "Hotel", name: SITE.name, url: location.origin,
      telephone: SITE.phone.tel.split(",")[0],
      address: { "@type": "PostalAddress", streetAddress: SITE.address.en, addressCountry: "TH" },
    });
    document.head.append(ld);
  }
})();
