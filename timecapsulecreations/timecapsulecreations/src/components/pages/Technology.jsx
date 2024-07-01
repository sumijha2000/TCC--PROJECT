// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import techimg from '../../assets/tech.svg';
// import './Technology.css';
// import Footer from '../Footer/Footer';

// const Technology = () => {
//   return (
//     <div className="technology-container">
//       <Navbar />
//       <div className="tech-box">
//         <div className="tec-img">
//           <img src={techimg} alt="Technology" />
//           <h1>Technology <br /> _______*_______</h1>
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           <h3>Artificial Intelligence (AI) <br /> _______*_______</h3>
//           <p>
//             Description: Artificial Intelligence (AI) refers to the simulation of human intelligence in machines, enabling them to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and decision-making. AI encompasses various subfields, including machine learning, natural language processing, computer vision, and robotics. AI systems analyze large datasets, recognize patterns, and make predictions or recommendations based on the data.
//             <p></p> Additional Information:
//             - Applications: AI finds applications across numerous sectors, including healthcare, finance, transportation, education, and entertainment. In healthcare, AI-powered diagnostic systems can analyze medical images, detect diseases, and assist in treatment planning. In finance, AI algorithms are used for fraud detection, risk assessment, and algorithmic trading. In transportation, AI enables autonomous vehicles to perceive their environment, navigate safely, and make real-time decisions.
//             <p></p> - Ethical Considerations: The proliferation of AI raises ethical concerns related to data privacy, algorithmic bias, job displacement, and autonomous decision-making. Addressing these ethical considerations requires a multidisciplinary approach involving policymakers, technologists, ethicists, and society at large.
//             <p></p> - Future Trends: The future of AI is characterized by advancements in deep learning, reinforcement learning, and AI ethics. Researchers are exploring techniques to improve AI robustness, interpretability, and fairness, while also integrating AI into everyday objects and systems to enhance convenience and efficiency.
//           </p>
//           <div class="responsive-iframe-container">
//   <iframe src="https://www.youtube.com/embed/BadB1z-V_qU?si=AThiMbmBmNmhrA4V" allowfullscreen></iframe>
// </div>

          
//         </div>
//       </div>
//       <hr className="line" />
//       <div className="ai-box">
//         <div className="tec-img">
//           <h3>3D Printing (Additive Manufacturing) <br /> _______*_______</h3>
//           <p>
//             Description: 3D printing, also known as additive manufacturing, is a process of creating three-dimensional objects by depositing successive layers of material based on digital models. Unlike traditional subtraction manufacturing methods that involve cutting or shaping materials from solid blocks, 3D printing builds objects layer by layer, offering greater design flexibility, customization, and rapid prototyping capabilities.
//             <p></p> Additional Information:
//             - Materials: 3D printing can utilize a wide range of materials, including plastics, metals, ceramics, and even bio materials. Each material has its unique properties and applications, making 3D printing suitable for various industries, such as aerospace, automotive, healthcare, and consumer goods.
//             <p></p> - Applications: 3D printing is used for prototyping, product development, custom manufacturing, and even in space exploration. In healthcare, 3D printing enables the production of patient-specific implants, prosthetics, and anatomical models for surgical planning. In aerospace, 3D-printed components are used to reduce weight, improve fuel efficiency, and streamline production processes.
//             <p></p> - Future Prospects: The future of 3D printing lies in advancing materials, processes, and scalability. Researchers are exploring novel materials with enhanced properties, such as improved strength, flexibility, and biocompatibility, to expand the range of 3D-printed applications. Additionally, advancements in large-scale 3D printing and multi-material printing techniques are expected to revolutionize industries and enable new creative possibilities.
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
//           <h3>Cybersecurity Technologies <br /> _______*_______</h3>
//           <p>
//             Description: Cybersecurity technologies encompass a range of tools, practices, and protocols designed to protect computer systems, networks, and data from cyber threats, such as malware, phishing attacks, data breaches, and unauthorized access. These technologies include firewalls, antivirus software, encryption algorithms, intrusion detection systems, and secure authentication mechanisms.
//             <p></p> Additional Information:
//             - Threat Landscape: The cybersecurity landscape is constantly evolving, with cyber threats becoming more sophisticated and pervasive. Threat actors, including hackers, cybercriminals, and nation-states, employ various techniques to exploit vulnerabilities and compromise systems for financial gain, espionage, or sabotage.
//             <p></p> - Defense Strategies: Cybersecurity technologies employ a multi-layered approach to defense, combining preventive measures, such as firewalls and antivirus software, with detection and response mechanisms to identify and mitigate security incidents in real-time. Additionally, user education, security awareness training, and proactive threat hunting are essential components of an effective cybersecurity strategy.
//             <p></p> - Emerging Technologies: As cyber threats evolve, so do cybersecurity technologies. Emerging technologies such as artificial intelligence, machine learning, and blockchain are being leveraged to enhance cybersecurity capabilities, automate threat detection, and strengthen resilience against cyber attacks.
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

// export default Technology;



import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import techimg from '../../assets/tech.svg';
import './Technology.css';
import Footer from '../Footer/Footer';

const Technology = () => {
  const [healthData, setHealthData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5164/getTechInfo', {
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
          <h1>Technology<br /> _______*_______</h1>
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

export default Technology;
