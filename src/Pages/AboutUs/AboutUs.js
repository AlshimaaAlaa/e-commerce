import React from 'react';
import "./style.css";
import { Row , Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Marquee from 'react-fast-marquee';
function AboutUs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='about '>
        <h1 className='mt-5 text-center'>Who We Are</h1>
        <p className='w-75 mt-3 text-center  text-secondary par'>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis.</p>
        <img src='/images/signature.png' className='mt-5' alt='signature-image'/>

        <div className='p-5 mt-5 reasons'>
          <Row sm={1} md={1} lg={3} align="center">
            <Col>
              <img src='/images/6.PNG'/>
              <h5 className='mt-3'>Design Quality</h5>
              <p className=' text-secondary  about__pp'>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero
              eu augue.</p>
            </Col>

            <Col>
              <img src='/images/7.PNG'/>
              <h5 className='mt-3'>Professional Support</h5>
              <p className='text-secondary about__pp'>Praesent dapibus, neque id cursus faucibus,
              tortor neque egestas augue, eu vulputate
              magna eros eu erat.</p>
            </Col>

            <Col>
              <img src='/images/8.PNG'/>
              <h5 className='mt-3'>Made With Love</h5>
              <p className='text-secondary about__pp'>Pellentesque a diam sit amet mi ullamcorper
                vehicula. Nullam quis massa sit amet
                nibh viverra malesuada.</p>
            </Col>
          </Row>
        </div>

        {/* <div className='bg w-100 mt-5'>
          <Row sm={1} md={2} lg={4} align="center" className='target p-5 '>
            <Col className='d-flex flex-column  align-items-center '>
              <div className='d-flex align-items-center '>
                <div className='div'></div>
                <h1 className='fw-bolder'>40 K+</h1>
              </div>
              <h5 className='fw-bolder'>Happy Customer</h5>
            </Col>
            

            <Col  className='d-flex flex-column  align-items-center '>
              <div className='d-flex align-items-center '>
                <div className='div'></div>
                <h1 className='fw-bolder'>20 +</h1>
              </div>
              <h5 className='fw-bolder'>Years in Business</h5>
            </Col>

            <Col  className='d-flex flex-column  align-items-center '>
              <div className='d-flex align-items-center '>
                <div className='div'></div>
                <h1 className='fw-bolder'>95%</h1>
              </div>
              <h5 className='fw-bolder'>Return Clients</h5>
            </Col>

            <Col  className='d-flex flex-column  align-items-center '>
              <div className='d-flex align-items-center '>
                <div className='div'></div>
                <h1 className='fw-bolder'>15</h1>
              </div>
              <div className='div3'></div>
              <h5 className='fw-bolder'>Return Clients</h5>
            </Col>
          </Row>
        </div> */}
        <div className='brands'>
          <h3 className='text-center mb-4 fw-bolder ' style={{fontFamily:"Acme"}}>The world's premium design <br/>
          brands in one destination.</h3>
          <p className='text-center text-secondary ' style={{fontFamily:"Philosopher"}}>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi <br/>
          neque, aliquet vel, dapibus id, mattis vel, nis</p>

          <Marquee className='marquee'>
            <img src='/images/1 (1).png'/>
            <img src='/images/2 (1).png'/>
            <img src='/images/3 (1).png'/>
            <img src='/images/6 (1).png'/>
            <img src='/images/7 (1).png'/>
            <img src='/images/8 (1).png'/>
          </Marquee>
        </div>
      </div>

    </div>
  )
}

export default AboutUs;