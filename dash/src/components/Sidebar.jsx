import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoimg from '../assets/logo.svg';
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showIconsOnly, setShowIconsOnly] = useState(true);
  const [showFormsDropdown, setShowFormsDropdown] = useState(false);
  const [showTablesDropdown, setShowTablesDropdown] = useState(false);
  const [showInventionsFormsDropdown, setShowInventionsFormsDropdown] = useState(false);
  const [showInventionsTablesDropdown, setShowInventionsTablesDropdown] = useState(false);

  const toggleSidebar = () => {
    setShowIconsOnly(!showIconsOnly);
  };

  const toggleFormsDropdown = () => {
    setShowFormsDropdown(!showFormsDropdown);
  };

  const toggleTablesDropdown = () => {
    setShowTablesDropdown(!showTablesDropdown);
  };

  const toggleInventionsFormsDropdown = () => {
    setShowInventionsFormsDropdown(!showInventionsFormsDropdown);
  };

  const toggleInventionsTablesDropdown = () => {
    setShowInventionsTablesDropdown(!showInventionsTablesDropdown);
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem('token'); // Get token from local storage

      if (!token) {
        console.log('No token found');
        navigate('/'); // Redirect to homepage if no token is found
        return;
      }

      const payload = {
        "eventID": "1001",
        "addInfo": {
          "token": token,
        }
      };

      const response = await axios.post('http://localhost:5164/admin/logout', payload);
      console.log(response);

      localStorage.removeItem('token'); // Remove token from local storage upon successful logout
      console.log(response.data.rMessage); // Log the response message
      navigate('/'); // Redirect to homepage after successful logout
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };




  return (
    <div className={`sidebar ${showIconsOnly ? 'icons-only' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="fas fa-bars"></i>
      </div>
      <Link to='/admin'><img src={logoimg} alt="Logo" className="sidebar-logo" /></Link> 
      <h2 className="sidebar-heading">TimeCapsuleCreations</h2>
      <ul className="sidebar-menu">
        <li>
          <div className="sidebar-dropdown" onClick={toggleFormsDropdown}>
            {showIconsOnly ? <i className="fas fa-edit sidebar-icon"></i> : 'Forms'}{' '}
            <i className="fas fa-chevron-down"></i>
          </div>
          {showFormsDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/blogsform">
                  <i className="fas fa-pen-square"></i> {showIconsOnly ? '' : 'Blog Form'}
                </Link>
              </li>
              <li>
                <Link to="/inventorsform">
                  <i className="fas fa-user-plus"></i> {showIconsOnly ? '' : 'Inventors Form'}
                </Link>
              </li>
              <li>
                <div className="sidebar-dropdown" onClick={toggleInventionsFormsDropdown}>
                  {showIconsOnly ? <i className="fas fa-lightbulb"></i> : 'Inventions Form'}{' '}
                  <i className="fas fa-chevron-down"></i>
                </div>
                {showInventionsFormsDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/forms/economy">
                        <i className="fas fa-chart-line"></i>{' '}
                        {showIconsOnly ? '' : 'Economy Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/health">
                        <i className="fas fa-heartbeat"></i>{' '}
                        {showIconsOnly ? '' : 'Health Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/science">
                        <i className="fas fa-flask"></i>{' '}
                        {showIconsOnly ? '' : 'Science Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/sports">
                        <i className="fas fa-futbol"></i>{' '}
                        {showIconsOnly ? '' : 'Sports Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/fashion">
                        <i className="fas fa-tshirt"></i>{' '}
                        {showIconsOnly ? '' : 'Fashion Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/food">
                        <i className="fas fa-utensils"></i>{' '}
                        {showIconsOnly ? '' : 'Food Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/environment">
                        <i className="fas fa-leaf"></i>{' '}
                        {showIconsOnly ? '' : 'Environment Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/communication">
                        <i className="fas fa-comments"></i>{' '}
                        {showIconsOnly ? '' : 'Communication Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/culture">
                        <i className="fas fa-globe"></i>{' '}
                        {showIconsOnly ? '' : 'Culture Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/technology">
                        <i className="fas fa-microchip"></i>{' '}
                        {showIconsOnly ? '' : 'Technology Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/transportation">
                        <i className="fas fa-shipping-fast"></i>{' '}
                        {showIconsOnly ? '' : 'Transportation Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/politics">
                        <i className="fas fa-landmark"></i>{' '}
                        {showIconsOnly ? '' : 'Politics Form'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/forms/medicine">
                        <i className="fas fa-pills"></i>{' '}
                        {showIconsOnly ? '' : 'Medicine Form'}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
        <li>
          <div className="sidebar-dropdown" onClick={toggleTablesDropdown}>
            {showIconsOnly ? <i className="fas fa-table sidebar-icon"></i> : 'Tables'}{' '}
            <i className="fas fa-chevron-down"></i>
          </div>
          {showTablesDropdown && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/tables/usersignup">
                  <i className="fas fa-users"></i> {showIconsOnly ? '' : 'User Signup Table'}
                </Link>
              </li>
              <li>
                <Link to="/tables/contact">
                  <i className="fas fa-address-book"></i> {showIconsOnly ? '' : 'Contact Table'}
                </Link>
              </li>
              <li>
                <div className="sidebar-dropdown" onClick={toggleInventionsTablesDropdown}>
                  {showIconsOnly ? <i className="fas fa-lightbulb"></i> : 'Inventions Table'}{' '}
                  <i className="fas fa-chevron-down"></i>
                </div>
                {showInventionsTablesDropdown && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/economytable">
                        <i className="fas fa-chart-line"></i>{' '}
                        {showIconsOnly ? '' : 'Economy Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/healthtable">
                        <i className="fas fa-heartbeat"></i>{' '}
                        {showIconsOnly ? '' : 'Health Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/sciencetable">
                        <i className="fas fa-flask"></i>{' '}
                        {showIconsOnly ? '' : 'Science Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/foodtable">
                        <i className="fas fa-utensils"></i>{' '}
                        {showIconsOnly ? '' : 'Food Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/fashiontable">
                        <i className="fas fa-tshirt"></i>{' '}
                        {showIconsOnly ? '' : 'Fashion Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/culturetable">
                        <i className="fas fa-globe"></i>{' '}
                        {showIconsOnly ? '' : 'Culture Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/envtable">
                        <i className="fas fa-leaf"></i>{' '}
                        {showIconsOnly ? '' : 'Environment Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/commtable">
                        <i className="fas fa-comments"></i>{' '}
                        {showIconsOnly ? '' : 'Communication Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/techtable">
                        <i className="fas fa-microchip"></i>{' '}
                        {showIconsOnly ? '' : 'Technology Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/transtable">
                        <i className="fas fa-shipping-fast"></i>{' '}
                        {showIconsOnly ? '' : 'Transportation Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/politictable">
                        <i className="fas fa-landmark"></i>{' '}
                        {showIconsOnly ? '' : 'Politics Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/medtable">
                        <i className="fas fa-pills"></i>{' '}
                        {showIconsOnly ? '' : 'Medicine Table'}
                      </Link>
                    </li>
                    <li>
                      <Link to="/sportstable">
                        <i className="fas fa-futbol"></i>{' '}
                        {showIconsOnly ? '' : 'Sports Table'}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/tables/blogs">
                  <i className="fas fa-book"></i> {showIconsOnly ? '' : 'Blogs Table'}
                </Link>
              </li>
              <li>
              <Link to="/tables/uploader">
                  <i className="fas fa-book"></i> {showIconsOnly ? '' : 'Uploader Table'}
                </Link>
              </li>
              <li>
              <Link to="/tables/inventors">
                  <i className="fas fa-book"></i> {showIconsOnly ? '' : 'Inventors Table'}
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <button className="logout-button" onClick={()=> handleLogout()}>
            <i className="fas fa-sign-out-alt"></i> {showIconsOnly ? '' : 'Logout'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
