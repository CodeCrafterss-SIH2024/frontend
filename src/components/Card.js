// src/components/Card.js

import React from 'react';

const Card = () => {
  return (
    <div className="relative max-w-[300px] h-[320px] bg-white shadow-md rounded-lg mx-4 transform transition-all hover:scale-105 my-8">
      <div className="relative w-[260px] h-[260px] mx-auto mt-[-40px] shadow-lg z-10">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://i.pinimg.com/originals/a4/7b/a5/a47ba59b4a353e0928ef0551ca44f980.jpg"
          alt="content"
        />
      </div>
      <div className="relative top-[-120px] text-center text-gray-900 opacity-0 transition-all duration-300 hover:opacity-100">
        <h3 className="font-bold text-xl mb-2">This is content</h3>
        <p className="text-sm text-gray-600">
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.
        </p>
      </div>
    </div>
  );
};

export default Card;
