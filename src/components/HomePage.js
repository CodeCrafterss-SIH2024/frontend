// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faGamepad, faInfoCircle, faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Chatbot from '../components/Chatbot';
import ImageCarousel from '../components/ImageCarousel';  
import logo from '../img/logo.png';
import CardsSection from '../components/CardsSection';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowScrollTop(true);
      } else {
        setIsScrolled(false);
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-teal-800 bg-opacity-80' : 'bg-teal-800'
        } text-white py-6 shadow-md`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold font-serif flex items-center">
            <img src={logo} alt="Website Logo" className="w-[120px] h-[120px] my-[-50px] mr-4" />
            Santhaein Aur Samvidhan
          </h1>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white font-semibold px-4 py-2 hover:bg-teal-700 transition duration-300">Home</Link>
            <Link to="/explore" className="text-white font-semibold px-4 py-2 hover:bg-teal-700 transition duration-300">Explore</Link>
            <Link to="/constitution" className="text-white font-semibold px-4 py-2 hover:bg-teal-700 transition duration-300">Constitution</Link>
            <Link to="/law-rights" className="text-white font-semibold px-4 py-2 hover:bg-teal-700 transition duration-300">Law & Rights</Link>
            <Link to="/game" className="text-white font-semibold px-4 py-2 hover:bg-teal-700 transition duration-300">Game</Link>
            <Link to="/login" className="text-white font-semibold px-6 py-3 rounded bg-teal-700 hover:bg-teal-800 transition duration-300">Login</Link>
            <Link to="/signup" className="text-white font-semibold px-6 py-3 rounded bg-teal-700 hover:bg-teal-800 transition duration-300">Signup</Link>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-teal-800 text-white py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-teal-700 transition duration-300">Home</Link>
            <Link to="/explore" className="block px-4 py-2 hover:bg-teal-700 transition duration-300">Explore</Link>
            <Link to="/constitution" className="block px-4 py-2 hover:bg-teal-700 transition duration-300">Constitution</Link>
            <Link to="/law-rights" className="block px-4 py-2 hover:bg-teal-700 transition duration-300">Law & Rights</Link>
            <Link to="/game" className="block px-4 py-2 hover:bg-teal-700 transition duration-300">Game</Link>
            <Link to="/login" className="block px-4 py-2 bg-teal-700 hover:bg-teal-800 transition duration-300">Login</Link>
            <Link to="/signup" className="block px-4 py-2 bg-teal-700 hover:bg-teal-800 transition duration-300">Signup</Link>
          </div>
        )}
      </header>

      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-16 right-8 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition duration-300"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}

      {/* Home Page Content */}
      <main className="py-12">
        <section className="flex flex-col items-center justify-center py-12 bg-gray-100">
          <h2 className="text-4xl font-extrabold text-teal-900 mb-6 mt-12 text-center">Welcome to Santhaein Aur Samvidhan</h2>
          <p className="text-lg text-gray-700 mb-4 text-center ml-12 mr-12">
            At Santhaein Aur Samvidhan, we are dedicated to making the laws and constitution accessible and engaging for all ages. Our interactive games and educational resources are designed to teach children and adults about their rights and responsibilities in a fun and memorable way.
          </p>
          <p className="text-md text-gray-600 mb-4 text-center  ml-12 mr-12">
            Through our platform, you will discover various ways to understand legal principles, explore the intricacies of the constitution, and participate in activities that bring legal education to life. Our goal is to foster a deeper understanding of justice and personal responsibility.
          </p>
          <p className="text-sm text-gray-500 text-center   ml-12 mr-12">
            Whether you're a student seeking to learn more about your rights or an adult interested in the constitution, we provide a range of resources to help you on your journey. Dive into our interactive content and start exploring today!
          </p>
        </section>

        {/* Image Carousel */}
        <ImageCarousel />

        {/* Cards Section */}
        <CardsSection />

        {/* Features Section */}
        <section className="py-24 bg-gray-100">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faBalanceScale} className="text-5xl text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-teal-900 font-serif">Understanding Justice</h3>
              <p className="text-gray-600 font-serif">Delve into the core principles of justice and their relevance to daily life and decision-making.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faGamepad} className="text-5xl text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-teal-900 font-serif">Interactive Game</h3>
              <p className="text-gray-600 font-serif">Participate in a game that educates about laws and personal responsibility in an enjoyable format.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faInfoCircle} className="text-5xl text-teal-600 mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-teal-900 font-serif">Educational Content</h3>
              <p className="text-gray-600 font-serif">Access comprehensive resources on legal topics, responsibility, and more, tailored for all ages.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2024 Santhaein Aur Samvidhan. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default HomePage;
