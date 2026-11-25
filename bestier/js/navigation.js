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

  const quick = [
    { id: "line", href: LINKS.lineChat(), icon: '<i class="fa-brands fa-line" aria-hidden="true"></i>' },
    { id: "call", href: LINKS.tel, icon: '<i class="fa-solid fa-phone" aria-hidden="true"></i>' },
    { id: "wa", href: LINKS.whatsapp, icon: '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>' },
    SITE.facebook && { id: "fb", href: SITE.facebook, icon: '<i class="fa-brands fa-facebook-f" aria-hidden="true"></i>' },
  ].filter(Boolean);

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

  const tQuickLabel = id => i18n.t(`quick.${id}`);

  /* ---------- ปุ่มติดต่อด่วน (ลอยตลอดการเลื่อน) ---------- */
  const bar = document.createElement("nav");
  bar.className = "quick";
  bar.setAttribute("data-i18n-label", "quick.label");
  bar.innerHTML = quick.map(q =>
    `<a class="quick__btn quick__btn--${q.id}" href="${esc(q.href)}" aria-label="${tQuickLabel(q.id)}"${q.id === "call" ? "" : ' target="_blank" rel="noopener"'}>${q.icon}<span data-i18n="quick.${q.id}"></span></a>`).join("");
  document.body.append(bar);

  i18n.apply(); // header/footer เพิ่งถูกสร้าง ต้องใส่ข้อความตามภาษาอีกรอบ
})();
