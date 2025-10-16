//Логіка сторінки Home

import { categoriesAxios, productsAxios } from "./js/products-api";
import { categoriesList, productsList, modalConteiner } from "./js/refs";
import { defaultCategory } from "./js/helpers";
import { categoryProductsHandler, productHandler } from "./js/handlers";
import { modalHandler } from "./js/modal";

categoriesAxios();
productsAxios();
defaultCategory();


categoriesList.addEventListener('click', categoryProductsHandler);

productsList.addEventListener('click', productHandler);

modalConteiner.addEventListener('click', modalHandler);