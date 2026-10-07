import React from "react";
import "./App.css";
import RecipeList from "./components/RecipeList";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <header className="border-b border-slate-200 pb-6 mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-800 flex items-center">
            Пошук рецептів
          </h1>
        </header>
        <main>
          <RecipeList />
        </main>
      </div>
    </div>
  );
};

export default App;
