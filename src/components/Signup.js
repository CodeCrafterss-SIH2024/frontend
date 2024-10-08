
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Loader from './Loader'; // Import the Loader component
import  image1 from '../img/loginimg.jpg'
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  const handleSendOtp = async () => {
    try {
      setLoading(true); // Start loader
      await axios.post(`${process.env.REACT_APP_API_URL}/send-otp`, { email, password, age,username  });
      toast.success('OTP sent to your email');
      setOtpSent(true);
    } catch (err) {
      toast.error('Failed to send OTP');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/verify-otp`, { email, otp, age });
      toast.success('OTP verified');
      setEmailVerified(true);
    } catch (err) {
      toast.error('Invalid OTP');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
     
      setLoading(true); // Start loader
      // await axios.post(`${process.env.REACT_APP_API_URL}/signup`, { username, email, password, age });
      toast.success('Signup successful');
      
      // Clear the form
      setUsername('');
      setEmail('');
      setPassword('');
      setAge('');
      setOtp('');
      setOtpSent(false);
      setEmailVerified(false);

      // Redirect to the login page
      navigate('/login');
    } catch (err) {
      toast.error('Signup failed');
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-cover"
     style={{ backgroundImage: `url(${image1})` }}>
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
        <h2 className="text-3xl font-extrabold text-center text-[#7b2cbf] mb-6">Signup</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              required
            />
          </div>
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
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              required
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 cursor-pointer"
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="age">
              Age
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Enter your age"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
              required
            />
          </div>
          {otpSent ? (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="otp">
                OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf]"
                required
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="w-full bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#4a1e70] focus:outline-none focus:ring-2 focus:ring-teal-400 mt-4"
              >
                Verify OTP
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSendOtp}
              className="w-full h-[50px] bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#501f7b] focus:outline-none focus:ring-2 focus:ring-teal-400"
            >
              {loading ? <Loader /> : 'Verify Email'}
            </button>
          )}
          <button
            type="submit"
            className="w-full h-[50px] bg-[#7b2cbf] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#4a1b74] focus:outline-none focus:ring-2 focus:ring-teal-400 mt-4"
            // disabled={!emailVerified}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
















