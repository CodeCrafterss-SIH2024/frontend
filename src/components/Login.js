// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import {jwtDecode} from 'jwt-decode';
// import { toast } from 'react-toastify';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
//       localStorage.setItem('token', res.data.token);
      
//       const userRole = jwtDecode(res.data.token).role;
//       if (userRole === 'child') {
//         navigate('/child-dashboard');
//       } else if (userRole === 'adult') {
//         navigate('/adult-dashboard');
//       } else if (userRole === 'admin') {
//         navigate('/admin-panel');
//       }

//     } catch (err) {
//       console.error(err);
//       toast.error('Incorrect email or password'); // Show error message
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
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
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
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
//               className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           >
//             Login
//           </button>
//           <div className="text-center mt-4">
//             <Link to="/reset-password" className="text-blue-500 hover:text-blue-700">
//               Forgot your password?
//             </Link>
//             <p className="text-sm text-gray-600 mt-2">
//               Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



//  after color change


// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { toast,ToastContainer } from 'react-toastify';
import  image1 from '../img/loginimg.jpg'
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/login`, { email, password });
      localStorage.setItem('token', res.data.token);
      
      const userRole = jwtDecode(res.data.token).role;
      console.log(userRole);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover " 
    style={{ backgroundImage: `url(${image1})` }}
      >
        <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        hideProgressBar={false} 
        newestOnTop={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
        style={{ zIndex: 9999 }} // Ensures it shows above other content
      />
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
            className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5c2d85] focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <Link to="/reset-password" className="text-[#7b2cbf] hover:text-[#5c2d85">
              Forgot your password?
            </Link>
            <p className="text-sm text-gray-600 mt-2">
              Don't have an account? <Link to="/signup" className="text-[#7b2cbf] hover:underline">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
