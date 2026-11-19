// ปีใน footer + ตั้งวันที่ขั้นต่ำของแถบจอง
document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));

const checkIn = document.getElementById("in"), checkOut = document.getElementById("out");
if (checkIn && checkOut) {
  checkIn.min = new Date().toISOString().slice(0, 10);
  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value;
    if (checkOut.value && checkOut.value < checkIn.value) checkOut.value = checkIn.value;
  });
}
