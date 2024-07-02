import React from 'react';
import { Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Subscribe() {
  return (
    <div>
      <div className='d-flex justify-content-center'>
        <hr className='w-75 mt-5'/>
      </div>
      <div className='subscribe'>
        <img src='/images/message.PNG' className='mt-3'/>
        <h5 className='fw-bolder mt-4 '>Subscribe for Our Newsletter</h5>
        <p className='text-secondary'>and receive <span className='fw-bolder' style={{color:"rgb(163, 89, 30)"}}>$20 coupon</span>  for first shopping</p>
        

        <div className='subscribe__getTouch '>
          <form action='' className='form mt-4'>
            <input type='email' placeholder='Enter Your Email Address' className=''/>
            <button className='btn  rounded-0 '>Subscribe</button>
          </form>
        </div>

        <p className='text-secondary mt-4'>Your personal details are safe with us.</p>
      </div>
    </div>
  )
}

export default Subscribe;