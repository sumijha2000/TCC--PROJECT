// import React, { useState } from 'react';
// import axios from 'axios';


// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState('');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5164/admin/login', {
//         Username: username,
//         Password: password
//       });
//       const { token } = response.data;
//       setToken(token);
//       localStorage.setItem('token', token); // Store token in local storage
      
//       // Redirect to "/"
//       window.location.href = "/admin";
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   const handleLogout = () => {
//     setToken('');
//     localStorage.removeItem('token'); // Remove token from local storage
//   };

//   // Conditional rendering based on login state
//   if (token) {
//     return (
//       <div>
//         <p>Logged in with token: {token}</p>
//         <button onClick={handleLogout}>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button onClick={handleLogin}>Login</button>
//       </div>
//     );
//   }
// };

// export default LoginPage;

// import React, { useState } from 'react';
// import axios from 'axios';
// import './LoginPage.css';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [token, setToken] = useState(localStorage.getItem('token') || '');

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:5164/admin/login', {
//         Username: username,
//         Password: password
//       });
//       const { token } = response.data;
//       setToken(token);
//       localStorage.setItem('token', token); // Store token in local storage
      
//       // Redirect to "/admin"
//       window.location.href = "/admin";
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   const handleLogout = () => {
//     setToken('');
//     localStorage.removeItem('token'); // Remove token from local storage
//   };

//   // Conditional rendering based on login state
//   if (token) {
//     return (
//       <div className="login-container">
//         <p>Logged in with token: {token}</p>
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div className="login-container">
//         <div className="login-form">
//           <input
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="login-input"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="login-input"
//           />
//           <button onClick={handleLogin} className="login-button">Login</button>
//         </div>
//       </div>
//     );
//   }
// };

// export default LoginPage;


import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5164/admin/login', {
        Username: username,
        Password: password
      });
      
      const { token } = response.data;
      localStorage.setItem('token', token); // Store token in local storage
      
      // Redirect to "/admin" upon successful login
      window.location.href = "/admin";
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.'); // Set error message on login failure
    }
  };


  

  return (
    <div className="login-container">
      <div className="login-form">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
        />
        {error && <p className="error-message">{error}</p>} {/* Display error message if login fails */}
        <button onClick={handleLogin} className="login-button">Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
