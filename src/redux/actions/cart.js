export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id
});

export const removeFromCartOneItem = (id) => ({
    type: 'CART_REMOVE_ONE_ITEM',
    payload: id
});

export const addToCartOneItem = (id) => ({
    type: 'CART_ADD_ONE_ITEM',
    payload: id
});
