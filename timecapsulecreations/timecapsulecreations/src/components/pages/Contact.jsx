import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import sideimg from '../../assets/sideimg.svg';
import con1 from '../../assets/Address.svg';
import con2 from '../../assets/Phone.svg';
import con3 from '../../assets/Gmail Logo.svg';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: ''
  });

  const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1001",
            addInfo: {
              FIRST_NAME: formData.firstname,
              LAST_NAME: formData.lastname,
              EMAIL: formData.email,
              SUBJECT: formData.subject,
            }
        };
        try {
            const response = await axios.post('http://localhost:5164/contact', payload);
            console.log(response.data, 'api response'); // handle response
            setShowPopup(true); // Show the popup after successful signup
        } catch (error) {
            console.error('Error Contact us:', error);
            // Handle error
        }
        navigate('/submitted');
    };
  return (
    <div className='contact-page'>
      <Navbar />
      <div className="contact-section">
        <div className="contact-left">
          <img src={sideimg} alt="aboutimg1" />
        </div>

        <div className="contact-right">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              value={formData.firstname}
              onChange={handleChange}
              required
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
              value={formData.lastname}
              onChange={handleChange}
              required
            />

             <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="123google@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              value={formData.subject}
              onChange={handleChange}
              required
            ></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <hr className='line' />
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
      <hr className='line' />
      <Footer />
    </div>
  );
}

export default Contact;
