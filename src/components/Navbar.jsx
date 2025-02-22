import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, isDarkMode }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary-orange">RecipeShare</Link>
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-300 transform hover:scale-105">Home</Link>
          <Link to="/recipes" className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-300 transform hover:scale-105">Recipes</Link>
          <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-300 transform hover:scale-105">About</Link>
          <input
            type="text"
            placeholder="Search recipes..."
            className="p-2 rounded-md bg-primary-gray dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary-orange shadow-md"
          />
          <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-primary-orange transition-colors duration-300 transform hover:scale-105">
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;