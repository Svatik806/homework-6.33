import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-100 overflow-hidden transition-all flex flex-col group">
      <div className="overflow-hidden relative aspect-video">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between p-4">
        <h3 className="font-semibold text-slate-800 text-lg mb-1 line-clamp-1">
          {recipe.strMeal}
        </h3>
        <p className="text-sm text-slate-500 font-medium">
          Категорія:{" "}
          <span className="text-emerald-600">{recipe.strCategory}</span>
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
