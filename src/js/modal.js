// функції модального вікна (відкриття, закриття і так далі).
import { modalConteiner } from "./refs";
import { cartProducts, wishlistProducts } from "./constants";

export function modalHandler(event) {
    if(event.target.classList.contains('modal__close-btn')) {
        modalConteiner.classList.remove('modal--is-open');
        modalConteiner.querySelector('.js-modal-product-container').remove();
         
    };
    if(event.target.classList.contains('modal-product__btn--cart')) {
        
        cartProducts.push(event.currentTarget.querySelector('.js-modal-product-container').dataset.id);
        
    }
}