// функції для відображення елементів інтерфейсу.
import { categoriesList, productsList } from "./refs";

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
}