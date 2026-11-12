/* Bilingual controller: HTML remains readable in Thai if JavaScript is unavailable. */
(() => {
  // Find paired copy, image alternatives, accessible labels and page metadata.
  const supportedLanguages = ["th", "en"];
  const preferenceKey = "bestier-language";
  const languageButtons = document.querySelectorAll("[data-language-choice]");
  const localizedNodes = document.querySelectorAll("[data-i18n-th][data-i18n-en]");
  const localizedImages = document.querySelectorAll("[data-alt-th][data-alt-en]");
  const localizedAriaNodes = document.querySelectorAll("[data-aria-th][data-aria-en]");
  const titleNode = document.querySelector("title[data-title-th][data-title-en]");
  const descriptionNode = document.querySelector(
    'meta[name="description"][data-description-th][data-description-en]'
  );

  if (!languageButtons.length) return;

  // Prefer the visitor's saved choice, then the browser language, then Thai.
  const browserLanguage = (navigator.language || "th").toLowerCase().startsWith("en") ? "en" : "th";
  let savedLanguage = "";

  try {
    savedLanguage = localStorage.getItem(preferenceKey) || "";
  } catch {
    savedLanguage = "";
  }

  const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : browserLanguage;

  function setLanguage(language, persist = true) {
    if (!supportedLanguages.includes(language)) return;

    // Update visible copy and matching document metadata in one pass.
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    localizedNodes.forEach((node) => {
      node.textContent = node.dataset[`i18n${language === "th" ? "Th" : "En"}`];
      node.lang = language;
    });

    localizedImages.forEach((image) => {
      image.alt = image.dataset[`alt${language === "th" ? "Th" : "En"}`] || "";
    });

    localizedAriaNodes.forEach((node) => {
      node.setAttribute("aria-label", node.dataset[`aria${language === "th" ? "Th" : "En"}`]);
    });

    if (titleNode) {
      document.title = titleNode.dataset[`title${language === "th" ? "Th" : "En"}`];
    }

    if (descriptionNode) {
      descriptionNode.content = descriptionNode.dataset[
        `description${language === "th" ? "Th" : "En"}`
      ];
    }

    languageButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.languageChoice === language));
    });

    // Storage is optional; the selected language still applies if it is blocked.
    if (persist) {
      try {
        localStorage.setItem(preferenceKey, language);
      } catch {
        // The page remains usable if storage is unavailable.
      }
    }

    // Let the image dialog refresh its translated caption and accessible name.
    document.dispatchEvent(new CustomEvent("bestier:languagechange", { detail: { language } }));
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.languageChoice));
  });

  setLanguage(initialLanguage, false);
})();
