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
        onClick={handleShowDetails}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <img src={imageUrl} alt="Card" className="w-full h-full object-cover" />
        <h1 className="text-black  font-extrabold mb-2">Project Title</h1>

        {isHovered && (
          <div className="absolute cursor-pointer inset-0  flex flex-col items-center justify-center ">
            <a
              href={link}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
             onClick={(e) => e.preventDefault()}
            >
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
      imageUrl: eat,
      description: 'Eat At Here',
      link: 'https://salim-fayis.github.io/material-ui-resturant-website/',
      category: 'React',
    },
    {
      imageUrl: ecommerce,
      description: 'E-Store',
      link: 'https://salim-fayis.github.io/e-store-main/',
      category: 'React',
    },
    {
      imageUrl: hotel,
      description: 'Book Your Room',
      link: 'https://salim-fayis.github.io/hotel-booking/',
      category: 'React',
    },
    {
      imageUrl: educational,
      description: 'Learn From Here ',
      link: 'https://salim-fayis.github.io/educational-website/',
      category: 'React',
    },
    {
      imageUrl: book,
      description: 'Book Hub',
      link: 'https://example1.com',
      category: 'Full Stack',
    },
    {
      imageUrl: restuarant,
      description: 'Restuarant',
      link: 'https://restuarant-app-by-salim.netlify.app/',
      category: 'React',
    },
    {
      imageUrl: dr,
      description: 'Book Your Doctor ',
      link: 'https://example1.com',
      category: 'Full Stack',
    },
    {
      imageUrl: netflix,
      description: 'Netflix',
      link: 'https://myflixbysalim.netlify.app/',
      category: 'React',
    },
    {
      imageUrl: ems,
      description: 'Employee Managment System',
      link: 'https://salim-fayis.github.io/employee-managing-app-react/',
      category: 'React',
    },
    
  ];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'React', 'Full Stack'];

  const filteredImages =
    selectedCategory === 'All'
      ? imageList
      : imageList.filter((image) => image.category === selectedCategory);

  return (
    <section id='portfolio' className="my-8 main">
      <h2 className="text-center mb-10 text-3xl font-bold ">Portfolio Section</h2>
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
