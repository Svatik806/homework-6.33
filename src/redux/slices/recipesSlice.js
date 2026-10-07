import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (searchTerm) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
    const data = await response.json();
    return data.meals || [];
  }
);

export const fetchRandomRecipe = createAsyncThunk(
  "recipes/fetchRandomRecipe",
  async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    return data.meals || [];
  }
);

const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    loading: false,
    error: null,
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      //  Fetching General list
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      })
      // Fetch Random Recipe
      .addCase(fetchRandomRecipe.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchRandomRecipe.rejected, (state) => {
        state.loading = false;
        state.error = "Something went wrong";
      });
  },
});

export default recipesSlice.reducer;
