// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBalanceScale, faGamepad, faInfoCircle, faBars, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Chatbot from '../components/Chatbot';
// import ImageCarousel from '../components/ImageCarousel';  
import logo from '../img/logo.png';
import CardsSection from '../components/CardsSection';
import Loader from './Firstloader'
import SectionPart1 from './SectionPart1';
import Sectionpart2 from './Sectionpart2';
import Footer from '../components/Footer';
// import MainPage from '../pages/MainPage';

const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true); // New loading state

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

  useEffect(() => {
    // Simulate loading for 2-3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Adjust the time as needed (2500ms = 2.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <Loader />; // Show loader while loading is true
  }
  
  return (
    <div className="min-h-screen bg-[#E0D9EE] overflow-x-hidden"> {/* Updated body color */}
      {/* Header */}
      <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-[#7b2cbf] bg-opacity-80' : 'bg-[#7b2cbf]'
  } text-white py-6 shadow-md`}
>
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-3xl font-extrabold font-lobster flex items-center">
      <img src={logo} alt="Website Logo" className="w-[120px] h-[120px] my-[-50px] mr-4" />
      Sansthaein Aur Samvidhan
    </h1>
    <nav className="hidden md:flex space-x-4 mr-[20px]">
      {/* Dropdown for Explore */}
      <div className="relative group">
        <button className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
          Explore
        </button>
        {/* Dropdown Menu */}
        <div className="absolute left-0 hidden group-hover:block bg-[#eeeaf0] text-black w-full">
        <a href="https://sansthaein-aur-sanvidhan-child-section.github.io/ChildSection/" className="block px-4 py-2 hover:bg-[#a1a7a9] transition duration-300">
         Children
       </a>

          <Link to="/main-page" className="block px-4 py-2 hover:bg-[#a1a7a9] transition duration-300">
            Adult
          </Link>
        </div>
      </div>
      <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
      <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
    </nav>
    <button className="md:hidden text-white" onClick={toggleMenu}>
      <FontAwesomeIcon icon={faBars} className="text-2xl" />
    </button>
  </div>
  {isMenuOpen && (
    <div className="md:hidden bg-[#8B5FE3] text-white py-2">
      <Link to="/" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
      <Link to="/explore" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Explore</Link>
      <Link to="/constitution" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Constitution</Link>
      <Link to="/law-rights" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Law & Rights</Link>
      <Link to="/game" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Game</Link>
      <Link to="/login" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Login</Link>
      <Link to="/signup" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Signup</Link>
    </div>
  )}
</header>


      {/* Scroll-to-top button */}
      {showScrollTop && (
        <button
          className="fixed bottom-16 right-8 bg-[#8B5FE3] text-white p-3 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
        </button>
      )}

      {/* Home Page Content */}
      <main className="py-12">
        <section className="flex flex-col items-center justify-center py-12 bg-[#b8a7db]">
          <h2 className="text-5xl font-extrabold text-[#482294] mb-6 mt-12 text-center">"Discover the constitution like never before"</h2>
          <p className="text-2xl text-gray-700 mb-4 text-center ml-12 mr-12">
          Join us to explore, learn, and understand the Constitution in a fun and engaging way!
          </p>
         
        </section>




        {/* Image Carousel */}
        {/* <ImageCarousel /> */}

        <SectionPart1/>

        <Sectionpart2/>

        {/* Cards Section */}
        <CardsSection />

        {/* Features Section */}
        <section className="py-10 bg-[#E0D9EE]">
        <h1 className='text-black text-center mb-[20px] text-7xl '>Our Features</h1>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-5">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faBalanceScale} className="text-5xl text-[#8B5FE3] mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-[#000000] font-serif">Training</h3>
              <p className="text-gray-600 font-serif">Personalized learning paths for diverse user groups.Multilingual content for constitutional education</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faGamepad} className="text-5xl text-[#8B5FE3] mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-[#000000] font-serif">Interactive Game</h3>
              <p className="text-gray-600 font-serif">Participate in a game that educates about laws and personal responsibility in an enjoyable format.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FontAwesomeIcon icon={faInfoCircle} className="text-5xl text-[#8B5FE3] mb-4" />
              <h3 className="text-3xl font-bold mb-3 text-[#000000] font-serif">Educational Content</h3>
              <p className="text-gray-600 font-serif">Access comprehensive resources on legal topics, responsibility, and more, tailored for all ages.</p>
            </div>
          </div>
        </section>
        <Footer/>
        
        {/* Chatbot */}
        <Chatbot />
      </main>
    </div>
  );
};

export default HomePage;
