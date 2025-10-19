// функції для запитів на бекенд.

import axios from 'axios';
import { renderCategoriesList, renderProductsList, renderProduct } from './render-function';
import { emptyContainer, loadMoreBtn } from './refs';
import { currentPage } from './constants';

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

export function productsListAxios() {
    axios.get(`?limit=12&skip=${(currentPage.page - 1)* 12}`)
        .then(response => {
            loadMoreBtn.classList.add('is-hidden');
            renderProductsList(response.data.products, 'all');
            let pages = Math.ceil(response.data.total / 12);
            if (pages > currentPage.page) {
                loadMoreBtn.classList.remove('is-hidden')
            }
        })
        .catch(error => {
            console.error('Error loading products data:', error);
            alert('Unfortunately, the products data could not be loaded. Please try again later.');
        })
        
};

export function categoryAxios(category) {
    axios.get(`/category/${category}?limit=12&skip=${(currentPage.page - 1)* 12}`)
        .then(response => { 
            loadMoreBtn.classList.add('is-hidden');
            if (response.data.products.length === 0) {
                emptyContainer.classList.add('not-found--visible');
                return;
            };
            emptyContainer.classList.remove('not-found--visible');
            renderProductsList(response.data.products, category); 
            let pages = Math.ceil(response.data.total / 12);
            if (pages > currentPage.page) {
                loadMoreBtn.classList.remove('is-hidden')
            }        
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

export function searchAxios(value) {
    axios.get(`/search?q=${value}&limit=12&skip=${(currentPage.page - 1)* 12}`)
        .then(response => {
            loadMoreBtn.classList.add('is-hidden');
            if (response.data.products.length === 0) {
                emptyContainer.classList.add('not-found--visible');
                return;
            }
            emptyContainer.classList.remove('not-found--visible');
            renderProductsList(response.data.products, 'all');
            let pages = Math.ceil(response.data.total / 12);
            if (pages > currentPage.page) {
                loadMoreBtn.classList.remove('is-hidden')
            } 
        })
        .catch(error => {
            console.error('Error loading products data:', error);
            alert('Unfortunately, the products data could not be loaded. Please try again later.');
        })

}