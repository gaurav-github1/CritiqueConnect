import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const ProjectForm = () => {
  const location = useLocation();
  const {email} = location.state ;
  const [formData, setFormData] = useState({
    title: '',
    type: 'Problem',
    link: '',
    statement: '',
    description: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

   
  const handleSubmit = async (e) => {
    e.preventDefault(); // Move this to the top
    const task = {
      title: formData.title,
      type: formData.type,
      url: formData.link,
      description: formData.description || formData.statement,
    };
    console.log(task , email)
    try {
      const response = await axios.post('https://critiquebackend.onrender.com/categories/task', {
        category: 'business', // Replace with actual category
        seeker: email,
        task,
      });
      console.log('Task submitted successfully:',response );
      alert('Task submitted successfully!');
    } catch (error) {
      console.error('Error submitting task:', error.response ? error.response.data : error.message);
      alert('Failed to submit the task. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 p-10">
      <div className="max-w-5xl w-full bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Submit Your Project
        </h2>
        <form  className="space-y-8">
          {/* Type Selection */}
          <div>
            <label htmlFor="type" className="block text-lg font-medium text-gray-700">
              Type
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              required
            >
              <option value="Problem">Problem</option>
              <option value="Idea">Idea</option>
              <option value="Survey">Survey</option>
            </select>
          </div>

          {/* Common Field: Title */}
          <div>
            <label htmlFor="title" className="block text-lg font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
              placeholder="Enter project title"
              required
            />
          </div>

          {/* Conditional Fields */}
          {formData.type === 'Problem' && (
            <div>
              <label htmlFor="statement" className="block text-lg font-medium text-gray-700">
                Problem Statement
              </label>
              <textarea
                id="statement"
                name="statement"
                value={formData.statement}
                onChange={handleChange}
                className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                placeholder="Describe the problem in detail"
                rows="3"
                required
              ></textarea>
            </div>
          )}

          {formData.type === 'Idea' && (
            <>
              <div>
                <label htmlFor="link" className="block text-lg font-medium text-gray-700">
                  Project Link
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Enter project link (if available)"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Describe your idea in detail"
                  rows="3"
                  required
                ></textarea>
              </div>
            </>
          )}

          {formData.type === 'Survey' && (
            <>
              <div>
                <label htmlFor="description" className="block text-lg font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Describe your survey"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div>
                <label htmlFor="link" className="block text-lg font-medium text-gray-700">
                  Survey URL
                </label>
                <input
                  type="url"
                  id="link"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="mt-2 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-200 ease-in-out hover:border-blue-400"
                  placeholder="Enter survey URL"
                  required
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              className="px-8 py-4 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
