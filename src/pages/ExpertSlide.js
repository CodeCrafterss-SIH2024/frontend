import React, { useState } from 'react';

const ExpertSlide = ({ expert }) => {
  const [showContact, setShowContact] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  const handleRating = (rating) => {
    alert(`You rated this expert ${rating} stars!`);
  };

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to the server
    setShowPopup(true); // Show the popup message
    setTimeout(() => {
      setShowPopup(false); // Hide popup after 2 seconds
      setShowForm(false); // Close the form after submission
    }, 2000);
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

      <button 
        className="mt-4 bg-[#d4cae8] text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={() => setShowForm(true)}
      >
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

      {/* Book Appointment Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-[#3d54ca] bg-opacity-50 flex justify-center items-center">
          <div className="bg-white ml-10 mr-10 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-black mb-4">Book Appointment</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleFormInput}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg" 
                required
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleFormInput}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg" 
                required
              />
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone Number" 
                value={formData.phone} 
                onChange={handleFormInput}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg" 
                required
              />
              <textarea 
                name="message" 
                placeholder="Message" 
                value={formData.message} 
                onChange={handleFormInput}
                className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
                required
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Send
              </button>
            </form>
            <button
              onClick={() => setShowForm(false)}
              className="mt-4 text-red-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Popup after submission */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full flex justify-center">
          <div className="mt-4 bg-green-500 text-white py-2 px-6 rounded-full shadow-lg">
            Message sent successfully!
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertSlide;
