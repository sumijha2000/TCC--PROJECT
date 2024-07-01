import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'; // Import your CSS file for styling
import sideimg from '../../assets/sideimg.svg'; // Import your left-side image
import con1 from '../../assets/Address.svg'
 import con2 from '../../assets/Phone.svg'
import con3 from '../../assets/Gmail Logo.svg'
import Footer from '../Footer/Footer'
import './Submit.css'

const Submit = () => {
  return (
    <div className='contact-page'><Navbar></Navbar>
      <div className="contact-section">
        <div className="contact-left">
          <img src={sideimg} alt="aboutimg1" />
        </div>

        <div className="submit-right">
          Thankyou <br />
        Sucessful Submited! Visit again!
         
        </div>
      </div>
      <hr className='line'></hr>
      <p className='pragraph'>Get in Touch</p>
     <div className='get-in-touch'>
    
      <div className="touch-img">
     
        <img src={con1} alt="" />
        <h4>Address</h4>
        <h5>123 Memory Lane, Suite 101, Timeless City, TC 54321</h5>
      </div>
      <div className="touch-img">
        <img src={con2} alt="" />
        <h4>Phone</h4>
        <h5>+1 (555) 123-4567</h5>
      </div>
      <div className="touch-img">
        <img src={con3} alt="" />
        <h4>Gmail</h4>
        <h5>timecapsulecreations@gmail.com</h5>
      </div>
    </div>
    <hr className='line'></hr>
    <Footer></Footer>
    </div>
  )
}

export default Submit