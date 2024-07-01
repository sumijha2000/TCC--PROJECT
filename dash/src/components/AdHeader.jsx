import React from 'react';
import { css } from '@emotion/css';
import { FiSearch } from 'react-icons/fi';

const AdHeader = () => {
  return (
    <header className={header}>
      <input type="text" placeholder="Search here..." className={searchInput} />
      <button className={searchButton}><FiSearch /></button>
    </header>
  );
};

// Import styles from styles.js
import { header, searchInput, searchButton } from '../styles/styles.jsx';

export default AdHeader;
