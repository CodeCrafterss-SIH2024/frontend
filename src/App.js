import React from 'react';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ChildDashboard from './components/ChildDashboard';
import AdultDashboard from './components/AdultDashboard';
import AdminPanel from './components/AdminPanel';
import HomePage from './components/HomePage';
import ResetPassword from './components/ResetPassword'; // Import the ResetPassword component
import MainPage from './pages/MainPage';

import JudiciaryPage from './pages/JudiciaryPage ';
import ExecutivePage from './pages/ExecutivePage ';
import LegislaturePage from './pages/LegislaturePage ';
import Leaderheader from './pages/Leaderheader';

import ExpertMain from './pages/ExpertMain';
import CrossMain from './pages/CrossMain';

import CommunityChat from './components/CommunityChat';
// import President from './pages/President';
import PresidentPage from './pages/PresidentPage';
// import CrossMain from './pages/CrossMain';
import QuizMain from './pages/quizMain';
import RTequalitys from './pages/RTequalitys';
// import { ToastContainer } from 'react-toastify';

import RoomMain from './components/RoomMain';

import Frights from './components/Frights';
import Secondmain from './components/Secondmain';

import DPSP from './components/DPSP';
import QuizComponent from './pages/QuizEq';



const App = () => {
 
  return (
    <Router>
      <Routes>
      <Route path='/kwiz' element={<QuizComponent/>}/>
      <Route path='/adult' element={<Secondmain/>}/>
      <Route path='/quiz-section' element={<QuizMain/>}/>
      <Route path='/crossword-puzzle' element={<CrossMain/>}/>
      <Route path='/kwiz-back' element={<RTequalitys/>}/>
      <Route path='/experts' element={<ExpertMain/>}/>
      <Route path='/vicepresident' element={<PresidentPage/>}/>
      <Route path='/planning-commision' element={<PresidentPage/>}/>
         <Route path='/community' element={<CommunityChat/>}/>
        <Route path="/leaderboard" element={<Leaderheader/>}/>
        <Route path= "/debate-section" element={<RoomMain/>}/>
        <Route path= "/explore" element={<MainPage/>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/child-dashboard" element={<ChildDashboard />} />
        <Route path="/adult-dashboard" element={<AdultDashboard />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/reset-password" element={<ResetPassword />} /> {/* Add the ResetPassword route */}
        <Route path="/" element={<HomePage />} />
     
        <Route path="/main-page" element={<MainPage />} />

      <Route path="/legislature" element={<LegislaturePage />} />
      <Route path="/fund_rights" element={<Frights/>} />
      <Route path="/rt" element={<RTequalitys/>}/>
        <Route path="/dsps" element={<DPSP />} />
      <Route path="/executive" element={<ExecutivePage />} />
      <Route path="/judiciary" element={<JudiciaryPage />} />
      </Routes>
      {/* <ToastContainer /> */}
    </Router>
  );
};

export default App;

