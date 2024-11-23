import React from 'react';

const About = () => {
  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('p44444.jpg')" }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 bg-black bg-opacity-50">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn">
            About Us
          </h1>
          <h2 className="text-white mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light">
            Your Fragrance, Your Identity
          </h2>
          <p className="text-white mt-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4">
            Imagine a scent that leaves a lasting impression, turning every moment into something magical and unforgettable. 
            Our perfume collection is designed to reflect your personality, elevate your style, and captivate every heart around you. 
            It&apos;s not just a fragrance; it&apos;s your story. Choose it, feel it, and make it yours today.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
