import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero.jsx';
import RecipeForm from '../components/RecipeForm.jsx'; 
import RecipeCard from '../components/RecipeCard.jsx'; 
import PopularRecipes from '../components/PopularRecipes.jsx'; 
import WhyChoose from '../components/WhyChoose.jsx'; 
import Testimonial from '../components/Testimonial.jsx'; 
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  useEffect(() => {
    const initialRecipes = [
      { id: 1, title: "Spaghetti Carbonara", ingredients: ["spaghetti", "eggs", "cheese", "bacon"], instructions: "Boil spaghetti, mix eggs and cheese, cook bacon, combine.", cookingTime: 20 },
      { id: 2, title: "Chicken Salad", ingredients: ["chicken", "lettuce", "tomatoes"], instructions: "Grill chicken, mix with lettuce and tomatoes.", cookingTime: 15 },
      { id: 3, title: "Chocolate Cake", ingredients: ["flour", "sugar", "cocoa", "eggs"], instructions: "Mix ingredients, bake at 350°F for 30 mins.", cookingTime: 45 },
    ];
    setRecipes(initialRecipes);
  }, []);

  const handleAddOrUpdateRecipe = (recipe) => {
    if (editingRecipe) {
      setRecipes(recipes.map(r => (r.id === recipe.id ? recipe : r)));
      setEditingRecipe(null);
    } else {
      setRecipes([...recipes, recipe]);
    }
    setIsFormOpen(false);
  };

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setIsFormOpen(true);
  };

  const handleDeleteRecipe = (id) => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      setRecipes(recipes.filter(r => r.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingRecipe(null);
    setIsFormOpen(false);
  };

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Hero />
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search recipes or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange bg-primary-gray dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-md transform hover:scale-102 transition-all duration-200"
          />
          <button
            onClick={() => setIsFormOpen(true)}
            className="ml-4 bg-primary-orange text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 shadow-md transform hover:scale-105"
          >
            Add Recipe
          </button>
        </div>

        {isFormOpen && (
          <div className="mb-6">
            <RecipeForm
              onSubmit={handleAddOrUpdateRecipe}
              onCancel={handleCancel}
              initialRecipe={editingRecipe || {}}
            />
          </div>
        )}

        <PopularRecipes recipes={filteredRecipes} />
        <WhyChoose />
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;