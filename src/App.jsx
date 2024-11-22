// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from './components/components/LandingPage';
import SignUp from './components/SignUp';
import Dashboard from './components/components/Dashboard';
import SeekingReview from './components/components/SeekReview'
import ProvidingReview from './components/components/ProvideReview'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/seek-review" element={<SeekingReview/>} />
        <Route path="/provide-review" element={<ProvidingReview/>} />
      </Routes>
    </Router>
  );
}

export default App;
