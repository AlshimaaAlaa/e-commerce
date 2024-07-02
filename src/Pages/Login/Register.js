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
          <label className='mt-3 fw-bolder  text-secondary '>Username or email address*</label>
          <input type='text'/>
          <label className='mt-3 fw-bolder  text-secondary '>Password*</label>
          <input type='password'/>
          <div className='d-flex w-100  mt-4 align-items-center justify-content-center  register-credantional'>
            <button className='login-btn'>sign up </button>
            <div className='register-agreed'>
              <input type='checkbox' className='' />
              <label className='ms-2'>I agree to the privacy policy *</label>
            </div>
          </div>
          <hr className='mt-4'/>
          <p className='mt-1 text-center text-secondary fw-bolder'>or sign in with</p>
          <div className='btns d-flex justify-content-around mt-3 mb-4'>
            <button className='w-50 me-3 '><img src="/images/5968764.png" className='face me-2'/>Login With Google</button>
            <button className='w-50'><img src="/images/download.png" className='face me-3'/>Login With Facebook</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register;