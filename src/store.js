import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from './reducers/reviews'
import productReducer from './reducers/products';
import authReducer from './reducers/auth';
import { reducer as formReducer } from 'redux-form';

const store = createStore( combineReducers({
    store: productReducer,
    reviews: reviewReducer,
    session: authReducer,
    form: formReducer
}), applyMiddleware(thunk));

export default store;