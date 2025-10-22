// функції для запитів на бекенд.

import axios from 'axios';
import { renderCategoriesList, renderProductsList, renderProduct } from './render-function';
import { emptyContainer, loadMoreBtn, loader, categoryAllBtn, modalLoader } from './refs';
import { currentPage, cartProducts } from './constants';

axios.defaults.baseURL = 'https://dummyjson.com/products';

export function categoriesAxios() {
    setTimeout(() => {
    categoryAllBtn.classList.remove('hidden-category-all');
    }, 300);
    loader.classList.remove('hidden');
    axios.get('/category-list')
    .then(response => response.data.forEach(el => {
        renderCategoriesList(el);
    }))
    .catch(error => {
            console.error('Error loading categories data:', error);
            alert('Unfortunately, the categories data could not be loaded. Please try again later.');
        })
    .finally(() => 
    loader.classList.add('hidden'))
};

export function productsListAxios() {
    loader.classList.remove('hidden');
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
        .finally(() => 
    loader.classList.add('hidden'))
};

export function categoryAxios(category) {
    loader.classList.remove('hidden');
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
        .finally(() => 
            loader.classList.add('hidden'));
};

export function productAxios(id) {
    modalLoader.classList.remove('hidden');
    axios.get(`/${id}`)
        .then(response => renderProduct(response.data))
        .catch(error => {
            console.error('Error loading product data:', error);
            alert('Unfortunately, the product data could not be loaded. Please try again later.');
        })
        .finally(() => 
            modalLoader.classList.add('hidden'));
};

export function searchAxios(value) {
    loader.classList.remove('hidden');
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
        .finally(() => 
            loader.classList.add('hidden'));

};

export async function wishlistAxios(wishlist) {
    loader.classList.remove('hidden');
    try {
    const requests = wishlist.map(id => axios.get(`/${id}`));
    const responses = await Promise.all(requests);
    const products = responses.map(res => res.data);
    renderProductsList(products, 'all');
    loader.classList.add('hidden');
    }
    catch (error) {
        console.error("Error", error);
        loader.classList.add('hidden');
    }
    
};

export async function cartAxios(cart) {
    loader.classList.remove('hidden');
    try {
    cartProducts.totalPrice = 0;
    const requests = cart.map(id => axios.get(`/${id}`));
    const responses = await Promise.all(requests);
    const products = responses.map(res => res.data);
    cartProducts.totalPrice = products
      .reduce((sum, el) => sum + el.price, 0);
    
    renderProductsList(products, 'all');
    loader.classList.add('hidden');
    }
    catch (error) {
        console.error("Error", error);
        loader.classList.add('hidden');
    }
};