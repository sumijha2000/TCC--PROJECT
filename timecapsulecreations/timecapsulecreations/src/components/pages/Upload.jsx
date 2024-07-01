import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Upload.css';
import sideimg from '../../assets/uploadpage.svg';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Upload = () => {
  const [formData, setFormData] = useState({
    inventionName: '',
    inventorName: '',
    email: '',
    inventionDetails: '',
    IMG_NAME:'',
    uploadImages:'',
    FILE_NAME: '',
    uploadFile: '',
    privacy: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          uploadImages: reader.result, // Assuming you want to store the image data URL here
          IMG_NAME: file.name // Store image name in state
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleFileChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          uploadFile: reader.result,
          FILE_NAME: file.name // Store image name in state
        });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            eventID: "1001",
            addInfo: {
              INVENTION: formData.inventionName,
              INVENTOR: formData.inventorName,
              EMAIL: formData.email,
              INVENTION_DEATAILS: formData.inventionDetails,
              IMG_NAME: formData.IMG_NAME,
              IMAGE: formData.uploadImages,
              FILE_NAME: formData.FILE_NAME,
              FILE: formData.uploadFile,
              VISIBILITY: formData.privacy,
            }
        };
        try {
            const response = await axios.post('http://localhost:5164/uploader', payload);
    //         console.log(response.data, 'api response'); // handle response
    //         setShowPopup(true); // Show the popup after successful signup
    //     } catch (error) {
    //         console.error('Error Contact us:', error);
    //         // Handle error
    //     }
    //     navigate('/uploadsuserdata');
    // };
    console.log(response.data, 'api response'); // handle response
    setPopupMessage('Add successful'); // Set message for successful submission
    setShowPopup(true); // Show the popup after successful submission
  } catch (error) {
    console.error('Error Contact us:', error);
    // Handle error
  }
};

const closePopupAndNavigate = () => {
  setShowPopup(false);
  setPopupMessage('');
  window.location.href = '/userdata'; // Navigate to HealthTable.jsx
};


  return (
    <div className='upload-page'>
      <Navbar />
      <div className="upload-section">
        <div className="upload-left">
          <img src={sideimg} alt="aboutimg1" />
        </div>

        <div className="upload-right">
          <h3>Upload Form</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="inventionName">Invention Name</label>
            <input type="text" id="inventionName" name="inventionName" placeholder="Enter invention name" value={formData.inventionName} onChange={handleChange} required/>

            <label htmlFor="inventorName">Inventor Name</label>
            <input type="text" id="inventorName" name="inventorName" placeholder="Enter inventor name" value={formData.inventorName} onChange={handleChange}  required />

            <label htmlFor="contact">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter contact" value={formData.email} onChange={handleChange} required/>

            <label htmlFor="inventionDetails">Invention Details</label>
            <textarea id="inventionDetails" name="inventionDetails" placeholder="Enter invention details" value={formData.inventionDetails} onChange={handleChange} required></textarea>

            <label htmlFor="uploadImages">Upload Images</label>
            <input type="file" id="uploadImages" name="uploadImages" multiple onChange={handleImageChange} required />
             {/* {formData.uploadImages && <img src={formData.uploadImages} alt="Selected" />} */}

            <label>Upload File</label>
            <input type="file" name="uploadFile" onChange={handleFileChange} required/>

            <div>
              <label htmlFor="public">Public</label>
              <input type="radio" id="public" name="privacy" value="public" onChange={handleChange} required/>
              <label htmlFor="private">Private</label>
              <input type="radio" id="private" name="privacy" value="private" onChange={handleChange} required/>
            </div>
              {/* <Link to='/uploadpage'> */}
              <button type="submit">Upload</button>
              {/* </Link> */}
          
          </form>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close-button" onClick={closePopupAndNavigate}>&times;</span>
              <button onClick={closePopupAndNavigate}>OK</button>
              <p>{popupMessage}</p>
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}

export default Upload;
