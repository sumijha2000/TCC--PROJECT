// // ContactTable.jsx
// import React, { useState } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// // import './UserSignupTable.css'; 
// // import '../styles/UserSignupTable'

// const ContactTable = () => {
//   const [contacts, setContacts] = useState([
//     { id: 1, firstname: 'John', lastname: 'Doe', contact: '123-456-7890', email: 'john.doe@example.com', subject: 'Query' },
//     { id: 2, firstname: 'Jane', lastname: 'Smith', contact: '987-654-3210', email: 'jane.smith@example.com', subject: 'Feedback' },
//     // Add more sample data as needed
//   ]);

//   const handleEdit = (id) => {
//     // Handle edit logic
//     console.log(`Edit contact with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete logic
//     console.log(`Delete contact with ID ${id}`);
//     setContacts(contacts.filter(contact => contact.id !== id));
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Contact Table</h3>
//           <table className="user-signup-table"> {/* Reusing user-signup-table class for styling */}
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Firstname</th>
//                 <th>Lastname</th>
//                 <th>Contact</th>
//                 <th>Email</th>
//                 <th>Subject</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {contacts.map(contact => (
//                 <tr key={contact.id}>
//                   <td>{contact.id}</td> {/* Display ID here */}
//                   <td>{contact.firstname}</td>
//                   <td>{contact.lastname}</td>
//                   <td>{contact.contact}</td>
//                   <td>{contact.email}</td>
//                   <td>{contact.subject}</td>
//                   <td>
//                     <button onClick={() => handleEdit(contact.id)}>Edit</button>
//                     <button onClick={() => handleDelete(contact.id)}>Delete</button>
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

// export default ContactTable;


// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar';
// import '../styles/ContactTable.css';

// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getContactInfo';

// const ContactTable = () => {
//   const [contact, setContact] = useState([]); // State variable to store contact data
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
//         setContact(response.data); // Assuming response.data is an array of contact data

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
//           <h3>Contact Information Table</h3>
//           <table className='contact-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone</th>
//                 <th>Message</th>
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

// export default ContactTable;


import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import '../styles/ContactTable.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getContactInfo';
const deleteURL_api = 'http://localhost:5164/contact/deleteContact'; // Endpoint for delete operation

const ContactTable = () => {
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

  const getData = () => {
    const payload = {
      eventID: "1001",
      addInfo: {}
    };

    axios.post(URL_api, payload)
      .then(response => {
        console.log("From Response Data ", response.data);
        setContact(response.data);

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
  }

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
    // Add your edit logic here
  };

  const handleDelete = (id) => {
    axios.post(deleteURL_api, { addInfo: { id } })
      .then(response => {
        console.log(response.data);
        // Assuming the response has a message indicating success or failure
        if (response.data && response.data.rData && response.data.rData.rMessage) {
          const message = response.data.rData.rMessage;
          console.log(message);
          // Refresh data after delete
          getData();
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error deleting contact:', error);
      });
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <h3>Contact Information Table</h3>
          <table className='contact-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Message</th>
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

export default ContactTable;


