import { createSlice } from '@reduxjs/toolkit'
export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {
        darkTheme: "light",
    },
    reducers: {
        switchTheme: (state, action) => {
            state.darkTheme = action.payload;
        }
    }
},)

export const { switchTheme } = darkModeSlice.actions
export default darkModeSlice.reducer