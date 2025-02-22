import React, { useState } from 'react';

const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getRecipeImage = (title) => {
    const imageMap = {
      "Spaghetti Carbonara": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9dIBD96C9H9OT2FwzsAjssQcDhXTzOmreIw&s",
      "Chicken Salad": "https://tatyanaseverydayfood.com/wp-content/uploads/2016/02/Garlic-Chicken-Salad-3-768x1024.jpg",
      "Chocolate Cake": "https://luvflowercake.com/wp-content/uploads/2021/10/f833f8a1-63a9-4de0-88d6-f95b5989b730.jpg",
    };
    return imageMap[title] || "https://via.placeholder.com/300x200?text=Recipe+Image";
  };

  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 p-4">
        <img src={getRecipeImage(recipe.title)} alt={recipe.title} className="w-full h-48 object-cover rounded-t-lg shadow-md" />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{recipe.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 truncate">Prep Time: {recipe.cookingTime} mins</p>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Ingredients: {recipe.ingredients.join(', ')}</p>
          <div className="flex justify-between items-center mt-4">
            <span className="text-yellow-500">★★★★☆ (4.5)</span>

          </div>
          <div className="mt-4 flex space-x-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-primary-orange text-white px-3 py-2 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              View
            </button>
            <button
              onClick={() => onEdit(recipe)}
              className="bg-yellow-500 text-white px-3 py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(recipe.id)}
              className="bg-red-600 text-white px-3 py-2 rounded-md hover:bg-red-700 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full shadow-xl transform transition-all duration-300 scale-95 animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{recipe.title}</h3>
            <img src={getRecipeImage(recipe.title)} alt={recipe.title} className="w-full h-48 object-cover rounded-lg mb-4 shadow-md" />
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-2"><strong>Instructions:</strong> {recipe.instructions}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-4"><strong>Cooking Time:</strong> {recipe.cookingTime} mins</p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full bg-primary-orange text-white p-2 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-md transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RecipeCard;