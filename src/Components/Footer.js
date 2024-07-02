import React from 'react';
import { Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
function Footer() {
  return (
    <div>
      <footer className='footer'>
        <Row xs={1} md={2} lg={4} className='g-4'>
          <Col>
            <h5>About Molla</h5>
            <p className='p'>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.</p>
            <div className='icons'>
              <img src="/images/5968764.png" alt='facebook-icon'/>
              <img src="/images/3955024.png" alt='instegram-icon'/>
              <img src="/images/3670147.png" alt='youtube-icon'/>
              <img src="/images/2504839.png" alt='twitter-icon'/>
            </div>
          </Col>

          <Col>
            <h5>Useful Links</h5>
            <p><a href='/'>About Molla</a></p>
            <p><a href='/'>How to shop on Molla</a></p>
            <p><a href='/'>FAQ</a></p>
            <p><a href='/'>Contact us</a></p>
            <p><a href='/'>Log in</a></p>
          </Col>

          <Col>
            <h5>Customer Service</h5>
            <p><a href=''>Payment Methods</a></p>
            <p><a href=''>Money-back guarantee!</a></p>
            <p><a href=''>Returns</a></p>
            <p><a href=''>Shipping</a></p>
            <p><a href=''>Terms and conditions</a></p>
            <p><a href=''>Privacy Policy</a></p>
          </Col>

          <Col>
            <h5>My Account</h5>
            <p><a href=''>Sign In</a></p>
            <p><a href=''>View Cart</a></p>
            <p><a href=''>My Wishlist</a></p>
            <p><a href=''>Track My Order</a></p>
            <p><a href=''>Help</a></p>
          </Col>
        </Row>
        <hr className='w-75'/>
        <div className='payment mt-4'>
          <img src='/images/payments (1).png'/>
        </div>
        <div className='logo'>
          <h1>MOLLA</h1>
        </div>

        <div>
          <p className='copyrights text-center'>Copyright © 2024 AlShimaa Alaa. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer;