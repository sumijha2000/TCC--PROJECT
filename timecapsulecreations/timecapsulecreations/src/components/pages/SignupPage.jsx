// src/Signup.jsx
import React from 'react';
import Navbar from '../Navbar/Navbar'
import './Signup.css';
import sideimg from '../../assets/sideimg.svg';
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom';


function SignupPage() {
  return (
    <div className="signup-page"><Navbar></Navbar>
      <div className="signup-container">
        <div className="image-section">
          <img src={sideimg} alt="Signup Visual" className="signup-image" />
        </div>
        <div className="form-section">
          <h2>Create an account</h2>
          <p>Enter your password to sign up for</p>
          <form>
            <input type="password" placeholder="password" className="email-input" />
            <Link to='/upload'>
            <button type="submit" className="email-button">Sign up with email</button>
            </Link>
          </form>
          <p>or continue with</p>
          <button className="google-button">Google</button>
          <p className="terms">
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
