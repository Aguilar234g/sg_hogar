import"./hoisted.CdTSte5D.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("header-logo"),o=e?.querySelector("img");function r(){if(!e||!o)return;const t=window.scrollY,n=window.innerHeight*.1;t>n?(e.style.transform="translateX(0)",e.style.left="0",o.style.height=window.innerWidth<640?"2.5rem":"3rem"):(e.style.transform="translateX(-50%)",e.style.left="50%",o.style.height=window.innerWidth<640?"3.5rem":"4rem")}r(),window.addEventListener("scroll",r,{passive:!0}),window.addEventListener("resize",r,{passive:!0})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".carousel-slide"),o=document.querySelectorAll(".carousel-dot"),r=document.querySelector(".carousel-prev"),t=document.querySelector(".carousel-next"),n=document.getElementById("dynamic-text");let s=0,i;const c=5e3,a=l=>{e.forEach((d,g)=>{d.classList.toggle("opacity-0",g!==l)}),o.forEach((d,g)=>{d.classList.toggle("active",g===l)}),s=l},u=()=>{i=setInterval(()=>{const l=(s+1)%e.length;a(l)},c)},h=()=>{clearInterval(i),u()};r?.addEventListener("click",()=>{const l=(s-1+e.length)%e.length;a(l),h()}),t?.addEventListener("click",()=>{const l=(s+1)%e.length;a(l),h()}),o.forEach((l,d)=>{l.addEventListener("click",()=>{a(d),h()})});const v=["Innovación Textil","Diseño Sostenible","Calidad Premium","Tecnología Avanzada","Excelencia Artesanal"];let m=0;const f=()=>{n&&(n.classList.remove("visible"),setTimeout(()=>{n.textContent=v[m],n.classList.add("visible"),m=(m+1)%v.length},800))};a(0),u(),f(),setInterval(f,4e3),document.addEventListener("visibilitychange",()=>{document.hidden?clearInterval(i):u()})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".group");e.forEach(o=>{o.addEventListener("click",()=>{if(window.innerWidth<768){const r=o.querySelector(".mobile-description"),t=o.querySelector("span:last-child");if(e.forEach(n=>{if(n!==o){const s=n.querySelector(".mobile-description"),i=n.querySelector("span:last-child");s&&s.classList.add("hidden"),i&&(i.textContent="+")}}),r&&t){const n=r.classList.toggle("hidden");t.textContent=n?"+":"−"}}})})});document.addEventListener("DOMContentLoaded",()=>{let e=null;document.querySelectorAll(".faq-button").forEach(t=>{t.addEventListener("click",()=>{if(e&&e!==t){const c=e.nextElementSibling;e.setAttribute("aria-expanded","false"),e.querySelector("span:last-child").style.transform="rotate(0deg)",c.style.maxHeight="0"}const n=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!n);const s=t.querySelector("span:last-child");s.style.transform=n?"rotate(0deg)":"rotate(45deg)";const i=t.nextElementSibling;n?(i.style.maxHeight="0",e=null):(i.style.maxHeight=i.scrollHeight+"px",e=t)})}),document.querySelectorAll(".faq-button").forEach(t=>{t.classList.remove("active")})});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelectorAll(".testimonial-card");window.addEventListener("scroll",()=>{e.forEach((o,r)=>{const t=o.getBoundingClientRect();if(t.top<window.innerHeight&&t.bottom>0){const s=(window.innerHeight-t.top)/window.innerHeight,i=Math.sin(s*Math.PI)*10,c=Math.sin(s*Math.PI)*2;o.style.transform=`translateY(${i}px) rotateX(${c}deg)`}})},{passive:!0})});