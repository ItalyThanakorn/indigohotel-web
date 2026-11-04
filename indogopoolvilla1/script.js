const langSwitch=document.getElementById('langSwitch');
const menuToggle=document.getElementById('menuToggle');
const navLinks=document.querySelector('.nav-links');
let language='th';
function setLanguage(next){language=next;document.documentElement.lang=next;document.querySelectorAll('[data-th][data-en]').forEach(el=>{el.innerHTML=el.dataset[next]});langSwitch.innerHTML=next==='th'?'EN <span>⌄</span>':'TH <span>⌄</span>';langSwitch.setAttribute('aria-label',next==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย');}
langSwitch.addEventListener('click',()=>setLanguage(language==='th'?'en':'th'));
menuToggle.addEventListener('click',()=>{const open=navLinks.classList.toggle('show');menuToggle.setAttribute('aria-expanded',String(open));});
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('show');menuToggle.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
const modal=document.getElementById('posterModal');
const modalImage=modal.querySelector('img');
let modalTrigger=null;
function openPoster(src){modalTrigger=document.activeElement;modalImage.src=src;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus()}
function closePoster(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImage.removeAttribute('src');document.body.style.overflow='';if(modalTrigger)modalTrigger.focus()}
document.querySelectorAll('[data-poster]').forEach(button=>button.addEventListener('click',()=>openPoster(button.dataset.poster)));
modal.addEventListener('click',event=>{if(event.target===modal||event.target.classList.contains('modal-close'))closePoster()});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closePoster()});
