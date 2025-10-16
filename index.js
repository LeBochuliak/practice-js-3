import"./assets/styles-JE8YjOlG.js";import{a as n}from"./assets/vendor-CWxt7QI6.js";const r=document.querySelector(".categories"),s=document.querySelector(".products"),g=document.querySelector(".not-found"),y=document.querySelector(".modal__content"),p=document.querySelector(".modal");function b(t){const e=`<li class='categories__item'>   
                  <button type='button' class='categories__btn'>${t}</button>
        </li>`;return r.insertAdjacentHTML("beforeend",e)}function _(t,e){e!=="all"&&(t=t.filter(a=>a.category===e));const o=t.map(({id:a,images:l,title:c,brand:i,category:d,price:u})=>`<li class="products__item" data-id="${a}">
    <img class="products__image" src="${l[0]}" alt="${c}"/>
    <p class="products__title">${c}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${i}</span></p>
    <p class="products__category">Category: ${d}</p>
    <p class="products__price">Price: ${u}$</p>
 </li>`).join("");s.insertAdjacentHTML("beforeend",o)}function $({images:t,title:e,price:o,tags:a,description:l,shippingInformation:c,returnPolicy:i}){const d=a.map(f=>`<li><p>${f}</p></li>`).join(""),u=`<img class="modal-product__img" src="${t[0]}" alt="${e}" />
            <div class="modal-product__content">
                <p class="modal-product__title">${e}</p>
                <ul class="modal-product__tags">${d}</ul>
                <p class="modal-product__description">${l}</p>
                <p class="modal-product__shipping-information">Shipping: ${c}</p>
                <p class="modal-product__return-policy">Return Policy: ${i}</p>
                <p class="modal-product__price">Price: ${o}$</p>
                <button class="modal-product__buy-btn" type="button">Buy</button>
            </div>
`;y.insertAdjacentHTML("beforeend",u)}n.defaults.baseURL="https://dummyjson.com/products";function L(){n.get("/category-list").then(t=>t.data.forEach(e=>{b(e)})).catch(t=>{console.error("Error loading categories data:",t),alert("Unfortunately, the categories data could not be loaded. Please try again later.")})}function m(){n.get(`?limit=12&skip=${(1-1)*12}`).then(e=>_(e.data.products,"all")).catch(e=>{console.error("Error loading products data:",e),alert("Unfortunately, the products data could not be loaded. Please try again later.")})}function h(t,e,o){n.get(`/category/${t}`).then(a=>{if(a.data.products.length===0){g.classList.add("not-found--visible");return}g.classList.remove("not-found--visible"),_(a.data.products.slice(e,o),t)}).catch(a=>{console.error("Error loading category data:",a),alert("Unfortunately, the category data could not be loaded. Please try again later.")})}function P(t){n.get(`/${t}`).then(e=>$(e.data)).catch(e=>{console.error("Error loading product data:",e),alert("Unfortunately, the product data could not be loaded. Please try again later.")})}function C(){r.querySelector(".categories__btn").textContent==="all"&&r.querySelector(".categories__btn").classList.add("categories__btn--active")}let v=0,E=12;function S(t){if(t.target.tagName==="BUTTON"){if(r.querySelectorAll(".categories__btn").forEach(e=>e.classList.remove("categories__btn--active")),t.target.classList.add("categories__btn--active"),t.target.textContent==="all"){s.innerHTML="",m();return}s.innerHTML="",h(t.target.textContent,v,E)}}function k(t){const e=t.target.closest("li");e&&(P(e.dataset.id),p.classList.add("modal--is-open"))}function q(t){t.target.classList.contains("modal__close-btn")&&p.classList.remove("modal--is-open")}L();m();C();r.addEventListener("click",S);s.addEventListener("click",k);p.addEventListener("click",q);
//# sourceMappingURL=index.js.map
