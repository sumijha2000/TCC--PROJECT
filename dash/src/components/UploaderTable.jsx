// import React, { useState, useEffect } from 'react';
// import Header from './Header'; 
// import Sidebar from './Sidebar'; 
// import '../styles/UploaderTable.css'; 
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getUploderData';
// const DELETE_API = 'http://localhost:5164/uploader/deleteUploader';

// const UploaderTable = () => {
//   const [res, setRes] = useState([]); 
//   const [editData, setEditData] = useState(null); 
//   const [showEditForm, setShowEditForm] = useState(false); 

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         console.log("From Response Data ", response.data);

//         if (response.data && response.data.rData && response.data.rData.rMessage) {
//           const resData = response.data.rData.rMessage;
//           setRes(resData); 
//         } else {
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

//   const handleImageDownload = async (imageName) => {
//     try {
//       const response = await axios.get(`http://localhost:5164/uploader/downloadImage?imageName=${imageName}`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', imageName);
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading image:', error);
//     }
//   };

//   const handleFileDownload = async (fileName) => {
//     try {
//       const response = await axios.get(`http://localhost:5164/uploader/downloadFile?fileName=${fileName}`, {
//         responseType: 'blob',
//       });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', fileName);
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading file:', error);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
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
//                         <a href={`/uploads/images/${value[5]}`} download>{value[5]}</a>
//                       </td>
//                       <td>
//                         <a href={`/uploads/files/${value[7]}`} download>{value[7]}</a>
//                       </td>

//                       <td>{value[9]}</td>
//                       <td>
//                         <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploaderTable;

// import React, { useState, useEffect } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import '../styles/UploaderTable.css';
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getUploderData';
// const DELETE_API = 'http://localhost:5164/uploader/deleteUploader';

// const UploaderTable = () => {
//   const [res, setRes] = useState([]); // State variable to store the value of res

//   // Function to fetch data
//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         // Handle successful response
//         console.log("From Response Data ", response.data);

//         if (response.data && response.data.rData && response.data.rData.rMessage) {
//           const resData = response.data.rData.rMessage;
//           setRes(resData); // Setting the value of res to the state variable
//         } else {
//           console.error('Unexpected response structure:', response.data);
//         }
//       })
//       .catch(error => {
//         // Handle error
//         console.error('Error fetching data:', error);
//       });
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     getData();
//   }, []);

//   // Function to handle delete action
//   const handleDelete = async (id) => {
//     try {
//       const payload = {
//         eventID: "1001",
//         addInfo: {
//           id: id
//         }
//       };
//       const response = await axios.post(DELETE_API, payload);
//       console.log(response.data); // Handle response as needed
//       getData(); // Refresh data after deletion
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   // Function to handle file download
//   const handleFileDownload = (fileName) => {
//     const link = document.createElement('a');
//     link.href = `path_to_files/${fileName}`; // Replace with the actual path where files are stored
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   // Function to handle image download
//   const handleImageDownload = (imageName) => {
//     const link = document.createElement('a');
//     link.href = `path_to_images/${imageName}`; // Replace with the actual path where images are stored
//     link.download = imageName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
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
//                         <a href="#" onClick={() => handleImageDownload(value[5])}>{value[5]}</a>
//                       </td>
//                       <td>
//                         <a href="#" onClick={() => handleFileDownload(value[7])}>{value[7]}</a>
//                       </td>
//                       <td>{value[9]}</td>
                      
                      
                      
//                       <td>
//                       <button className="delete-button" onClick={() => handleDelete(value[0])}>Edit</button>
//                         <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
//                       </td>
//                     </tr>
//                   ))}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UploaderTable;


import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/UploaderTable.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getUploaderDataForAdmin';
const EDIT_API = 'http://localhost:5164/uploader/editUploader';
const DELETE_API = 'http://localhost:5164/uploader/deleteUploader';

