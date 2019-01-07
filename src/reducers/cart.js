import {ADD_PRODUCT_LOADING,ADD_PRODUCT, ADD_PRODUCT_ERROR} from '../actions'

const initialState = {
    items: []
}

const cartReducer = (state = initialState, action) => {
    if(action.type === ADD_PRODUCT_LOADING){
        return Object.assign({},state,{
            loading: true,
            error: null
        })
    }
    if(action.type === ADD_PRODUCT){
        return Object.assign({},state,{
            items: [...state.cart.items , action.product],
            error: null,
            loading: false
        })
    }
    if(action.type === ADD_PRODUCT_ERROR){
        return Object.assign({},state,{
            error: action.error,
            loading: false
        })
    }
    return state;
}

export default cartReducer;

