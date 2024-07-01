import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Eco.css';
import { useNavigate } from 'react-router-dom';

const InventorsForm = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [formData, setFormData] = useState({
    imageName: '',
    image: '',
    name: '',
    description: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result,
        imageName: file.name // Store image name in state
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
        imageName: formData.imageName,
        Image: formData.image,
        Name: formData.name,
        Description: formData.description
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/inventor_page', payload);
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
    window.location.href = '/tables/inventors'; // Navigate to InventorsTable.jsx
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="form-container">
          <h3>Inventors Form</h3>
          <form className="inventors-form" onSubmit={handleSubmit}>
          <label>Image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
                {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
            <br />
            <label>Name:</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            <br />
            <label>Description:</label>
            <textarea name="description" required value={formData.description} onChange={handleChange} />
            <br />
            <button type="submit">Submit</button>
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
    </div>
  );
};

export default InventorsForm;
