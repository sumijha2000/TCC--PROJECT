// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import fashimg from '../../assets/fash.svg';
// import './Technology.css';
// import Footer from '../Footer/Footer';

// const Fashion = () => {
//   return (
//     <div className="technology-container">
//       <Navbar />
//       <div className="tech-box">
//         <div className="tec-img">
//           <img src={fashimg} alt="Technology" />
//           <h1>fashion & Trend <br /> _______*_______</h1>
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           <h3>Sewing Machine <br /> _______*_______</h3>
//           <p>
//           Invented by Thomas Saint in 1790, the sewing machine revolutionized the textile industry by automating the process of stitching fabric together.
//            The sewing machine enabled faster and more precise garment production, leading to the growth of the ready-to-wear clothing industry.

//                  <p></p>   Innovation Name: Automated Stitching
//            Description: The sewing machine revolutionized textile production by automating the process of stitching fabric together. Thomas Saint's invention laid the groundwork for subsequent advancements in sewing technology.
//            <p></p>  Impact:
//             Increased Efficiency: By automating stitching, the sewing machine dramatically increased the speed and accuracy of garment production.
//              Expansion of Ready-to-Wear Industry: The efficiency of sewing machines allowed for mass production of clothing, leading to the growth of the ready-to-wear industry.
//              <p></p> Accessibility: With the introduction of sewing machines, clothing became more accessible and affordable to a broader population, impacting fashion trends and consumer behavior.
//                Innovation in Design: Sewing machines enabled the creation of intricate and complex garment designs that were not feasible with hand-sewing techniques, leading to new fashion trends and styles.
//           </p>
//           <div class="responsive-iframe-container">
//   <iframe src="https://www.youtube.com/embed/BadB1z-V_qU?si=AThiMbmBmNmhrA4V" allowfullscreen></iframe>
// </div>

          
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           <h3>3D Printing <br /> _______*_______</h3>
//           <p>
//           Invention Name: 3D Printing (Additive Manufacturing)
//           Inventor: Chuck Hull (credited with inventing stereolithography apparatus, a 3D printing technique)
//             Year of Invention: 1986
//                <p></p>      Innovation Name: Additive Manufacturing
//             Description: 3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects layer by layer from digital designs. It involves depositing successive layers of material (such as plastic, metal, or composite) to build up a physical object.
//               <p></p>      Impact:
//              Customization and Personalization: 3D printing allows for the creation of highly customized and personalized products, including clothing, accessories, and footwear, tailored to individual preferences and body measurements.
//               Design Freedom: Designers have unparalleled freedom to create intricate and complex geometries that would be challenging or impossible to achieve with traditional manufacturing methods. This has led to innovative and avant-garde designs in fashion and accessories.
//              Rapid Prototyping: 3D printing facilitates rapid prototyping, enabling designers to quickly iterate and test their designs before mass production. This accelerates the product development cycle and reduces time-to-market for new fashion collections.
//              <p></p>Sustainable Manufacturing: Additive manufacturing produces minimal waste compared to traditional subtractive manufacturing processes, making it a more environmentally friendly option. It allows for on-demand production, reducing excess inventory and the need for large-scale manufacturing facilities.
//           </p>
//           <div class="responsive-iframe-container">
//   <iframe src="https://www.youtube.com/embed/Llgko_GpXbI?si=l4EyuWNZQhnOc4g" allowfullscreen></iframe>
// </div>
//           {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Llgko_GpXbI?si=l4EyuWNZQhnOc4g_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           <h3>Fast Fashion <br /> _______*_______</h3>
//           <p>
//           Innovation Name: Fast Fashion
//             Description: Fast fashion refers to the rapid production and distribution of inexpensive clothing collections that are inspired by the latest trends seen on fashion runways or in celebrity culture. These collections are designed to be quickly manufactured and sold at affordable prices, allowing consumers to keep up with current fashion trends without breaking the bank.
//                <p></p>  Key Characteristics:
//                  Quick Turnaround: Fast fashion brands are known for their ability to design, produce, and distribute new clothing collections in a matter of weeks, as opposed to the traditional fashion cycle that spans several months.
//                 Trend Imitation: Fast fashion brands closely monitor runway shows, fashion magazines, and social media to identify emerging trends and quickly produce affordable versions of popular styles.
//                 <p></p>         Impact:
//                 Consumer Behavior: Fast fashion has influenced consumer behavior by creating a culture of constant consumption and trend-chasing, leading to increased purchasing frequency and shorter garment lifespans.
//                 Environmental Concerns: The fast fashion model contributes to environmental issues such as textile waste, pollution from manufacturing processes, and exploitation of natural resources.
//                  <p></p> Labor Practices: Fast fashion brands have faced criticism for their reliance on cheap labor in developing countries, often resulting in poor working conditions and low wages for garment workers.
//           </p>
//           <div class="responsive-iframe-container">
//   <iframe src="https://www.youtube.com/embed/shQEXpUwaIY?si=xXXKl0Z-eQcm2auX" title="YouTube video player" allowfullscreen></iframe>
// </div>
//           {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/shQEXpUwaIY?si=xXXKl0Z-eQcm2auX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Fashion;


import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import techimg from '../../assets/tech.svg';
import './Technology.css';
import Footer from '../Footer/Footer';

const Fashion = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5164/getFesInfo', {
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
          <h1>fashion & Trend<br /> _______*_______</h1>
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

export default Fashion;