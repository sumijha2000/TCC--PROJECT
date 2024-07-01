import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Upload.css';
import sideimg from '../../assets/uploadpage.svg';
import Footer from '../Footer/Footer';

const Uploadpage = () => {
  return (
    <div className='upload-page'>
      <Navbar />
      <div className="upload-section">
        <div className="upload-left">
          <img src={sideimg} alt="aboutimg1" />
        </div>

        <div className="upload-right">
          <h3 style={{textAlign:'center'}}>Thankyou <br /><br /> Successfully Uploaed! Visit Again!</h3>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Uploadpage;
