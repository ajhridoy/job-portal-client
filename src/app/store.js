import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from "../CategoriesReduce/CategoriesSlice";

const store = configureStore({
    reducer: {
        categories: CategoriesReducer
    }
})

export default store;