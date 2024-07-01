// InventionTable.jsx
import React, { useState } from 'react';

const InventionTable = () => {
  const [inventions, setInventions] = useState([
    { id: 1, head: 'Electric Car', categories: 'Technology', description: 'Description of electric car invention', image: 'car.jpg', video: 'electric_car.mp4' },
    { id: 2, head: 'Penicillin', categories: 'Health', description: 'Description of penicillin invention', image: 'penicillin.jpg', video: 'penicillin.mp4' },
    // Add more sample data as needed
  ]);

  const handleEdit = (id) => {
    // Handle edit logic
    console.log(`Edit invention with ID ${id}`);
  };

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Delete invention with ID ${id}`);
  };

  return (
    <div className="table-container">
      <h3>Invention Table</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Head</th>
            <th>Categories</th>
            <th>Description</th>
            <th>Image</th>
            <th>Video</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventions.map(invention => (
            <tr key={invention.id}>
              <td>{invention.id}</td>
              <td>{invention.head}</td>
              <td>{invention.categories}</td>
              <td>{invention.description}</td>
              <td>{invention.image}</td>
              <td>{invention.video}</td>
              <td>
                <button onClick={() => handleEdit(invention.id)}>Edit</button>
                <button onClick={() => handleDelete(invention.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventionTable;
