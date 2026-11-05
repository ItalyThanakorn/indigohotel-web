// ปุ่มสลับภาษาและเมนูบนมือถือ
const langSwitch=document.getElementById('langSwitch');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
let language='th';
// เปลี่ยนข้อความทั้งหน้าและภาษาของเอกสาร
function setLanguage(next){language=next;document.documentElement.lang=next;document.querySelectorAll('[data-th][data-en]').forEach(el=>{el.innerHTML=el.dataset[next]});langSwitch.textContent=next==='th'?'EN':'TH';langSwitch.setAttribute('aria-label',next==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย');}
// ผูกการกดปุ่มเพื่อสลับภาษา
langSwitch.addEventListener('click',()=>setLanguage(language==='th'?'en':'th'));
// เปิดหรือปิดเมนูบนหน้าจอมือถือ
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('show');menuToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('show');menuToggle.setAttribute('aria-expanded','false')}));
// แสดงปีปัจจุบันในส่วนท้ายเว็บ
document.getElementById('year').textContent=new Date().getFullYear();
const modal=document.getElementById('posterModal');
const modalImage=modal.querySelector('img');
// จัดการหน้าต่างภาพ พร้อมคืนโฟกัสหลังปิด
let modalTrigger=null;
function openPoster(src){modalTrigger=document.activeElement;modalImage.src=src;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus()}
function closePoster(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImage.removeAttribute('src');document.body.style.overflow='';if(modalTrigger)modalTrigger.focus()}
// ให้การ์ดแต่ละหลังเปิดภาพประกาศเต็ม
document.querySelectorAll('[data-poster]').forEach(button=>button.addEventListener('click',()=>openPoster(button.dataset.poster)));
modal.addEventListener('click',event=>{if(event.target===modal||event.target.classList.contains('modal-close'))closePoster()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closePoster()});
