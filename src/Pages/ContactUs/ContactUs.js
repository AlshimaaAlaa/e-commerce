import React from 'react';
import "./style.css";
import { Helmet } from 'react-helmet';
function ContactUs() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className='contact-us mb-5'>
        <div className='map'>
          <img src='/images/map.PNG' alt=''/>
        </div>

        <div className='mt-5 w-100 p-4'>
          <div className='contact-details'>
            <div className='text-center '>
              <h5 className='fw-bolder'>Office</h5>
              <p className='text-secondary m-0'>1 New York Plaza, New York,</p>
              <p className='text-secondary'>NY 10004, USA</p>
            </div>

            <div className='text-center'>
              <h5 className='fw-bolder'>Start a Conversation</h5>
              <p className='text-secondary m-0'>info@Molla.com</p>
              <p className='text-secondary'>+1 987-876-6543, +1 987-976-1234</p>
            </div>

            <div className='text-center'>
              <h5 className='fw-bolder'>Social</h5>
              <div className='socials'>
                <img src='/images/5968764.png' alt='facebook'/>
                <img src='/images/3955024.png' alt='instegram'/>
                <img src='/images/3670147.png' alt='youtube'/>
                <img src='/images/2504839.png' alt='twitter'/>
              </div>
            </div>
          </div>
        </div>

        <hr className='w-75'/>
        <div className='m-5 get-touch'>
          <h2 className='text-center fw-bolder '>Get In Touch</h2>
          <p className='text-center p2 fw-bolder mt-4'>We collaborate with ambitious brands and people; we’d love to build <br/>something great together.</p>
          <p className='text-center text-secondary'>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien <br/> ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>


          <div >
            <form className='d-flex flex-column  align-items-center  justify-content-center '>
              <div className='inputs'>
                <input type='text' placeholder='Name*'/>
                <input type='email' placeholder='Email*'/>
                <input type='phone' placeholder='Phone*'/>
              </div>
              <input type="text" placeholder='Subject*' className='subject'/>
              <textarea cols={30} rows={10} placeholder='Message*'></textarea>
              <button className='contact-us__btn'>submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;