import React, { useState } from 'react';

const RecipeForm = ({ onSubmit, onCancel, initialRecipe = {} }) => {
  const [title, setTitle] = useState(initialRecipe.title || '');
  const [ingredients, setIngredients] = useState(initialRecipe.ingredients?.join(', ') || '');
  const [instructions, setInstructions] = useState(initialRecipe.instructions || '');
  const [cookingTime, setCookingTime] = useState(initialRecipe.cookingTime || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const recipe = {
      id: initialRecipe.id || Date.now(),
      title,
      ingredients: ingredients.split(',').map(item => item.trim()),
      instructions,
      cookingTime: Number(cookingTime),
    };
    onSubmit(recipe);
    if (!initialRecipe.id) {
      setTitle('');
      setIngredients('');
      setInstructions('');
      setCookingTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
        {initialRecipe.id ? 'Edit Recipe' : 'Add a New Recipe'}
      </h2>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange bg-primary-gray dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
          placeholder="e.g., Spaghetti Carbonara"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Ingredients (comma-separated)</label>
        <input
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange bg-primary-gray dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
          placeholder="e.g., pasta, eggs, cheese"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Instructions</label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange bg-primary-gray dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
          rows="4"
          placeholder="e.g., Boil pasta, mix eggs..."
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Cooking Time (mins)</label>
        <input
          type="number"
          value={cookingTime}
          onChange={(e) => setCookingTime(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange bg-primary-gray dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md"
          placeholder="e.g., 20"
          required
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="flex-1 bg-primary-orange text-white p-3 rounded-md hover:bg-orange-600 transition-colors duration-300 animate-pulse hover:animate-none shadow-md transform hover:scale-105"
        >
          {initialRecipe.id ? 'Update Recipe' : 'Add Recipe'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition-colors duration-300 shadow-md transform hover:scale-105"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RecipeForm;