
/* ==================================
   1. MOBILE MENU
================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "th";

function applyLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = language === "th"
        ? "INDIGO 2 HOTEL | Hatyai"
        : "INDIGO 2 HOTEL | Hat Yai";

    document.querySelectorAll("[data-th][data-en]:not(meta)").forEach(function (element) {
        element.textContent = element.getAttribute(`data-${language}`);
    });

    document.querySelectorAll("[data-th-alt][data-en-alt]").forEach(function (image) {
        image.alt = image.getAttribute(`data-${language}-alt`);
    });

    document.querySelector('meta[name="description"]').content =
        document.querySelector('meta[name="description"]').getAttribute(`data-${language}`);

    languageToggle.textContent = language === "th" ? "EN" : "TH";
    languageToggle.setAttribute(
        "aria-label",
        language === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"
    );
    menuToggle.setAttribute(
        "aria-label",
        mainNav.classList.contains("is-open")
            ? (language === "th" ? "ปิดเมนู" : "Close menu")
            : (language === "th" ? "เปิดเมนู" : "Open menu")
    );
}

languageToggle.addEventListener("click", function () {
    applyLanguage(currentLanguage === "th" ? "en" : "th");
});

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? (currentLanguage === "th" ? "ปิดเมนู" : "Close menu")
            : (currentLanguage === "th" ? "เปิดเมนู" : "Open menu")
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

mainNav.querySelectorAll("a, .language-toggle").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute(
            "aria-label",
            currentLanguage === "th" ? "เปิดเมนู" : "Open menu"
        );
        menuToggle.textContent = "☰";
    });
});


/* ==================================
   2. DATE SETTINGS
================================== */

const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");

function formatLocalDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

const today = formatLocalDate(new Date());

checkin.min = today;
checkout.min = today;

checkin.addEventListener("change", function () {
    checkout.min = checkin.value || today;

    if (checkout.value && checkout.value <= checkin.value) {
        checkout.value = "";
    }
});


/* ==================================
   3. BOOKING FORM
================================== */

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const startDate = checkin.value;
    const endDate = checkout.value;
    const guests = document.getElementById("guests").selectedOptions[0].textContent;

    if (!startDate || !endDate) {
        alert(currentLanguage === "th"
            ? "กรุณาเลือกวันเช็กอินและวันเช็กเอาต์"
            : "Please select your check-in and check-out dates.");
        return;
    }

    if (startDate < today) {
        alert(currentLanguage === "th"
            ? "กรุณาเลือกวันเช็กอินตั้งแต่วันนี้เป็นต้นไป"
            : "Please choose a check-in date that is today or later.");
        return;
    }

    if (endDate <= startDate) {
        alert(currentLanguage === "th"
            ? "วันเช็กเอาต์ต้องอยู่หลังวันเช็กอิน"
            : "Check-out must be after check-in.");
        return;
    }

    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");

    const nights = Math.round(
        (end - start) / (1000 * 60 * 60 * 24)
    );

    alert(currentLanguage === "th"
        ? "INDIGO 2 HOTEL\n\n" +
          "เช็กอิน: " + startDate + "\n" +
          "เช็กเอาต์: " + endDate + "\n" +
          "จำนวนคืน: " + nights + " คืน\n" +
          "ผู้เข้าพัก: " + guests + "\n\n" +
          "นี่เป็นตัวอย่างการค้นหาเท่านั้น\n" +
          "กรุณาโทร 074 813 380 เพื่อสอบถามห้องว่างจริง"
        : "INDIGO 2 HOTEL\n\n" +
          "Check-in: " + startDate + "\n" +
          "Check-out: " + endDate + "\n" +
          "Nights: " + nights + "\n" +
          "Guests: " + guests + "\n\n" +
          "This is a sample search only.\n" +
          "Call 074 813 380 to check actual availability.");
});
