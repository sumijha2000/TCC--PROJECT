

// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import axios from 'axios';
// import '../styles/EconomyTable.css'; // Import CSS for EconomyTable styling

// const URL_API = 'http://localhost:5164/getallinventions_details';
// const EDIT_API = 'http://localhost:5164/inventions/editInvention';
// const DELETE_API = 'http://localhost:5164/inventions/deleteInvention';

// const EconomyTable = () => {
//   const [contact, setContact] = useState([]); // State variable to store jobs
//   const [res, setRes] = useState([]); // State variable to store the value of res
//   const [editData, setEditData] = useState(null); // State variable to store data to be edited
//   const [showEditForm, setShowEditForm] = useState(false); // State variable to show/hide edit form

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_API, payload)
//       .then(response => {
//         // Handle successful response
//         console.log("From Response Data ", response.data);
//         setContact(response.data); // Assuming response.data is an array of jobs

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
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleEdit = (item) => {
//     setEditData({
//       id: item[0],
//       Categories: item[1],
//       Description: item[2],
//       Videos: '', // Assuming Videos field is included for potential update
//       video_name: item[3]
//     });
//     setShowEditForm(true);
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
//       console.log(response.data); // Handle response as needed
//       getData(); // Refresh data after deletion
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         id: editData.id,
//         Categories: editData.Categories,
//         Description: editData.Description,
//         Videos: editData.Videos, // Include Videos field if updated
//         video_name: editData.video_name
//       }
//     };
//     try {
//       const response = await axios.post(EDIT_API, payload);
//       console.log(response.data); // Handle response as needed
//       setShowEditForm(false); // Hide the edit form
//       getData(); // Refresh data after editing
//     } catch (error) {
//       console.error('Error updating item:', error);
//     }
//   };

//   const handleEditChange = (e) => {
//     setEditData({ ...editData, [e.target.name]: e.target.value });
//   };

//   const handleVideoChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setEditData({ ...editData, Videos: reader.result, video_name: file.name });
//     };
//     if (file) {
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Economy Inventions Table</h3>
//           <table className='health-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Category</th>
//                 <th>Description</th>
//                 <th>Video Name</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {res.length > 0 ? (
//                 res.map((item, index) => (
//                   <React.Fragment key={index}>
//                     {item.map((value, idx) => (
//                       <tr style={{ cursor: 'pointer' }} key={idx}>
//                         <td>{value[0]}</td>
//                         <td>{value[1]}</td>
//                         <td>{value[2]}</td>
//                         <td>{value[3]}</td>
//                         <td>
//                           <button className="edit-button" onClick={() => handleEdit(value)}>Edit</button>
//                           <button className="delete-button" onClick={() => handleDelete(value[0])}>Delete</button>
//                         </td>
//                       </tr>
//                     ))}
//                   </React.Fragment>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5">No data available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//         {showEditForm && (
//           <div className="edit-form-container">
//             <h3>Edit Invention</h3>
//             <form onSubmit={handleEditSubmit}>
//               <label>Categories:</label>
//               <input
//                 type="text"
//                 name="Categories"
//                 value={editData.Categories}
//                 onChange={handleEditChange}
//               />
//               <br />
//               <label>Description:</label>
//               <textarea
//                 name="Description"
//                 value={editData.Description}
//                 onChange={handleEditChange}
//               />
//               <br />
//               {/* Include input for Videos if needed */}
//               <label>Video:</label>
//               <input
//                 type="file"
//                 id="video"
//                 name="video"
//                 onChange={handleVideoChange}
//                 accept="video/*"
//               />
//               {/* Display video preview if needed */}
//               {editData.Videos && <video src={editData.Videos} controls />}
//               <br />
//               <button type="submit">Update</button>
//               <button onClick={() => setShowEditForm(false)}>Cancel</button>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EconomyTable;




import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming Header component file path
import Sidebar from './Sidebar'; // Assuming Sidebar component file path
import axios from 'axios';
import '../styles/EconomyTable.css'; // Import CSS for EconomyTable styling
import { useNavigate } from 'react-router-dom';

const URL_API = 'http://localhost:5164/getallinventions_details';
const EDIT_API = 'http://localhost:5164/inventions/editInvention';
const DELETE_API = 'http://localhost:5164/inventions/deleteInvention';

const EconomyTable = () => {

  const navigate = useNavigate();

  


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])

 
  const [contact, setContact] = useState([]);
  const [res, setRes] = useState([]); 
  const [editData, setEditData] = useState(null); 
  const [showEditForm, setShowEditForm] = useState(false); 
  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {}
    };

    axios.post(URL_API, payload)
      .then(response => {
      
        console.log("From Response Data ", response.data);
        setContact(response.data); 

      
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

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (item) => {
    setEditData({
      id: item[0],
      Categories: item[1],
      Description: item[2],
      Videos: '', // Assuming Videos field is included for potential update
      video_name: item[3]
    });
    setShowEditForm(true);
  };

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

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        id: editData.id,
        Categories: editData.Categories,
        Description: editData.Description,
        Videos: editData.Videos, // Include Videos field if updated
        video_name: editData.video_name
      }
    };
    try {
      const response = await axios.post(EDIT_API, payload);
      console.log(response.data); // Handle response as needed
      setShowEditForm(false); // Hide the edit form
      getData(); // Refresh data after editing
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditData({ ...editData, Videos: reader.result, video_name: file.name });
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
          <h3>Economy Inventions Table</h3>
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
              {res.length > 0 ? (
                res.map((item, index) => (
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
                ))
              ) : (
                <tr>
                  <td colSpan="5">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {showEditForm && (
        <div className="edit-form-container">
          <h3>Edit Invention</h3>
          <form onSubmit={handleEditSubmit}>
            <label>Categories:</label>
            <input
              type="text"
              name="Categories"
              value={editData.Categories}
              onChange={handleEditChange}
            />
            <br />
            <label>Description:</label>
            <textarea
              name="Description"
              value={editData.Description}
              onChange={handleEditChange}
            />
            <br />
            {/* Include input for Videos if needed */}
            <label>Video:</label>
            <input
              type="file"
              id="video"
              name="video"
              onChange={handleVideoChange}
              accept="video/*"
            />
            {/* Display video preview if needed */}
            {/* {editData.Videos && <video src={editData.Videos} controls />} */}
            <br />
            <button type="submit">Update</button>
            <button onClick={() => setShowEditForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EconomyTable;
