const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, item) => sum + item.price, 0);

const totalPrice = (obj) => Object.keys(obj).reduce(
    (sum, key) => obj[key].totalPrice + sum,
    0,
);

const totalCount = (obj) => Object.keys(obj).reduce(
    (sum, key) => obj[key].items.length + sum,
    0,
);

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            return {
                ...state,
                items: newItems,
                totalCount: totalCount(newItems),
                totalPrice: totalPrice(newItems),
            };
        }
        case 'CLEAR_CART': {
            return {
                items: {},
                totalPrice: 0,
                totalCount: 0,
            }
        }
        case 'REMOVE_CART_ITEM': {
            const newItems = {...state.items};
            delete newItems[action.payload];

            return {
                ...state,
                items: newItems,
                totalCount: totalCount(newItems),
                totalPrice: totalPrice(newItems),
            }
        }
        case 'CART_REMOVE_ONE_ITEM': {
            const oldObjItems = state.items[action.payload].items;
            const newObjItems = state.items[action.payload].items.length > 1
                ? state.items[action.payload].items.slice(1)
                : oldObjItems;

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            return {
                ...state,
                items: newItems,
                totalCount: totalCount(newItems),
                totalPrice: totalPrice(newItems)
            }
        }
        case 'CART_ADD_ONE_ITEM': {
            let oldObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: oldObjItems,
                    totalPrice: getTotalPrice(oldObjItems)
                }
            }

            return {
                ...state,
                items: newItems,
                totalCount: totalCount(newItems),
                totalPrice: totalPrice(newItems)
            }
        }
        default:
            return state;
    }
}

export default cart;
