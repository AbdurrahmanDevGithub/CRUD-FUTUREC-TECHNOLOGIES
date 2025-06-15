import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'; // ✅ Import this

const Login = () => {
  const [state, setState] = useState('Register');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // ✅ Create navigate function

  const handleLoginClick = () => setState('Login');
  const handleRegisterClick = () => setState('Register');

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!password) {
      toast.error('Password is required');
      return;
    }

    if (state === 'Register' && !username) {
      toast.error('Username is required');
      return;
    }

    const url = state === 'Register'
      ? 'http://localhost:3001/api/account/signup'
      : 'http://localhost:3001/api/account/signin';

    const payload = state === 'Register'
      ? { username, email, password }
      : { email, password };

    try {
      const response = await axios.post(url, payload);
      toast.success(state === 'Register' ? 'Signup success' : 'Login success');

      if (state === 'Login') {
        setTimeout(() => {
          navigate('/home'); // ✅ Redirect to Home after successful login
        }, 1000); // short delay so toast can show
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.error || 'Something went wrong');
      } else {
        toast.error('Network error: ' + error.message);
      }
    }
  };

  return (
    <>
      <ToastContainer />

      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li
          onClick={handleLoginClick}
          style={{ marginRight: '10px', cursor: 'pointer' }}
        >
          Login
        </li>
        <li onClick={handleRegisterClick} style={{ cursor: 'pointer' }}>
          Signup
        </li>
      </ul>

      <br />

      {state === 'Register' && (
        <div>
          Username: <br />
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />
        </div>
      )}

      Email: <br />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

      Password: <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

      <button onClick={handleSubmit}>
        {state === 'Login' ? 'Login' : 'Signup'}
      </button>

      <div style={{ marginTop: '40px', padding: '20px', border: '1px solid' }}>
        <h3>How to Run This CRUD App</h3>
        <p>This app mainly focuses on backend functionality, so the frontend design is kept minimal without advanced CSS styling.</p>
        <ol>
          <li>Create a local MongoDB database named: crud_futurc_technologies</li>
          <li>Create an account using the signup form, then log in with the same credentials</li>
          <li>Once logged in, you can upload, view, edit, and delete products</li>
        </ol>
      </div>
    </>
  );
};

export default Login;
