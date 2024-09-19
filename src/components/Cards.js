import React from 'react';

const Cards = ({ imageSrc, title, description }) => {
  return (
    <div className="relative w-[270px] h-[270px] bg-gray-200 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
    {/* Image */}
    <div className="w-full h-full ">
      <img
        src={imageSrc}
        alt={title}
        className=" w-[270px] h-[270px]"
      />
    </div>

      {/* Details (hidden initially) */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white px-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
