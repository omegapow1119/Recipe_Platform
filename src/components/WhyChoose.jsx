import React from 'react';

const WhyChoose = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">Why Choose RecipeShare</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary-gray dark:bg-gray-800 p-6 rounded-lg text-center shadow-md">
            <span className="text-3xl text-primary-orange">🍴</span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">Delicious Recipes</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Taste the best recipes crafted by culinary experts.</p>
          </div>
          <div className="bg-primary-gray dark:bg-gray-800 p-6 rounded-lg text-center shadow-md">
            <span className="text-3xl text-primary-orange">🥗</span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">Healthy Options</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Balanced recipes for a healthier lifestyle.</p>
          </div>
          <div className="bg-primary-gray dark:bg-gray-800 p-6 rounded-lg text-center shadow-md">
            <span className="text-3xl text-primary-orange">🚚</span>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mt-4">Easy Sharing</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Share recipes instantly with friends and family.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;