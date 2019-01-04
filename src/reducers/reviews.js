/*
import actions
*/ 
import {SET_REVIEW_LOADING,SET_REVIEW, SET_REVIEW_ERROR} from '../actions'

/*
initial state
*/ 
const initialState = {
    reviews: [{'name':'Where did all the games go?','description': 'funny', 'genre':'shooter','imgUrl':'https://store-images.s-microsoft.com/image/apps.11650.13510798887356280.235dc311-b50e-403c-af16-ceffcc2c2399.99b85445-285f-4bc9-a0ec-53e5c36b1ae3?w=180&h=270&q=60'}],
    loading: false,
    error: null
}

const reviewReducer = (state = initialState, action) => {
    if(action.type === SET_REVIEW_LOADING){
        return Object.assign({},state,{
            loading: true,
            error: null
        })
    }
    if(action.type === SET_REVIEW){
        return Object.assign({},state,{
            reviews: action.reviews,
            error: null,
            loading: false
        })
    }
    if(action.type === SET_REVIEW_ERROR){
        return Object.assign({},state,{
            error: action.error,
            loading: false
        })
    }
    return state;
}

export default reviewReducer;