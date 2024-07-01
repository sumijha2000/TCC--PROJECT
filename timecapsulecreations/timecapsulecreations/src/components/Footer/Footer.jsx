import React from 'react'
import './Footer.css'
import smicon from '../../assets/Facebook Circled.svg'
import smicon2 from '../../assets/Instagram Circle.svg'
import smicon3 from '../../assets/LinkedIn Circled.svg'
import smicon4 from '../../assets/WhatsApp.svg'
import smicon5 from '../../assets/YouTube.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'> 
      <div className="end-box">
            <div className="end-text">
            <h4>Time Capsule Creations</h4>
        <ul>
            <Link to='/technology'><li>Technology |</li></Link>
            <Link to='/medicine'><li>Medicine |</li></Link>
            <Link to='/transportation'><li>Transportation |</li></Link>
            <Link to=''><li>Other Categories</li></Link>
        </ul>
         <ul>
         <Link to='/'><li>Homepage |</li></Link>
         <Link to='/about'><li>About Us |</li></Link>
         <Link to='/blog'><li>Blog |</li></Link>
         <Link to='/contact'><li>Contact</li></Link>
         </ul>
        
        </div>
            </div>
            <hr class="hr-line"></hr>
          
       
        <div class="sm-icon">
        <img src={smicon} alt="fimg"/>
    </div>
    <div class="sm-icon">
        <img src={smicon2} alt="img2"/>
    </div>
    <div class="sm-icon">
        <img src={smicon3} alt="img3" />
    </div>
    <div class="sm-icon">
        <img src={smicon4} alt="img4" />
    </div>
    <div class="sm-icon">
        <img src={smicon5} alt="img5" />
    </div>
     <p className='cright'>copyright© 2024 Time Capsule Creations. All rights reserved.</p>
    </div>
  )
}

export default Footer
