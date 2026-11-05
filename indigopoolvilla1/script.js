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
// แสดงภาพสระทีละภาพ พร้อมเลื่อนอัตโนมัติและรองรับการปัดบนมือถือ
const poolCarousel=document.querySelector('.pool-carousel');
if(poolCarousel){
  const poolSlides=[...poolCarousel.querySelectorAll('.pool-slide')];
  const poolDots=[...poolCarousel.querySelectorAll('.pool-dot')];
  const poolCounter=poolCarousel.querySelector('.pool-counter');
  const poolViewport=poolCarousel.querySelector('.pool-carousel-viewport');
  let poolIndex=0;
  let poolTimer=null;
  let touchStartX=null;
  const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function showPoolSlide(index){
    poolIndex=(index+poolSlides.length)%poolSlides.length;
    poolSlides.forEach((slide,i)=>{const active=i===poolIndex;slide.classList.toggle('is-active',active);slide.setAttribute('aria-hidden',String(!active));});
    poolDots.forEach((dot,i)=>{const active=i===poolIndex;dot.classList.toggle('is-active',active);if(active)dot.setAttribute('aria-current','true');else dot.removeAttribute('aria-current');});
    poolCounter.textContent=String(poolIndex+1).padStart(2,'0')+' / '+String(poolSlides.length).padStart(2,'0');
  }
  function stopPoolCarousel(){if(poolTimer){clearInterval(poolTimer);poolTimer=null;}}
  function startPoolCarousel(){stopPoolCarousel();if(!reducedMotion)poolTimer=setInterval(()=>showPoolSlide(poolIndex+1),2500);}
  function changePoolSlide(index){showPoolSlide(index);startPoolCarousel();}
  poolCarousel.querySelector('.pool-prev').addEventListener('click',()=>changePoolSlide(poolIndex-1));
  poolCarousel.querySelector('.pool-next').addEventListener('click',()=>changePoolSlide(poolIndex+1));
  poolDots.forEach((dot,i)=>dot.addEventListener('click',()=>changePoolSlide(i)));
  poolCarousel.addEventListener('mouseenter',stopPoolCarousel);
  poolCarousel.addEventListener('mouseleave',startPoolCarousel);
  poolCarousel.addEventListener('focusin',stopPoolCarousel);
  poolCarousel.addEventListener('focusout',event=>{if(!poolCarousel.contains(event.relatedTarget))startPoolCarousel();});
  poolCarousel.addEventListener('keydown',event=>{if(event.key==='ArrowLeft')changePoolSlide(poolIndex-1);if(event.key==='ArrowRight')changePoolSlide(poolIndex+1);});
  poolViewport.addEventListener('touchstart',event=>{touchStartX=event.changedTouches[0].clientX;},{passive:true});
  poolViewport.addEventListener('touchend',event=>{if(touchStartX===null)return;const distance=event.changedTouches[0].clientX-touchStartX;touchStartX=null;if(Math.abs(distance)>40)changePoolSlide(poolIndex+(distance<0?1:-1));},{passive:true});
  startPoolCarousel();
}
const modal=document.getElementById('posterModal');
if(modal){
const modalImage=modal.querySelector('img');
// จัดการหน้าต่างภาพ พร้อมคืนโฟกัสหลังปิด
let modalTrigger=null;
function openPoster(src){modalTrigger=document.activeElement;modalImage.src=src;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus()}
function closePoster(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImage.removeAttribute('src');document.body.style.overflow='';if(modalTrigger)modalTrigger.focus()}
// ให้การ์ดแต่ละหลังเปิดภาพประกาศเต็ม
document.querySelectorAll('[data-poster]').forEach(button=>button.addEventListener('click',()=>openPoster(button.dataset.poster)));
modal.addEventListener('click',event=>{if(event.target===modal||event.target.classList.contains('modal-close'))closePoster()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closePoster()});
}
