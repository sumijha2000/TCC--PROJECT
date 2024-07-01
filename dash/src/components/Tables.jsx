// Tables.jsx
import React from 'react';
import UserSignupTable from './UserSignupTable';
import ContactTable from './ContactTable';
import UploaderTable from './UploaderTable';
import InventorsTable from './InventorsTable';
import InventionTable from './InventionTable';
import BlogsTable from './BlogsTable';

const Tables = () => {
  return (
    <div className="tables">
      <h2>Tables</h2>
      <div className="table-section">
        <UserSignupTable />
      </div>
      <div className="table-section">
        <ContactTable />
      </div>
      <div className="table-section">
        <UploaderTable />
      </div>
      <div className="table-section">
        <InventorsTable />
      </div>
      <div className="table-section">
        <InventionTable />
      </div>
      <div className="table-section">
        <BlogsTable />
      </div>
    </div>
  );
};

export default Tables;
