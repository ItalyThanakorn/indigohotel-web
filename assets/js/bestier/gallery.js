(() => {
  const galleries = [...document.querySelectorAll("[data-bestier-gallery]")];
  const lightbox = document.querySelector("[data-bestier-lightbox]");

  if (!galleries.length || !lightbox || typeof lightbox.showModal !== "function") {
    return;
  }

  const lightboxImage = lightbox.querySelector("[data-lightbox-image]");
  const lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");
  const previousButton = lightbox.querySelector("[data-lightbox-prev]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");

  if (!lightboxImage || !lightboxCaption || !closeButton || !previousButton || !nextButton) {
    return;
  }

  let activeGallery = null;

  const getItems = (gallery) => [...gallery.querySelectorAll("[data-gallery-item]")];

  const showItem = (gallery, index) => {
    const items = getItems(gallery);
    if (!items.length) return;

    const normalizedIndex = (index + items.length) % items.length;
    gallery.dataset.currentIndex = String(normalizedIndex);

    const item = items[normalizedIndex];
    const currentImage = gallery.querySelector("[data-gallery-current]");
    const status = gallery.querySelector("[data-gallery-status]");

    if (currentImage) {
      currentImage.src = item.src;
      currentImage.alt = item.alt;
    }

    if (status) {
      status.textContent = `${normalizedIndex + 1} / ${items.length}`;
    }

    if (lightbox.open && activeGallery === gallery) {
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = item.alt;
    }
  };

  const move = (gallery, direction) => {
    const currentIndex = Number(gallery.dataset.currentIndex || 0);
    showItem(gallery, currentIndex + direction);
  };

  galleries.forEach((gallery) => {
    const items = getItems(gallery);
    if (!items.length) return;

    showItem(gallery, 0);

    gallery.querySelector("[data-gallery-prev]")?.addEventListener("click", () => move(gallery, -1));
    gallery.querySelector("[data-gallery-next]")?.addEventListener("click", () => move(gallery, 1));
    gallery.querySelector("[data-gallery-open]")?.addEventListener("click", () => {
      const currentIndex = Number(gallery.dataset.currentIndex || 0);
      const item = items[currentIndex];
      if (!item) return;

      activeGallery = gallery;
      lightboxImage.src = item.src;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = item.alt;
      lightbox.showModal();
    });
  });

  closeButton?.addEventListener("click", () => lightbox.close());
  previousButton?.addEventListener("click", () => activeGallery && move(activeGallery, -1));
  nextButton?.addEventListener("click", () => activeGallery && move(activeGallery, 1));

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.close();
    }
  });

  lightbox.addEventListener("close", () => {
    activeGallery?.querySelector("[data-gallery-open]")?.focus();
    activeGallery = null;
  });

  lightbox.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      activeGallery && move(activeGallery, -1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      activeGallery && move(activeGallery, 1);
    }
  });
})();
