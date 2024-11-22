import React from 'react';
import  Navbar  from './Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const fetchCategories = async () => {
    try {
        const response = await axios.get('https://critiquebackend.onrender.com/categories');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};

fetchCategories();


function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const handleSeekReview = () => {
    navigate('/seek-review', {state : { email }});
  };

  const handleProvideReview = () => {
    navigate('/provide-review', { state: { email } });
  };
  
  
  const handleProvideReview = () => {
    navigate('/provide-review', { state: { email } });
  };  


  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-200 bg-left-top p-6 relative -top-8" >
      <h1 className="font-bold text-3xl mb-8">Hi! Nice to meet you.</h1>
      {email && (
        <p className="text-lg text-gray-800 mb-8">
          Your email: <span className="font-medium">{email}</span>
        </p>
      )}
      <p className="text-xl font-semibold mb-6">What would you like to do today?</p>
      <div className="flex flex-wrap justify-center gap-8">
        <div
          className="bg-gradient-to-br from-blue-100 to-blue-200 shadow-md rounded-lg p-8 w-64 cursor-pointer hover:shadow-lg transition"
          onClick={handleSeekReview}
        >
          <h2 className="font-bold text-xl text-blue-600 mb-4">Seek a Review</h2>
          <p className="text-gray-700">
            Get valuable feedback on your project, solution, or idea.
          </p>
        </div>
        <div
          className="bg-gradient-to-br from-green-100 to-green-200 shadow-md rounded-lg p-8 w-64 cursor-pointer hover:shadow-lg transition"
          onClick={handleProvideReview}
        >
          <h2 className="font-bold text-xl text-green-600 mb-4">Provide a Review</h2>
          <p className="text-gray-700">
            Help others by providing constructive feedback on their work.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Dashboard;
