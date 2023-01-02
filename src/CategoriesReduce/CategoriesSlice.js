import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk("CATEGORIES/fetchCategories", async() => {
    const res = await axios.get("https://job-portal-server-six.vercel.app/categories")
    return res.data
})
const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        isLoading: false,
        categories: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload;
            state.error = null;
        })
        builder.addCase(fetchCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.categories = [];
            state.error = action.error.message;
        })
    }
})

export default categoriesSlice.reducer;