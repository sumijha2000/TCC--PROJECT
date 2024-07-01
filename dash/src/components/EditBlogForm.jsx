import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Eco.css'; // Adjust CSS import as needed
import { useNavigate } from 'react-router-dom';

const EditBlogForm = ({ blogData }) => {

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
    id: blogData.id,
    imageName: blogData.imageName,
    image: blogData.image,
    head: blogData.head,
    blog_det: blogData.blog_det
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
        imageName: file.name // Update image name in state
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
        id: formData.id, // Ensure id is included
        imageName: formData.imageName,
        image: formData.image,
        head: formData.head,
        blog_det: formData.blog_det
      }
    };
  
    try {
      const response = await axios.post('http://localhost:5164/blog/editBlog', payload);
      console.log(response.data, 'api response'); // Handle response
      setPopupMessage('Edit successful'); // Set success message for popup
      setShowPopup(true); // Show popup after successful edit
    } catch (error) {
      console.error('Error editing blog:', error);
      setPopupMessage('Edit failed'); // Set failure message for popup
      setShowPopup(true); // Show popup for edit failure
    }
  };
  
  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
    // Redirect or handle popup close as needed
  };

  return (
    <div className="form-container">
      <h3>Edit Blog</h3>
      <form className="blog-form" onSubmit={handleSubmit}>
      <label>id:</label>
      <input type="text" name="id"  value={formData.id} onChange={handleChange} />
        <label>Image:</label>
        <br/>
        <input type="file" id="image" name="image" onChange={handleImageChange} />
        {/* Display current image */}
        {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
        <br />
        <label>Head:</label>
        <input type="text" name="head"  value={formData.head} onChange={handleChange} />
        <br />
        <label>Blog Details:</label>
        <textarea name="blog_det"  value={formData.blog_det} onChange={handleChange}></textarea>
        <br />
   
        <button type="submit">Save</button>
      </form>

      {/* Popup for showing success or failure message */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>&times;</span>
            <button onClick={closePopup}>OK</button>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
    
  );
};

export default EditBlogForm;
