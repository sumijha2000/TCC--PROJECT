// FieldForm.jsx
import React from 'react';

const FieldForm = ({ title, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="form">
      <h3>{title}</h3>
      <form onSubmit={handleSubmit}>
        <label>Image:</label>
        <input type="file" name="image" />
        <br />
        <label>Head:</label>
        <input type="text" name="head" />
        <br />
        <label>Categories:</label>
        <input type="text" name="categories" />
        <br />
        <label>Description:</label>
        <textarea name="description" />
        <br />
        <label>Video:</label>
        <input type="text" name="video" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FieldForm;
