// import React, { useState } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import '../styles/BlogsTable.css'; // Import CSS for BlogsTable styling

// const BlogsTable = () => {
//   const [blogs, setBlogs] = useState([
//     { id: 1, head: 'New Technology Trends', blog_det: 'Details of the blog post about technology trends', image: 'tech_blog.jpg' },
//     { id: 2, head: 'Healthy Eating Habits', blog_det: 'Tips for maintaining healthy eating habits', image: 'healthy_food.jpg' },
//     // Add more sample data as needed
//   ]);

//   const handleEdit = (id) => {
//     // Handle edit logic
//     console.log(`Edit blog with ID ${id}`);
//   };

//   const handleDelete = (id) => {
//     // Handle delete logic
//     console.log(`Delete blog with ID ${id}`);
//     setBlogs(blogs.filter(blog => blog.id !== id));
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Blogs Table</h3>
//           <table className="blogs-table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Head</th>
//                 <th>Blog Details</th>
//                 <th>Image</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {blogs.map(blog => (
//                 <tr key={blog.id}>
//                   <td>{blog.id}</td>
//                   <td>{blog.head}</td>
//                   <td>{blog.blog_det}</td>
//                   <td>{blog.image}</td>
//                   <td>
//                     <button className="edit-button" onClick={() => handleEdit(blog.id)}>Edit</button>
//                     <button className="delete-button" onClick={() => handleDelete(blog.id)}>Delete</button>
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

// export default BlogsTable;


// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import '../styles/BlogsTable.css'; // Import CSS for BlogsTable styling
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getBlogInfo';

// const BlogsTable = () => {
//   const [blogs, setBlogs] = useState([]); // State variable to store blogs data
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
//         setBlogs(response.data); // Assuming response.data is an array of blogs data

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
//           <h3>Blogs Information Table</h3>
//           <table className='blogs-table'>
//             <thead>
//               <tr>
//               <th>ID</th>
//                 <th>Image</th>
//                 <th>Head</th>
//                 <th>Blog Details</th>
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
//                       <td>{value[3]}</td>
//                       <td>{value[4]}</td>
                   
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

// export default BlogsTable;


// import React, { useState, useEffect } from 'react';
// import Header from './Header'; // Assuming Header component file path
// import Sidebar from './Sidebar'; // Assuming Sidebar component file path
// import '../styles/BlogsTable.css'; // Import CSS for BlogsTable styling
// import axios from 'axios';

// const URL_api = 'http://localhost:5164/getBlogInfo';

// const BlogsTable = () => {
//   const [blogs, setBlogs] = useState([]); // State variable to store blogs data
//   const [res, setRes] = useState([]); // State variable to store the value of res
//   const [editData, setEditData] = useState(null); // State variable to store the data being edited

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         // Handle successful response
//         console.log("From Response Data ", response.data);
//         setBlogs(response.data); // Assuming response.data is an array of blogs data

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

//   const handleEdit = (blog) => {
//     // Set the data to be edited
//     setEditData(blog);
//   };

//   const handleDelete = (id) => {
//     // Logic for handling delete action
//     const payload = {
//       addInfo: {
//         id: id
//       }
//     };

//     axios.post('http://localhost:5164/blog/deleteBlog', payload)
//       .then(response => {
//         console.log(response.data);
//         getData(); // Refresh the table data after delete
//       })
//       .catch(error => {
//         console.error('Error deleting data:', error);
//       });
//   };

  

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Blogs Information Table</h3>
//           <table className='blogs-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Image</th>
//                 <th>Head</th>
//                 <th>Blog Details</th>
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
//         </div>
//         </div>

       
//   );
// };

// export default BlogsTable;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import EditBlogForm from './EditBlogForm'; // Adjust path as needed
// import '../styles/BlogsTable.css'; // Adjust CSS import as needed

// const URL_api = 'http://localhost:5164/getBlogInfo';

// const BlogsTable = () => {
//   const [blogs, setBlogs] = useState([]); // State variable to store blogs data
//   const [res, setRes] = useState([]); // State variable to store the value of res
//   const [editData, setEditData] = useState(null); // State variable to store the data being edited
//   const [showEditForm, setShowEditForm] = useState(false); // State variable to toggle edit form visibility

//   const getData = () => {
//     const payload = {
//       eventID: "1001",
//       addInfo: {}
//     };

//     axios.post(URL_api, payload)
//       .then(response => {
//         // Handle successful response
//         console.log("From Response Data ", response.data);
//         setBlogs(response.data); // Assuming response.data is an array of blogs data

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

//   const handleEdit = (blog) => {
//     // Set the data to be edited
//     setEditData(blog);
//     setShowEditForm(true); // Show edit form
//   };

//   const handleDelete = (id) => {
//     // Logic for handling delete action
//     const payload = {
//       addInfo: {
//         id: id
//       }
//     };

//     axios.post('http://localhost:5164/blog/deleteBlog', payload)
//       .then(response => {
//         console.log(response.data);
//         getData(); // Refresh the table data after delete
//       })
//       .catch(error => {
//         console.error('Error deleting data:', error);
//       });
//   };

//   const closeEditForm = () => {
//     setShowEditForm(false);
//     setEditData(null);
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <div className="table-container">
//           <h3>Blogs Information Table</h3>
//           <table className='blogs-table'>
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Image</th>
//                 <th>Head</th>
//                 <th>Blog Details</th>
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

//         {/* Edit Form Modal */}
//         {showEditForm && (
//           <div className="edit-modal">
//             <div className="modal-content">
//               <EditBlogForm blogData={editData} closePopupAndNavigate={closeEditForm} />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BlogsTable;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Sidebar from './Sidebar';
import EditBlogForm from './EditBlogForm'; // Edit form ko alag file mein rakha gaya hai
import '../styles/BlogsTable.css'; // CSS import as needed
import { useNavigate } from 'react-router-dom';

const URL_api = 'http://localhost:5164/getBlogInfo';

const BlogsTable = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const [blogs, setBlogs] = useState([]);
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
        setBlogs(response.data);

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

  const handleEdit = (blog) => {
    setEditData(blog);
    setShowEditForm(true); // Edit button par click karne par Edit form dikhayi de
  };

  const handleDelete = (id) => {
    const payload = {
      addInfo: {
        id: id
      }
    };

    axios.post('http://localhost:5164/blog/deleteBlog', payload)
      .then(response => {
        console.log(response.data);
        getData(); // Delete ke baad table data ko refresh kare
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const closeEditForm = () => {
    setShowEditForm(false);
    setEditData(null);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="table-container">
          <h3>Blogs Information Table</h3>
          <table className='blogs-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Head</th>
                <th>Blog Details</th>
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

      {/* Edit Form Modal */}
      {showEditForm && (
        <EditBlogModal
          blogData={editData}
          closeEditForm={closeEditForm}
        />
      )}
    </div>
  );
};

const EditBlogModal = ({ blogData, closeEditForm }) => {
  const handleSubmit = async (formData) => {
    // Handle form submission (you can implement this logic similar to your previous EditBlogForm component)
    try {
      // Make API call to update blog data
      const response = await axios.post('http://localhost:5164/blog/editBlog', formData);
      console.log(response.data, 'api response'); // Handle response
      closeEditForm(); // Close modal after successful edit
    } catch (error) {
      console.error('Error editing blog:', error);
      // Handle error if needed
    }
  };

  return (
    <div className="edit-modal">
      <div className="modal-content">
        <span className="close-button" onClick={closeEditForm}>&times;</span>
        <EditBlogForm
          blogData={blogData}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default BlogsTable;
