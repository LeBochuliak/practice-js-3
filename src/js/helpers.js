// допоміжні функції, які знадобляться для реалізації завдання
import { categoriesList, productsList } from "./refs";
import { productsListAxios } from "./products-api";
import { currentPage } from "./constants";

export function defaultCategory() {
   if(categoriesList.querySelector('.categories__btn').textContent === 'all'){
        categoriesList.querySelector('.categories__btn').classList.add('categories__btn--active');
   } 
}

export function clearSearchBtn(event) {
   const input = event.target.closest('form').querySelector('.search-form__input');
   currentPage.page = 1;
   if (event.target.classList.contains('search-form__btn-clear')) {
      input.value = '';
      productsList.innerHTML = '';
      productsListAxios();
   }
}