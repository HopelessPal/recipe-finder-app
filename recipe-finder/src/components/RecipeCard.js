// src/components/RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="font-bold text-xl mb-2">{recipe.title}</h2>
      <ul className="text-sm text-gray-600">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
