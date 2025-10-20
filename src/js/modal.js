// функції модального вікна (відкриття, закриття і так далі).
import { modalConteiner, modalCartBtn, modalWishlistBtn } from "./refs";
import { cartProducts, wishlistProducts } from "./constants";
import { cartCountFoo } from "./helpers";

export function modalHandler(event) {
    if(event.target.classList.contains('modal__close-btn')) {
        modalConteiner.classList.remove('modal--is-open');
        modalConteiner.querySelector('.js-modal-product-container').remove();     
    };

    if(event.target.classList.contains('modal-product__btn--cart')) {
        const id = event.currentTarget.querySelector('.js-modal-product-container').dataset.id;        
        if (cartProducts.products.includes(id)) {
            cartProducts.products = cartProducts.products.filter(elId => elId !== id)
            localStorage.setItem('cart', JSON.stringify(cartProducts.products));
            cartCountFoo();
            modalCartBtn.textContent = 'Add to Cart';
            return;
        };
        cartProducts.products.push(id);
        localStorage.setItem('cart', JSON.stringify(cartProducts.products));
        cartCountFoo();
        modalCartBtn.textContent = 'Remove from Cart';
    }

    if(event.target.classList.contains('modal-product__btn--wishlist')) {
        const id = event.currentTarget.querySelector('.js-modal-product-container').dataset.id;        
        if (wishlistProducts.products.includes(id)) {
            wishlistProducts.products = wishlistProducts.products.filter(elId => elId !== id)
            localStorage.setItem('wishlist', JSON.stringify(wishlistProducts.products));
            cartCountFoo();
            modalWishlistBtn.textContent = 'Add to Wishlist';
            return;
        };
        wishlistProducts.products.push(id);
        localStorage.setItem('wishlist', JSON.stringify(wishlistProducts.products));
        cartCountFoo();
        modalWishlistBtn.textContent = 'Remove from Wishlist';
    }
}