const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/search-B7Wg90_Z.js","assets/exercise-fEcZxVzC.js","assets/vendor-DtMf18Bm.js","assets/vendor-D_nxXpU-.css","assets/styles-DiV_As1u.css","assets/pagination-aPgFxaPI.js"])))=>i.map(i=>d[i]);
var h=Object.defineProperty;var d=(s,t,e)=>t in s?h(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var a=(s,t,e)=>d(s,typeof t!="symbol"?t+"":t,e);import{i as u,_ as o,g,c as m,f as y,I as n,E as f}from"./exercise-fEcZxVzC.js";/* empty css               */import"./vendor-DtMf18Bm.js";class r{constructor(t,e,i){a(this,"onClick",({target:t})=>{t.nodeName==="LI"&&(this.items.forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.filter=t.dataset.filter,this.exerciseInstance.hide(),this.render(),this.path.start.innerHTML="Exercises",this.path.part.innerHTML="")});a(this,"paginationCategoryCallback",t=>{this.render(Number(t))});a(this,"cardOnClick",({target:t})=>{const e=y(t,"LI","UL");e&&(this.hide(),this.exerciseInstance.init(this.filter,e.dataset.exercise),this.path.start.innerHTML="Exercises /",this.path.part.innerHTML=e.dataset.exercise)});this.exerciseInstance=e,this.paginationInstance=i,this.filterList=document.body.querySelector(".filters-list"),this.filterList.addEventListener("click",this.onClick),this.items=Array.from(this.filterList.querySelectorAll("li")),this.categoryList=document.body.querySelector(".category-list"),this.categoryList.addEventListener("click",this.cardOnClick),this.filter="Muscles",this.path={start:document.querySelector(".filter-path-start"),part:document.querySelector(".filter-path-part")},this.limit=u()?9:12,t&&async function(c){const l=await o(()=>import("./search-B7Wg90_Z.js"),__vite__mapDeps([0,1,2,3,4]));c.searchForm=l.default}(this)}async render(t=1){var e;try{const i=await g({filter:this.filter,limit:this.limit,page:t});this.categoryList.innerHTML=i.results.map(r.categoryMarkup).join(""),this.paginationInstance.render(i.totalPages,i.page),this.paginationInstance.callback=this.paginationCategoryCallback,(e=this.searchForm)==null||e.hide(),this.show()}catch{}}static categoryMarkup({imgURL:t,name:e,filter:i}){return`<li class="category-card" data-muscle="abductors" data-exercise="${e}">
          <img
            src="${t}"
            alt="Image shows exercise ${e}"
            class="category-card-image"
          />
          <div class="category-content">
            <h3 class="category-title">${m(e)}</h3>
            <p class="category-subtitle">${i}</p>
          </div>
        </li>`}show(){this.categoryList.classList.remove(n),this.categoryList.hidden=!1}hide(){this.categoryList.classList.add(n),this.categoryList.hidden=!0}}async function p(){const t=(await o(()=>import("./pagination-aPgFxaPI.js"),__vite__mapDeps([5,1,2,3,4]))).default,e=!0,i=new f(e,t);new r(e,i,t).onClick({target:document.querySelector(".filters-list .filters-item")})}p();
//# sourceMappingURL=main-7BidAhGy.js.map
