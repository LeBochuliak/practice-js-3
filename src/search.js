
import { formEl, loadMoreBtn, productsList, modalConteiner } from "./js/refs";
import { searchHandler, searchPageHandler, loadMoreHandler, productHandler } from "./js/handlers";
import { clearSearchBtn, cartCountFoo } from "./js/helpers";
import { modalHandler } from "./js/modal";

searchPageHandler(JSON.parse(localStorage.getItem('searchValue')));

cartCountFoo();

formEl.addEventListener('submit', searchHandler);

formEl.addEventListener('click', clearSearchBtn);

productsList.addEventListener('click', productHandler);

loadMoreBtn.addEventListener('click', loadMoreHandler);

modalConteiner.addEventListener('click', modalHandler);