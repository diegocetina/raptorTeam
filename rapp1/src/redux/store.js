import { createStore, combineReducers, applyMiddleware } from "redux";
import  thunk  from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from "./reducers/CartReducer"
import { getProductsReducer, getProductDetailsReducer } from "./reducers/ProductReducers";
const reducer = combineReducers({
    cart: cartReducer,
    getProducts : getProductsReducer,
    getProductDetails : getProductDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;