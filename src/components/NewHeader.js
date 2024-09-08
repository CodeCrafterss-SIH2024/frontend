// import React, { useState, useEffect } from 'react';
// import logo from '../img/logo.png';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

// const NewHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Handle scroll event to toggle header background
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleProfileDropdown = () => {
//     setIsProfileDropdownOpen(!isProfileDropdownOpen);
//   };

//   return (
//     <div>
//       <header
//         className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-[#7b2cbf] bg-opacity-80' : 'bg-[#7b2cbf]'
//         } text-white py-6 shadow-md`}
//       >
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-extrabold font-lobster flex items-center">
//             <img src={logo} alt="Website Logo" className="w-[70px] h-[80px] my-[-50px] mr-4" />
//             Sansthaein Aur Samvidhan
//           </h1>
//           <nav className="hidden md:flex space-x-4 mr-[20px]">
//             <Link to="/" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
//             <Link to="/playnow" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Play now</Link>
//             <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Experts</Link>
//             <Link to="/community" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Community</Link>
//             <Link to="/leaderboard" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Leaderboard</Link>
//             <div className="relative">
//               <button
//                 className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300 flex items-center"
//                 onClick={toggleProfileDropdown}
//               >
//                 Profile <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
//               </button>
//               {isProfileDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
//                   <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Profile</Link>
//                   <Link to="/streaks" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Streaks</Link>
//                   <Link to="/rank" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Rank</Link>
//                 </div>
//               )}
//             </div>
//             <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
//             <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
//           </nav>
//           <button className="md:hidden text-white" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//         </div>
//         {isMenuOpen && (
//           <div className="md:hidden bg-[#8B5FE3] text-white py-2">
//             <Link to="/" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
//             <Link to="/explore" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Explore</Link>
//             <Link to="/constitution" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Constitution</Link>
//             <Link to="/law-rights" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Law & Rights</Link>
//             <Link to="/game" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Game</Link>
//             <Link to="/leaderboard" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Profile</Link>
//             <Link to="/login" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Login</Link>
//             <Link to="/signup" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Signup</Link>
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default NewHeader;



import React, { useState, useEffect } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayNowDropdownOpen, setIsPlayNowDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePlayNowDropdown = () => {
    setIsPlayNowDropdownOpen(!isPlayNowDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
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
            <div className="relative">
              <button
                className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300 flex items-center"
                onClick={togglePlayNowDropdown}
              >
                Play now <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </button>
              {isPlayNowDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                  <Link to="/quick-section" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Quick Section</Link>
                  <Link to="/crossword-puzzle" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Crossword Puzzle</Link>
                  <Link to="/debate-section" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Debate Section</Link>
                </div>
              )}
            </div>
            <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Experts</Link>
            <Link to="/community" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Community</Link>
            <Link to="/leaderboard" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Leaderboard</Link>
            <div className="relative">
              <button
                className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300 flex items-center"
                onClick={toggleProfileDropdown}
              >
                Profile <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Profile</Link>
                  <Link to="/streaks" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Streaks</Link>
                  <Link to="/rank" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Rank</Link>
                </div>
              )}
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
            <div className="relative">
              <button
                className="block px-4 py-2 hover:bg-purple-600 transition duration-300 w-full text-left"
                onClick={togglePlayNowDropdown}
              >
                Play now
              </button>
              {isPlayNowDropdownOpen && (
                <div className="bg-[#8B5FE3] text-white mt-2 rounded-lg">
                  <Link to="/quick-section" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Quick Section</Link>
                  <Link to="/crossword-puzzle" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Crossword Puzzle</Link>
                  <Link to="/debate-section" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Debate Section</Link>
                </div>
              )}
            </div>
            <Link to="/experts" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Experts</Link>
            <Link to="/community" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Community</Link>
            <Link to="/leaderboard" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Leaderboard</Link>
            <div className="relative">
              <button
                className="block px-4 py-2 hover:bg-purple-600 transition duration-300 w-full text-left"
                onClick={toggleProfileDropdown}
              >
                Profile
              </button>
              {isProfileDropdownOpen && (
                <div className="bg-[#8B5FE3] text-white mt-2 rounded-lg">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Profile</Link>
                  <Link to="/streaks" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Streaks</Link>
                  <Link to="/rank" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Rank</Link>
                </div>
              )}
            </div>
            <Link to="/login" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Login</Link>
            <Link to="/signup" className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 transition duration-300">Signup</Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default NewHeader;
