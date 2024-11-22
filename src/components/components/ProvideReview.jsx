import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProvideReview() {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const location = useLocation();
  const { email } = location.state || {}; // Retrieve email passed via navigation
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`https://critiquebackend.onrender.com/categories/provider/${email}`);
        console.log('Fetched categories:', response.data);

        // Extract tasks and map to desired structure
        const taskList = response.data.flatMap((category) =>
          category.tasks.map((task) => ({
            id: task._id,
            title: task.title,
            description: task.description,
          }))
        );

        setTasks(taskList); // Update state with tasks
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (email) {
      fetchCategories(); // Fetch data when email is available
    }
  }, [email]);

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center p-10 bg-gradient-to-r from-green-400 via-blue-400 to-purple-500">
        <div className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Available Tasks for Review</h2>
          <div className="space-y-6">
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="p-5 border border-gray-200 rounded-md shadow-sm hover:bg-gray-100 transition duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
                  <p className="text-gray-600">{task.description}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">No tasks available for review at the moment.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProvideReview;
 