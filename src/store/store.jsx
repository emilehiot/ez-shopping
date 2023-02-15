import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from '../redux/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer
    },
    devTools: true
})