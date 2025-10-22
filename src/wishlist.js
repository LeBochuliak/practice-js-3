//Логіка сторінки Wishlist
import { cartCountFoo, goToSearch } from "./js/helpers";
import { wishlistAxios } from "./js/products-api";
import { modalConteiner, productsList } from "./js/refs";
import { modalHandler } from "./js/modal";
import { productHandler } from "./js/handlers";

cartCountFoo();
wishlistProducts();

async function wishlistProducts() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];    
    wishlistAxios(wishlist);
}

productsList.addEventListener('click', productHandler);

modalConteiner.addEventListener('click', (event) => {
    modalHandler(event);
    if (event.target.classList.contains('modal-product__btn--wishlist')) {
            productsList.innerHTML = '';
            wishlistProducts();
        }
    
});

formEl.addEventListener('submit', goToSearch);