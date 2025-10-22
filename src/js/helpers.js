// допоміжні функції, які знадобляться для реалізації завдання
import { categoriesList, productsList, modalCartBtn, cartCount, wishlistCount, modalWishlistBtn, cartSummarySidebar } from "./refs";
import { productsListAxios } from "./products-api";
import { currentPage, cartProducts, wishlistProducts } from "./constants";


export function defaultCategory() {
   if(categoriesList.querySelector('.categories__btn').textContent === 'all'){
        categoriesList.querySelector('.categories__btn').classList.add('categories__btn--active');
   } 
}

export function clearSearchBtn(event) {
   const input = event.target.closest('form').querySelector('.search-form__input');
   if (event.target.classList.contains('search-form__btn-clear')) {
      currentPage.page = 1;
      input.value = '';
      productsList.innerHTML = '';
      if (window.location.pathname.endsWith('index.html')) {
      categoriesList.querySelectorAll('.categories__btn').forEach((el) => el.classList.remove('categories__btn--active'));
      defaultCategory();
      }
      productsListAxios();
   }
};

export function modalCartBtnText(id) {
   if (cartProducts.products.includes(id)) {
      modalCartBtn.textContent = 'Remove from Cart';
      return;
   };
   modalCartBtn.textContent = 'Add to Cart';
};

export function modalWishlistBtnText(id) {
   if (wishlistProducts.products.includes(id)) {
      modalWishlistBtn.textContent = 'Remove from Wishlist';
      return;
   };
   modalWishlistBtn.textContent = 'Add to Wishlist';
};

export function cartCountFoo() {
   let cart, wishlist;

   try {
      cart = JSON.parse(localStorage.getItem('cart'));
       if (!Array.isArray(cart)) cart = [];
   } catch {
      cart = [];
   }

   try {
      wishlist = JSON.parse(localStorage.getItem('wishlist'));
      if (!Array.isArray(wishlist)) wishlist = [];
   } catch {
      wishlist = [];
   }

   cartCount.textContent = cart.length;
   wishlistCount.textContent = wishlist.length;
};

export function goToSearch(event) {    
    event.preventDefault()
    if (event.currentTarget.elements.searchValue.value.trim() === '') {
            alert('Please, enter a search term!');
            return;
        } 
    localStorage.setItem('searchValue', JSON.stringify(event.currentTarget.elements.searchValue.value));
    window.location.href = './search.html';   
}

