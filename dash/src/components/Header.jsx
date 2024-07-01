// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="dashboard-header">
      <Link to="/" className="home-link">
        <FaHome className="home-icon" />
        Admin Panel
      </Link>
    </header>
  );
};

export default Header;
