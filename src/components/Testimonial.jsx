import React from 'react';

const Testimonial = () => {
  return (
    <section className="bg-primary-gray dark:bg-gray-800 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">What Our Users Say</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-md">
            <p className="text-gray-600 dark:text-gray-300 italic mb-4">
              “I love how easy it is to find and share recipes on RecipeShare. It’s my go-to for dinner ideas!”
            </p>
            <div className="flex items-center gap-4">
              <img src="https://source.unsplash.com/random/50x50/?person" alt="User" className="rounded-full shadow-md" />
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold">Sarah Johnson</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Home Cook</p>
              </div>
            </div>
          </div>
          <img src="https://source.unsplash.com/random/300x200/?food" alt="Recipe" className="rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;