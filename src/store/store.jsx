import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from '../redux/ProductsSlice'
import  userReducer from '../redux/UserSlice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer
    },
    devTools: true
})