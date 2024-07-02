import React from 'react';
import { Row , Col } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
function InspireSection() {
  return (
    <div>
      <div className='inspireSection'>
        <div>
          <h1 className='text-center mb-5 mt-5' style={{fontFamily:"Acme"}}>Let Us Inspire You On Instagram</h1>
        </div>

        <div  className='inspire__items'>
          <div>
          <div className='parent '>
            <img src='/images/1.PNG'/>
          </div>
          </div>
          <div>
          <div className='parent'>
          <img src='/images/2.PNG'/>
          </div>
          </div>
          <div>
          <div className='parent'>
          <img src='/images/3.PNG'/>
        </div>
          </div>
          <div>
          <div className='parent'>
          <img src='/images/4.PNG'/>
        </div>
          </div>
          <div>
          <div className='parent'> 
          <img src='/images/5.PNG' className='img'/>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspireSection;