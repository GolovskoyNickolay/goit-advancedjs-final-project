const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-B7Wg90_Z.js","assets/vendor-DtMf18Bm.js","assets/vendor-D_nxXpU-.css","assets/styles-DiV_As1u.css"])))=>i.map(i=>d[i]);
var S=Object.defineProperty;var T=(e,t,s)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var h=(e,t,s)=>T(e,typeof t!="symbol"?t+"":t,s);/* empty css               */import{a as I,i as g}from"./vendor-DtMf18Bm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const u=document.getElementById("backdrop");window.openMenu=()=>{u==null||u.classList.add("is-open")};window.closeMenu=()=>{u==null||u.classList.remove("is-open")};window.menuLayoutClickHandler=e=>{e.stopPropagation()};const m=document.querySelector(".router"),p=document.body;let w=0,y;const P=()=>{if(!p.hasAttribute("data-user-scrolling"))return;const e=document.documentElement.scrollTop;m.classList.add("sticky"),e>0?m.classList.toggle("hidden",e>w):m.classList.remove("sticky"),w=e},O=()=>{p.setAttribute("data-user-scrolling","true"),clearTimeout(y),y=setTimeout(()=>{p.removeAttribute("data-user-scrolling")},100)};window.addEventListener("scroll",P);document.addEventListener("wheel",O);const f=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{"Content-Type":"application/json"}});f.interceptors.response.use(e=>e,e=>{var t;if(e.response&&e.response.status===409){const s=((t=e.response.data)==null?void 0:t.message)||"Subscription already exists";return g.error({title:"Subscription Error",message:s,position:"topRight"}),{data:null}}else return console.error(e),g.error({title:"Request Error",message:e==null?void 0:e.message,position:"topRight"}),{data:null}});async function A(e){const{data:t}=await f.get("/exercises",{params:e});return t}async function U(e={}){const{data:t}=await f.get("/filters",{params:e});return t}const C="modulepreload",_=function(e){return"/goit-advancedjs-final-project/"+e},v={},F=function(t,s,n){let r=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),a=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(s.map(c=>{if(c=_(c),c in v)return;v[c]=!0;const d=c.endsWith(".css"),E=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${E}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":C,d||(l.as="script"),l.crossOrigin="",l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),d)return new Promise((b,x)=>{l.addEventListener("load",b),l.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${c}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return r.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})};function j(e){return String(e).charAt(0).toUpperCase()+String(e).slice(1)}function W(e,t="LI",s="UL"){for(;e.nodeName!==t&&e.nodeName!==s;)e=e.parentElement;return e.nodeName===t?e:null}const $=768,R=()=>window.innerWidth<$,k="invisiable",z="favouritesExercises",H="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",M={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class L{constructor(t,s){h(this,"paginationExerciseCallback",t=>{this.render(t)});h(this,"searchCallback",t=>{this.keyword=t||"",this.render()});this.exerciseyList=document.body.querySelector(".exercise-list"),this.limit=R()?8:10,this.paginationInstance=s,t&&async function(n){const r=await F(()=>import("./search-B7Wg90_Z.js"),__vite__mapDeps([0,1,2,3]));n.searchForm=r.default}(this)}init(t,s){this.show(),this.filter=t,this.exercise=s,this.keyword="",this.searchForm&&(this.searchForm.show(),this.searchForm.callback=this.searchCallback),this.render()}async render(t=1){try{const s={[M[this.filter]]:this.exercise,limit:this.limit,page:t};this.keyword&&(s.keyword=this.keyword);const n=await A(s);this.page=t,this.exerciseyList.innerHTML=n.results.map(r=>L.exerciseMarkup(r)).join(""),this.paginationInstance.render(n.totalPages,n.page),this.paginationInstance.callback=this.paginationExerciseCallback,this.show()}catch{}}static exerciseMarkup({_id:t,rating:s,name:n,burnedCalories:r,time:o,bodyPart:i,target:a},c=!1){return`<li class="workout-card" data-id="${t}">
          <div class="workout-card-container">
            <div class="workout-header">
              <span class="workout-badge">WORKOUT</span>
              ${c?`<button onclick="document.removeFavourite(this)" class="workout-remove-btn">
                  <svg width="16" height="16" class="workout-remove-icon">
                    <use xlink:href="../img/icons.svg#icon-remove"></use>
                  </svg></button>`:`<div class="workout-rating">
                    <span class="workout-rating-value">${s.toFixed(2)}</span>
                    <svg width="18" height="18" class="workout-rating-icon">
                      <use xlink:href="../img/icons.svg#icon-Star"></use>
                    </svg>
                  </div>`}
              <a href="#" class="workout-start-btn"
                >Start
                <svg width="16" height="16" class="workout-start-icon">
                  <use xlink:href="../img/icons.svg#icon-start"></use>
                </svg>
              </a>
            </div>
            <div class="workout-body">
              <svg width="24" height="24" class="workout-icon">
                <use xlink:href="../img/icons.svg#icon-running"></use>
              </svg>
              <h3 class="workout-title">${n}</h3>
            </div>
            <ul class="workout-meta">
              <li class="workout-meta-item">
                <span class="workout-meta-name">Burned calories:</span>
                <span class="workout-meta-value">${r} / ${o||"..."}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Body part:</span>
                <span class="workout-meta-value">${i}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Target:</span>
                <span class="workout-meta-value">${a}</span>
              </li>
            </ul>
          </div>
        </li>`}show(){this.exerciseyList.classList.remove(k),this.exerciseyList.hidden=!1}hide(){this.exerciseyList.classList.add(k),this.exerciseyList.hidden=!0}}export{L as E,k as I,z as N,H as T,F as _,j as c,W as f,U as g,R as i};
//# sourceMappingURL=exercise-fEcZxVzC.js.map
