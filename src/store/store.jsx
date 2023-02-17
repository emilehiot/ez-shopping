import { configureStore } from "@reduxjs/toolkit";
import  productsReducer from '../reducers/ProductsSlice';
import  userReducer from '../reducers/UserSlice';
import darkModeReducer from '../reducers/DarkModeSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        user: userReducer,
        darkMode: darkModeReducer,
    },

    devTools: true
})
