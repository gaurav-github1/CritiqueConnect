import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Utils/firebase";
import Navbar from './components/Navbar';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false); // New state variable for login/signup
  const [error, setError] = useState(''); // State for storing error messages
  const [userType, setUserType] = useState('student'); // student or professional
  const [organization, setOrganization] = useState(''); // Organization name if professional
  const [linkdedin, setLinkedin] = useState(''); // Organization name if professional
  const [domains, setDomains] = useState([]); // Array to hold the selected domains
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate email format (basic validation)
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
  
    setError(''); // Clear any previous error messages
  
    if (isLogin) {
      // Login user
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log('User logged in:', { email });
        navigate('/dashboard', { state: { email } });
      } catch (error) {
        setError('Login failed. Please check your email and password.');
        console.error(error.message);
      }
    } else {
      // Sign up user
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
  
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('User registered:', { email });
  
        // Handle additional user info based on user type
        if (userType === 'professional' && organization && domains.length > 0 && linkdedin) {
          console.log('User is a professional:', { organization, domains });
          const response = await fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              OrganisationName: organization,
              domains: domains,
              linkedin: linkdedin,
              role: 'professional',
            }),
          });
  
          // Ensure the API call was successful before navigating
          if (response.ok) {
            navigate('/dashboard', { state: { email } });
          } else {
            setError('Failed to save professional data. Please try again.');
          }
        } else {
          // If user is not professional, navigate to dashboard directly
          navigate('/dashboard', { state: { email } });
        }
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          setError('Email is already in use. Please use a different email.');
        } else {
          setError('An error occurred during sign-up. Please try again.');
        }
        console.error(error.message);
      }
    }
  };
  

  const handleDomainChange = (e) => {
    const { value, checked } = e.target;
    setDomains((prevDomains) => 
      checked ? [...prevDomains, value] : prevDomains.filter(domain => domain !== value)
    );
  };

  return (
    <>
      <div className='h-28'>
        <Navbar className='mt-24'/>
      </div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center mb-6">{isLogin ? 'Log In' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            {!isLogin && (
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="confirm-password">
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                />
              </div>
            )}

            {/* New Form Fields for User Type */}
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="user-type">
                  Are you a student or a professional?
                </label>
                <select
                  id="user-type"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                >
                  <option value="student">Student</option>
                  <option value="professional">Professional</option>
                </select>
              </div>
            )}

            {/* Show Additional Fields for Professionals */}
            {userType === 'professional' && (
              <>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="organization">
                    Organization Name
                  </label>
                  <input
                    id="organization"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2" htmlFor="organization">
                 LinkedIn Profile Link
                   </label>
                <input
                    id="linkedin"
                    type="text"
                    value={linkdedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                {/* <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Select your domains of interest</label>
                  <div className="flex flex-wrap gap-4">
                    {['Technology', 'Social', 'Business'].map((domain) => (
                      <div key={domain}>
                        <label className="inline-flex items-center">
                          <input
                            type="checkbox"
                            value={domain.toLowerCase()}
                            checked={domains.includes(domain.toLowerCase())}
                            onChange={handleDomainChange}
                            className="form-checkbox h-5 w-5 text-blue-600"
                          />
                          <span className="ml-2">{domain}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}
              </>
            )}

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {isLogin ? 'Log In' : 'Sign Up'}
            </button>
          </form>

          {/* Show error message if any */}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}

          <p className="mt-4 text-center">
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError(''); // Reset the error when toggling
              }}
              className="text-blue-500 hover:underline ml-1"
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
