// import React, { useState, useEffect } from 'react';
// import './Blog.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// const UserInventions = () => {
//   const [healthData, setHealthData] = useState([]);

//   useEffect(() => {
//     fetchData(); // Fetch data when component mounts
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5164/getUploderData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           eventID: '1001',
//           addInfo: {}
//         })
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       console.log('Fetched data:', data); // Log fetched data to inspect in console
//       setHealthData(data.rData.rMessage); // Set array of health data to state
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error, show error message, etc.
//     }
//   };

// const handleFileDownload = (fileName) => {
//   const link = document.createElement('a');
//   link.href = `path_to_files/${fileName}`; // Replace with the actual path where files are stored
//   link.download = fileName;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

//   return (
//     <div>
//       <Navbar />
//       <div className="row">
//         {healthData.map((item, index) => (
//           <div key={index} className="blogs-news">
//             {item.map((value, idx) => (
//               <div key={idx} className="blogimg">
//                 <h2>Inventions: {value[1]}</h2>
//                 <br />
//                 <p>{value[4]}</p>
//                 <img src={value[6]} alt="" />
//                 <td>
//                         <a href="#" onClick={() => handleFileDownload(value[7])}>{value[7]}</a>
//                       </td>
//                 <br />
//                 <br />
//                 <br />
//                 <h4 style={{textAlign:'end'}}>By: {value[2]}</h4>
                
//                 <button className="blog-btn">Like</button>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserInventions;
// import React, { useState, useEffect } from 'react';
// import './Blog.css';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// const UserInventions = () => {
//   const [healthData, setHealthData] = useState([]);
//   const [likes, setLikes] = useState({}); // State to track likes

//   useEffect(() => {
//     fetchData(); // Fetch data when component mounts
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5164/getUploderData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           eventID: '1001',
//           addInfo: {}
//         })
//       });
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }
//       const data = await response.json();
//       console.log('Fetched data:', data); // Log fetched data to inspect in console
//       setHealthData(data.rData.rMessage); // Set array of health data to state
      
//       // Initialize likes state based on fetched data
//       const initialLikes = {};
//       data.rData.rMessage.forEach(item => {
//         item.forEach(value => {
//           initialLikes[value[0]] = { id: value[0], liked: false }; // Assuming value[0] is the ID
//         });
//       });
//       setLikes(initialLikes);

//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error, show error message, etc.
//     }
//   };

//   const handleFileDownload = (fileName) => {
//     const link = document.createElement('a');
//     link.href = `path_to_files/${fileName}`; // Replace with the actual path where files are stored
//     link.download = fileName;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   const handleLike = (id) => {
//     setLikes(prevLikes => ({
//       ...prevLikes,
//       [id]: {
//         ...prevLikes[id],
//         liked: !prevLikes[id].liked
//       }
//     }));
//     // Optionally, you can send a request to update the like status on the server
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="row">
//         {healthData.map((item, index) => (
//           <div key={index} className="blogs-news">
//             {item.map((value, idx) => (
//               <div key={idx} className="blogimg">
//                 <h2>Inventions: {value[1]}</h2>
//                 <br />
//                 <p>{value[4]}</p>
//                 <img src={value[6]} alt="" />
//                 <td>
//                   <a href="#" onClick={() => handleFileDownload(value[7])}>{value[7]}</a>
//                 </td>
                
//                 <h4 style={{ textAlign: 'end' }}>By: {value[2]}</h4>
                
//                 {/* Like button with dynamic text based on like status */}
//                 <button className="blog-btn" onClick={() => handleLike(value[0])}>
//                   {likes[value[0]] && likes[value[0]].liked ? 'Unlike' : 'Like'}
//                 </button>
//                 {/* Display like count */}
//                 <span style={{ marginLeft: '10px' }}>
//                   Likes: {likes[value[0]] && likes[value[0]].liked ? 1 : 0}
//                 </span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserInventions;

import React, { useState, useEffect } from 'react';
import './Blog.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const UserInventions = () => {
  const [healthData, setHealthData] = useState([]);
  const [likes, setLikes] = useState({}); // State to track likes

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5164/getUploderData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          eventID: '1001',
          addInfo: {}
        })
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log('Fetched data:', data); // Log fetched data to inspect in console
      setHealthData(data.rData.rMessage); // Set array of health data to state
      
      // Initialize likes state based on fetched data
      const initialLikes = {};
      data.rData.rMessage.forEach(item => {
        item.forEach(value => {
          initialLikes[value[0]] = { id: value[0], liked: false }; // Assuming value[0] is the ID
        });
      });
      setLikes(initialLikes);

    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, show error message, etc.
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
const handleLike = (id) => {
  setLikes(prevLikes => ({
    ...prevLikes,
    [id]: {
      ...prevLikes[id],
      liked: !prevLikes[id].liked
    }
  }));
  // Optionally, you can send a request to update the like status on the server
};


  return (
    <div>
      <Navbar />
      <div className="row">
        {healthData.map((item, index) => (
          <div key={index} className="blogs-news">
            {item.map((value, idx) => (
              <div key={idx} className="blogimg">
                <h2>Inventions: {value[1]}</h2>
                <br />
                <p>{value[4]}</p>
                <img src={value[6]} alt="" />
                <td>
                  <a href="#" onClick={() => handleDownload(value[8])}>{value[7]}</a>
                </td>
                
                <h4 style={{ textAlign: 'end' }}>By: {value[2]}</h4>
                
                {/* Like button with dynamic text based on like status */}
                <button className="blog-btn" onClick={() => handleLike(value[0])}>
                  {likes[value[0]] && likes[value[0]].liked ? 'Unlike' : 'Like'}
                </button>
                {/* Display like count */}
                <span style={{ marginLeft: '10px' }}>
                  Likes: {likes[value[0]] && likes[value[0]].liked ? 1 : 0}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default UserInventions;
