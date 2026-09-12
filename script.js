function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
function showInfo(text){const t=document.getElementById('toast');t.textContent=text;t.style.display='block';setTimeout(()=>t.style.display='none',3500)}
function subscribe(e){e.preventDefault();showInfo('تم تسجيل الطلب في النسخة التجريبية فقط.');e.target.reset()}