// src/App.js
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import LoadingSpinner from "./components/LoadingSpinner";
import { API_ID, API_KEY } from "./config";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async (query) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits || []);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mt-8">Recipe Finder</h1>
        <SearchBar onSearch={fetchRecipes} />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </div>
    </div>
  );
};

export default App;
