import React, { useState } from 'react';
import dr from '../assets/images/dr.jpeg';
import hotel from '../assets/images/book-hotel.jpeg'
import book from '../assets/images/book-shop.jpeg'
import ecommerce from '../assets/images/e-store.jpeg'
import eat from '../assets/images/eat-at-here.jpeg'
import educational from '../assets/images/educational-website.jpeg'
import netflix from '../assets/images/netflix.jpeg'
import restuarant from '../assets/images/restuarant.jpeg'
import ems from '../assets/images/ems.jpeg'


const Portfolio = ({ imageUrl, description, link, category }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
<div className="relative overflow-hidden rounded-md flex justify-between shadow-lg lg:w-[350px] h-[400px] xl:max-w-[400px] lg:max-w-[280px] lg:max-h-[400px]">
      <div
        className={`relative w-full  h-full transition-opacity duration-100 ${
          isHovered || showDetails ? 'opacity-40' : 'opacity-100'
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
        {isHovered && (
          <div className="absolute inset-0  flex flex-col items-center justify-center ">
            <h1 className="text-black  font-extrabold mb-2">Project Title</h1>
            <a
              href={link}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleShowDetails();
              }}
            >
              {/* Include the SVG directly in the JSX */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-12 h-12 mb-1 ">
                <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/>
              </svg>
            </a>
          </div>
        )}
      </div>

      {showDetails && (
       <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 ">
       <div className="max-w-4xl  mx-auto p-8 bg-black rounded-lg shadow-lg md:flex md:items-center">
         <div className="md:w-1/2 md:pr-8">
           <img src={imageUrl} alt="Detail" className=" w-[500px] h-[400px] rounded-lg" />
         </div>
         <div className="md:w-1/2 md:pl-8">
           <h2 className="text-2xl font-bold mb-4">{description}</h2>
           <p className="text-gray-700 mb-4">{category}</p>
           <p className="mb-4">
             <a href={link} className="text-green-500 " target="_blank" rel="noopener noreferrer">
               {link}
             </a>
           </p>
           <button
             className="text-white bg-green-900 rounded-full px-4 py-2 hover:bg-blue-600 transition-colors duration-300"
             onClick={handleCloseDetails}
           >
             Close
           </button>
         </div>
       </div>
     </div>
      )}
    </div>
  );
};

const Filter = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center my-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-2 bg-black text-white rounded ${
            selectedCategory === category ? 'bg-green-700' : ''
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

const PortfolioSection = () => {
  const imageList = [
    {
      imageUrl: dr,
      description: 'Description 1',
      link: 'https://example.com/1',
      category: 'React',
    },
    {
      imageUrl: eat,
      description: 'Description 2',
      link: 'https://salim-fayis.github.io/material-ui-resturant-website/',
      category: 'Full Stack',
    },
    {
      imageUrl: ecommerce,
      description: 'Description 1',
      link: 'https://salim-fayis.github.io/e-store-main/',
      category: 'React',
    },
    {
      imageUrl: educational,
      description: 'Description 2',
      link: 'https://salim-fayis.github.io/educational-website/',
      category: 'Full Stack',
    },
    {
      imageUrl: netflix,
      description: 'Description 2',
      link: 'https://myflixbysalim.netlify.app/',
      category: 'Full Stack',
    },
    {
      imageUrl: restuarant,
      description: 'Description 2',
      link: 'https://restuarant-app-by-salim.netlify.app/',
      category: 'React',
    },
    {
      imageUrl: hotel,
      description: 'Description 2',
      link: 'https://salim-fayis.github.io/hotel-booking/',
      category: 'Full Stack',
    },
    {
      imageUrl: book,
      description: 'Description 2',
      link: 'https://example.com/2',
      category: 'React',
    },
    {
      imageUrl: ems,
      description: 'Description 2',
      link: 'https://salim-fayis.github.io/employee-managing-app-react/',
      category: 'Full Stack',
    },
    // Add more images here
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'React', 'Full Stack'];

  const filteredImages =
    selectedCategory === 'All'
      ? imageList
      : imageList.filter((image) => image.category === selectedCategory);

  return (
    <section id='portfolio' className="my-8 main">
      <h2 className="text-3xl font-bold mb-4">Portfolio Section</h2>
      <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index} className="mb-7 mx-7">
            <Portfolio {...image} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
