// // BlogsForm.jsx
// import React from 'react';

// const BlogsForm = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle submission logic for Blogs Form
//     console.log('Blogs Form submitted');
//   };

//   return (
//     <div className="form">
//       <h3>Blogs Form</h3>
//       <form onSubmit={handleSubmit}>
//         <label>Image:</label>
//         <input type="file" name="image" />
//         <br />
//         <label>Head:</label>
//         <input type="text" name="head" />
//         <br />
//         <label>Blog Details:</label>
//         <textarea name="blogDetails" />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BlogsForm;



// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import './Eco.css';

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     image: '',
//     head: '',
//     blog_det: ''
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         image: formData.image,
//         head: formData.head,
//         blog_det: formData.blog_det
//       }
//     };
//     try {
//       const response = await axios.post('http://localhost:5164/blog_page', payload);
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
//     window.location.href = '/BlogTable'; // Navigate to BlogTable.jsx
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="form-container">
//           <h3>Blog Form</h3>
//           <form className="blog-form" onSubmit={handleSubmit}>
//           <label>Image:</label>
//           <input type="file" name="image" required onChange={handleChange} />
//             <br />
//             <label>Head:</label>
//             <input type="text" name="head" required value={formData.head} onChange={handleChange} />
//             <br />
//             <label>Blog Details:</label>
//             <textarea name="blog_det" required value={formData.blog_det} onChange={handleChange} />
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

// export default BlogForm;


// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import axios from 'axios';
// import './Eco.css';

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     image: '',
//     head: '',
//     blog_det: ''
//   });
//   const [showPopup, setShowPopup] = useState(false);
//   const [popupMessage, setPopupMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result });
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
//         blog_det: formData.blog_det
//       }
//     };
//     try {
//       const response = await axios.post('http://localhost:5164/blog_page', payload);
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
//     window.location.href = '/tables/blogs'; // Navigate to BlogTable.jsx
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="form-container">
//           <h3>Blog Form</h3>
//           <form className="blog-form" onSubmit={handleSubmit}>
//           <label>Image:</label>
//           <input type="file" id="image" name="image" onChange={handleImageChange} />
//                 {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
//             <br />
//             <label>Head:</label>
//             <input type="text" name="head" required value={formData.head} onChange={handleChange} />
//             <br />
//             <label>Blog Details:</label>
//             <textarea name="blog_det" required value={formData.blog_det} onChange={handleChange} />
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

// export default BlogForm;


import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import axios from 'axios';
import './Eco.css';
import { useNavigate } from 'react-router-dom';

const BlogForm = () => {

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
    head: '',
    blog_det: ''
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
        imageName: formData.imageName, // Send image name to backend
        image: formData.image,
        head: formData.head,
        blog_det: formData.blog_det
      }
    };
    try {
      const response = await axios.post('http://localhost:5164/blog_page', payload);
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
    window.location.href = '/tables/blogs'; // Navigate to BlogTable.jsx
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="form-container">
          <h3>Blog Form</h3>
          <form className="blog-form" onSubmit={handleSubmit}>
            <label>Image:</label>
            <input type="file" id="image" name="image" onChange={handleImageChange} />
            {/* {formData.image && <img src={formData.image} alt="Selected" />} */}
            <br />
            <label>Head:</label>
            <input type="text" name="head" required value={formData.head} onChange={handleChange} />
            <br />
            <label>Blog Details:</label>
            <textarea name="blog_det" required value={formData.blog_det} onChange={handleChange} />
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

export default BlogForm;


