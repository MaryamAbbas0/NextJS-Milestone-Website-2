import React from 'react';

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <section
        className="w-full max-w-lg p-6 shadow-lg rounded-lg"
        style={{
          backgroundImage: "url(logo-p.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay", 
        }}
      >
        <h2 className="text-2xl font-bold text-left text-black mb-6">
          Contact Us
        </h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white bg-opacity-70 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white bg-opacity-70 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Phone Number"
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white bg-opacity-70 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="w-full p-3 border border-gray-200 rounded-lg bg-white bg-opacity-70 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-black transition"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-black text-white font-bold rounded-lg hover:bg-black transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
