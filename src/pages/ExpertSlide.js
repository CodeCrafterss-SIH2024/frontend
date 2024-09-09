import React, { useState } from 'react';

const ExpertSlide = ({ expert }) => {
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  const handleRating = (rating) => {
    alert(`You rated this expert ${rating} stars!`);
  };

  return (
    <div className="min-w-full p-8 text-center bg-purple-100 rounded-lg shadow-lg transform scale-95 transition-transform duration-300 hover:scale-100">
      <img src={expert.imageUrl} alt={expert.name} className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-purple-600 hover:scale-110 transition-transform duration-300" />
      <h3 className="text-2xl font-bold text-gray-800 capitalize mb-2">{expert.name}</h3>
      <p className="text-xl text-purple-700 mb-4">{expert.description}</p>
      <button onClick={handleShowContact} className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
        {showContact ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>
      {showContact && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-inner text-gray-800">
          <p>{expert.contactInfo}</p>
        </div>
      )}
      <button className="mt-4 bg-[#d4cae8] text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
        Book Appointment
      </button>
      <button className="mt-4 bg-teal-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-teal-600 transition duration-300">
        Video Call
      </button>
      <div className="mt-4 flex justify-center">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleRating(index + 1)}
            className="text-2xl text-gray-400 cursor-pointer transition-colors duration-300 hover:text-yellow-500"
          >
            ★
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExpertSlide;
