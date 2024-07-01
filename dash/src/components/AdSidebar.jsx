import React, { useState } from 'react';
import { css } from '@emotion/css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaUser, FaBriefcase, FaClipboardList, FaSignOutAlt, FaPlus } from 'react-icons/fa';
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleArrows } from "react-icons/fa";
import { FcFeedback } from "react-icons/fc";
import Swal from 'sweetalert2';
import { NavLink, useNavigate } from 'react-router-dom';

const AdSidebar = () => {

  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5164/logoutadmin', { logoutMessage });
      setLogoutMessage(response.data);
      // Handle any further actions after successful logout
      Logout();

    } catch (error) {
      console.error('Error during logout:', error);
      // Handle error scenarios
    }
  };


  // const Delete = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete it!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire({
  //         title: "Deleted!",
  //         text: "Your Account has been deleted.",
  //         icon: "success"
  //       });
  //     }
  //   });
  // }


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
        <h2 className={profileName}>Admin Name</h2>
      </div>
      <nav className={navMenu}>
        <NavLink to="/admindashboard" className={navLink}><FaUser className={icon} /> Dashboard</NavLink>
        <NavLink to="/alljobs" className={navLink}><FaBriefcase className={icon} /> All Jobs</NavLink>
        <NavLink to="/allcandidates" className={navLink}><FaClipboardList className={icon} /> All Candidates</NavLink>
        <NavLink to="/allteammembers" className={navLink}><FaPeopleGroup className={icon} /> All TeamMembers</NavLink>
        <NavLink to="/allfeedbacks" className={navLink}><FcFeedback className={icon} /> All Feedbacks</NavLink>
        <NavLink to="/postjob" className={navLink}><FaPlus className={icon} /> Post Job</NavLink>
        <NavLink to="/addteam" className={navLink}><FaPeopleArrows className={icon} /> Add Team</NavLink>
      </nav>
      <NavLink onClick={handleLogout} to="#" className={logout}><FaSignOutAlt className={icon} /> Logout</NavLink>
    </div>
  );
};

// Import styles from styles.js
import { sidebar, profile, profileImage, profileName, navMenu, navLink, icon, logout } from '../styles/styles.jsx';
import axios from 'axios';


export default AdSidebar;
