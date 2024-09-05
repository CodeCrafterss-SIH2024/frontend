import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import image1 from '../img/image.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import image4 from '../img/image4.jpg';
import image5 from '../img/image5.jpg';
// import '../styles/ImageCarousel.css';


const ImageCarousel = () => {
  const images = [image1, image2, image3, image4, image5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle automatic image sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds interval for changing images
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual previous/next button clicks
  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle swipe gestures for mobile
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNextClick();
    } else if (touchEndX - touchStartX > 50) {
      handlePrevClick();
    }
  };

  return (
    <div className="flex justify-center mt-10">
      {/* Frame Container with animated RGB border */}
      <div className="relative w-[calc(100%-30px)] bg-gradient-to-r p-3 border-[6px] rounded-lg shadow-xl rgb-border-animation">
        {/* Image Carousel with frame */}
        <div
          className="overflow-hidden relative h-full rounded-lg"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Image Sliding Container */}
          <div
            className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="inline-block w-full h-96 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Previous Button */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
            onClick={handlePrevClick}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>

          {/* Next Button */}
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
            onClick={handleNextClick}
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
