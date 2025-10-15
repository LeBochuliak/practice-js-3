// допоміжні функції, які знадобляться для реалізації завдання
import { categoriesList } from "./refs";

export function defaultCategory() {
   if(categoriesList.querySelector('.categories__btn').textContent === 'all'){
        categoriesList.querySelector('.categories__btn').classList.add('categories__btn--active');
   } 
}