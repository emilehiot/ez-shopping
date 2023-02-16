import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from 'axios';

const initialState = {
	user: [],
	isLoading: false,
	error: null
}

export const fetchUser = createAsyncThunk('user/User', async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/users/1');
        return response.data
	} catch(err) {
		return err.message;
	}
})

const userSlice = createSlice({
	name: "user",
	initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state) => {
                state.isLoading = false;
            })
    }
})



export default userSlice.reducer;
