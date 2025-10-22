//Логіка сторінки Cart
import { cartCountFoo, goToSearch } from "./js/helpers";
import { productHandler, searchHandler } from "./js/handlers";
import { modalHandler } from "./js/modal";
import { productsList, modalConteiner, cartSummarySidebar, formEl } from "./js/refs";
import { cartAxios } from "./js/products-api";
import { cartProducts } from "./js/constants";



import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

cartCountFoo();
cartProductsFoo();

async function cartProductsFoo() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];    
    await cartAxios(cart);
    renderCartSummary();     
};

function renderCartSummary() {
    cartSummarySidebar.querySelector('[data-price]').textContent = `$${cartProducts.totalPrice.toFixed(2)}`;
    cartSummarySidebar.querySelector('[data-count]').textContent = cartProducts.products.length;
}

productsList.addEventListener('click', productHandler);

modalConteiner.addEventListener('click', async (event) => {
    modalHandler(event);
    if (event.target.classList.contains('modal-product__btn--cart')) {
        productsList.innerHTML = '';
        await cartProductsFoo();
    }
});


cartSummarySidebar.addEventListener('click', event => {
    
    const btn = event.target.closest('.cart-summary__btn');
    if(btn) {
        iziToast.success({
            title: 'Success!',
            message: 'Your purchase has been successfully completed.',
            position: 'center',
            transitionIn: 'fadeIn',
            backgroundColor: '#ff6b0a',
            messageColor: 'white',
            titleColor: 'white',
            closeOnClick: true,
            closeOnEscape: true,
            progressBar: false,
            icon: 'fa fa-check-circle',
            iconColor: 'white',
        });
    }
});

formEl.addEventListener('submit', goToSearch);

