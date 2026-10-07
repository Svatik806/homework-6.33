import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomRecipe, fetchRecipes } from "../redux/slices/recipesSlice";
import RecipeCard from "./RecipeCard";
import { QUICK_TABS } from "../constants";

const RecipeList = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes("pizza"));
  }, [dispatch]);

  const handleSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      dispatch(fetchRecipes(query));
      setQuery("");
    }
  };

  console.log(items);

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="flex gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Наприклад: pasta,pizza,chicken..."
          className="flex-1 px-4 py-2.5 text-base border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
        />
        <button
          type="submit"
          className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium rounded-lg shadow-md transition-colors"
        >
          Пошук
        </button>
      </form>

      <div className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {QUICK_TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setQuery(tab);
              dispatch(fetchRecipes(tab));
            }}
            className={`px-3 py-1 text-sm bg-slate-200 hover:bg-emerald-500 hover:text-white rounded-full text-slate-700 transition-colors
              ${tab === query && "bg-emerald-500! text-white!"}`}
          >
            {tab}
          </button>
        ))}
        <button
          type="button"
          onClick={() => dispatch(fetchRandomRecipe())}
          className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full shadow-md transition-colors text-sm"
        >
          Random Recipe
        </button>
      </div>

      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5].map((n) => (
            <div
              key={n}
              className="bg-white rounded-xl p-4 border border-slate-100 animate-pulse"
            >
              <div className="w-full h-36 bg-slate-200 rounded-lg mb-3" />
              <div className="h-5 bg-slate-200 rounded w-3/4 mb-2" />
              <div className="h-4 bg-slate-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="p-4 mb-6 bg-red-50 border border-red-200 text-red-600 rounded-b-lg text-center font-medium">
          {error}
        </div>
      )}

      {!loading && !error && items.length === 0 && (
        <p className="text-center py-12 text-slate-400 text-lg">
          Нічого не знайдено. Попробуйте інший запит
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <RecipeCard recipe={item} key={item.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
