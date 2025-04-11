const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-BIqOb-UD.js","assets/vendor-DtMf18Bm.js","assets/vendor-D_nxXpU-.css","assets/styles-DvXLC6Fh.css","assets/pagination-Ck4EkatG.js"])))=>i.map(i=>d[i]);
var T=Object.defineProperty;var P=(s,t,e)=>t in s?T(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var u=(s,t,e)=>P(s,typeof t!="symbol"?t+"":t,e);/* empty css               */import{a as M,i as v}from"./vendor-DtMf18Bm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const d=document.getElementById("backdrop");window.openMenu=()=>{d==null||d.classList.add("is-open")};window.closeMenu=()=>{d==null||d.classList.remove("is-open")};window.menuLayoutClickHandler=s=>{s.stopPropagation()};const p=document.querySelector(".router"),g=document.body;let k=0,b;const _=()=>{if(!g.hasAttribute("data-user-scrolling"))return;const s=document.documentElement.scrollTop;p.classList.add("sticky"),s>0?p.classList.toggle("hidden",s>k):p.classList.remove("sticky"),k=s},O=()=>{g.setAttribute("data-user-scrolling","true"),clearTimeout(b),b=setTimeout(()=>{g.removeAttribute("data-user-scrolling")},100)};window.addEventListener("scroll",_);document.addEventListener("wheel",O);const f=M.create({baseURL:"https://your-energy.b.goit.study/api",headers:{"Content-Type":"application/json"}});f.interceptors.response.use(s=>s,s=>{var t;if(s.response&&s.response.status===409){const e=((t=s.response.data)==null?void 0:t.message)||"Subscription already exists";return v.error({title:"Subscription Error",message:e,position:"topRight"}),{data:null}}else return console.error(s),v.error({title:"Request Error",message:s==null?void 0:s.message,position:"topRight"}),{data:null}});async function $(s){const{data:t}=await f.get("/exercises",{params:s});return t}async function q(s={}){const{data:t}=await f.get("/filters",{params:s});return t}const A="modulepreload",R=function(s){return"/goit-advancedjs-final-project/"+s},E={},y=function(t,e,r){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(e.map(c=>{if(c=R(c),c in E)return;E[c]=!0;const h=c.endsWith(".css"),I=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${I}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":A,h||(l.as="script"),l.crossOrigin="",l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),h)return new Promise((S,C)=>{l.addEventListener("load",S),l.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${c}`)))})}))}function n(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&n(a.reason);return t().catch(n)})};function F(s){return String(s).charAt(0).toUpperCase()+String(s).slice(1)}function U(s,t="LI",e="UL"){for(;s.nodeName!==t&&s.nodeName!==e;)s=s.parentElement;return s.nodeName===t?s:null}const B=768,x=()=>window.innerWidth<B,m="invisiable",H={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class w{constructor(t,e){u(this,"paginationExerciseCallback",t=>{this.render(t)});u(this,"searchCallback",t=>{this.keyword=t||"",this.render()});this.exerciseyList=document.body.querySelector(".exercise-list"),this.limit=x()?8:10,this.paginationInstance=e,t&&async function(r){const i=await y(()=>import("./search-BIqOb-UD.js"),__vite__mapDeps([0,1,2,3]));r.searchForm=i.default}(this)}init(t,e){this.show(),this.filter=t,this.exercise=e,this.keyword="",this.searchForm&&(this.searchForm.show(),this.searchForm.callback=this.searchCallback),this.render()}async render(t=1){try{const e={[H[this.filter]]:this.exercise,limit:this.limit,page:t};this.keyword&&(e.keyword=this.keyword);const r=await $(e);this.page=t,this.exerciseyList.innerHTML=r.results.map(w.exerciseMarkup).join(""),this.paginationInstance.render(r.totalPages,r.page),this.paginationInstance.callback=this.paginationExerciseCallback,this.show()}catch{}}static exerciseMarkup({_id:t,rating:e,name:r,burnedCalories:i,time:n,bodyPart:o,target:a}){return`<li class="workout-card" data-id="${t}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              <span class="workout-rating-value">${e.toFixed(2)}</span>
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
                <span class="workout-meta-value">${i} / ${n||"..."}</span>
              </li>
              <li class="workout-meta-item">
                Body part: <span class="workout-meta-value">${o}</span>
              </li>
              <li class="workout-meta-item">
                Target: <span class="workout-meta-value">${a}</span>
              </li>
            </ul>
          </div>
        </li>`}show(){this.exerciseyList.classList.remove(m),this.exerciseyList.hidden=!1}hide(){this.exerciseyList.classList.add(m),this.exerciseyList.hidden=!0}}class L{constructor(t,e,r){u(this,"onClick",({target:t})=>{t.nodeName==="LI"&&(this.items.forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.filter=t.dataset.filter,this.exerciseInstance.hide(),this.render(),this.path.start.innerHTML="Exercises",this.path.part.innerHTML="")});u(this,"paginationCategoryCallback",t=>{this.render(Number(t))});u(this,"cardOnClick",({target:t})=>{const e=U(t,"LI","UL");e&&(this.hide(),this.exerciseInstance.init(this.filter,e.dataset.exercise),this.path.start.innerHTML="Exercises /",this.path.part.innerHTML=e.dataset.exercise)});this.exerciseInstance=e,this.paginationInstance=r,this.filterList=document.body.querySelector(".filters-list"),this.filterList.addEventListener("click",this.onClick),this.items=Array.from(this.filterList.querySelectorAll("li")),this.categoryList=document.body.querySelector(".category-list"),this.categoryList.addEventListener("click",this.cardOnClick),this.filter="Muscles",this.path={start:document.querySelector(".filter-path-start"),part:document.querySelector(".filter-path-part")},this.limit=x()?9:12,t&&async function(i){const n=await y(()=>import("./search-BIqOb-UD.js"),__vite__mapDeps([0,1,2,3]));i.searchForm=n.default}(this)}async render(t=1){var e;try{const r=await q({filter:this.filter,limit:this.limit,page:t});this.categoryList.innerHTML=r.results.map(L.categoryMarkup).join(""),this.paginationInstance.render(r.totalPages,r.page),this.paginationInstance.callback=this.paginationCategoryCallback,(e=this.searchForm)==null||e.hide(),this.show()}catch{}}static categoryMarkup({imgURL:t,name:e,filter:r}){return`<li class="category-card" data-muscle="abductors" data-exercise="${e}">
          <img
            src="${t}"
            alt="Image shows exercise ${e}"
            class="category-card-image"
          />
          <div class="category-content">
            <h3 class="category-title">${F(e)}</h3>
            <p class="category-subtitle">${r}</p>
          </div>
        </li>`}show(){this.categoryList.classList.remove(m),this.categoryList.hidden=!1}hide(){this.categoryList.classList.add(m),this.categoryList.hidden=!0}}async function N(){const t=(await y(()=>import("./pagination-Ck4EkatG.js"),__vite__mapDeps([4,1,2,3]))).default,e=!0,r=new w(e,t);new L(e,r,t).onClick({target:document.querySelector(".filters-list .filters-item")})}N();export{m as I};
//# sourceMappingURL=main-DqjUK_3t.js.map
