import React from 'react';
import { css } from '@emotion/css';

const CdDashboard = () => {
  return (
    <div className={dashboard}>
      <h1 className={welcomeMessage}>Welcome Candidate Name</h1>
    </div>
  );
};

// Import styles from styles.js
import { dashboard, welcomeMessage } from '../styles/styles.jsx';

export default CdDashboard;
