import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar'
import aboutimg from '../../assets/aboutimg.svg'
import aboutimg1 from '../../assets/aboutimg1.svg'
import tem1 from '../../assets/tem1.svg'
import tem2 from '../../assets/tem2.svg'
import tem3 from '../../assets/tem3.svg'
import tem4 from '../../assets/tem4.svg'
import con1 from '../../assets/Address.svg'
import con2 from '../../assets/Phone.svg'
import con3 from '../../assets/Gmail Logo.svg'
import Footer from '../Footer/Footer'

const About = () => {
  return (
  
    <div className='about-page'><Navbar></Navbar>
    <div className="about-section">
      <div className="about-left">
        <h3>About Us</h3>
        <h4>Information about Time Capsule Creations</h4>
        <p>Welcome to Time Capsule Creations, where memories are preserved for a lifetime. We specialize in crafting unique time capsules that capture the essence of your most cherished moments.

          Our passion for storytelling and preserving history drives everything we do. Whether it's a personal milestone, a significant event, or a snapshot of everyday life, we understand the importance of preserving these moments for the future.

          Join us on this journey of preserving memories and creating connections across time. Together, let's make history one capsule at a time.</p>
      </div>

      <div className="about-right">
          <img src={aboutimg} alt="aboutimg" className='about-img'/>
      </div>
    </div>

    <hr className='line'></hr>

    <div className="about-section">
      <div className="about-left">
        <img src={aboutimg1} alt="aboutimg1" className='about-img'/>
      </div>
      <div className="about-right">
        <h3>Mission/Vision</h3>
        <h4>Information about Our Mission/Vission</h4>
        <p>Our mission at Time Capsule Creations is to encapsulate the beauty of life's journey, preserving precious memories for generations to come. We envision a world where every milestone, every laugh, and every tear is immortalized in a timeless capsule, connecting past, present, and future.</p>
      </div>
    </div>

    <hr className='line'></hr>
     <div style={{textAlign:'center', fontSize:'20px'}}>
      Team Member
     </div>
    <div className='team-members'>
    
      <div className="team-img">
      {/* <h3>Our Team</h3> */}
        <img src={tem1} alt="" />
        <h4>[Team Member]</h4>
        <h5>Founder</h5>
      </div>
      <div className="team-img">
        <img src={tem2} alt="" />
        <h4>[Team Member]</h4>
        <h5>Lead Designer</h5>
      </div>
      <div className="team-img">
        <img src={tem3} alt="" />
        <h4>[Team Member]</h4>
        <h5>Production Manager</h5>
      </div>
      <div className="team-img">
        <img src={tem4} alt="" />
        <h4>[Team Member]</h4>
        <h5>Customer Relations Specialist</h5>
      </div>
    </div>

    <hr className='line'></hr>
    <div style={{textAlign:'center', fontSize:'20px'}}>
      Get in Touch
     </div>
    <div className='get-in-touch'>
    
      <div className="touch-img">
      {/* <h3>Get in Touch</h3> */}
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
 
   
);

};

export default About
