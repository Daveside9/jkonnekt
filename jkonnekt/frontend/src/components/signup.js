import React, { useState } from 'react';
import './common.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Replace with your signup logic (e.g., create a new user in the backend database)
    // For this example, we'll create a new user and set it in the localStorage
    const newUser = {
      email,
      password,
    };

    // Save the new user in localStorage
    localStorage.setItem('user', JSON.stringify(newUser));

    // Redirect to the login page after successful signup
    navigate('/login');
  };

  return (
    <div className="App">
      <div className="container signup-container">
        <h1>Sign Up</h1>
        <form id="signup-form" onSubmit={handleSignup}>
          {/* Sign up form fields */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
