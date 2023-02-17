import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from '../reducers/DarkModeSlice';
import  productsReducer from '../reducers/ProductsSlice'
import cartReducer from '../reducers/CartSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        darkMode: darkModeReducer,
    },

    devTools: true
})
