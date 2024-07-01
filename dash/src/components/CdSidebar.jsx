import React, { useState } from 'react';
import { css } from '@emotion/css';
import { FaUser, FaBriefcase, FaClipboardList, FaTrashAlt, FaSignOutAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CdSidebar = () => {

  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5164/logoutuser', {logoutMessage});
      setLogoutMessage(response.data);
      // Handle any further actions after successful logout
      Logout();
      
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error scenarios
    }
  };
  
  const handleDelete = async () => {
    try {
      const response = await axios.post('http://localhost:5164/logoutuser', {logoutMessage});
      setLogoutMessage(response.data);
      // Handle any further actions after successful logout
      Delete();
      
    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error scenarios
    }
  };
  

  const Delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Account has been deleted.",
          icon: "success"
        });
      }
    }).then((result) => {
      if (true) {
       navigate('/');
      }
    });
  }
  const Logout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to log out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, do it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Logout Successfully.",
          icon: "success"
          

        });
      }
     
    }).then((result) => {
      if (true) {
        navigate('/');
      }
     
    });
  }


  return (
    <div className={sidebar}>
      <div className={profile}>
        <img src="profile-pic.jpg" alt="Logo" className={profileImage} />
        <h2 className={profileName}>Candidate Name</h2>
      </div>
      <nav className={navMenu}>
        <NavLink to="/candidatedashboard" className={navLink}><FaUser className={icon} /> Dashboard</NavLink>
        <NavLink to="/careers" className={navLink}><FaBriefcase className={icon} /> Careers</NavLink>
        <NavLink to="/myjobs" className={navLink}><FaClipboardList className={icon} /> My Jobs</NavLink>
        <NavLink onClick={handleDelete} to="#" className={navLink}><FaTrashAlt className={icon} /> Delete Account</NavLink>
      </nav>
      <NavLink to="#" onClick={handleLogout} type='submit' className={logout}><FaSignOutAlt className={icon} /> Logout</NavLink>

    </div>
  );
};

// Import styles from styles.js
import { sidebar, profile, profileImage, profileName, navMenu, navLink, icon, logout } from '../styles/styles.jsx';


export default CdSidebar;
