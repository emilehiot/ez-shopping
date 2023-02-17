import { configureStore } from "@reduxjs/toolkit";
import  userReducer from '../reducers/UserSlice';
import darkModeReducer from '../reducers/DarkModeSlice';
import  productsReducer from '../reducers/ProductsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        darkMode: darkModeReducer,
    },

    devTools: true
})
