import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ChildDashboard from './components/ChildDashboard';
import AdultDashboard from './components/AdultDashboard';
import AdminPanel from './components/AdminPanel';
import HomePage from './components/HomePage';
import ResetPassword from './components/ResetPassword'; // Import the ResetPassword component
import MainPage from './pages/MainPage';

// import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path= "/explore" element={<MainPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/adult-dashboard" element={<AdultDashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Add the ResetPassword route */}
        <Route path="/" element={<HomePage />} />
        {/* explore wala page */}
        <Route path="/main-page" element={<MainPage />} />
      </Routes>
      {/* <ToastContainer /> */}
    </Router>
  );
};

export default App;
