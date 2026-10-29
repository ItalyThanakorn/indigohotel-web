
/* ==================================
   1. MOBILE MENU
================================== */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {
    const isOpen = mainNav.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "ปิดเมนู" : "เปิดเมนู"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});

// ปิดเมนูเมื่อเลือกรายการ
mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
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
    const guests = document.getElementById("guests").value;

    if (!startDate || !endDate) {
        alert("กรุณาเลือกวันเช็กอินและวันเช็กเอาต์");
        return;
    }

    if (startDate < today) {
        alert("กรุณาเลือกวันเช็กอินตั้งแต่วันนี้เป็นต้นไป");
        return;
    }

    if (endDate <= startDate) {
        alert("วันเช็กเอาต์ต้องอยู่หลังวันเช็กอิน");
        return;
    }

    const start = new Date(startDate + "T00:00:00");
    const end = new Date(endDate + "T00:00:00");

    const nights = Math.round(
        (end - start) / (1000 * 60 * 60 * 24)
    );

    alert(
        "INDIGO 2 HOTEL\n\n" +
        "เช็กอิน: " + startDate + "\n" +
        "เช็กเอาต์: " + endDate + "\n" +
        "จำนวนคืน: " + nights + " คืน\n" +
        "ผู้เข้าพัก: " + guests + " คน\n\n" +
        "นี่เป็นตัวอย่างการค้นหาเท่านั้น\n" +
        "กรุณาโทร 074 813 380 เพื่อสอบถามห้องว่างจริง"
    );
});
