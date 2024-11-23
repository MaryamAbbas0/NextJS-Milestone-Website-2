import React from 'react';

const HeroContent = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{backgroundImage: "url('p44444.jpg')" }}
    >
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-shadow-md animate-fadeIn">
          Welcome to Luxe by Tehse
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-3xl">&quot;Perfumes That Speak to Your Soul&quot;</p>
        <p className="mt-2 text-lg sm:text-xl md:text-3xl">
        &quot;Crafted with Love and Luxury – Only the Best for You&quot;
        </p>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg sm:text-xl font-semibold rounded-lg hover:bg-gray-800 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroContent;

