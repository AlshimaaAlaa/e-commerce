import React from 'react';
import { Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
function Blog() {
  return (
    <div className='blogContainer'>
      <div className='d-flex justify-content-center'>
        <hr className='w-75 mt-5'/>
      </div>
      <div className='d-flex flex-column  justify-content-center align-items-center blog '>
        <h3 style={{fontFamily:"Acme" , marginBottom:"10px"}} className='fw-bolder mt-3'>New Blog Posts</h3>
        <p style={{fontFamily:"Philosopher"}} className='text-secondary mb-5 blog__p'>Donec nec justo eget felis facilisis fermentum.</p>

        <Row sm={1} md={2} lg={3} className='g-4 blog__row' align="center">
          <div>
          <Col>
            <img src='/images/post_1_d0e46a9d50.jpg' className='blog__img' alt='blog-img1'/>
            <div className='d-flex flex-column  align-items-start blog__text'>
              <p className='text-secondary mt-3 mb-0'>Sep 18, 2024 , 3 Comments</p>
              <h5 className='mt-1  h5'>Sed adipiscingv ornare</h5>
              <p className=' fs-5 fw-bolder '>Read More</p>
            </div>
          </Col>
          </div>
        
          <div>
          <Col>
            <img src='/images/post_2_47432011a6.jpg' className='blog__img' alt='blog-img2'/>
            <div className='d-flex flex-column  align-items-start blog__text'>
              <p className=' mt-3 mb-0'>May 28, 2024 , 3 Comments</p>
              <h5 className='mt-1  h5'>Aenean disgnissim pellentesqvsdue felis</h5>
              <p className='  fs-5 fw-bolder '>Read More</p>
            </div>
          </Col>
          </div> 
          
          <div>
          <Col>
            <img src='/images/post_3_5bff6a6c44.jpg' className='blog__img' alt='blog-img3'/>
            <div className='d-flex flex-column align-items-start blog__text'>
              <p className=' mt-3 mb-0'>May 28, 2024 , 3 Comments</p>
              <h5 className='mt-1  h5'>Quisque volutpat msdfasttis eros.</h5>
              <p className=' fs-5 fw-bolder '>Read More</p>
            </div>
          </Col>
          </div>
        </Row>

        <button className='view-more mt-5 '>View More Articles</button>
      </div>
    </div>
  )
}

export default Blog;