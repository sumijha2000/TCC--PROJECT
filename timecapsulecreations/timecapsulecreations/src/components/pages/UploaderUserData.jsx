// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const URL_api = 'http://localhost:5164/getUploaderDataForAdmin';
// const EDIT_API = 'http://localhost:5164/uploader/editUploader';
// const DELETE_API = 'http://localhost:5164/uploader/deleteUploader';

// const UploaderUserData = () => {
//   const navigate = useNavigate();
//   const [res, setRes] = useState([]); 
//   const [editData, setEditData] = useState(null); 
//   const [showEditForm, setShowEditForm] = useState(false); 

  
//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {

//       }
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//           console.log("From Response Data ", response.data);

//         if (response.data && response.data.rData && response.data.rData.rMessage) {
//           const resData = response.data.rData.rMessage;
//           setRes(resData);
//           console.error('Unexpected response structure:', response.data);
//         }
//       })
//       .catch(error => {
      
//         console.error('Error fetching data:', error);
//       });
//   };

 
//   useEffect(() => {
//     getData();
//   }, []);

  
//   const handleDelete = async (id) => {
//     try {
//       const payload = {
//         eventID: "1001",
//         addInfo: {
//           id: id
//         }
//       };
//       const response = await axios.post(DELETE_API, payload);
//       console.log(response.data); 
//       getData(); 
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleDownload = (fileUrl) => {
//     // Simulate downloading the file
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.setAttribute('download', ''); 
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

// };

//   const handleEdit = (data) => {
//     setEditData(data); // Set editData state to the data of the item being edited
//     setShowEditForm(true); // Show edit form
//   };

//   // Function to handle form submission for edit operation
//   const handleSubmitEdit = async (formData) => {
//     try {
//       const payload = {
//         eventID: "1001",
//         addInfo: {
//           id: formData.id,
//           INVENTION: formData.INVENTION,
//           INVENTOR: formData.INVENTOR,
//           CONTACT: formData.CONTACT,
//           INVENTION_DEATAILS: formData.INVENTION_DEATAILS,
//           IMG_NAME: formData.IMG_NAME,
//           IMAGE: formData.IMAGE,
//           FILE_NAME: formData.FILE_NAME,
//           FILE: formData.FILE,
//           VISIBILITY: formData.VISIBILITY
//         }
//       };
//       const response = await axios.post(EDIT_API, payload);
//       console.log(response.data); // Handle response as needed
//       getData(); // Refresh data after edit
//       setShowEditForm(false); // Hide edit form after submission
//     } catch (error) {
//       console.error('Error editing item:', error);
//     }
//   };


//   const handleCancelEdit = () => {
//     setShowEditForm(false); // Hide edit form
//     setEditData(null); // Clear editData state
//   };

//   return (
//     <div className="dashboard-container">

//       <div className="main-content">
   
//         <div className="table-container">
//           <h3>Uploader Information Table</h3>
//           <table className='uploader-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Invention</th>
//                 <th>Inventor</th>
//                 <th>Contact</th>
//                 <th>Details</th>
//                 <th>Image Name</th>
//                 <th>File Name</th>
//                 <th>Visibility</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {res.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {item.map((value, idx) => (
//                     <tr style={{ cursor: 'pointer' }} key={idx}>
//                       <td>{value[0]}</td>
//                       <td>{value[1]}</td>
//                       <td>{value[2]}</td>
//                       <td>{value[3]}</td>
//                       <td>{value[4]}</td>
//                       <td>
//                         <a href="#" onClick={() => handleDownload(value[6])}>{value[5]}</a>
//                       </td>
//                       <td>
//                         <a href="#" onClick={() => handleDownload(value[8])}>{value[7]}</a>
//                       </td>
//                       <td>{value[9]}</td>
//                       <td>
//                         <button className="edit-button" onClick={() => handleEdit({
//                           id: value[0],
//                           INVENTION: value[1],
//                           INVENTOR: value[2],
//                           CONTACT: value[3],
//                           INVENTION_DEATAILS: value[4],
//                           IMG_NAME: value[5],
//                           IMAGE: value[6],
//                           FILE_NAME: value[7],
//                           FILE: value[8],
//                           VISIBILITY: value[9]
//                         })}>Edit</button>
//                         <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         {showEditForm && (
//           <EditForm
//             formData={editData}
//             onSubmit={handleSubmitEdit}
//             onCancel={handleCancelEdit}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// // EditForm component
// const EditForm = ({ formData, onSubmit, onCancel }) => {
//   const [formValues, setFormValues] = useState(formData);

//   // Update form values when formData prop changes
//   useEffect(() => {
//     setFormValues(formData);
//   }, [formData]);

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formValues);
//   };

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

//   return (
//     <div className="edit-form-container">
//       <h3>Edit Item</h3>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Invention:
//           <input type="text" name="INVENTION" value={formValues.INVENTION} onChange={handleChange} />
//         </label>
//         <label>
//           Inventor:
//           <input type="text" name="INVENTOR" value={formValues.INVENTOR} onChange={handleChange} />
//         </label>
//         <label>
//           Contact:
//           <input type="text" name="CONTACT" value={formValues.CONTACT} onChange={handleChange} />
//         </label>
//         <label>
//           Details:
//           <input type="text" name="INVENTION_DEATAILS" value={formValues.INVENTION_DEATAILS} onChange={handleChange} />
//         </label>
//         <label>
//           Image Name:
//           <input type="text" name="IMG_NAME" value={formValues.IMG_NAME} onChange={handleChange} />
//         </label>
//         <label>
//           Image:
//           <input type="text" name="IMAGE" value={formValues.IMAGE} onChange={handleChange} />
//         </label>
//         <label>
//           File Name:
//           <input type="text" name="FILE_NAME" value={formValues.FILE_NAME} onChange={handleChange} />
//         </label>
//         <label>
//           File:
//           <input type="text" name="FILE" value={formValues.FILE} onChange={handleChange} />
//         </label>
//         <label>
//           Visibility:
//           <input type="text" name="VISIBILITY" value={formValues.VISIBILITY} onChange={handleChange} />
//         </label>
//         <div className="edit-form-buttons">
//           <button type="submit">Save</button>
//           <button type="button" onClick={onCancel}>Cancel</button>
//         </div>
//       </form>
  
//     </div>
//   );
// };

// export default UploaderUserData;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getuserdatabycontact';
// const EDIT_API = 'http://localhost:5164/uploader/editUploader';
// const DELETE_API = 'http://localhost:5164/uploader/deleteUploader';

// const UploaderTable = () => {
//   const [res, setRes] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         EMAIL: "jhasumi2000gmail.com"
//       }
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         console.log('API Response:', response.data);

//         if (response.data && response.data.rData && response.data.rData.rMessage) {
//           const responseData = response.data.rData.rMessage;

//           if (Array.isArray(responseData)) {
//             setRes(responseData);
//           } else {
//             console.error('Unexpected response data format:', responseData);
//           }
//         } else {
//           console.error('Unexpected response structure:', response.data);
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };

//   const handleDelete = async (id) => {
//     try {
//       const payload = {
//         eventID: "1001",
//         addInfo: {
//           id: id
//         }
//       };
//       const response = await axios.post(DELETE_API, payload);
//       console.log('Delete Response:', response.data);
//       getData();
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleEdit = (data) => {
//     // Implement edit functionality
//     console.log('Edit data:', data);
//   };

//   const handleDownload = (fileUrl) => {
//     const link = document.createElement('a');
//     link.href = fileUrl;
//     link.setAttribute('download', '');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="main-content">
//       <div className="table-container">
//         <h3>Uploader Information Table</h3>
//         <table className='uploader-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Invention</th>
//                 <th>Inventor</th>
//                 <th>Contact</th>
//                 <th>Details</th>
//                 <th>Image Name</th>
//                 <th>File Name</th>
//                 <th>Visibility</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {res.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {item.map((value, idx) => (
//                     <tr style={{ cursor: 'pointer' }} key={idx}>
//                       <td>{value[0]}</td>
//                       <td>{value[1]}</td>
//                       <td>{value[2]}</td>
//                       <td>{value[3]}</td>
//                       <td>{value[4]}</td>
//                       <td>
//                         <a href="#" onClick={() => handleDownload(value[6])}>{value[5]}</a>
//                       </td>
//                       <td>
//                         <a href="#" onClick={() => handleDownload(value[8])}>{value[7]}</a>
//                       </td>
//                       <td>{value[9]}</td>
//                       <td>
//                         <button className="edit-button" onClick={() => handleEdit({
//                           id: value[0],
//                           INVENTION: value[1],
//                           INVENTOR: value[2],
//                           CONTACT: value[3],
//                           INVENTION_DEATAILS: value[4],
//                           IMG_NAME: value[5],
//                           IMAGE: value[6],
//                           FILE_NAME: value[7],
//                           FILE: value[8],
//                           VISIBILITY: value[9]
//                         })}>Edit</button>
//                         <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//       </div>
//     </div>
//   );
// };

// export default UploaderTable;

import React, { useState, useEffect } from 'react';


const UploaderTable = () => {
  const [userData, setUserData] = useState(null);
  const apiUrl = 'http://localhost:5164/getuserdatabycontact';
  const requestBody = {
    eventID: "1001",
    addInfo: {
      EMAIL: "jhasumi2000gmail.com"
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
        console.log(data) // Save response data to state
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error state if needed
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div>
      <h2>User Data</h2>
      {userData ? (
        <div>
          <p><strong>Invention:</strong> {userData.INVENTION}</p>
          <p><strong>Inventor:</strong> {userData.INVENTOR}</p>
          <p><strong>Email:</strong> {userData.EMAIL}</p>
          <p><strong>Invention Details:</strong> {userData.INVENTION_DEATAILS}</p>
          {/* Assuming IMAGE and FILE are paths or URLs */}
          <p><strong>Image Name:</strong> {userData.IMG_NAME}</p>
          <p><strong>File Name:</strong> {userData.FILE_NAME}</p>
          {/* Display image and file links or details */}
          <p><strong>Visibility:</strong> {userData.VISIBILITY}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UploaderTable;
