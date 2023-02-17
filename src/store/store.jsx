import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from '../reducers/ProductsSlice'
import cartReducer from '../reducers/CartSlice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    },
    devTools: true
})