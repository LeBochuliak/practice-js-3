// функції для відображення елементів інтерфейсу.
import { categoriesList, productsList, modalContentContainer } from "./refs";

export function renderCategoriesList(nameCategory) {
    const markup = `<li class='categories__item'>   
                  <button type='button' class='categories__btn'>${nameCategory}</button>
        </li>`;
    return categoriesList.insertAdjacentHTML('beforeend', markup);
    
}

export function renderProductsList(products, category) {
    if (category !== "all") {
        products = products.filter(el => el.category === category);
    }
    const markup = products.map(({id, images, title, brand, category, price}) => {

        return `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${images[0]}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand: ${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price: ${price}$</p>
 </li>`;
    }).join("");
    productsList.insertAdjacentHTML('beforeend', markup);
};

export function renderProduct({id, images, title, price, tags, description, shippingInformation, returnPolicy}) {
    const markupTags = tags.map(el => `<li><p>${el}</p></li>`).join("");
    const markup =  
        `<div class="js-modal-product-container" data-id=${id}>
            <img class="modal-product__img" src="${images[0]}" alt="${title}" />
            <div class="modal-product__content">
                <p class="modal-product__title">${title}</p>
                <ul class="modal-product__tags">${markupTags}</ul>
                <p class="modal-product__description">${description}</p>
                <p class="modal-product__shipping-information">Shipping: ${shippingInformation}</p>
                <p class="modal-product__return-policy">Return Policy: ${returnPolicy}</p>
                <p class="modal-product__price">Price: ${price}$</p>
                <button class="modal-product__buy-btn" type="button">Buy</button>
            </div>
        </div>
        
`;
    modalContentContainer.insertAdjacentHTML('beforeend', markup)
}