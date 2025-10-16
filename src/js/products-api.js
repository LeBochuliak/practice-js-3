// функції для запитів на бекенд.

import axios from 'axios';
import { renderCategoriesList, renderProductsList, renderProduct } from './render-function';
import { emptyContainer } from './refs';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export function categoriesAxios() {
    axios.get('/category-list')
    .then(response => response.data.forEach(el => {
        renderCategoriesList(el);
    }))
    .catch(error => {
            console.error('Error loading categories data:', error);
            alert('Unfortunately, the categories data could not be loaded. Please try again later.');
        })
};

export function productsAxios() {
    let currentPage = 1;
    axios.get(`?limit=12&skip=${(currentPage - 1)* 12}`)
        .then(response => renderProductsList(response.data.products, 'all'))
        .catch(error => {
            console.error('Error loading products data:', error);
            alert('Unfortunately, the products data could not be loaded. Please try again later.');
        })
        
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
        .catch(error => {
            console.error('Error loading category data:', error);
            alert('Unfortunately, the category data could not be loaded. Please try again later.');
        })
};

export function productAxios(id) {
    axios.get(`/${id}`)
        .then(response => renderProduct(response.data))
        .catch(error => {
            console.error('Error loading product data:', error);
            alert('Unfortunately, the product data could not be loaded. Please try again later.');
        })
        
};