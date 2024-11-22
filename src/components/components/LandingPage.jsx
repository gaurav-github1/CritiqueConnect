// LandingPage.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Hero from './Hero';
import Features from './Features.jsx';
import Testimonial from './Testimonial';
import CallToAction from './CallToAction';
import Footer from './Footer.jsx';
import SignUp from '../SignUp.jsx'; // Import SignUp component

function LandingPage() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Define routes for each section */}
        <Route path="/" element={
          <>
            <Hero />
            <Features />
            <Testimonial />
            <CallToAction />
          </>
        } />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default LandingPage;
