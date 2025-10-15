import"./assets/styles-JE8YjOlG.js";import{a as s}from"./assets/vendor-CWxt7QI6.js";const r=document.querySelector(".categories"),c=document.querySelector(".products"),i=document.querySelector(".not-found");function f(t){const e=`<li class='categories__item'>   
                  <button type='button' class='categories__btn'>${t}</button>
        </li>`;return r.insertAdjacentHTML("beforeend",e)}function l(t,e){e!=="all"&&(t=t.filter(a=>a.category===e));const o=t.map(({id:a,images:u,title:n,brand:g,category:p,price:_})=>`<li class="products__item" data-id="${a}">
    <img class="products__image" src="${u[0]}" alt="${n}"/>
    <p class="products__title">${n}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${g}</span></p>
    <p class="products__category">Category: ${p}</p>
    <p class="products__price">Price: ${_}$</p>
 </li>`).join("");c.insertAdjacentHTML("beforeend",o)}s.defaults.baseURL="https://dummyjson.com/products";function m(){s.get("/category-list").then(t=>t.data.forEach(e=>{f(e)})).catch(t=>console.log(t))}function d(){s.get(`?limit=12&skip=${(1-1)*12}`).then(e=>l(e.data.products,"all")).catch(e=>e)}function b(t,e,o){s.get(`/category/${t}`).then(a=>{if(a.data.products.length===0){i.classList.add("not-found--visible");return}i.classList.remove("not-found--visible"),l(a.data.products.slice(e,o),t)}).catch(a=>a)}let y=0,L=12;function $(){r.querySelector(".categories__btn").textContent==="all"&&r.querySelector(".categories__btn").classList.add("categories__btn--active")}m();d();$();r.addEventListener("click",t=>{if(t.target.tagName==="BUTTON"){if(r.querySelectorAll(".categories__btn").forEach(e=>e.classList.remove("categories__btn--active")),t.target.classList.add("categories__btn--active"),t.target.textContent==="all"){c.innerHTML="",d();return}c.innerHTML="",b(t.target.textContent,y,L)}});
//# sourceMappingURL=index.js.map
