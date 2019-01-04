import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from './reducers/reviews'
import productReducer from './reducers/products';

const store = createStore( combineReducers({
    store: productReducer,
    reviews: reviewReducer
}), applyMiddleware(thunk));

export default store;