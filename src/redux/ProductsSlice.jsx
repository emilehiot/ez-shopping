import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
	products: [],
	isLoading: false,
	error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products');
        return response.data
	} catch(err) {
		return err.message;
	}
})

const productsSlice = createSlice({
	name: "products",
	initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.isLoading = false;
            })
    }
})



export default productsSlice.reducer;
