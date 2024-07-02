import React from 'react';
import { Row , Col } from 'react-bootstrap';
import "./style.css";
function WhyShop() {
  return (
    <div>
      <div className='whyShop' id='whyShop'>
        <Row xs={1} md={2} lg={4} align="center" className='mb-5 pt-5 w-100 g-4 '>
          <Col>
            <img src='/images/Capture.PNG' className='mb-4 '/>
            <h5 className='fw-bolder'>Payment & Delivery</h5> 
            <p className=' text-secondary '>Free shipping for orders over $50</p>
          </Col>

          <Col>
            <img src='/images/Capture1.PNG' className='mb-4 '/>
            <h5 className='fw-bolder'>Return & Refund</h5> 
            <p className=' text-secondary '>Free 100% money back guarantee</p>
          </Col>

          <Col>
            <img src='/images/Capture2.PNG' className='mb-4 '/>
            <h5 className='fw-bolder'>Secure Payment</h5> 
            <p className=' text-secondary '>100% secure payment</p>
          </Col>

          <Col>
            <img src='/images/Capture3.PNG' className='mb-4 '/>
            <h5 className='fw-bolder'>Quality Support</h5> 
            <p className=' text-secondary '>Alway online feedback 24/7</p>
          </Col>
        </Row>
        <div className=' d-flex justify-content-center'>
          <hr className='w-75 mt-5'/>
        </div>
      </div>
    </div>
  )
}

export default WhyShop;