import React from 'react';
import { css } from '@emotion/css';

const AdDashboard = () => {
  return (
    <div className={dashboard}>
      <h1 className={welcomeMessage}>Welcome Admin Name</h1>
    </div>
  );
};

// Import styles from styles.js
import { dashboard, welcomeMessage } from '../styles/styles.jsx';

export default AdDashboard;
