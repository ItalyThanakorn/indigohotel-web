(() => {
  const languageButton = document.querySelector('.lang-switch');
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav-links');
  const savedLanguage = localStorage.getItem('bestier-language');
  let language = savedLanguage || ((navigator.language || 'th').toLowerCase().startsWith('th') ? 'th' : 'en');

  function applyLanguage() {
    document.documentElement.lang = language;

    document.querySelectorAll('[data-th][data-en]').forEach((element) => {
      element.textContent = element.dataset[language];
    });
    document.querySelectorAll('[data-th-alt][data-en-alt]').forEach((element) => {
      element.alt = element.dataset[`${language}Alt`];
    });
    document.querySelectorAll('[data-th-title][data-en-title]').forEach((element) => {
      element.title = element.dataset[`${language}Title`];
    });
    document.querySelectorAll('[data-th-content][data-en-content]').forEach((element) => {
      element.content = element.dataset[`${language}Content`];
    });
    document.querySelectorAll('[data-th-aria-label][data-en-aria-label]').forEach((element) => {
      element.setAttribute('aria-label', element.dataset[`${language}AriaLabel`]);
    });

    if (languageButton) {
      languageButton.textContent = language === 'th' ? 'EN' : 'ไทย';
      languageButton.setAttribute('aria-label', language === 'th' ? 'เปลี่ยนเป็นภาษาอังกฤษ' : 'Switch to Thai');
    }
    if (menuButton) {
      menuButton.setAttribute('aria-label', language === 'th' ? 'เปิดเมนู' : 'Open menu');
    }

    const currentFile = location.pathname.split('/').pop() || 'index.html';
    menu?.querySelectorAll('a').forEach((link) => {
      const active = link.getAttribute('href') === currentFile;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  }

  languageButton?.addEventListener('click', () => {
    language = language === 'th' ? 'en' : 'th';
    localStorage.setItem('bestier-language', language);
    applyLanguage();
  });

  menuButton?.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.innerHTML = `<i class="fa-solid ${open ? 'fa-xmark' : 'fa-bars'}" aria-hidden="true"></i>`;
  });

  applyLanguage();
})();
