// хендлери, які передаються в addEventListener.
import { categoriesList, productsList, modalConteiner } from "./refs";
import { productsAxios, categoryAxios, productAxios } from "./products-api";
import { startCategoryPagination, endCategoryPagination } from "./constants";

export function categoryProductsHandler(event) {
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
};

export function productHandler(event) {
    const li = event.target.closest('li');
    if (!li) return;
    productAxios(li.dataset.id);   
    modalConteiner.classList.add('modal--is-open');
}