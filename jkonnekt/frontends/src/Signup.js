import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send signup request to backend using Axios
      const response = await axios.post('http://localhost:8000/api/signup/', formData);
      // Assuming the backend returns a token upon successful signup
      const token = response.data.token;

      // Store the token in localStorage or use it for further authentication
      // For example, you can use localStorage.setItem('token', token);

      // Redirect the user to the dashboard or any other protected route
      // For example, you can use window.location.href = '/dashboard';
    } catch (error) {
      // Handle signup errors, display error messages to the user, etc.
      console.error('Error signing up:', error);
    }
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
