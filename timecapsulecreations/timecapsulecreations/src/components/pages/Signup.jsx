// // src/Signup.jsx
// import React, { useState } from 'react';
// import Navbar from '../Navbar/Navbar'
// import './Signup.css';
// import sideimg from '../../assets/sideimg.svg';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';


// function Signup()  {

//   const [formData, setFormData] = useState({
//     email: '',
//     password:''
//   });

//   const [showPopup, setShowPopup] = useState(false);
//     const navigate = useNavigate();

//     // const handleChange = (e) => {
//     //     setFormData({ ...formData, [e.target.name]: e.target.value });
//     // };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log(formData)
//         const payload = {
//             eventID: "1001",
//             addInfo: {
//               EMAIL: formData.email,
//               PASSWORD: formData.password,
//               action: "signup"
              
//             }
//         };
//         try {
//             const response = await axios.post('http://localhost:5164/authenticate', payload);
//             console.log(response.data, 'api response'); // handle response
//             setShowPopup(true); // Show the popup after successful signup
//             console.log(response)
//             if(response.data.rData.rMessage==="Email already exists"){
//              alert("Email already exists")
//             }
//             else{
//               alert("successful")
//               navigate('/upload');
//             }
//         } catch (error) {
//             console.error('Error Contact us:', error);
//             // Handle error
//         }
        
//     };

   
//   const handleSignin = async (e) => {
//     e.preventDefault();
//     console.log(formData);
//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         EMAIL: formData.email,
//         PASSWORD: formData.password,
//         action: "signin"
//       }
//     };
//     try {
//       const response = await axios.post('http://localhost:5164/authenticate', payload);
//       console.log(response.data, 'api response'); // handle response
//       setShowPopup(true); // Show the popup after successful signin
//       if(response.data.rData.rMessage==="Invalid credentials"){
//         alert("Invalid credentials");
//       } else {
//         alert("Signin successful");
//         navigate('/upload'); // Navigate to the dashboard or desired page after signin
//       }
//     } catch (error) {
//       console.error('Error during signin:', error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="signup-page"><Navbar></Navbar>
//       <div className="signup-container">
//         <div className="image-section">
//           <img src={sideimg} alt="Signup Visual" className="signup-image" />
//         </div>
//         <div className="form-section">
//           <h2>Create an account</h2>
//           <p>Enter your email to sign up for</p>
//           <form onSubmit={handleSubmit}>
//             <input type="email" placeholder="email@domain.com" className="email-input" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} />
//             <input type="password" placeholder="password" className="email-input" value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}} />
//             {/* <Link to='/upload'> */}
//             <button type="submit" className="email-button">Sign up with email</button>
//             {/* </Link> */}
//           </form>
//           <h2>Create an account</h2>
//           <p>Enter your email to sign up for</p>
//           <form onSubmit={handleSignin}>
//             <input type="email" placeholder="email@domain.com" className="email-input" value={formData.email} onChange={(e)=>{setFormData({...formData,email:e.target.value})}} />
//             <input type="password" placeholder="password" className="email-input" value={formData.password} onChange={(e)=>{setFormData({...formData,password:e.target.value})}} />
//             {/* <Link to='/upload'> */}
//             <button type="submit" className="email-button">Sign up with email</button>
//             {/* </Link> */}
//           </form>
//           <p>or continue with</p>
//           <button className="google-button">Google</button>
//           <p className="terms">
//             By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import './Signup.css';
// import sideimg from '../../assets/sideimg.svg';

// function Auth() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         EMAIL: formData.email,
//         PASSWORD: formData.password,
//         action: authMode
//       }
//     };

//     try {
//       const response = await axios.post('http://localhost:5164/authenticate', payload);
//       console.log(response.data, 'api response'); // handle response
//       setShowPopup(true); // Show the popup after successful action
//       if (response.data.rData.rMessage === "Invalid credentials" || response.data.rData.rMessage === "Email already exists") {
//         alert(response.data.rData.rMessage);
//       } else {
//         alert(`${authMode.charAt(0).toUpperCase() + authMode.slice(1)} successful`);
//         navigate(authMode === 'signup' ? '/upload' : '/upload');
//       }
//     } catch (error) {
//       console.error(`Error during ${authMode}:`, error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="signup-page">
//     <Navbar />
//     <div className="signup-container">
//       <div className="image-section">
//         <img src={sideimg} alt="Signup Visual" className="signup-image" />
//       </div>
//       <div className="form-section">
//         <h2>{authMode === 'signup' ? 'Create an account' : 'Sign In to your account'}</h2>
//         <p>Enter your email to {authMode === 'signup' ? 'sign up' : 'sign in'}</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="email@domain.com"
//             className="email-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             className="email-input"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="email-button">
//             {authMode === 'signup' ? 'Sign up with email' : 'Sign in with email'}
//           </button>
//         </form>
//         <div className="auth-toggle">
//           <label>
//             <input
//               type="radio"
//               name="authMode"
//               value="signup"
//               checked={authMode === 'signup'}
//               onChange={() => setAuthMode('signup')}
//             />
//             Sign Up
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="authMode"
//               value="login"
//               checked={authMode === 'login'}
//               onChange={() => setAuthMode('login')}
//             />
//             Sign In
//           </label>
//         </div>
//         <p>or continue with</p>
//         <button className="google-button">Google</button>
//         <p className="terms">
//           By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//         </p>
//       </div>
//     </div>
//     {showPopup && (
//       <div className="popup">
//         <div className="popup-content">
//           <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
//         </div>
//       </div>
//     )}
//   </div>
//   );
// }

