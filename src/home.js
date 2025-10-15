//Логіка сторінки Home

import { categoriesAxios, productsAxios, categoryAxios  } from "./js/products-api";
import { categoriesList, productsList } from "./js/refs";
import { startCategoryPagination, endCategoryPagination } from "./js/constants";
import { defaultCategory } from "./js/helpers";

categoriesAxios();
productsAxios();
defaultCategory();


categoriesList.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    categoriesList.querySelectorAll('.categories__btn').forEach((el) => el.classList.remove('categories__btn--active'));
    
    event.target.classList.add('categories__btn--active');
    if (event.target.textContent === 'all') {
        productsList.innerHTML = '';
        productsAxios();
        return;
    }
    
    productsList.innerHTML = '';
    categoryAxios(event.target.textContent, startCategoryPagination, endCategoryPagination);
    
})