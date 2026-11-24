/* Header, Footer และปุ่มติดต่อด่วน — ใช้ร่วมทุกหน้า สร้างจากข้อมูลใน config.js
   แก้ที่นี่ที่เดียว ทุกหน้าอัปเดตตาม (ทำงานได้แม้เปิดไฟล์ตรงๆ ไม่ต้องมี server) */
(() => {
  const NAV = [
    ["index.html", "nav.home"], ["rooms.html", "nav.rooms"],
    ["facilities.html", "nav.facilities"], ["contact.html", "nav.contact"],
  ];
  const page = location.pathname.split("/").pop() || "index.html";
  const isActive = href => href === page || (href === "rooms.html" && page === "room-detail.html");
  const navLink = ([href, key]) =>
    `<a href="${href}" data-i18n="${key}"${isActive(href) ? ' class="is-active" aria-current="page"' : ""}></a>`;

  const svg = d => `<svg viewBox="0 0 24 24" aria-hidden="true">${d}</svg>`;
  const ICON = {
    chat: svg('<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/>'),
    phone: svg('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>'),
    facebook: svg('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>'),
  };

  const logo = `<a class="logo" href="index.html" aria-label="${esc(SITE.name)}">${
    SITE.logo ? `<img class="header-logo" src="${esc(SITE.logo)}" alt="${esc(SITE.name)}">` : esc(SITE.name)}</a>`;

  /* ---------- Header ---------- */
  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        ${logo}
        <nav class="nav" id="nav" aria-label="Main">${NAV.map(navLink).join("")}</nav>
        <div class="header-actions">
          <div class="lang" role="group" aria-label="Language">
            <button type="button" data-lang="th">TH</button><button type="button" data-lang="en">EN</button>
          </div>
          <a class="btn btn--sm" data-line-cta target="_blank" rel="noopener" data-i18n="cta.book"></a>
          <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
        </div>
      </div>`;
    const toggle = header.querySelector(".menu-toggle");
    const setOpen = open => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open);
    };
    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    document.addEventListener("click", e => { if (!header.contains(e.target)) setOpen(false); });
    document.addEventListener("keydown", e => { if (e.key === "Escape") setOpen(false); });
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Footer ---------- */
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>${logo}</div>
          <div><h4 data-i18n="footer.contact"></h4><ul data-render="contact"></ul></div>
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} ${esc(SITE.name)} <span data-i18n="footer.rights"></span></span></div>
      </div>`;
  }

  /* ---------- ปุ่มติดต่อด่วน (ลอยตลอดการเลื่อน) ---------- */
  const quick = [
    { id: "line", href: LINKS.lineChat(), icon: ICON.chat },
    { id: "call", href: LINKS.tel, icon: ICON.phone },
    { id: "wa", href: LINKS.whatsapp, icon: ICON.chat },
    SITE.facebook && { id: "fb", href: SITE.facebook, icon: ICON.facebook },
  ].filter(Boolean);
  const bar = document.createElement("nav");
  bar.className = "quick";
  bar.setAttribute("data-i18n-label", "quick.label");
  bar.innerHTML = quick.map(q =>
    `<a class="quick__btn quick__btn--${q.id}" href="${esc(q.href)}"${q.id === "call" ? "" : ' target="_blank" rel="noopener"'}>${q.icon}<span data-i18n="quick.${q.id}"></span></a>`).join("");
  document.body.append(bar);

  i18n.apply(); // header/footer เพิ่งถูกสร้าง ต้องใส่ข้อความตามภาษาอีกรอบ
})();
