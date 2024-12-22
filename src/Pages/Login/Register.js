import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
function Register() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className='login' >
        <form className='login-form'>
          <div className='d-flex justify-content-evenly mt-2 mb-2'>
            <h2><Link to={"/Login"} >Sign In</Link></h2>
            <h2><Link to={"/Register"}>Register</Link></h2>
          </div>
          <div className='d-flex w-100 regiser-inputs'>
              <input type='text' className='mt-5 w-100 me-2' placeholder='Frist Name'/>
              <input type='text' placeholder='Last Name' className='mt-5 w-100'/>
          </div>
        
          <input type='text' placeholder='Email address' className='mt-4'/>
          <input type='password' placeholder='Password' className='mt-4'/>
          <input type='password' placeholder='Confirm Password' className='mt-4'/>
          <div className='d-flex w-100  mt-4 align-items-center justify-content-center  register-credantional'>
            <button className='login-btn'>sign up </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;