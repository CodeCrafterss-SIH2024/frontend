// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';

// const ResetPassword = () => {
//   const [step, setStep] = useState('requestEmail'); // Track the current step
//   const [email, setEmail] = useState('');
//   const [otp, setOtp] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Extract email from query params
//   const queryEmail = new URLSearchParams(location.search).get('email');

//   const handleRequestEmail = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/send-reset-otp`, { email });
//       toast.success('OTP sent to your email');
//       setStep('verifyOtp');
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to send OTP');
//     }
//   };

//   const handleResetPassword = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${process.env.REACT_APP_API_URL}/reset-password`, { email, otp, newPassword });
//       toast.success('Password reset successfully');
//       navigate('/login');
//     } catch (err) {
//       console.error(err);
//       toast.error('Failed to reset password');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
//           {step === 'requestEmail' ? 'Request Password Reset' : 'Reset Password'}
//         </h2>
//         {step === 'requestEmail' ? (
//           <form onSubmit={handleRequestEmail}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Send OTP
//             </button>
//           </form>
//         ) : (
//           <form onSubmit={handleResetPassword}>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="otp">
//                 OTP
//               </label>
//               <input
//                 type="text"
//                 id="otp"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="Enter OTP"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="newPassword">
//                 New Password
//               </label>
//               <input
//                 type="password"
//                 id="newPassword"
//                 value={newPassword}
//                 onChange={(e) => setNewPassword(e.target.value)}
//                 placeholder="Enter new password"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             >
//               Reset Password
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;





import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from './Loader'; // Import the Loader component
import  image1 from '../img/loginimg.jpg'

const ResetPassword = () => {
  const [step, setStep] = useState('requestEmail'); // Track the current step
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const location = useLocation();

  // Extract email from query params
  const queryEmail = new URLSearchParams(location.search).get('email');

  const handleRequestEmail = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/send-reset-otp`, { email });
      toast.success('OTP sent to your email');
      setStep('verifyOtp');
    } catch (err) {
      console.error(err);
      toast.error('Failed to send OTP');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loader
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/reset-password`, { email, otp, newPassword });
      toast.success('Password reset successfully');
      navigate('/login');
    } catch (err) {
      console.error(err);
      toast.error('Failed to reset password');
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 bg-cover"
        style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {step === 'requestEmail' ? 'Request Password Reset' : 'Reset Password'}
        </h2>
        {loading && <Loader />} {/* Display loader if loading */}
        {step === 'requestEmail' ? (
          <form onSubmit={handleRequestEmail}>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf] "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#7b2cbf]  text-white font-semibold py-2 px-4 rounded-md hover:bg-[#5a218b]   focus:outline-none focus:ring-2 focus:ring-[#471a6e] "
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Sending...' : 'Send OTP'}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword}>
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
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf] "
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="newPassword">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#7b2cbf] "
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-[#7b2cbf] focus:outline-none focus:ring-2 focus:ring-[#4b1c75]"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Resetting...' : 'Reset Password'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
