// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
// import Header from './Header';
import '../styles/Dashboard.css';
import './Sidebar.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
 



  const [activeMenu, setActiveMenu] = useState('/'); // Initial active menu is '/'

  return (
    <div className="dashboard">
      <div className="backgroundimage">
        {/* Background image content */}
      </div>
      <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <h1 className="dashboard-heading">Dashboard</h1>
        <div className="dashboard-content">
          <p>Welcome to the dashboard!</p>
          <p>You are currently viewing {activeMenu}.</p>
          <p>Feel free to add more components and data here.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
