import React, { useState } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NewHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); // Toggle profile dropdown visibility
  };

  return (
    <div>
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
            <Link to="/playnow" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Play now
            </Link>
            <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Experts
            </Link>
            <Link to="/community" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Community
            </Link>
            <Link to="/leaderboard" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Leaderboard
            </Link>

            {/* Profile dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfileDropdown}
                className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300"
              >
                Profile
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/streaks"
                        className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                      >
                        Streaks
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/rank"
                        className="block px-4 py-2 text-gray-800 hover:bg-purple-100"
                      >
                        Rank
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">
              Signup
            </Link>
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#8B5FE3] text-white py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">
              Home
            </Link>
            <Link to="/explore" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">
              Explore
            </Link>
            <Link to="/constitution" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">
              Constitution
            </Link>
            <Link to="/law-rights" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">
              Law & Rights
            </Link>
            <Link to="/game" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">
              Game
            </Link>
            <Link to="/login" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">
              Login
            </Link>
            <Link to="/signup" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">
              Signup
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default NewHeader;
