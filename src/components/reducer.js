
export const initialState = {
    basket: [],
    user: null
}

//takes a basket and returns, add the price to orig amount and starts at 0.
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                // whatever the action of the user is. if its authenticated, then set user to the authenticated user
                user: action.user
            }


        //add items to basket
        case 'ADD_TO_BASKET':
            return {
                //return whatever the state initially was 
                ...state,
                //but change the basket to include what we had in the current basket PLUS
                // action.item, which is the item we dispatched
                basket: [...state.basket, action.item]
             }
        case 'REMOVE_FROM_BASKET':
            //remove things from basket

            //copying basket. whatever current basket is. cloned basket
            let newBasket = [...state.basket]
             
            //find index. check all the basket items check if basketItem.id is equivalent to action.id.
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)

            if (index>=0) {
                //item exists in basket, remove it
                //go in newBasket, at the index you found and splice it by 1. basically just cut it
                newBasket.splice(index, 1)
            } else {
                console.warn(`Can't remove product id ${action.id} as it doesn't exist`)
            }
            //take whatever the state prev was but change basket to newBasket
            return { 
                ...state, 
                basket: newBasket
            }

        default:
            return state;
    }
}

export default reducer;