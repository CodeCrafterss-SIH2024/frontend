

// // src/pages/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { jwtDecode } from 'jwt-decode';
// import { toast,ToastContainer } from 'react-toastify';
// import  image1 from '../img/loginimg.jpg'
// import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS



// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
//       localStorage.setItem('token', res.data.token);
//       console.log(res.data.token)
//       console.log(res.data.refreshToken)
//       const userRole = jwtDecode(res.data.token).role;
//       if (userRole === 'child') {
//         window.location.href = 'https://sansthaein-aur-sanvidhan-child-section.github.io/ChildSection/';
//       } else if (userRole === 'adult') {
//         navigate('/main-page');
//       } else if (userRole === 'admin') {
//         navigate('/admin-panel');
//       }

//     } catch (err) {
//       console.error(err);
//       toast.error('Incorrect email or password'); // Show error message
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover " 
//     style={{ backgroundImage: `url(${image1})` }}
//       >
//         <ToastContainer 
//         position="top-right" 
//         autoClose={3000} 
//         hideProgressBar={false} 
//         newestOnTop={false} 
//         closeOnClick 
//         rtl={false} 
//         pauseOnFocusLoss 
//         draggable 
//         pauseOnHover 
//         style={{ zIndex: 9999 }} // Ensures it shows above other content
//       />
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-4xl font-extrabold text-center text-[#581e8a] mb-6">Login</h2>
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none focus:ring-2 focus:ring-teal-400"
//           >
//             Login
//           </button>
//           <div className="text-center mt-4">
//             <Link to="/reset-password" className="text-[#7b2cbf] hover:text-[#5c2d85">
//               Forgot your password?
//             </Link>
//             <p className="text-sm text-gray-600 mt-2">
//               Don't have an account? <Link to="/signup" className="text-[#7b2cbf] hover:underline">Sign Up</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Ensure proper import
import { toast, ToastContainer } from 'react-toastify';
import image1 from '../img/loginimg.jpg';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
      const token = res.data.token;
      console.log(token)
      localStorage.setItem('token', token);
      localStorage.setItem('refreshToken', res.data.refreshToken);

      const decodedToken = jwtDecode(token);
      console.log("mohit12")
      console.log(decodedToken)
      console.log("mohit1")
      const username = decodedToken.user; // Assuming the token contains the username field
    
      localStorage.setItem('user', JSON.stringify({ username })); // Store username in localStorage

      const userRole = decodedToken.role;
      if (userRole === 'child') {
        window.location.href = 'https://sansthaein-aur-sanvidhan-child-section.github.io/ChildSection/';
      } else if (userRole === 'adult') {
        navigate('/main-page');
      } else if (userRole === 'admin') {
        navigate('/admin-panel');
      }
    } catch (err) {
      console.error(err);
      toast.error('Incorrect email or password'); // Show error message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover" 
      style={{ backgroundImage: `url(${image1})` }}>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-extrabold text-center text-[#581e8a] mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <Link to="/reset-password" className="text-[#7b2cbf] hover:text-[#5c2d85]">
              Forgot your password?
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Don't have an account? <Link to="/signup" className="text-[#7b2cbf] hover:underline">Sign Up</Link>
            </p>
            <p className="text-sm text-gray-600 mt-2">
            No account is needed! <Link to="/" className="text-[#7b2cbf] hover:underline">Home</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

