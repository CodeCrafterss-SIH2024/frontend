import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';

const Nologinheader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayNowDropdownOpen, setIsPlayNowDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [username, setUsername] = useState(''); // Store the username
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem('user')); // Fetch user data from localStorage
    if (loggedUser) {
      setIsLoggedIn(true);
      setUsername(loggedUser.username); // Assuming the user object has a username field
    }
  }, []);

  // Handle scroll event to toggle header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const togglePlayNowDropdown = () => setIsPlayNowDropdownOpen(!isPlayNowDropdownOpen);
  const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear user data from localStorage
    setIsLoggedIn(false); // Update login state
    navigate('/login'); // Redirect to login page
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
            <img src={logo} alt="Website Logo" className="w-[70px] h-[80px] my-[-50px] mr-4" />
            Sansthaein Aur Samvidhan
          </h1>

          <nav className="hidden md:flex space-x-4 mr-[20px]">
            <Link to="/" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
            
            
            <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Experts</Link>
           
            {isLoggedIn ? (
              <>
                <div className="relative flex items-center">
                  <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
                    {username.charAt(0).toUpperCase()} {/* Display the first letter of username */}
                  </span>
                  <span>{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
                <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
              </>
            )}
          </nav>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#8B5FE3] text-white py-2">
            <Link to="/" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
            {/* Other mobile menu items */}
            {isLoggedIn ? (
              <>
                <div className="block px-4 py-2 flex items-center">
                  <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
                    {username.charAt(0).toUpperCase()} {/* Display the first letter of username */}
                  </span>
                  <span>{username}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-purple-600 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
                <Link to="/signup" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
              </>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default Nologinheader;
