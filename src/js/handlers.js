// хендлери, які передаються в addEventListener.
import { categoriesList, productsList, modalConteiner, formEl } from "./refs";
import { productsListAxios, categoryAxios, productAxios, searchAxios } from "./products-api";
import { currentPage } from "./constants";
import { defaultCategory } from "./helpers";

export function categoryProductsHandler(event) {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    currentPage.page = 1;
    categoriesList.querySelectorAll('.categories__btn').forEach((el) => el.classList.remove('categories__btn--active'));
    
    event.target.classList.add('categories__btn--active');
    if (event.target.textContent === 'all') {
        productsList.innerHTML = '';
        productsListAxios();
        return;
    }
    
    productsList.innerHTML = '';
    categoryAxios(event.target.textContent);
};

export function productHandler(event) {
    const li = event.target.closest('li');
    if (!li) return;
    productAxios(li.dataset.id);  
    
    modalConteiner.classList.add('modal--is-open');
}

export function searchHandler(event) {
    event.preventDefault();
    currentPage.page = 1;
    if (event.target.elements.searchValue.value.trim() === '') {
        alert('Please, enter a search term!');
        productsList.innerHTML = '';
        productsListAxios();
        return;
    } 
    categoriesList.querySelectorAll('.categories__btn').forEach((el) => el.classList.remove('categories__btn--active'));
    defaultCategory();
    productsList.innerHTML = '';
    searchAxios(event.target.elements.searchValue.value); 
};

export function loadMoreHandler() {
    const category = document.querySelector('.categories__btn--active').textContent;
    currentPage.page ++;
    if (category !== 'all') {
        categoryAxios(category);
        return;
    };
    if (formEl.querySelector('input') !== '') {
        searchAxios(formEl.querySelector('input').value);
        return;
    }
    productsListAxios();
}
