// функції для запитів на бекенд.

import axios from 'axios';
import { renderCategoriesList, renderProductsList } from './render-function';
import { emptyContainer } from './refs';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export function categoriesAxios() {
    axios.get('/category-list')
    .then(response => response.data.forEach(el => {
        renderCategoriesList(el);
    }))
    .catch(error => console.log(error))
};

export function productsAxios() {
    let currentPage = 1;
    axios.get(`?limit=12&skip=${(currentPage - 1)* 12}`)
        .then(response => renderProductsList(response.data.products, 'all'))
        .catch(error => error)
        
};

export function categoryAxios(category, startPagination, endPagination) {
    axios.get(`/category/${category}`)
        .then(response => { 
            if (response.data.products.length === 0) {
                emptyContainer.classList.add('not-found--visible');
                return;
            }
            emptyContainer.classList.remove('not-found--visible');
            renderProductsList(response.data.products.slice(startPagination, endPagination), category);           
        })
        .catch(error => error)
}