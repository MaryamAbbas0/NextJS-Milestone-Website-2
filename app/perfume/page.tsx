import Image from 'next/image';

const Perfumes = () => {
  const perfumesData = [
    { id: 1, name: 'Clive Ckristian', price: 2987.30, description: 'Luxury Perfume', image: '/perfume2.jpg' },
    { id: 2, name: 'Fragrance', price: 39.99, description: 'Luxury Perfume', image: '/p565665.jpg' },
    { id: 3, name: 'Chanel Paris', price: 11.69, description: 'Luxury Perfume', image: '/p1111.jpg' },
    { id: 4, name: 'Black Gold', price: 307.66, description: 'Luxury Perfume', image: '/p8888.jpg' },
    { id: 5, name: 'Nautica Voyage', price: 32.10, description: 'Luxury Perfume', image: '/p7777.jpg' },
    { id: 6, name: 'Rose Fragrance', price: 13339.20, description: 'Luxury Perfume', image: '/p07.webp' },
    { id: 7, name: 'Lalique Lalique Le', price: 63.51, description: 'Luxury Perfume', image: '/p9999.webp' },
    { id: 8, name: 'Femme Capital', price: 5.40, description: 'Luxury Perfume', image: '/p19.jpg' },
    { id: 9, name: 'Floral Boom', price: 85.00, description: 'Luxury Perfume', image: '/p15.jpg' },
    { id: 10, name: 'Blush Me Up', price: 11.51, description: 'Luxury Perfume', image: '/p14.webp' },
    { id: 11, name: 'Yves Saint Laurent Libre Eau De', price: 198.81, description: 'Luxury Perfume', image: '/p12.jpg' },
    { id: 12, name: 'GORGEOUS', price: 11.69, description: 'Luxury Perfume', image: '/p11.webp' },
    { id: 13, name: 'Rivaj Cosmopolitan', price: 12.95, description: 'Luxury Perfume', image: '/p8.webp' },
    { id: 14, name: 'Club De Nuit', price: 32.39, description: 'Luxury Perfume', image: '/p45.webp' },
    { id: 15, name: 'Passion Charming', price: 7.90, description: 'Luxury Perfume', image: '/p56.webp' },
    { id: 16, name: 'Innocens', price: 23.35, description: 'Luxury Perfume', image: '/p5.webp' },
    { id: 17, name: 'Coco Mademoiselle', price: 266.28, description: 'Luxury Perfume', image: '/p67.webp' },
    { id: 18, name: 'Allure', price: 10.76, description: 'Luxury Perfume', image: '/p18.webp' },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {perfumesData.map((perfume) => (
          <div
            key={perfume.id}
            className="bg-antiquewhite p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl text-center"
          >
            <Image
              src={perfume.image}
              alt={perfume.name}
              width={300} 
              height={400} 
              className="w-full h-auto rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{perfume.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{perfume.description}</p>
            <div className="text-xl font-bold text-orange-600 mt-2">${perfume.price.toFixed(2)}</div>
            <button className="bg-black text-white py-2 px-4 mt-4 rounded-md w-full transition duration-300 hover:bg-gray-800">
              Buy Now
            </button>
            <button className="bg-gray-200 text-black py-2 px-4 mt-2 rounded-md w-full transition duration-300 hover:bg-gray-300">
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfumes;
