/* Header + Footer ที่ใช้ร่วมกันทุกหน้า
   แก้ที่ไฟล์นี้ที่เดียว ทุกหน้าอัปเดตตาม (ทำงานได้แม้เปิดไฟล์ตรงๆ ไม่ต้องมี server) */
(() => {
  const BRAND = `<img class="header-logo" src="assets/images/bestier-logo-lockup.png" alt="Bestier">`; // ← ชื่อโรงแรม
  const links = [
    ["index.html", "nav.home"], ["rooms.html", "nav.rooms"],
    ["facilities.html", "nav.facilities"], ["contact.html", "nav.contact"],
  ];
  const page = location.pathname.split("/").pop() || "index.html";
  const active = h => h === page || (h === "rooms.html" && page === "room-detail.html");
  const item = ([h, k]) => `<a href="${h}" data-i18n="${k}"${active(h) ? ' class="is-active" aria-current="page"' : ""}></a>`;

  const header = document.getElementById("site-header");
  if (header) {
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        <a class="logo" href="index.html">${BRAND}</a>
        <nav class="nav" id="nav" aria-label="Main">${links.map(item).join("")}</nav>
        <div class="header-actions">
          <div class="lang" role="group" aria-label="Language">
            <button type="button" data-lang="th">TH</button><button type="button" data-lang="en">EN</button>
          </div>
          <a class="btn btn--sm" href="contact.html" data-i18n="cta.book"></a>
          <button class="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span><span></span></button>
        </div>
      </div>`;
    const toggle = header.querySelector(".menu-toggle");
    const setOpen = open => {
      header.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", open);
      document.body.style.overflow = open ? "hidden" : "";
    };
    toggle.addEventListener("click", () => setOpen(!header.classList.contains("is-open")));
    header.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => setOpen(false)));
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
  }

  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div><a class="logo" href="index.html">${BRAND}</a><p data-i18n="footer.about"></p></div>
          <div><h4 data-i18n="footer.explore"></h4><ul>${links.map(([h, k]) => `<li><a href="${h}" data-i18n="${k}"></a></li>`).join("")}</ul></div>
          <div><h4 data-i18n="footer.contact"></h4>
            <ul><li>000 ถนน… เมือง… จังหวัด…</li><li><a href="tel:+66000000000">+66 00 000 0000</a></li><li><a href="mailto:info@your-hotel.com">info@your-hotel.com</a></li></ul></div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year></span><span data-i18n="footer.rights"></span></span>
          <span><a href="#">Facebook</a>&nbsp;&nbsp;<a href="#">Instagram</a>&nbsp;&nbsp;<a href="#">LINE</a></span>
        </div>
      </div>`;
  }
})();
