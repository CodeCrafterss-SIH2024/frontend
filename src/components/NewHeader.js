// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import logo from '../img/logo.png';

// const NewHeader = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isPlayNowDropdownOpen, setIsPlayNowDropdownOpen] = useState(false);
//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
//   const [username, setUsername] = useState(''); // Store the username
//   const navigate = useNavigate();

//   // Check login status on component mount
//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem('user')); // Fetch user data from localStorage
//     if (loggedUser) {
//       setIsLoggedIn(true);
//       setUsername(loggedUser.username); // Assuming the user object has a username field
//     }
//   }, []);

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

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const togglePlayNowDropdown = () => setIsPlayNowDropdownOpen(!isPlayNowDropdownOpen);
//   const toggleProfileDropdown = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   const handleLogout = () => {
//     localStorage.removeItem('user'); // Clear user data from localStorage
//     setIsLoggedIn(false); // Update login state
//     navigate('/login'); // Redirect to login page
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
            
//             <div className="relative">
//               <button
//                 className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300 flex items-center"
//                 onClick={togglePlayNowDropdown}
//               >
//                 Play now <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
//               </button>
//               {isPlayNowDropdownOpen && (
//                 <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
//                   <Link to="/quiz-section" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Quiz Section</Link>
//                   <Link to="/crossword-puzzle" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Crossword Puzzle</Link>
//                   <Link to="/debate-section" className="block px-4 py-2 hover:bg-gray-200 transition duration-300">Debate Section</Link>
//                 </div>
//               )}
//             </div>
            
//             <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Experts</Link>
//             <Link to="/community" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Community</Link>
//             <Link to="/leaderboard" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Leaderboard</Link>
            
//             {isLoggedIn ? (
//               <>
//                 <div className="relative flex items-center">
//                   <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
//                     {username.charAt(0).toUpperCase()} {/* Display the first letter of username */}
//                   </span>
//                   <span>{username}</span>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
//                 <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
//               </>
//             )}
//           </nav>

//           <button className="md:hidden text-white" onClick={toggleMenu}>
//             <FontAwesomeIcon icon={faBars} className="text-2xl" />
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-[#8B5FE3] text-white py-2">
//             <Link to="/" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Home</Link>
//             {/* Other mobile menu items */}
//             {isLoggedIn ? (
//               <>
//                 <div className="block px-4 py-2 flex items-center">
//                   <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
//                     {username.charAt(0).toUpperCase()} {/* Display the first letter of username */}
//                   </span>
//                   <span>{username}</span>
//                 </div>
//                 <button
//                   onClick={handleLogout}
//                   className="block px-4 py-2 hover:bg-purple-600 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Login</Link>
//                 <Link to="/signup" className="block px-4 py-2 hover:bg-purple-600 transition duration-300">Signup</Link>
//               </>
//             )}
//           </div>
//         )}
//       </header>
//     </div>
//   );
// };

// export default NewHeader;






// src/components/NewHeader.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import logo from '../img/logo.png';
import Nologinheader from './Nologinheader';

const NewHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlayNowDropdownOpen, setIsPlayNowDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
 
    const user = JSON.parse(localStorage.getItem('user')); // Get the username from localStorage
    if (user && localStorage.getItem('token')) {
      setIsLoggedIn(true);
      setUsername(user.username); // Assuming the user object has a username field
    }
    else{
      console.log("error")
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    navigate('/main-page');
  };

  return (
    <div>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#7b2cbf] bg-opacity-80' : 'bg-[#7b2cbf]'} text-white py-6 shadow-md`}>
        <div className="container mx-auto flex justify-between items-center">
         <div className='flex '>
        <img src={logo} alt="Website Logo" className="w-[150px] mt-[-50px] mb-[-50px]  h-[150px] mr-4" />

          <h1 className=" text-3xl font-extrabold flex items-center">
          Nagrik Aur Samvidhan
          </h1>
          </div>

          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition">Home</Link>
            <Link to="/experts" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Experts</Link>

            {
              isLoggedIn ?
              (
                <>
                <div className="relative">
              <button onClick={() => setIsPlayNowDropdownOpen(!isPlayNowDropdownOpen)} className="text-white font-semibold px-4 py-2 hover:bg-purple-600 transition flex items-center">
                Play now <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </button>
              {isPlayNowDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                  <Link to="/quiz-section" className="block px-4 py-2 hover:bg-gray-200">Quiz Section</Link>
                  <Link to="/crossword-puzzle" className="block px-4 py-2 hover:bg-gray-200">Crossword Puzzle</Link>
                  <Link to="/debate-section" className="block px-4 py-2 hover:bg-gray-200">Debate Section</Link>
                </div>
              )}
            </div>
          
            <Link to="/community" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Community</Link>
            <Link to="/leaderboard" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Leaderboard</Link>
                </>
              )
              :
              (
                <>
                <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Login</Link>
                </>
              )
            }



         
            {isLoggedIn ? (
              <>
                <div className="relative flex items-center">
                  <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
                    {username.charAt(0).toUpperCase()}
                  </span>
                  <span>{username}</span>
                </div>
                <button onClick={handleLogout} className="text-white font-semibold px-4 py-2 hover:bg-purple-600">
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* <Link to="/login" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Login</Link> */}
                <Link to="/signup" className="text-white font-semibold px-4 py-2 hover:bg-purple-600">Sign Up</Link>
              </>
            )}
          </nav>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white px-4 py-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-purple-600 text-white shadow-md mt-4">
            <Link to="/" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Home</Link>
            <button onClick={() => setIsPlayNowDropdownOpen(!isPlayNowDropdownOpen)} className="w-full text-white font-semibold px-4 py-2 hover:bg-purple-500">
              Play now <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {isPlayNowDropdownOpen && (
              <div className="bg-white text-black shadow-lg rounded-lg">
                <Link to="/quiz-section" className="block px-4 py-2 hover:bg-gray-200">Quiz Section</Link>
                <Link to="/crossword-puzzle" className="block px-4 py-2 hover:bg-gray-200">Crossword Puzzle</Link>
                <Link to="/debate-section" className="block px-4 py-2 hover:bg-gray-200">Debate Section</Link>
              </div>
            )}
            <Link to="/experts" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Experts</Link>
            <Link to="/community" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Community</Link>
            <Link to="/leaderboard" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Leaderboard</Link>

            {isLoggedIn ? (
              <>
                <div className="relative flex items-center">
                  <span className="rounded-full bg-purple-500 text-white w-8 h-8 flex items-center justify-center mr-2">
                    {username.charAt(0).toUpperCase()}
                  </span>
                  <span>{username}</span>
                </div>
                <button onClick={handleLogout} className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Login</Link>
                <Link to="/signup" className="block text-white font-semibold px-4 py-2 hover:bg-purple-500">Sign Up</Link>
              </>
            )}
          </div>
        )}
      </header>
    </div>
  );
};

export default NewHeader;






