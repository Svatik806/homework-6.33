import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/recipesSlice"

const store = configureStore({
    reducer: {
        recipes: recipesReducer
    }
})

export default store