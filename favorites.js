import{E as a,r as c,b as d,N as l,a as u,T as m}from"./assets/exercise-modal-Qda1G_qd.js";import"./assets/vendor-BAoYjrW1.js";let E=new a;const n={list:document.getElementById("favourites")};function o(){const r=d(l),e=Object.values(r);if(!Array.isArray(e)){console.error("Invalid exercises data:",e),i();return}if(e.length===0){i();return}const s=document.createElement("ul");s.classList.add("exercise-list"),s.innerHTML=e.map(t=>u.exerciseMarkup(t,!0)).join(""),n.list.innerHTML="",n.list.appendChild(s),s.addEventListener("click",t=>{t.target.closest("button")&&t.target.closest("button").classList.has("workout-remove-btn")||E.open(t)})}function i(){n.list.innerHTML=`<div class="favourites-not-found"><p>${m}</p></div>`}document.addEventListener("DOMContentLoaded",()=>{o()});document.removeFavourite=function(r){const e=r.closest("[data-id]").dataset.id;c(e),o()};
//# sourceMappingURL=favorites.js.map
