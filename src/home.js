//Логіка сторінки Home

import { categoriesAxios, productsListAxios } from "./js/products-api";
import { categoriesList, productsList, modalConteiner, formEl, loadMoreBtn } from "./js/refs";
import { defaultCategory, clearSearchBtn } from "./js/helpers";
import { categoryProductsHandler, productHandler, searchHandler, loadMoreHandler} from "./js/handlers";
import { modalHandler } from "./js/modal";

categoriesAxios();
productsListAxios();
defaultCategory();


categoriesList.addEventListener('click', categoryProductsHandler);

productsList.addEventListener('click', productHandler);

modalConteiner.addEventListener('click', modalHandler);

formEl.addEventListener('submit', searchHandler);

formEl.addEventListener('click', clearSearchBtn);

loadMoreBtn.addEventListener('click', loadMoreHandler);