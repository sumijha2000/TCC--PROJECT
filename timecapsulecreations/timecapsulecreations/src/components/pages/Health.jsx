// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import techimg from '../../assets/tech.svg';
// import './Technology.css';
// import Footer from '../Footer/Footer';

// const Health = () => {
//   return (
//     <div className="technology-container">
//       <Navbar />
//       <div className="tech-box">
//         <div className="tec-img">
//           <img src={techimg} alt="Technology" />
//           <h1>Health <br /> _______*_______</h1>
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           {/* categories */}
//           <h3> 
//             <br /> _______*_______</h3>

//             {/* discription */}
//           <p>
//           </p>
//           <div className="responsive-iframe-container">
//             <iframe></iframe>
//           </div>
//         </div>
//       </div>
//       <hr className="line" />
     
      
//       <Footer />
//     </div>
//   );
// };

// export default Health;




// import React, { useState, useEffect } from 'react';
// import Navbar from '../Navbar/Navbar';
// import techimg from '../../assets/tech.svg';
// import './Technology.css';
// import Footer from '../Footer/Footer';

// const Health = () => {
//   const [healthData, setHealthData] = useState([]);

//   useEffect(() => {
//     fetchData(); // Fetch data when component mounts
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5164/getHealthInfo', {
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
//       setHealthData(data.rData["rMessage"]); // Assuming rMessage is the array of health data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       // Handle error, show error message, etc.
//     }
//   };

//   return (
//     <div className="technology-container">
//       <Navbar />
//       <div className="tech-box">
//         <div className="tec-img">
//           <img src={techimg} alt="Technology" />
//           <h1>Health <br /> _______*_______</h1>
//         </div>
//       </div>
//       <hr className="line" />
//       {healthData.map((item, index) => (
//         <div key={index} className="ai-box">
//           <div className="tec-img">
//             {/* Render categories */}
//             <h3>{item.categories}</h3>

//             {/* Render description */}
//             <p>{item.description}</p>

//             {/* Render video */}
//             <div className="responsive-iframe-container">
//               <iframe src={item.video}></iframe>
//             </div>
//           </div>
//         </div>
//       ))}
//       <hr className="line" />
//       <Footer />
//     </div>
//   );
// };

// export default Health;

import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import techimg from '../../assets/tech.svg';
import './Technology.css';
import Footer from '../Footer/Footer';

const Health = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5164/getHealthInfo', {
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
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="technology-container">
      <Navbar />
      <div className="tech-box">
        <div className="tec-img">
          <img src={techimg} alt="Technology" />
          <h1>HealthWellness<br /> _______*_______</h1>
        </div>
      </div>
      <hr className="line" />
      <div className="row">
         {healthData.map((item, index) => (
            <div key={index} className="ai-box">
                 {item.map((value, idx) => (
             <div className="tec-img">
            
            <h3>{value[1]}</h3>
            <h3> _______*_______</h3>
            <p>{value[2]}</p>
            <div className="responsive-iframe-container">
              <iframe src={value[4]} title={`Video ${index}`} allowFullScreen></iframe>
            </div>
            <hr className="line" />
          </div>
          ))}
      </div>  
      ))}
      </div>
    
      <hr className="line" />
      <Footer />
    </div>
  );
};

export default Health;

