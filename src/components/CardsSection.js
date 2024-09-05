import React, { useState } from 'react';
import image1 from '../img/image.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';
const CardsSection = () => {
  const cards = [
    {
      image: image1,
      title: 'Card Title 1',
      description: 'Brief description of the content or feature related to this card.',
    },
    {
      image: image2,
      title: 'Card Title 2',
      description: 'Brief description of the content or feature related to this card.',
    },
    {
      image: image3,
      title: 'Card Title 3',
      description: 'Brief description of the content or feature related to this card.',
    },
    {
      image: image4,
      title: 'Card Title 4',
      description: 'Brief description of the content or feature related to this card.',
    },
    {
      image: image5,
      title: 'Card Title 5',
      description: 'Brief description of the content or feature related to this card.',
    },
    {
      image: image1,
      title: 'Card Title 6',
      description: 'Brief description of the content or feature related to this card.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto">
        <div className="relative">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="flex-none w-1/3 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img src={card.image} alt={`Card ${index + 1}`} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-bold mb-2 text-teal-900 font-serif">{card.title}</h3>
                  <p className="text-gray-600 font-serif">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next & Previous Buttons */}
          <button
            onClick={handlePrevClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white px-4 py-2 rounded-l-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-teal-600 text-white px-4 py-2 rounded-r-lg shadow-lg hover:bg-teal-700 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
