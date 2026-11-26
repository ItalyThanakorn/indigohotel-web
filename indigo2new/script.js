const checkin = document.getElementById("checkin");
const checkout = document.getElementById("checkout");
const bookingForm = document.getElementById("booking-form");
const languageButton = document.querySelector(".language-switch");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("primary-nav");
const contactForm = document.getElementById("contact-form");

let currentLanguage = "th";

function toLocalDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function setDefaultDates() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    checkin.min = toLocalDateString(today);
    checkout.min = toLocalDateString(tomorrow);
    checkin.value = checkin.min;
    checkout.value = checkout.min;
}

function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;

    document.querySelectorAll("[data-th][data-en]").forEach((element) => {
        element.innerHTML = element.dataset[language];
    });

    languageButton.textContent = language === "th" ? "EN" : "TH";
    languageButton.setAttribute(
        "aria-label",
        language === "th" ? "Switch to English" : "เปลี่ยนเป็นภาษาไทย"
    );
    menuButton.setAttribute(
        "aria-label",
        language === "th" ? "เปิดเมนูนำทาง" : "Open navigation"
    );
    document.title = language === "th"
        ? "INDIGO 2 HOTEL | หาดใหญ่"
        : "INDIGO 2 HOTEL | HATYAI";
}

function closeNavigation() {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
}

checkin.addEventListener("change", () => {
    if (!checkin.value) {
        return;
    }

    const followingDay = new Date(`${checkin.value}T00:00:00`);
    followingDay.setDate(followingDay.getDate() + 1);
    checkout.min = toLocalDateString(followingDay);

    if (!checkout.value || checkout.value <= checkin.value) {
        checkout.value = checkout.min;
    }
});

bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!bookingForm.reportValidity()) {
        return;
    }

    if (checkout.value <= checkin.value) {
        checkout.setCustomValidity(
            currentLanguage === "th"
                ? "วันที่เช็กเอาต์ต้องอยู่หลังวันที่เช็กอิน"
                : "Check-out must be after check-in."
        );
        checkout.reportValidity();
        checkout.setCustomValidity("");
        return;
    }

    const guestCount = document.getElementById("guests").value;
    const message = currentLanguage === "th"
        ? `ขอบคุณที่สนใจ INDIGO 2 HOTEL\nเช็กอิน: ${checkin.value}\nเช็กเอาต์: ${checkout.value}\nผู้เข้าพัก: ${guestCount} ท่าน\nกรุณาโทร 074 813 380 เพื่อยืนยันห้องพัก`
        : `Thank you for choosing INDIGO 2 HOTEL.\nCheck-in: ${checkin.value}\nCheck-out: ${checkout.value}\nGuests: ${guestCount}\nPlease call 074 813 380 to confirm availability.`;

    window.alert(message);
});

languageButton.addEventListener("click", () => {
    setLanguage(currentLanguage === "th" ? "en" : "th");
});

menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNavigation();
    }
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    const formData = new FormData(contactForm);
    const message = [
        `Name: ${formData.get("name")}`,
        `Contact: ${formData.get("contact")}`,
        `Message: ${formData.get("message")}`
    ].join("\n");

    window.location.href = `sms:074813380?body=${encodeURIComponent(message)}`;
});

setDefaultDates();
