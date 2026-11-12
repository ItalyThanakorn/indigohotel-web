(() => {
  const menus = document.querySelectorAll(".bestier-menu");
  const mobileQuery = window.matchMedia("(max-width: 800px)");

  menus.forEach((menu) => {
    const summary = menu.querySelector("summary");
    menu.open = !mobileQuery.matches;

    menu.addEventListener("click", (event) => {
      if (event.target instanceof Element && event.target.closest(".bestier-nav a")) {
        menu.open = false;
      }
    });

    document.addEventListener("click", (event) => {
      if (mobileQuery.matches && menu.open && !menu.contains(event.target)) {
        menu.open = false;
      }
    });

    document.addEventListener("keydown", (event) => {
      if (mobileQuery.matches && event.key === "Escape" && menu.open) {
        menu.open = false;
        summary?.focus();
      }
    });

    mobileQuery.addEventListener("change", () => {
      menu.open = !mobileQuery.matches;
    });
  });
})();
