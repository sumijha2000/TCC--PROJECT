import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(null);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleDropdown = (index) => {
    setDropdownActive(dropdownActive === index ? null : index);
  };

  return (
    <nav className='container'>
     <Link to="/"><img src={logo} alt="logo" className='logo' /></Link> 
      <button className='menu-toggle' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={menuActive ? 'active' : ''}>
        <li onMouseEnter={() => toggleDropdown(0)} onMouseLeave={() => toggleDropdown(null)}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <ul className={dropdownActive === 0 ? 'dropdown active' : 'dropdown'}>
            {/* <li><Link to="/sub-home1" onClick={toggleMenu}>Sub Home 1</Link></li>
            <li><Link to="/sub-home2" onClick={toggleMenu}>Sub Home 2</Link></li> */}
          </ul>
        </li>
        <li onMouseEnter={() => toggleDropdown(1)} onMouseLeave={() => toggleDropdown(null)}>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <ul className={dropdownActive === 1 ? 'dropdown active' : 'dropdown'}>
            {/* <li><Link to="/sub-about1" onClick={toggleMenu}>Sub About 1</Link></li>
            <li><Link to="/sub-about2" onClick={toggleMenu}>Sub About 2</Link></li> */}
          </ul>
        </li>
        <li onMouseEnter={() => toggleDropdown(2)} onMouseLeave={() => toggleDropdown(null)}>
          <Link to="/blog" onClick={toggleMenu}>Blog-News</Link>
          <ul className={dropdownActive === 2 ? 'dropdown active' : 'dropdown'}>
            <li><Link to="/userinventions" onClick={toggleMenu}>Users Inventions</Link></li>
            {/* <li><Link to="/sub-blog2" onClick={toggleMenu}>Sub Blog 2</Link></li> */}
          </ul>
        </li>
        <li onMouseEnter={() => toggleDropdown(3)} onMouseLeave={() => toggleDropdown(null)}>
          <Link to="/contact" onClick={toggleMenu}>
            Contact Us
            <span className="dropdown-symbol"></span>
          </Link>
          <ul className={dropdownActive === 3 ? 'dropdown active' : 'dropdown'}>
            <li><Link to="/signup" onClick={toggleMenu}>SignUp</Link></li>
            {/* <li><Link to="/sub-contact2" onClick={toggleMenu}>Sub Contact 2</Link></li> */}
          </ul>
        </li>
        {/* Search list item */}
        {/* <li className="search-container" onMouseEnter={() => toggleDropdown(4)} onMouseLeave={() => toggleDropdown(null)}>
          <input type="text" className="search-input" placeholder="Search..." />
          <i className="search-icon">&#128269;</i>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
