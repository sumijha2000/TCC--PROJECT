
// import React from 'react'
// import './Programs3.css'
// import inventor1 from '../../assets/Ellipse 10.svg'
// import inventor2 from '../../assets/Ellipse 11.svg'
// import inventor3 from '../../assets/Ellipse 12.svg'
// import inventor4 from '../../assets/Ellipse 13.svg'
// import desimg from '../../assets/lstarl.svg'

// const Programs3 = () => {
//   return (
//     <div className='third-sec'>
//       <div className="text-th">
//         <h1>Inventor Name with their Creations</h1>
//       </div>
//       <div className="inventors-container">
//         {/* image start  */}
//         <div className="sec-img">
//           {/* image end */}
//           <img src={inventor1} alt="Thomas Edison" />
//          {/* name start */}
//           <h3>Thomas Edison</h3>
//           {/* name end */}
//           <img src={desimg} alt="Decoration" className='imggg' />

//           {/* description start */}
//           <p className='pra-graph'>- Electric Light Bulb: Edison's improvements on the incandescent light bulb made it practical for widespread use, contributing significantly to the electrification of cities.</p>
//         </div>
//         {/* discription end */}
     
        
//       </div>
//     </div>
//   )
// }

// export default Programs3





// import React, { useState, useEffect } from 'react';
// import './Programs3.css';
// import desimg from '../../assets/lstarl.svg';
// import Navbar from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// const Programs3 = () => {
//   const [healthData, setHealthData] = useState([]);

//   useEffect(() => {
//     fetchData(); // Fetch data when component mounts
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5164/getallinventor_details', {
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

//   return (
//     <div className='third-sec'>
//       <Navbar />
//       <div className="text-th">
//         <h1>Inventor Name with their Creations</h1>
//       </div>
//       <div className="row">
//         {healthData.map((item, index) => (
//           <div key={index} className="inventors-container">
//             {item.map((value, idx) => (
//               <div key={idx} className="sec-img">
//                 <img src={value[1]} alt={value[0]} />
//                 <h3>{value[2]}</h3>
//                 <img src={desimg} alt="Decoration" className='imggg' />
//                 <p className='pra-graph'>-{value[3]}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Programs3;


import React, { useState, useEffect } from 'react';
import './Programs3.css';
import desimg from '../../assets/lstarl.svg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Programs3 = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5164/getallinventor_details', {
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
      console.log('Fetched data:', data);
      setHealthData(data.rData.rMessage);
    } catch (error) {
      console.error('Error fetching data:', error);
      // Handle error state or UI indication (e.g., show error message)
    }
  };

  return (
    <div className='third-sec'>
      <Navbar />
      <div className="text-th">
        <h1>Inventor Name with their Creations</h1>
      </div>
      <div className="row">
        {healthData.map((item, index) => (
          <div key={index} className="inventors-container">
            {item.map((value, idx) => (
              <div key={idx} className="sec-img">
                {/* Check image path and ensure it's correct */}
                  <img src={value[2]} alt="" />
                <h3 style={{textAlign:'center'}}>{value[3]}</h3>
                <img src={desimg} alt="Decoration" className='imggg' />
                <p className='pra-graph'>-{value[4]}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
  
    </div>
  );
};

export default Programs3;

