// константи, які будуть використовуватись в роботі.

export const currentPage = {
    page: 1
};


export const formSubmitted = {
    status: false,

    setFormSubmitted(value) {
    this.status = value;
    return this.status;
    },

    getFormSubmitted() {
    return this.status;
    }
}

export const cartProducts = [];
export const wishlistProducts = [];