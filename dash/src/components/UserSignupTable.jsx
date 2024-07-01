// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import '../styles/UserSignupTable.css'; 

// const UserSignupTable = () => {
//   const [users, setUsers] = useState([
//     { id: 1, email: 'example1@example.com', password: 'password1' },
//     { id: 2, email: 'example2@example.com', password: 'password2' },
//     // Add more sample data as needed
//   ]);

//   const handleEdit = (id) => {
//     // Handle edit logic
//     console.log(`Edit user with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete logic
//     console.log(`Delete user with ID ${id}`);
//     setUsers(users.filter(user => user.id !== id));
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>User Signup Table</h3>
//           <table className="user-signup-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Email</th>
//                 <th>Password</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.id}</td>
//                   <td>{user.email}</td>
//                   <td>{user.password}</td>
//                   <td>
//                     <button onClick={() => handleEdit(user.id)}>Edit</button>
//                     <button onClick={() => handleDelete(user.id)}>Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserSignupTable;

// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import '../styles/UserSignupTable.css'; // Import CSS for UserSignupTable styling
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getSignupInfo';

// const UserSignupTable = () => {
//   const [users, setUsers] = useState([]); // State variable to store user signup data
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
//         setUsers(response.data); // Assuming response.data is an array of user signup data

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
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>User Signup Table</h3>
//           <table className='user-signup-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Eamil</th>
//                 <th>Password</th>
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
//                       <td>
//                         <button className="edit-button" onClick={() => handleEdit(item.id)}>Edit</button>
//                         <button className="delete-button" onClick={() => handleDelete(item.id)}>Delete</button>
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

// export default UserSignupTable;



import React, { useState, useEffect } from 'react';
import Header from './Header'; // Assuming Header component file path
import Sidebar from './Sidebar'; // Assuming Sidebar component file path
import '../styles/UserSignupTable.css'; // Import CSS for UserSignupTable styling
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getSignupInfo';
const URL_delete = 'http://localhost:5164/deleteAccount';

const UserSignupTable = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [users, setUsers] = useState([]); // State variable to store user signup data
  const [res, setRes] = useState([]); // State variable to store the value of res

  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {}
    };

    axios.post(URL_api, payload)
      .then(response => {
        // Handle successful response
        console.log("From Response Data ", response.data);
        setUsers(response.data); // Assuming response.data is an array of user signup data

        // Check if the response data structure is as expected
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
        console.log("Catch Block For Rahul");
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    // Logic for handling edit action
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = (id) => {
    // Logic for handling delete action
    console.log(`Delete item with ID: ${id}`);
    const payload = {
      addInfo: {
        user_id: id,
        action: "delete"
      }
    };

    axios.post(URL_delete, payload)
      .then(response => {
        console.log('Delete response:', response.data);
        // Refresh the table data after deletion
        getData();
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <h3>User Signup Table</h3>
          <table className='user-signup-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Password</th>
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
                      <td>
                       
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
    </div>
  );
};

export default UserSignupTable;

