const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-DtpRqFk-.js","assets/vendor-DtMf18Bm.js","assets/vendor-D_nxXpU-.css","assets/styles-CvV1Memw.css"])))=>i.map(i=>d[i]);
var x=Object.defineProperty;var q=(e,t,s)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var m=(e,t,s)=>q(e,typeof t!="symbol"?t+"":t,s);/* empty css               */import{a as I,i as f}from"./vendor-DtMf18Bm.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const u=document.getElementById("backdrop");window.openMenu=()=>{u==null||u.classList.add("is-open")};window.closeMenu=()=>{u==null||u.classList.remove("is-open")};window.menuLayoutClickHandler=e=>{e.stopPropagation()};const p=document.querySelector(".router"),g=document.body;let w=0,y;const T=()=>{if(!g.hasAttribute("data-user-scrolling"))return;const e=document.documentElement.scrollTop;p.classList.add("sticky"),e>0?p.classList.toggle("hidden",e>w):p.classList.remove("sticky"),w=e},C=()=>{g.setAttribute("data-user-scrolling","true"),clearTimeout(y),y=setTimeout(()=>{g.removeAttribute("data-user-scrolling")},100)};window.addEventListener("scroll",T);document.addEventListener("wheel",C);const A=document.querySelectorAll(".menu-items.router .menu-item a");A.forEach(e=>{e.href===window.location.href||window.location.pathname.endsWith(e.getAttribute("href"))?e.parentElement.classList.add("active"):e.parentElement.classList.remove("active")});const h=I.create({baseURL:"https://your-energy.b.goit.study/api",headers:{"Content-Type":"application/json"}});h.interceptors.response.use(e=>e,e=>{var t;if(e.response&&e.response.status===409){const s=((t=e.response.data)==null?void 0:t.message)||"Subscription already exists";return f.error({title:"Subscription Error",message:s,position:"topRight"}),{data:null}}else return console.error(e),f.error({title:"Request Error",message:e==null?void 0:e.message,position:"topRight"}),{data:null}});async function O(e){const{data:t}=await h.get("/exercises",{params:e});return t}async function W(e={}){const{data:t}=await h.get("/filters",{params:e});return t}async function P(){const{data:e}=await h.get("/quote");return e}async function $(){const e=new Date().toISOString().split("T")[0],t=localStorage.getItem("quote"),s=localStorage.getItem("author"),n=localStorage.getItem("quoteDate");if(t&&s&&n===e){document.querySelector(".sidebar-quote").textContent=`${t}`,document.querySelector(".sidebar-quote-author").textContent=`${s}`;return}const o=await P(),i=o.quote,r=o.author;document.querySelector(".sidebar-quote").textContent=`${i}`,document.querySelector(".sidebar-quote-author").textContent=`${r}`,localStorage.setItem("quote",i),localStorage.setItem("author",r),localStorage.setItem("quoteDate",e)}$();const _="modulepreload",F=function(e){return"/goit-advancedjs-final-project/"+e},v={},R=function(t,s,n){let o=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.allSettled(s.map(c=>{if(c=F(c),c in v)return;v[c]=!0;const d=c.endsWith(".css"),b=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${b}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":_,d||(l.as="script"),l.crossOrigin="",l.href=c,a&&l.setAttribute("nonce",a),document.head.appendChild(l),d)return new Promise((E,S)=>{l.addEventListener("load",E),l.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${c}`)))})}))}function i(r){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r}return o.then(r=>{for(const a of r||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})};function Q(e){return String(e).charAt(0).toUpperCase()+String(e).slice(1)}function z(e,t="LI",s="UL"){for(;e.nodeName!==t&&e.nodeName!==s;)e=e.parentElement;return e.nodeName===t?e:null}const M=768,B=()=>window.innerWidth<M,k="invisiable",H="favouritesExercises",K="It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.",N={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"};class L{constructor(t,s){m(this,"paginationExerciseCallback",t=>{this.render(t)});m(this,"searchCallback",t=>{this.keyword=t||"",this.render()});this.exerciseyList=document.body.querySelector(".exercise-list"),this.limit=B()?8:10,this.paginationInstance=s,t&&async function(n){const o=await R(()=>import("./search-DtpRqFk-.js"),__vite__mapDeps([0,1,2,3]));n.searchForm=o.default}(this)}init(t,s){this.show(),this.filter=t,this.exercise=s,this.keyword="",this.searchForm&&(this.searchForm.show(),this.searchForm.callback=this.searchCallback),this.render()}async render(t=1){try{const s={[N[this.filter]]:this.exercise,limit:this.limit,page:t};this.keyword&&(s.keyword=this.keyword);const n=await O(s);this.page=t,this.exerciseyList.innerHTML=n.results.map(o=>L.exerciseMarkup(o)).join(""),this.paginationInstance.render(n.totalPages,n.page),this.paginationInstance.callback=this.paginationExerciseCallback,this.show()}catch{}}static exerciseMarkup({_id:t,rating:s,name:n,burnedCalories:o,time:i,bodyPart:r,target:a},c=!1){return`<li class="workout-card" data-id="${t}">
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
                <span class="workout-meta-value">${o} / ${i||"..."}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Body part:</span>
                <span class="workout-meta-value">${r}</span>
              </li>
              <li class="workout-meta-item">
                <span class="workout-meta-name">Target:</span>
                <span class="workout-meta-value">${a}</span>
              </li>
            </ul>
          </div>
        </li>`}show(){this.exerciseyList.classList.remove(k),this.exerciseyList.hidden=!1}hide(){this.exerciseyList.classList.add(k),this.exerciseyList.hidden=!0}}export{L as E,k as I,H as N,K as T,R as _,Q as c,z as f,W as g,B as i};
//# sourceMappingURL=exercise-alPSnkGJ.js.map
