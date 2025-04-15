const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-ChR1DTla.js","assets/vendor-BAoYjrW1.js","assets/vendor-D_nxXpU-.css"])))=>i.map(i=>d[i]);
var I=Object.defineProperty;var T=(t,e,s)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var v=(t,e,s)=>T(t,typeof e!="symbol"?e+"":e,s);import{a as O,i as u}from"./vendor-BAoYjrW1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();const h=document.getElementById("backdrop");window.openMenu=()=>{h==null||h.classList.add("is-open")};window.closeMenu=()=>{h==null||h.classList.remove("is-open")};window.menuLayoutClickHandler=t=>{t.stopPropagation()};document.querySelector(".router");const x=document.body;let b;const R=()=>{x.setAttribute("data-user-scrolling","true"),clearTimeout(b),b=setTimeout(()=>{x.removeAttribute("data-user-scrolling")},100)};document.addEventListener("wheel",R);const F=document.querySelectorAll(".menu-items.router .menu-item a");F.forEach(t=>{console.log(t.href,window.location.origin),t.href===window.location.origin+window.location.pathname?t.parentElement.classList.add("active"):t.parentElement.classList.remove("active")});const m=O.create({baseURL:"https://your-energy.b.goit.study/api",headers:{"Content-Type":"application/json"}});m.interceptors.response.use(t=>t,t=>{var e;if(t.response&&t.response.status===409){const s=((e=t.response.data)==null?void 0:e.message)||"Subscription already exists";return u.error({title:"Subscription Error",message:s,position:"topRight"}),{data:null}}else return console.error(t),u.error({title:"Request Error",message:t==null?void 0:t.message,position:"topRight"}),{data:null}});async function P(t){const{data:e}=await m.get("/exercises",{params:t});return e}async function C(t){const{data:e}=await m.get(`/exercises/${t}`);return e}async function M(t,e){const{data:s}=m.patch(`/exercises/${t}/rating`,e);return s}async function G(t={}){const{data:e}=await m.get("/filters",{params:t});return e}async function B(){const{data:t}=await m.get("/quote");return t}async function U(){const t=new Date().toISOString().split("T")[0],e=localStorage.getItem("quote"),s=localStorage.getItem("author"),r=localStorage.getItem("quoteDate");if(e&&s&&r===t){document.querySelector(".sidebar-quote").textContent=`${e}`,document.querySelector(".sidebar-quote-author").textContent=`${s}`;return}const i=await B(),a=i.quote,o=i.author;document.querySelector(".sidebar-quote").textContent=`${a}`,document.querySelector(".sidebar-quote-author").textContent=`${o}`,localStorage.setItem("quote",a),localStorage.setItem("author",o),localStorage.setItem("quoteDate",t)}U();const A="modulepreload",_=function(t){return"/goit-advancedjs-final-project/"+t},E={},H=function(e,s,r){let i=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(s.map(n=>{if(n=_(n),n in E)return;E[n]=!0;const g=n.endsWith(".css"),L=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${L}`))return;const d=document.createElement("link");if(d.rel=g?"stylesheet":A,g||(d.as="script"),d.crossOrigin="",d.href=n,l&&d.setAttribute("nonce",l),document.head.appendChild(d),g)return new Promise(($,q)=>{d.addEventListener("load",$),d.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${n}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return e().catch(a)})};function Y(t){return String(t).charAt(0).toUpperCase()+String(t).slice(1)}function X(t,e="LI",s="UL"){for(;t.nodeName!==e&&t.nodeName!==s;)t=t.parentElement;return t.nodeName===e?t:null}const D=768,j=()=>window.innerWidth<D,f="invisiable",p="favouritesExercises",Z="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",N={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},y={initParams:new URLSearchParams(window.location.search),set(t,e){const s=new URLSearchParams(window.location.search);s.set(t,e),this.update(s)},new(t,e){const s=new URLSearchParams;s.set(t,e),this.update(s)},get(t){return new URLSearchParams(window.location.search).get(t)},delete(t){const e=new URLSearchParams(window.location.search);e.delete(t),update(e)},update(t){if(history.pushState){const e=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+t.toString();window.history.pushState({path:e},"",e)}}},c="/goit-advancedjs-final-project/assets/icons-DMAIjxcC.svg";class S{constructor(e,s,r){v(this,"paginationExerciseCallback",e=>{y.set("page",e),this.render(e)});v(this,"searchCallback",e=>{this.keyword=e||"",e?y.set("keyword",e):y.delete("keyword"),this.render()});this.exerciseyList=document.body.querySelector(".exercise-list"),this.limit=j()?8:10,this.paginationInstance=s,this.errorElement=document.body.querySelector("[data-exerciseError]"),this.modalInstance=r,this.exerciseyList.addEventListener("click",i=>this.handleExerciseClick(i)),e&&async function(i){const a=await H(()=>import("./search-ChR1DTla.js"),__vite__mapDeps([0,1,2]));i.searchForm=a.default,i.onloalLibrariesCallback&&i.onloalLibrariesCallback()}(this)}init(e,s,r="",i=1){this.timeoutID&&(clearTimeout(this.timeoutID),this.timeoutID=null),this.show(),this.filter=e,this.exercise=s,this.keyword=r,this.searchForm&&(this.searchForm.show(),this.searchForm.setValue(r),this.searchForm.callback=this.searchCallback),this.render(i)}handleExerciseClick(e){this.modalInstance.open(e)}async render(e=1){try{const s={[N[this.filter]]:this.exercise,limit:this.limit,page:e};this.keyword&&(s.keyword=this.keyword);const r=await P(s);this.page=e,r.results.length?(this.errorHide(),this.exerciseyList.innerHTML=r.results.map(i=>S.exerciseMarkup(i)).join("")):(this.exerciseyList.innerHTML="",this.errorShow()),this.paginationInstance.render(r.totalPages,r.page),this.paginationInstance.callback=this.paginationExerciseCallback,this.show()}catch{iziToast.error({title:"Unexpected error",message:"Try to refresh the page",position:"topRight"})}}static exerciseMarkup({_id:e,rating:s,name:r,burnedCalories:i,time:a,bodyPart:o,target:l},n=!1){return`<li class="workout-card" data-id="${e}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              ${n?`<button onclick="document.removeFavourite(this)" class="workout-remove-btn">
                  <svg width="16" height="16" class="workout-remove-icon">
                    <use xlink:href="${c}#icon-remove"></use>
                  </svg></button>`:`<div class="workout-rating">
                    <span class="workout-rating-value">${s.toFixed(2)}</span>
                    <svg width="18" height="18" class="workout-rating-icon">
                      <use xlink:href="${c}#icon-Star"></use>
                    </svg>
                  </div>`}
              <a href="#" class="workout-start-btn"
                >Start
                <svg width="16" height="16" class="workout-start-icon">
                  <use xlink:href="${c}#icon-start"></use>
                </svg>
              </a>
            </div>
            <div class="workout-body">
              <svg width="24" height="24" class="workout-icon">
                <use xlink:href="${c}#icon-running"></use>
              </svg>
              <h3 class="workout-title">${r}</h3>
            </div>
            <ul class="workout-meta">
              <li class="workout-meta-item">
                <span class="workout-meta-name">Burned calories:</span>
                <span class="workout-meta-value">${i} / ${a||"..."}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Body part:</span>
                <span class="workout-meta-value">${o}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Target:</span>
                <span class="workout-meta-value">${l}</span>
              </li>
            </ul>
          </div>
        </li>`}show(){this.exerciseyList.classList.remove(f),this.exerciseyList.hidden=!1}hide(){this.exerciseyList.classList.add(f),this.exerciseyList.hidden=!0,this.errorHide(),this.timeoutID=setTimeout(()=>{this.exerciseyList.innerHTML=""},150)}errorShow(e="Exersice was not found"){this.errorElement.innerHTML=e,this.errorElement.classList.remove(f),this.errorElement.hidden=!1}errorHide(){this.errorElement.innerHTML="",this.errorElement.classList.add(f),this.errorElement.hidden=!0}}function W(t){return!!w(p)[t]}function K(t){const e=w(p);e[t._id]=t,k(p,JSON.stringify(e))}function Q(t){const e=w(p);e.hasOwnProperty(t)?delete e[t]:console.warn(`Exercise with id ${t} does not exist in storage.`),k(p,JSON.stringify(e))}let k=function(t,e){localStorage.setItem(t,e)};function w(t){if(!localStorage)return console.error("Local storage is not supported in this browser."),{};const e=localStorage.getItem(t);return e?JSON.parse(e):{}}class V{constructor(e,s){v(this,"createRatingStars",()=>`
      <div class="rating-options-wrapper">
        <span class="rating-options-value">0.0</span>
        <div class="rating-options">
          ${[5,4,3,2,1].map(e=>`
            <input type="radio" id="star${e}" name="rating" value="${e}" />
            <label for="star${e}" class="rating-label">
              <svg class="rating-star" width="24" height="24">
                <use href="${c}#icon-Star"></use>
              </svg>
            </label>
          `).join("")}
        </div>
      </div>
  `);this.modalBody=e,this.exerciseId=null,this.backToExercise=s}setupStarsUpdate(){const e=this.modalBody.querySelectorAll('input[name="rating"]'),s=this.modalBody.querySelector(".rating-options-value");e.forEach(r=>{r.addEventListener("change",()=>{s.textContent=`${parseFloat(r.value).toFixed(1)}`})})}open(e){this.exerciseId=e,this.modalBody.innerHTML=`
      <div class="rating-modal">
        <span class="rating-modal-title">Rating</span>
        
        <form class="rating-form">
          ${this.createRatingStars()}
          
          <input
            type="email" 
            name="email" 
            class="rating-input rating-input-email"
            required 
            placeholder="Email"
          />

          <textarea
            class="rating-input rating-input-comment"
            name="comment" 
            required
            placeholder="Your comment"></textarea>

          <button class="rating-submit-btn primary-btn" type="submit">Send</button>
        </form>
      </div>
    `,this.modalBody.querySelector(".rating-form").addEventListener("submit",r=>this.handleSubmit(r)),this.setupStarsUpdate()}async handleSubmit(e){e.preventDefault();const s=e.target,r=new FormData(s),i=r.get("rating"),a=r.get("email"),o=r.get("comment");if(!i||!a||!o){u.error({title:"Error",message:"Please fill in all fields!",position:"topRight"});return}const l={rate:Number(i),email:a,review:o};try{const n=await M(this.exerciseId,l);console.log(n),u.success({title:"Update rating",message:"Update was successfully!",position:"topRight"}),this.close()}catch(n){u.error({title:"Update Error",message:n.message,position:"topRight"})}}close(){this.modalBody.innerHTML="",this.exerciseId=null,this.backToExercise()}}class ee{constructor(){this.modalOverlay=document.querySelector(".modal-overlay"),this.modal=document.getElementById("exerciseModal"),this.modalBody=document.querySelector(".modal-body"),this.closeBtn=this.modal.querySelector(".modal-close"),this.scrollbarWidth=this.getScrollbarWidth(),this.ratingModal=new V(this.modalBody,this.render.bind(this)),this.exercise=null,this.isFavorite=!1,this.isRatingOpen=!1,this.handleOverlayClick=this.handleOverlayClick.bind(this),this.handleEscKey=this.handleEscKey.bind(this),this.handleClose=this.handleClose.bind(this)}async open(e){document.querySelector(".menu-items-wrap").style=`padding-right: ${this.scrollbarWidth}`,document.body.style=`overflow: hidden; margin-right: ${this.scrollbarWidth}`;const s=e.target.closest(".workout-card");if(!s)return;const r=s.dataset.id;this.modalOverlay.classList.add("is-open"),this.modalBody.innerHTML=this.createSkeletonMarkup();try{this.exercise=await C(r),this.isFavorite=W(this.exercise._id),this.render(),this.modalOverlay.addEventListener("click",this.handleOverlayClick),window.addEventListener("keydown",this.handleEscKey),this.closeBtn.addEventListener("click",this.handleClose)}catch(i){u.error({title:"Request exercise Error",message:i==null?void 0:i.message,position:"topRight"}),console.error(i),this.modalBody.innerHTML='<p class="error">Failed to load exercise. Try again later.</p>'}}close(){document.body.style="",document.querySelector(".menu-items-wrap").style="",this.modalOverlay.classList.remove("is-open"),this.exercise=null,this.isFavorite=!1,this.isRatingOpen=!1,this.modalOverlay.removeEventListener("click",this.handleOverlayClick),this.closeBtn.removeEventListener("click",this.handleClose),window.removeEventListener("keydown",this.handleEscKey)}render(){this.modalBody.innerHTML=this.createExerciseMarkup(),this.addEventListeners()}addEventListeners(){const e=this.modal.querySelector(".favorites-btn"),s=this.modal.querySelector(".rate-btn");e.addEventListener("click",()=>this.toggleFavorite(e)),s.addEventListener("click",()=>{this.ratingModal.open(this.exercise._id),this.isRatingOpen=!0})}toggleFavorite(e){this.isFavorite?(Q(this.exercise._id),this.isFavorite=!1):(K(this.exercise),this.isFavorite=!0),this.updateFavoritesButton(e)}updateFavoritesButton(e){e.innerHTML=`
      <span class="favorites-btn-text">
        ${this.isFavorite?"Remove from favorites":"Add to favorites"}
      </span>
      <svg class="icon-heart" height="18" width="20">
        <use href="${c}#${this.isFavorite?"icon-trash":"icon-heart"}"></use>
      </svg>
    `}createStars(e){return`
    <div class="rating" style="--fill: ${e/5*100}%;">
      <div class="rating-bg">
        ${[...Array(5)].map(()=>`
          <svg class="star" width="18" height="18">
            <use href="${c}#icon-Star"></use>
          </svg>
        `).join("")}
      </div>
      <div class="rating-fill">
        ${[...Array(5)].map(()=>`
          <svg class="star" width="18" height="18">
            <use href="${c}#icon-Star"></use>
          </svg>
        `).join("")}
      </div>
    </div>
  `}getScrollbarWidth(){return window.innerWidth-document.documentElement.clientWidth+"px"}createExerciseMarkup(){const e=this.exercise;return`
      <div class="exercise-details">
        ${e.gifUrl?`<img src="${e.gifUrl}" alt="${e.name}" class="exercise-img">`:""}
        <div class="exercise-content">
          <div>
            <h2 class="exercise-title">${e.name}</h2>

            <div class="exercise-rate">
              <p>${e.rating}</p>
              ${this.createStars(e.rating)}
            </div>

            <ul class="exercise-info">
              <li>Target<span>${e.target}</span></li>
              <li>Body Part<span>${e.bodyPart}</span></li>
              <li>Equipment<span>${e.equipment}</span></li>
              <li>Popular<span>${e.popularity}</span></li>
              <li>Burned calories<span>${e.burnedCalories}</span></li>
            </ul>

            <p class="exercise-description">${e.description}</p>
          </div>

          <div class="exercise-buttons">
            <button type="button" class="favorites-btn primary-btn" data-id="${e._id}">
              <span class="favorites-btn-text">
                ${this.isFavorite?"Remove from favorites":"Add to favorites"}
              </span>
              <svg class="icon-heart" height="18" width="20">
                <use href="${c}#${this.isFavorite?"icon-trash":"icon-heart"}"></use>
              </svg>
            </button>
            
            <button type="button" class="rate-btn" data-id="${e._id}">Give a rating</button>
          </div>
        </div>
      </div>
    `}handleOverlayClick(e){e.target===this.modalOverlay&&(this.isRatingOpen?(this.ratingModal.close(),this.isRatingOpen=!1):this.close())}handleEscKey(e){e.key==="Escape"&&(this.isRatingOpen?(this.ratingModal.close(),this.isRatingOpen=!1):this.close())}handleClose(e){this.isRatingOpen?(this.ratingModal.close(),this.isRatingOpen=!1):this.close()}createSkeletonMarkup(){return`
    <div class="exercise-details skeleton">
      <div class="exercise-img skeleton-img"></div>
      <div class="exercise-content">
        <div class="skeleton-title"></div>
        <div class="skeleton-rate"></div>
        <ul class="exercise-info">
          ${[...Array(5)].map(()=>`
            <li class="skeleton-info-item">
              <div class="skeleton-line"></div>
            </li>
          `).join("")}
        </ul>
        <div class="skeleton-description"></div>
        <div class="exercise-buttons">
          <div class="skeleton-button"></div>
          <div class="skeleton-button"></div>
        </div>
      </div>
    </div>
  `}}export{ee as E,f as I,p as N,Z as T,H as _,S as a,w as b,Y as c,X as f,G as g,j as i,Q as r,y as s};
//# sourceMappingURL=exercise-modal-Qda1G_qd.js.map
