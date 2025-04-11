var E=Object.defineProperty;var x=s=>{throw TypeError(s)};var C=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var l=(s,e,t)=>C(s,typeof e!="symbol"?e+"":e,t),k=(s,e,t)=>e.has(s)||x("Cannot "+t);var u=(s,e,t)=>(k(s,e,"read from private field"),t?t.call(s):e.get(s)),p=(s,e,t)=>e.has(s)?x("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),g=(s,e,t,r)=>(k(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);/* empty css               */import{a as I,i as v}from"./vendor-DtMf18Bm.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const o=document.getElementById("backdrop");window.openMenu=()=>{o==null||o.classList.add("is-open")};window.closeMenu=()=>{o==null||o.classList.remove("is-open")};window.menuLayoutClickHandler=s=>{s.stopPropagation()};const f=document.querySelector(".router"),L=document.body;let b=0,M;const q=()=>{if(!L.hasAttribute("data-user-scrolling"))return;const s=document.documentElement.scrollTop;f.classList.add("sticky"),s>0?f.classList.toggle("hidden",s>b):f.classList.remove("sticky"),b=s},H=()=>{L.setAttribute("data-user-scrolling","true"),clearTimeout(M),M=setTimeout(()=>{L.removeAttribute("data-user-scrolling")},100)};window.addEventListener("scroll",q);document.addEventListener("wheel",H);const w=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{"Content-Type":"application/json"}});w.interceptors.response.use(s=>s,s=>{var e;if(s.response&&s.response.status===409){const t=((e=s.response.data)==null?void 0:e.message)||"Subscription already exists";return v.error({title:"Subscription Error",message:t,position:"topRight"}),{data:null}}else return console.error(s),v.error({title:"Request Error",message:s==null?void 0:s.message,position:"topRight"}),{data:null}});async function $(s){const{data:e}=await w.get("/exercises",{params:s});return e}async function O(s={}){const{data:e}=await w.get("/filters",{params:s});return e}const i="invisiable",N={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};var c;class A{constructor(e){p(this,c,null);l(this,"onClick",({target:e})=>{e.nodeName==="LI"&&u(this,c)&&u(this,c).call(this,e.dataset.index)});this.callback=e||null,this.element=document.querySelector(".pagination"),this.element.addEventListener("click",this.onClick),this.element.innerHTML=this.paginationMarkup(),this.elements={prev2:this.element.children[1],prev:this.element.children[2],active:this.element.children[3],next:this.element.children[4],next2:this.element.children[5],startDots:this.element.children[0],endDots:this.element.children[6]}}set callback(e){typeof e=="function"&&g(this,c,e)}get callback(){}render(e,t){e?this.show():this.hide(),t=Number(t),this.elements.active.innerHTML=t,this.elements.active.dataset.index=t,this.elements.active.classList.remove(i),t-3>0?(this.elements.startDots.dataset.index=1,this.elements.startDots.classList.remove(i)):this.elements.startDots.classList.add(i),t-1>0?(this.elements.prev.innerHTML=t-1,this.elements.prev.dataset.index=t-1,this.elements.prev.classList.remove(i)):this.elements.prev.classList.add(i),t-2>0?(this.elements.prev2.innerHTML=t-2,this.elements.prev2.dataset.index=t-2,this.elements.prev2.classList.remove(i)):this.elements.prev2.classList.add(i),t+1<=e?(this.elements.next.innerHTML=t+1,this.elements.next.dataset.index=t+1,this.elements.next.classList.remove(i)):this.elements.next.classList.add(i),t+2<=e?(this.elements.next2.innerHTML=t+2,this.elements.next2.dataset.index=t+2,this.elements.next2.classList.remove(i)):this.elements.next2.classList.add(i),t+3<=e?(this.elements.endDots.dataset.index=e,this.elements.endDots.classList.remove(i)):this.elements.endDots.classList.add(i)}reset(){this.element.innerHTML=""}paginationMarkup(){return`<li class="pagination-page invisiable">...</li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page selected invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li data-index="" class="pagination-page invisiable"></li>
        <li class="pagination-page invisiable">...</li>`}show(){this.element.classList.remove(i),this.element.hidden=!1}hide(){this.element.classList.add(i),this.element.hidden=!0}}c=new WeakMap;const m=new A;function D(s){return String(s).charAt(0).toUpperCase()+String(s).slice(1)}function P(s,e="LI",t="UL"){for(;s.nodeName!==e&&s.nodeName!==t;)s=s.parentElement;return s.nodeName===e?s:null}const B=768,S=()=>window.innerWidth<B;var d;class F{constructor(){p(this,d,null);this.form=document.querySelector(".search-form"),this.input=this.form.querySelector("input"),this.form.addEventListener("submit",e=>{e.preventDefault();const{value:t}=e.currentTarget.search;u(this,d)&&u(this,d).call(this,t)})}set callback(e){typeof e=="function"&&g(this,d,e)}get callback(){}show(){this.form.classList.remove(i),this.form.hidden=!1}hide(){this.form.classList.add(i),this.form.hidden=!0}}d=new WeakMap;const y=new F;class R{constructor(e){l(this,"onClick",({target:e})=>{e.nodeName==="LI"&&(this.items.forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.filter=e.dataset.filter,this.exerciseInstance.hide(),this.render(),this.path.start.innerHTML="Exercises",this.path.part.innerHTML="")});l(this,"paginationCategoryCallback",e=>{this.render(Number(e))});l(this,"cardOnClick",({target:e})=>{const t=P(e,"LI","UL");t&&(this.hide(),this.exerciseInstance.init(this.filter,t.dataset.exercise),this.path.start.innerHTML="Exercises /",this.path.part.innerHTML=t.dataset.exercise)});this.exerciseInstance=e,this.filterList=document.body.querySelector(".filters-list"),this.filterList.addEventListener("click",this.onClick),this.items=Array.from(this.filterList.querySelectorAll("li")),this.categoryList=document.body.querySelector(".category-list"),this.categoryList.addEventListener("click",this.cardOnClick),this.filter="Muscles",this.path={start:document.querySelector(".filter-path-start"),part:document.querySelector(".filter-path-part")},this.limit=S()?9:12}async render(e=1){try{const t=await O({filter:this.filter,limit:this.limit,page:e});this.categoryList.innerHTML=t.results.map(this.categoryMarkup).join(""),m.render(t.totalPages,t.page),m.callback=this.paginationCategoryCallback,y.hide(),this.show()}catch{}}categoryMarkup({imgURL:e,name:t,filter:r}){return`<li class="category-card" data-muscle="abductors" data-exercise="${t}">
          <img
            src="${e}"
            alt="Image shows exercise ${t}"
            class="category-card-image"
          />
          <div class="category-content">
            <h3 class="category-title">${D(t)}</h3>
            <p class="category-subtitle">${r}</p>
          </div>
        </li>`}show(){this.categoryList.classList.remove(i),this.categoryList.hidden=!1}hide(){this.categoryList.classList.add(i),this.categoryList.hidden=!0}}class U{constructor(){l(this,"paginationExerciseCallback",e=>{this.render(e)});l(this,"searchCallback",e=>{this.keyword=e||"",this.render()});this.exerciseyList=document.body.querySelector(".exercise-list"),this.limit=S()?8:10}init(e,t){this.show(),this.filter=e,this.exercise=t,this.keyword="",y.show(),y.callback=this.searchCallback,this.render()}async render(e=1){try{const t={[N[this.filter]]:this.exercise,limit:this.limit,page:e};this.keyword&&(t.keyword=this.keyword);const r=await $(t);this.page=e,this.exerciseyList.innerHTML=r.results.map(this.exerciseMarkup).join(""),m.render(r.totalPages,r.page),m.callback=this.paginationExerciseCallback,this.show()}catch{}}exerciseMarkup({_id:e,rating:t,name:r,burnedCalories:n,time:a,bodyPart:h,target:T}){return`<li class="workout-card" data-id="${e}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              <span class="workout-rating-value">${t.toFixed(2)}</span>
              <svg width="18" height="18" class="workout-rating-icon">
                <use xlink:href="../img/icons.svg#icon-Star"></use>
              </svg>
              <a href="#" class="workout-start-btn"
                >Start
                <svg width="16" height="16" class="workout-start-icon">
                  <use xlink:href="../img/icons.svg#menu"></use>
                </svg>
              </a>
            </div>
            <div class="workout-body">
              <svg width="24" height="24" class="workout-icon">
                <use xlink:href="../img/icons.svg#icon-running"></use>
              </svg>
              <h3 class="workout-title">${r}</h3>
            </div>
            <ul class="workout-meta">
              <li class="workout-meta-item">
                Burned calories:
                <span class="workout-meta-value">${n} / ${a||"..."}</span>
              </li>
              <li class="workout-meta-item">
                Body part: <span class="workout-meta-value">${h}</span>
              </li>
              <li class="workout-meta-item">
                Target: <span class="workout-meta-value">${T}</span>
              </li>
            </ul>
          </div>
        </li>`}show(){this.exerciseyList.classList.remove(i),this.exerciseyList.hidden=!1}hide(){this.exerciseyList.classList.add(i),this.exerciseyList.hidden=!0}}function j(){const s=new U;new R(s).onClick({target:document.querySelector(".filters-list .filters-item")})}j();
//# sourceMappingURL=main-BNtISCyp.js.map
