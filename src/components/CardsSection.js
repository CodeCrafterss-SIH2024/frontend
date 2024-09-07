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
      title: 'Volunteer with Us',
      description: 'Join our team of volunteers and help us spread constitutional literacy across the nation. Whether  or simply passionate about civic education.',
    },
    {
      image: image2,
      title: 'Share Your Knowledge',
      description: 'Contribute to our platform by sharing your expertise or experiences related to constitutional law and civic engagemen.',
    },
    {
      image: image3,
      title: 'Partner with Us',
      description: 'Collaborate with us on projects that promote constitutional literacy and civic education in your community or organization.',
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
    <section className=" bg-gray-100 py-12">
         <h1 className='text-black text-center mb-[20px] text-7xl '>How You Can Contribute</h1>
      <div className="container mx-auto">
        <div className="relative">
          {/* Cards Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out py-3"
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
         
        </div>
      </div>
    </section>
  );
};

export default CardsSection;
