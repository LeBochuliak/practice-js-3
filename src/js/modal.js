// функції модального вікна (відкриття, закриття і так далі).
import { modalConteiner } from "./refs";

export function modalHandler(event) {
    if(event.target.classList.contains('modal__close-btn')) {
        modalConteiner.classList.remove('modal--is-open');
    };
}