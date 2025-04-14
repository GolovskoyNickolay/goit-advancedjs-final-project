const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-BZ04UKGp.js","assets/favourites-8egNjukA.js","assets/vendor-BAoYjrW1.js","assets/vendor-D_nxXpU-.css","assets/pagination-DubV0k8c.js"])))=>i.map(i=>d[i]);
var y=Object.defineProperty;var f=(r,e,t)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>f(r,typeof e!="symbol"?e+"":e,t);import{i as x,_ as u,s as g,g as E,c as L,f as b,I as d,u as k,a as S,b as $,r as w,d as M,E as F}from"./favourites-8egNjukA.js";/* empty css               */import{i as h}from"./vendor-BAoYjrW1.js";class m{constructor(e,t,i){c(this,"onClick",({target:e})=>{e.nodeName==="LI"&&(this.filter=e.dataset.filter,this.setActiveFilter(this.filter),this.exerciseInstance.hide(),this.render(),this.setActivePath(),g.new("category",this.filter))});c(this,"paginationCategoryCallback",e=>{this.render(Number(e))});c(this,"cardOnClick",({target:e})=>{const t=b(e,"LI","UL");if(!t)return;this.hide();const{exercise:i}=t.dataset;this.exerciseInstance.init(this.filter,i),this.setActivePath(i),g.set("exercise",i)});this.exerciseInstance=t,this.paginationInstance=i,this.filterList=document.body.querySelector(".filters-list"),this.filterList.addEventListener("click",this.onClick),this.items=Array.from(this.filterList.querySelectorAll("li")),this.categoryList=document.body.querySelector(".category-list"),this.categoryList.addEventListener("click",this.cardOnClick),this.filter="Muscles",this.path={start:document.querySelector(".filter-path-start"),part:document.querySelector(".filter-path-part")},this.limit=x()?9:12,this.errorElement=document.body.querySelector("[data-categoryError]"),e&&async function(s){const a=await u(()=>import("./search-BZ04UKGp.js"),__vite__mapDeps([0,1,2,3]));s.searchForm=a.default}(this)}setActiveFilter(e){this.items.forEach(t=>{t.dataset.filter===e?t.classList.add("active"):t.classList.remove("active")})}setActivePath(e=""){e?this.path.start.innerHTML="Exercises /":this.path.start.innerHTML="Exercises",this.path.part.innerHTML=e}async render(e=1){var t;try{const i=await E({filter:this.filter,limit:this.limit,page:e});i.results.length?(this.errorHide(),this.categoryList.innerHTML=i.results.map(m.categoryMarkup).join("")):(this.categoryList.innerHTML="",this.errorShow()),this.paginationInstance.render(i.totalPages,i.page),this.paginationInstance.callback=this.paginationCategoryCallback,(t=this.searchForm)==null||t.hide(),this.show()}catch{iziToast.error({title:"Unexpected error",message:"Try to refresh the page",position:"topRight"})}}static categoryMarkup({imgURL:e,name:t,filter:i}){return`<li class="category-card" data-muscle="${i}" data-exercise="${t}">
          <img
            src="${e}"
            alt="Image shows exercise ${t}"
            class="category-card-image"
          />
          <div class="category-content">
            <h3 class="category-title">${L(t)}</h3>
            <p class="category-subtitle">${i}</p>
          </div>
        </li>`}show(){this.categoryList.classList.remove(d),this.categoryList.hidden=!1}hide(){this.categoryList.classList.add(d),this.categoryList.hidden=!0,this.errorHide()}errorShow(e="Category was not found"){this.errorElement.innerHTML=e,this.errorElement.classList.remove(d),this.errorElement.hidden=!1}errorHide(){this.errorElement.innerHTML="",this.errorElement.classList.add(d),this.errorElement.hidden=!0}}class I{constructor(e,t){c(this,"createRatingStars",()=>`
      <div class="rating-options-wrapper">
        <span class="rating-options-value">0.0</span>
        <div class="rating-options">
          ${[5,4,3,2,1].map(e=>`
            <input type="radio" id="star${e}" name="rating" value="${e}" />
            <label for="star${e}" class="rating-label">
              <svg class="rating-star" width="24" height="24">
                <use href="./img/icons.svg#icon-Star"></use>
              </svg>
            </label>
          `).join("")}
        </div>
      </div>
  `);this.modalBody=e,this.exerciseId=null,this.backToExercise=t}setupStarsUpdate(){const e=this.modalBody.querySelectorAll('input[name="rating"]'),t=this.modalBody.querySelector(".rating-options-value");e.forEach(i=>{i.addEventListener("change",()=>{t.textContent=`${parseFloat(i.value).toFixed(1)}`})})}open(e){this.exerciseId=e,this.modalBody.innerHTML=`
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
    `,this.modalBody.querySelector(".rating-form").addEventListener("submit",i=>this.handleSubmit(i)),this.setupStarsUpdate()}async handleSubmit(e){e.preventDefault();const t=e.target,i=new FormData(t),s=i.get("rating"),a=i.get("email"),n=i.get("comment");if(!s||!a||!n){h.error({title:"Error",message:"Please fill in all fields!",position:"topRight"});return}const o={rate:Number(s),email:a,review:n};try{const l=await k(this.exerciseId,o);console.log(l),h.success({title:"Update rating",message:"Update was successfully!",position:"topRight"}),this.close()}catch(l){h.error({title:"Update Error",message:l.message,position:"topRight"})}}close(){this.modalBody.innerHTML="",this.exerciseId=null,this.backToExercise()}}class O{constructor(){this.modalOverlay=document.querySelector(".modal-overlay"),this.modal=document.getElementById("exerciseModal"),this.modalBody=document.querySelector(".modal-body"),this.closeBtn=this.modal.querySelector(".modal-close"),this.ratingModal=new I(this.modalBody,this.render.bind(this)),this.exercise=null,this.isFavorite=!1,this.isRatingOpen=!1,this.handleOverlayClick=this.handleOverlayClick.bind(this),this.handleEscKey=this.handleEscKey.bind(this),this.handleClose=this.handleClose.bind(this)}async open(e){const t=e.target.closest(".workout-card");if(!t)return;const i=t.dataset.id;this.modalOverlay.classList.add("is-open"),this.modalBody.innerHTML=this.createSkeletonMarkup();try{this.exercise=await S(i),this.isFavorite=$(this.exercise._id),this.render(),this.modalOverlay.addEventListener("click",this.handleOverlayClick),window.addEventListener("keydown",this.handleEscKey),this.closeBtn.addEventListener("click",this.handleClose)}catch(s){h.error({title:"Request exercise Error",message:s==null?void 0:s.message,position:"topRight"}),console.error(s),this.modalBody.innerHTML='<p class="error">Failed to load exercise. Try again later.</p>'}}close(){this.modalOverlay.classList.remove("is-open"),this.exercise=null,this.isFavorite=!1,this.isRatingOpen=!1,this.modalOverlay.removeEventListener("click",this.handleOverlayClick),this.closeBtn.removeEventListener("click",this.handleClose),window.removeEventListener("keydown",this.handleEscKey)}render(){this.modalBody.innerHTML=this.createExerciseMarkup(),this.addEventListeners()}addEventListeners(){const e=this.modal.querySelector(".favorites-btn"),t=this.modal.querySelector(".rate-btn");e.addEventListener("click",()=>this.toggleFavorite(e)),t.addEventListener("click",()=>{this.ratingModal.open(this.exercise._id),this.isRatingOpen=!0})}toggleFavorite(e){this.isFavorite?(w(this.exercise._id),this.isFavorite=!1):(M(this.exercise),this.isFavorite=!0),this.updateFavoritesButton(e)}updateFavoritesButton(e){e.innerHTML=`
      <span class="favorites-btn-text">
        ${this.isFavorite?"Remove from favorites":"Add to favorites"}
      </span>
      <svg class="icon-heart" height="18" width="20">
        <use href="./img/icons.svg#${this.isFavorite?"icon-trash":"icon-heart"}"></use>
      </svg>
    `}createStars(e){return`
    <div class="rating" style="--fill: ${e/5*100}%;">
      <div class="rating-bg">
        ${[...Array(5)].map(()=>`
          <svg class="star" width="18" height="18">
            <use href="./img/icons.svg#icon-Star"></use>
          </svg>
        `).join("")}
      </div>
      <div class="rating-fill">
        ${[...Array(5)].map(()=>`
          <svg class="star" width="18" height="18">
            <use href="./img/icons.svg#icon-Star"></use>
          </svg>
        `).join("")}
      </div>
    </div>
  `}createExerciseMarkup(){const e=this.exercise;return`
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
                <use href="./img/icons.svg#${this.isFavorite?"icon-trash":"icon-heart"}"></use>
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
  `}}async function C(){const e=(await u(()=>import("./pagination-DubV0k8c.js"),__vite__mapDeps([4,1,2,3]))).default,t=!0,i=new O,s=new F(t,e,i),a=new m(t,s,e),{category:n,exercise:o,keyword:l,page:v}=Object.fromEntries(g.initParams.entries());if(n&&o)setTimeout(()=>{s.init(n,o,l,v),a.setActiveFilter(n),a.setActivePath(o)},50);else if(n){const p=["Muscles","Body parts","Equipment"].indexOf(n);a.onClick({target:document.querySelectorAll(".filters-list .filters-item")[p]})}else a.onClick({target:document.querySelector(".filters-list .filters-item")})}C();
//# sourceMappingURL=main-BGrMdw_8.js.map
