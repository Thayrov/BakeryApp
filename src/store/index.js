import { categoryReducer, productReducer } from './reducers';
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
});
export default createStore(rootReducer);
