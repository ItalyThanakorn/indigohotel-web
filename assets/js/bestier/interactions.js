/* Progressive enhancements for the return link and native room-photo dialog. */
(() => {
  // Home hero carousel uses local hotel photos and keeps manual controls available.
  const heroCarousel = document.querySelector("[data-hero-carousel]");

  if (heroCarousel) {
    const slides = Array.from(heroCarousel.querySelectorAll("[data-hero-slide]"));
    const previousButton = heroCarousel.querySelector("[data-hero-previous]");
    const nextButton = heroCarousel.querySelector("[data-hero-next]");
    const toggleButton = heroCarousel.querySelector("[data-hero-toggle]");
    const toggleIcon = heroCarousel.querySelector("[data-hero-toggle-icon]");
    const dots = Array.from(heroCarousel.querySelectorAll("[data-hero-dot]"));

    if (slides.length > 1 && previousButton && nextButton && toggleButton) {
      const prefersReducedMotion = Boolean(
        window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
      );
      let activeSlide = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
      let userPaused = Boolean(prefersReducedMotion);
      let pointerInside = false;
      let focusInside = false;
      let timerId = 0;

      // Keep image visibility, screen-reader state and selected dot synchronized.
      function showSlide(index) {
        activeSlide = (index + slides.length) % slides.length;

        slides.forEach((slide, slideIndex) => {
          const isActive = slideIndex === activeSlide;
          slide.classList.toggle("is-active", isActive);
          slide.setAttribute("aria-hidden", String(!isActive));
        });

        dots.forEach((dot, dotIndex) => {
          dot.setAttribute("aria-pressed", String(dotIndex === activeSlide));
        });
      }

      // Language labels reflect whether automatic rotation is currently paused.
      function updateToggle() {
        const languageKey = document.documentElement.lang === "en" ? "En" : "Th";
        const labelKey = userPaused ? `ariaPlay${languageKey}` : `aria${languageKey}`;
        toggleButton.setAttribute("aria-label", toggleButton.dataset[labelKey] || "");
        toggleButton.setAttribute("aria-pressed", String(userPaused));
        if (toggleIcon) toggleIcon.textContent = userPaused ? "▶" : "Ⅱ";
      }

      // Stop rotation while the page is hidden, hovered or being used with a keyboard.
      function updateTimer() {
        window.clearInterval(timerId);
        timerId = 0;

        if (userPaused || pointerInside || focusInside || document.hidden) return;
        timerId = window.setInterval(() => showSlide(activeSlide + 1), 7000);
      }

      previousButton.addEventListener("click", () => {
        showSlide(activeSlide - 1);
        updateTimer();
      });

      nextButton.addEventListener("click", () => {
        showSlide(activeSlide + 1);
        updateTimer();
      });

      dots.forEach((dot) => {
        dot.addEventListener("click", () => {
          showSlide(Number(dot.dataset.heroDot));
          updateTimer();
        });
      });

      toggleButton.addEventListener("click", () => {
        userPaused = !userPaused;
        updateToggle();
        updateTimer();
      });

      heroCarousel.addEventListener("mouseenter", () => {
        pointerInside = true;
        updateTimer();
      });

      heroCarousel.addEventListener("mouseleave", () => {
        pointerInside = false;
        updateTimer();
      });

      heroCarousel.addEventListener("focusin", () => {
        focusInside = true;
        updateTimer();
      });

      heroCarousel.addEventListener("focusout", (event) => {
        if (heroCarousel.contains(event.relatedTarget)) return;
        focusInside = false;
        updateTimer();
      });

      document.addEventListener("visibilitychange", updateTimer);
      document.addEventListener("bestier:languagechange", updateToggle);

      heroCarousel.classList.add("is-enhanced");
      showSlide(activeSlide);
      updateToggle();
      updateTimer();
    }
  }

  const backToTop = document.querySelector("[data-back-to-top]");
  const imageDialog = document.querySelector("[data-image-dialog]");

  if (backToTop) {
    // Show the anchor after the guest has scrolled down the page.
    const updateBackToTop = () => {
      backToTop.classList.toggle("is-visible", window.scrollY > 480);
    };

    window.addEventListener("scroll", updateBackToTop, { passive: true });
    updateBackToTop();
  }

  // Room photos remain ordinary links when the browser has no dialog support.
  if (!imageDialog || typeof imageDialog.showModal !== "function") return;

  const dialogImage = imageDialog.querySelector("[data-dialog-image]");
  const dialogCaption = imageDialog.querySelector("[data-dialog-caption]");
  const previousButton = imageDialog.querySelector("[data-dialog-previous]");
  const nextButton = imageDialog.querySelector("[data-dialog-next]");
  const closeButton = imageDialog.querySelector("[data-dialog-close]");
  const galleryItems = Array.from(document.querySelectorAll("[data-gallery-item]"));
  let activeGallery = [];
  let activeIndex = 0;

  function showImage(index) {
    if (!activeGallery.length) return;

    // Keep the selected image, alt text, caption and controls in sync.
    activeIndex = (index + activeGallery.length) % activeGallery.length;
    const item = activeGallery[activeIndex];
    const image = item.querySelector("img");

    dialogImage.src = item.href;
    dialogImage.alt = image?.alt || "";
    dialogCaption.textContent = image?.alt || "";
    previousButton.disabled = activeGallery.length < 2;
    nextButton.disabled = activeGallery.length < 2;
  }

  // Intercept only a plain left click; modified clicks keep native link behavior.
  galleryItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const gallery = item.closest("[data-gallery]");
      activeGallery = gallery ? Array.from(gallery.querySelectorAll("[data-gallery-item]")) : [item];
      showImage(activeGallery.indexOf(item));
      imageDialog.showModal();
    });
  });

  previousButton.addEventListener("click", () => showImage(activeIndex - 1));
  nextButton.addEventListener("click", () => showImage(activeIndex + 1));
  closeButton.addEventListener("click", () => imageDialog.close());

  imageDialog.addEventListener("click", (event) => {
    if (event.target === imageDialog) imageDialog.close();
  });

  document.addEventListener("bestier:languagechange", () => {
    if (imageDialog.open) showImage(activeIndex);
  });
})();
