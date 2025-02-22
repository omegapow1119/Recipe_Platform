import React from 'react';
import RecipeCard from './RecipeCard.jsx';

const PopularRecipes = ({ recipes }) => {
  return (
    <section className="bg-primary-gray dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Most Popular Recipes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.slice(0, 6).map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} onEdit={() => {}} onDelete={() => {}} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-primary-orange text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-md transform hover:scale-105">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularRecipes;