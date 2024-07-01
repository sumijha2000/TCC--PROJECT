// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import './Eco.css';

// const EnvironmentForm = () => {
//   const [formData, setFormData] = useState({
//     image: [],
//     head: '',
//     categories: '',
//     description: '',
//     video: ''
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, video: reader.result });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         image: formData.image,
//         head: formData.head,
//         categories: formData.categories,
//         description: formData.description,
//         video: formData.video
//       }
//     };
//     try {
//       const response = await axios.post('http://localhost:5164/environment', payload);
//       console.log(response.data, 'api response'); // handle response
//       setPopupMessage('Add successful'); // Set message for successful submission
//       setShowPopup(true); // Show the popup after successful submission
//     } catch (error) {
//       console.error('Error Contact us:', error);
//       // Handle error
//     }
//   };

//   const closePopupAndNavigate = () => {
//     setShowPopup(false);
//     setPopupMessage('');
//     window.location.href = '/envtable'; // Navigate to EnvironmentTable.jsx
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="form-container">
//           <h3>Environment Form</h3>
//           <form className="environment-form" onSubmit={handleSubmit}>
//             <label>Image:</label>
//             <input type="file" name="image" required onChange={handleChange} />
//             <br />
//             <label>Head:</label>
//             <input type="text" name="head" required value={formData.head} onChange={handleChange} />
//             <br />
//             <label>Categories:</label>
//             <select name="categories" value={formData.categories} onChange={handleChange}>
//               <option value="Climate Change">Climate Change</option>
//               <option value="Pollution">Pollution</option>
//               <option value="Conservation">Conservation</option>
//               <option value="Renewable Energy">Renewable Energy</option>
//             </select>
//             <br />
//             <label>Description:</label>
//             <textarea name="description" required value={formData.description} onChange={handleChange} />
//             <br />
//             <label>Video:</label>
// <input type="file" id="video" name="video" onChange={handleVideoChange} accept="video/*" />
// {formData.video && <video src={formData.video} controls />}
//             <br />
//             <button type="submit">Submit</button>
//           </form>
//         </div>
//         {showPopup && (
//           <div className="popup">
//             <div className="popup-content">
//               <span className="close-button" onClick={closePopupAndNavigate}>&times;</span>
//               <button onClick={closePopupAndNavigate}>OK</button>
//               <p>{popupMessage}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EnvironmentForm;



import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Eco.css';
import { useNavigate } from 'react-router-dom';

const FoodForm = () => {
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
    categories: '',
    description: '',
    video_name:'',
    video: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, video: reader.result, video_name: file.name });
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
        categories: formData.categories,
        description: formData.description,
        video_name: formData.video_name,
        video: formData.video
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/food', payload);
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
    window.location.href = '/foodtable'; // Navigate to HealthTable.jsx
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="form-container">
          <h3>Food Form</h3>
          <form className="health-form" onSubmit={handleSubmit}>
          
            <label>Categories:</label>
            <select name="categories" value={formData.categories} onChange={handleChange}>
            <option value="Recipes">Recipes</option>
              <option value="Cuisine">Cuisine</option>
              <option value="Nutrition">Nutrition</option>
              <option value="Food Science">Food Science</option>
            </select>
            <br />
            <label>Description:</label>
            <textarea name="description" required value={formData.description} onChange={handleChange} />
            <br />
            <label>Video:</label>
<input type="file" id="video" name="video" onChange={handleVideoChange} accept="video/*" />
{/* {formData.video && <video src={formData.video} controls />} */}
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

export default FoodForm;


