// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import '../styles/HealthTable.css'; // Import CSS for HealthTable styling
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getFesInfo';

// const HealthTable = () => {
//   const [healthData, setHealthData] = useState([]); // State variable to store health data
//   const [res, setRes] = useState([]); // State variable to store the value of res

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         // Handle successful response
//         console.log("From Response Data ", response.data);
//         setHealthData(response.data); // Assuming response.data is an array of health data

//         // Check if the response data structure is as expected
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
//         console.log("Catch Block For Rahul");
//       });
//   }

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleEdit = (id) => {
//     // Logic for handling edit action
//     console.log(`Edit item with ID: ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Logic for handling delete action
//     console.log(`Delete item with ID: ${id}`);
//   };

//   return (
//     <div className="dashboard-container">
//     <Sidebar />
//     <div className="main-content">
//       <Header />
//       <div className="table-container">
//         <h3>Health Inventions Table</h3>
//         <table className='health-table'>
//           <thead>
//             <tr>
//             <th>ID</th>
//                <th>Category</th>
//                <th>Description</th>
//                <th>Video Name</th>
//                <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {res.map((item, index) => (
//               <React.Fragment key={index}>
//                 {item.map((value, idx) => (
//                   <tr style={{ cursor: 'pointer' }} key={idx}>
//                     <td>{value[0]}</td>
//                     <td>{value[1]}</td>
//                     <td>{value[2]}</td>
//                     <td>{value[3]}</td>
                 
//                     <td>
//                       <button className="edit-button" onClick={() => handleEdit(item.id)}>Edit</button>
//                       <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
//                     </td>
//                   </tr>
//                 ))}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default HealthTable;

import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming Header component file path
import Sidebar from './Sidebar'; // Assuming Sidebar component file path
import '../styles/HealthTable.css'; // Import CSS for HealthTable styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getFesInfo';
const EDIT_API = 'http://localhost:5164/fashion/editFashion';
const DELETE_API = 'http://localhost:5164/fashion/deleteFashion';

const HealthTable = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [healthData, setHealthData] = useState([]); // State variable to store health data
  const [res, setRes] = useState([]); // State variable to store the value of res
  const [editData, setEditData] = useState(null); // State variable for edit data
  const [showEditForm, setShowEditForm] = useState(false); // State variable to show/hide edit form

  // Function to fetch data
  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {}
    };

    axios.post(URL_api, payload)
      .then(response => {
        console.log("From Response Data ", response.data);
        setHealthData(response.data); // Assuming response.data is an array of health data

        // Check if the response data structure is as expected
        if (response.data && response.data.rData && response.data.rData.rMessage) {
          const resData = response.data.rData.rMessage;
          setRes(resData); // Setting the value of res to the state variable
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Function to handle edit action
  const handleEdit = (item) => {
    setEditData({
      id: item[0],
      categories: item[1],
      description: item[2],
      video: '', // Assuming Videos field is included for potential update
      video_name: item[3]
    });
    setShowEditForm(true);
  };

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

  // Function to handle edit form submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          id: editData.id,
          categories: editData.categories,
          description: editData.description,
          video: editData.video, // Include Videos field if updated
          video_name: editData.video_name
        }
      };
      const response = await axios.post(EDIT_API, payload);
      console.log(response.data); // Handle response as needed
      setShowEditForm(false); // Hide the edit form
      getData(); // Refresh data after editing
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Function to handle input changes in edit form
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Function to handle video file selection in edit form
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditData({ ...editData, video: reader.result, video_name: file.name });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <h3>Fashion Inventions Table</h3>
          <table className='health-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Description</th>
                <th>Video Name</th>
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
                      <td>
                        <button className="edit-button" onClick={() => handleEdit(value)}>Edit</button>
                        <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showEditForm && (
        <div className="edit-form-container">
          <h3>Edit Invention</h3>
          <form onSubmit={handleEditSubmit}>
            <label>Category:</label>
            <input
              type="text"
              name="categories"
              value={editData.categories}
              onChange={handleEditChange}
            />
            <br />
            <label>Description:</label>
            <textarea
              name="description"
              value={editData.description}
              onChange={handleEditChange}
            />
            <br />
            <label>Video:</label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={handleVideoChange}
              accept="video/*"
            />
            <br />
            <button type="submit">Update</button>
            <button onClick={() => setShowEditForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HealthTable;
