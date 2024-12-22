import React from 'react';
import './Footer.css'
import { Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div>
      <footer className='footer'>
        <div className='footer-items' dir=''>
          <div>
            <h5>About Molla</h5>
            <p className='p'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
            <div className='icons'>
              <img src="/images/5968764.png" alt='facebook-icon'/>
              <img src="/images/3955024.png" alt='instegram-icon'/>
              <img src="/images/3670147.png" alt='youtube-icon'/>
              <img src="/images/2504839.png" alt='twitter-icon'/>
            </div>
          </div>

          <div>
            <h5>Useful Links</h5>
            <p><a href='/'>About Molla</a></p>
            <p><a href='/'>How to shop on Molla</a></p>
            <p><a href='/'>FAQ</a></p>
            <p><a href='/'>Contact us</a></p>
            <p><a href='/'>Log in</a></p>
          </div>

          <div>
            <h5>Customer Service</h5>
            <p><a href='/'>Payment Methods</a></p>
            <p><a href='/'>Money-back guarantee!</a></p>
            <p><a href='/'>Returns</a></p>
            <p><a href='/'>Shipping</a></p>
            <p><a href='/'>Terms and conditions</a></p>
            {/* <p><a href='/'>Privacy Policy</a></p> */}
          </div>

          <div>
            <h5>My Account</h5>
            <p><a href='/'>Sign In</a></p>
            <p><a href='/'>View Cart</a></p>
            <p><a href='/'>My Wishlist</a></p>
            <p><a href='/'>Track My Order</a></p>
            <p><a href='/'>Help</a></p>
          </div>
        </div>
        {/* <hr className='w-75'/>
        <div className='payment mt-4'>
          <img src='/images/payments (1).png' alt='payment img'/>
        </div>
        <div className='logo'>
          <h1>MOLLA</h1>
        </div> */}

        {/* <div className='d-flex justify-content-end'>
          <p className='copyrights fw-lighter'> All resrved copyrights to MOLLA</p>
        </div> */}
      </footer>
    </div>
  )
}

export default Footer;