const UploaderTable = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [res, setRes] = useState([]); // State variable to store the value of res
  const [editData, setEditData] = useState(null); // State variable for edit data
  const [showEditForm, setShowEditForm] = useState(false); // State variable to show/hide edit form

  // Function to fetch data
  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {
        
      }
    };

    axios.post(URL_api, payload)
      .then(response => {
        // Handle successful response
        console.log("From Response Data ", response.data);

        if (response.data && response.data.rData && response.data.rData.rMessage) {
          const resData = response.data.rData.rMessage;
          setRes(resData); // Setting the value of res to the state variable
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Function to handle delete action
  const handleDelete = async (id) => {
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          id: id
        }
      };
      const response = await axios.post(DELETE_API, payload);
      console.log(response.data); // Handle response as needed
      getData(); // Refresh data after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleDownload = (fileUrl) => {
    // Simulate downloading the file
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', ''); // This attribute makes the browser download the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

};
  // Function to handle edit operation
  const handleEdit = (data) => {
    setEditData(data); // Set editData state to the data of the item being edited
    setShowEditForm(true); // Show edit form
  };

  // Function to handle form submission for edit operation
  const handleSubmitEdit = async (formData) => {
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          id: formData.id,
          INVENTION: formData.INVENTION,
          INVENTOR: formData.INVENTOR,
          EMAIL: formData.EMAIL,
          INVENTION_DEATAILS: formData.INVENTION_DEATAILS,
          IMG_NAME: formData.IMG_NAME,
          IMAGE: formData.IMAGE,
          FILE_NAME: formData.FILE_NAME,
          FILE: formData.FILE,
          VISIBILITY: formData.VISIBILITY
        }
      };
      const response = await axios.post(EDIT_API, payload);
      console.log(response.data); // Handle response as needed
      getData(); // Refresh data after edit
      setShowEditForm(false); // Hide edit form after submission
    } catch (error) {
      console.error('Error editing item:', error);
    }
  };

  // Function to cancel edit operation
  const handleCancelEdit = () => {
    setShowEditForm(false); // Hide edit form
    setEditData(null); // Clear editData state
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <h3>Uploader Information Table</h3>
          <table className='uploader-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Invention</th>
                <th>Inventor</th>
                <th>Email</th>
                <th>Details</th>
                <th>Image Name</th>
                <th>File Name</th>
                <th>Visibility</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {res.map((item, index) => (
                <React.Fragment key={index}>
                  {item.map((value, idx) => (
                    <tr style={{ cursor: 'pointer' }} key={idx}>
                      <td>{value[0]}</td>
                      <td>{value[1]}</td>
                      <td>{value[2]}</td>
                      <td>{value[3]}</td>
                      <td>{value[4]}</td>
                      <td>
                        <a href="#" onClick={() => handleDownload(value[6])}>{value[5]}</a>
                      </td>
                      <td>
                        <a href="#" onClick={() => handleDownload(value[8])}>{value[7]}</a>
                      </td>
                      <td>{value[9]}</td>
                      <td>
                        <button className="edit-button" onClick={() => handleEdit({
                          id: value[0],
                          INVENTION: value[1],
                          INVENTOR: value[2],
                          EMAIL: value[3],
                          INVENTION_DEATAILS: value[4],
                          IMG_NAME: value[5],
                          IMAGE: value[6],
                          FILE_NAME: value[7],
                          FILE: value[8],
                          VISIBILITY: value[9]
                        })}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
        {showEditForm && (
          <EditForm
            formData={editData}
            onSubmit={handleSubmitEdit}
            onCancel={handleCancelEdit}
          />
        )}
      </div>
    </div>
  );
};

// EditForm component
const EditForm = ({ formData, onSubmit, onCancel }) => {
  const [formValues, setFormValues] = useState(formData);

  // Update form values when formData prop changes
  useEffect(() => {
    setFormValues(formData);
  }, [formData]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="edit-form-container">
      <h3>Edit Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Invention:
          <input type="text" name="INVENTION" value={formValues.INVENTION} onChange={handleChange} />
        </label>
        <label>
          Inventor:
          <input type="text" name="INVENTOR" value={formValues.INVENTOR} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="text" name="EMAIL" value={formValues.EMAIL} onChange={handleChange} />
        </label>
        <label>
          Details:
          <input type="text" name="INVENTION_DEATAILS" value={formValues.INVENTION_DEATAILS} onChange={handleChange} />
        </label>
        <label>
          Image Name:
          <input type="text" name="IMG_NAME" value={formValues.IMG_NAME} onChange={handleChange} />
        </label>
        <label>
          Image:
          <input type="text" name="IMAGE" value={formValues.IMAGE} onChange={handleChange} />
        </label>
        <label>
          File Name:
          <input type="text" name="FILE_NAME" value={formValues.FILE_NAME} onChange={handleChange} />
        </label>
        <label>
          File:
          <input type="text" name="FILE" value={formValues.FILE} onChange={handleChange} />
        </label>
        <label>
          Visibility:
          <input type="text" name="VISIBILITY" value={formValues.VISIBILITY} onChange={handleChange} />
        </label>
        <div className="edit-form-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UploaderTable;
