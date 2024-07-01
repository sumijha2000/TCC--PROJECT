// // InventorsTable.jsx
// import React, { useState } from 'react';

// const InventorsTable = () => {
//   const [inventors, setInventors] = useState([
//     { id: 1, name: 'Nikola Tesla', image: 'tesla.jpg', description: 'Inventor of AC current', },
//     { id: 2, name: 'Thomas Edison', image: 'edison.jpg', description: 'Inventor of light bulb', },
//     // Add more sample data as needed
//   ]);

//   const handleEdit = (id) => {
//     // Handle edit logic
//     console.log(`Edit inventor with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete logic
//     console.log(`Delete inventor with ID ${id}`);
//   };

//   return (
//     <div className="table-container">
//       <h3>Inventors Table</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Image</th>
//             <th>Description</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventors.map(inventor => (
//             <tr key={inventor.id}>
//               <td>{inventor.id}</td>
//               <td>{inventor.name}</td>
//               <td>{inventor.image}</td>
//               <td>{inventor.description}</td>
//               <td>
//                 <button onClick={() => handleEdit(inventor.id)}>Edit</button>
//                 <button onClick={() => handleDelete(inventor.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import Header from './Header'; 
// import Sidebar from './Sidebar';
// import '../styles/HealthTable.css'; 
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getallinventor_details';


// const InventorsTable = () => {
//   const [healthData, setHealthData] = useState([]); //
//   const [res, setRes] = useState([]); 
 
//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         console.log("From Response Data ", response.data);
//         setHealthData(response.data); 

      
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

  
 
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Inventors Inventions Table</h3>
//           <table className='health-table'>
//             <thead>
//               <tr>
//               <th>ID</th>
//               <th>Image Name</th>
//               <th>Name</th>
//              <th>Description</th>
//              <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {res.map((item, index) => (
//                 <React.Fragment key={index}>
//                   {item.map((value, idx) => (
//                     <tr style={{ cursor: 'pointer' }} key={idx}>
//                       <td>{value[0]}</td>
//                       <td>{value[1]}</td>
//                       <td>{value[3]}</td>
//                       <td>{value[4]}</td>
//                       <td>
//                         <button className="edit-button" onClick={() => handleEdit(value)}>Edit</button>
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

// export default InventorsTable;


import React, { useState, useEffect } from 'react';
import Header from './Header'; 
import Sidebar from './Sidebar';
import '../styles/HealthTable.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getallinventor_details';
const EDIT_API = 'http://localhost:5164/inventor/editInventor';
const DELETE_API = 'http://localhost:5164/inventor/deleteInventor';

const InventorsTable = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [res, setRes] = useState([]); 
  const [editData, setEditData] = useState(null); 
  const [showEditForm, setShowEditForm] = useState(false); 

  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {}
    };

    axios.post(URL_api, payload)
      .then(response => {
        console.log("From Response Data ", response.data);

        if (response.data && response.data.rData && response.data.rData.rMessage) {
          const resData = response.data.rData.rMessage;
          setRes(resData); 
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (item) => {
    setEditData({
      id: item[0],
      imageName: item[1],
      Image: '',
      Name: item[3],
      Description: item[4]
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
      console.log(response.data);
      getData(); 
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        eventID: "1001",
        addInfo: {
          id: editData.id,
          imageName: editData.imageName,
          Image: editData.Image,
          Name: editData.Name,
          Description: editData.Description
        }
      };
      const response = await axios.post(EDIT_API, payload);
      console.log(response.data);
      setShowEditForm(false);
      getData(); 
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditData({ ...editData, Image: reader.result, imageName: file.name });
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
          <h3>Inventors Inventions Table</h3>
          <table className='health-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image Name</th>
                <th>Name</th>
                <th>Description</th>
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
                      <td>{value[3]}</td>
                      <td>{value[4]}</td>
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
            <label>Name:</label>
            <input
              type="text"
              name="Name"
              value={editData.Name}
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
            <label>Image:</label>
            <input
              type="file"
              id="Image"
              name="Image"
              onChange={handleImageChange}
              accept="image/*"
            />
            <br />
            <button type="submit">Update</button>
            <button type="button" onClick={() => setShowEditForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default InventorsTable;

