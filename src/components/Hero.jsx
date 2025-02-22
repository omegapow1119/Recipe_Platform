import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary-gray dark:bg-gray-800 py-16 bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Delicious+Recipes')" }}>
      <div className="container mx-auto px-6 text-center bg-black bg-opacity-50 py-16 rounded-lg shadow-lg">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 animate-fade-in">
          Discover Delicious Recipes
        </h1>
        <p className="text-lg text-white max-w-2xl mx-auto mb-8">
          Explore, share, and savor the best recipes from around the world—fast and easy!
        </p>
        <button className="bg-primary-orange text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors duration-300 animate-pulse hover:animate-none shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;