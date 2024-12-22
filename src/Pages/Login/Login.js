import React, { useState } from 'react';
import "./style.css";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://fakestoreapi.com/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials. Please try again.');
      }

      const userData = await response.json();
      console.log('Login successful:', userData);


    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className='login'>
        <form className='login-form' onSubmit={handleLogin}>
          <div className='d-flex justify-content-evenly mt-2 mb-5'>
            <h2><Link to="/Login">Sign In</Link></h2>
            <h2><Link to={"/Register"}>Register</Link></h2>
          </div>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Enter Username or email address'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            className='mt-5'
          />
          <div className='w-100  mt-4 login-crendtional'>
            <button className='login-btn'>LogIn</button>
          </div>
          {error && <p className='text-danger mt-2'>{error}</p>}
          <hr className='mt-4' />
          <p className='mt-1 text-center text-secondary fw-bolder'>or sign in with</p>
          <div className='btns d-flex justify-content-around mt-3 mb-4'>
            <button className='w-50 me-3'><a href='https://www.google.com' className='faceherf'><img src="/images/download.png" className='face me-2' alt="Google" />Login With Google</a></button>
            <button className='w-50'><a href='https://www.facebook.com'  className='faceherf'><img src="/images/5968764.png" className='face me-2' alt="Facebook" />Login With Facebook</a></button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login;