// export default Auth;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../Navbar/Navbar';
// import './Signup.css';
// import sideimg from '../../assets/sideimg.svg';

// function Auth() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [authMode, setAuthMode] = useState('signup'); // 'signup' or 'login'
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     const payload = {
//       eventID: "1001",
//       addInfo: {
//         EMAIL: formData.email,
//         PASSWORD: formData.password,
//         action: authMode
//       }
//     };

//     try {
//       const response = await axios.post('http://localhost:5164/authenticate', payload);
//       console.log(response.data, 'api response'); // handle response
//       setShowPopup(true); // Show the popup after successful action
//       if (response.data.rData.rMessage === "Invalid credentials" || response.data.rData.rMessage === "Email already exists") {
//         alert(response.data.rData.rMessage);
//       } else {
//         alert(`${authMode.charAt(0).toUpperCase() + authMode.slice(1)} successful`);
//         navigate(authMode === 'signup' ? '/upload' : '/upload');
//       }
//     } catch (error) {
//       console.error(`Error during ${authMode}:`, error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="signup-page">
//    <Navbar />
//     <div className="signup-container">
//       <div className="image-section">
//         <img src={sideimg} alt="Signup Visual" className="signup-image" />
//       </div>
//       <div className="form-section">
//         <h2>{authMode === 'signup' ? 'Create an account' : 'Sign In to your account'}</h2>
//         <p>Enter your email to {authMode === 'signup' ? 'sign up' : 'sign in'}</p>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="email@domain.com"
//             className="email-input"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="password"
//             className="email-input"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit" className="email-button">
//             {authMode === 'signup' ? 'Sign up with email' : 'Sign in with email'}
//           </button>
//         </form>
//         <div className="auth-toggle">
//           <label>
//             <input
//               type="radio"
//               name="authMode"
//               value="signup"
//               checked={authMode === 'signup'}
//               onChange={() => setAuthMode('signup')}
//             />
//             Sign Up
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="authMode"
//               value="login"
//               checked={authMode === 'login'}
//               onChange={() => setAuthMode('login')}
//             />
//             Sign In
//           </label>
//         </div>
//         <p>or continue with</p>
//         <button className="google-button">Google</button>
//         <p className="terms">
//           By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
//         </p>
//       </div>
//     </div>
//     {showPopup && (
//       <div className="popup">
//         <div className="popup-content">
//           <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
//         </div>
//       </div>
//     )}
//   </div>
//   );
// }

// export default Auth;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import './Signup.css';
import sideimg from '../../assets/sideimg.svg';

function Auth() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    otp: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [authMode, setAuthMode] = useState('signup'); // 'signup', 'signin', 'forgotpassword', 'verifyotp', 'updatepassword'
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Validate passwords
    if (authMode === 'verifyotp' || authMode === 'updatepassword') {
      if (formData.newPassword !== formData.confirmPassword) {
        setPopupMessage('New password and confirm password do not match.');
        setShowPopup(true);
        return;
      }
    }

    let payload = {
      eventID: "1001",
      addInfo: {
        EMAIL: formData.email,
        action: authMode === 'signin' ? 'signin' : authMode
      }
    };

    if (authMode === 'signup' || authMode === 'signin') {
      payload.addInfo.PASSWORD = formData.password;
    }

    if (authMode === 'verifyotp' || authMode === 'updatepassword') {
      payload.addInfo.OTP = formData.otp;
      payload.addInfo.NEW_PASSWORD = formData.newPassword;
      payload.addInfo.CONFIRM_PASSWORD = formData.confirmPassword;
      payload.addInfo.action = 'updatepassword';
    }

    try {
      const response = await axios.post('http://localhost:5164/authenticate', payload);
      console.log(response.data, 'api response'); // handle response

      const message = response.data.rData.rMessage;

      if (message === "Invalid credentials" || message === "Email already exists") {
        setPopupMessage(message);
        setShowPopup(true);
      } else if (message === "OTP generated successfully and sent to") {
        setPopupMessage('OTP sent to your email. Please check your inbox.');
        setShowPopup(true);
        setAuthMode('verifyotp');  // Switch to OTP verification mode
      } else if (message === "OTP verified successfully") {
        setPopupMessage('OTP verified successfully.');
        setShowPopup(true);
        setAuthMode('updatepassword');  // Switch to update password mode
      } else if (message === "Password updated successfully") {
        setPopupMessage('Password updated successfully.');
        setShowPopup(true);
        navigate('/upload');  // Redirect after successful password update
      } else if (message === "Sign Up Successful" || message === "Signin Successful") {
        setPopupMessage(`${authMode.charAt(0).toUpperCase() + authMode.slice(1)} successful`);
        setShowPopup(true);
        navigate('/upload');  // Redirect after successful sign-up or sign-in
      } else {
        setPopupMessage(message);
        setShowPopup(true);
      }
    } catch (error) {
      console.error(`Error during ${authMode}:`, error);
      setPopupMessage(`Error during ${authMode}: ${error.message}`);
      setShowPopup(true);
    }
  };

  const handleForgotPassword = () => {
    setAuthMode('forgotpassword');  // Switch to forgot password mode
  };

  const handleVerifyOTP = () => {
    setAuthMode('verifyotp');  // Switch to OTP verification mode
  };

  return (
    <div className="signup-page">
      <Navbar />
      <div className="signup-container">
        <div className="image-section">
          <img src={sideimg} alt="Signup Visual" className="signup-image" />
        </div>
        <div className="form-section">
          <h2>
            {authMode === 'signup' ? 'Create an account' :
            authMode === 'signin' ? 'Sign In to your account' :
            authMode === 'forgotpassword' ? 'Forgot Password' :
            authMode === 'verifyotp' ? 'Verify OTP' :
            authMode === 'updatepassword' ? 'Update Password' : ''}
          </h2>
          <p>
            {authMode === 'signup' ? 'Enter your email to sign up' :
            authMode === 'signin' ? 'Enter your email to sign in' :
            authMode === 'forgotpassword' ? 'Enter your email to receive OTP' :
            authMode === 'verifyotp' ? 'Enter OTP sent to your email and set a new password' :
            authMode === 'updatepassword' ? 'Enter new password and confirm it' : ''}
          </p>
          <form onSubmit={handleSubmit}>
            {authMode !== 'verifyotp' && authMode !== 'updatepassword' && (
              <>
                <input
                  type="email"
                  name="email"
                  placeholder="email@domain.com"
                  className="email-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {authMode !== 'forgotpassword' && (
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="email-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                )}
              </>
            )}
            {authMode === 'verifyotp' && (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter OTP"
                  className="email-input"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            {authMode === 'verifyotp' || authMode === 'updatepassword' ? (
              <>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  className="email-input"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm New Password"
                  className="email-input"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                {formData.newPassword !== formData.confirmPassword && (
                  <p className="error-message">New password and confirm password do not match.</p>
                )}
              </>
            ) : null}
            <button type="submit" className="email-button">
              {authMode === 'signup' ? 'Sign up with email' :
               authMode === 'signin' ? 'Sign in with email' :
               authMode === 'forgotpassword' ? 'Send OTP' :
               authMode === 'verifyotp' ? 'Verify OTP' :
               authMode === 'updatepassword' ? 'Update Password' : ''}
            </button>
          </form>
          {authMode === 'forgotpassword' && (
            <p>
              <a href="#" onClick={handleVerifyOTP}>Already have an OTP? Verify it here.</a>
            </p>
          )}
          {authMode === 'verifyotp' && (
            <p>
              <a href="#" onClick={handleForgotPassword}>Forgot your OTP? Resend it here.</a>
            </p>
          )}
          <div className="auth-toggle">
            <label>
              <input
                type="radio"
                name="authMode"
                value="signup"
                checked={authMode === 'signup'}
                onChange={() => setAuthMode('signup')}
              />
              Sign Up
            </label>
            <label>
              <input
                type="radio"
                name="authMode"
                value="signin"
                checked={authMode === 'signin'}
                onChange={() => setAuthMode('signin')}
              />
              Sign In
            </label>
          </div>
          {authMode === 'signin' && (
            <p>
              <a href="#" onClick={handleForgotPassword}>Forgot Password?</a>
            </p>
          )}
          <p>or continue with</p>
          <button className="google-button">Google</button>
          <p className="terms">
            By clicking continue, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
          </p>
        </div>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={() => setShowPopup(false)}>&times;</span>
            <p>{popupMessage}</p>  {/* Display popup message */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
