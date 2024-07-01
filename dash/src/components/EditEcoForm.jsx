import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditEcoForm = ({ match, history }) => {

  const navigate = useNavigate();


  const token = localStorage.getItem('token'); // Get token from local storage

 useEffect(() => {
  if (!token) {
    console.log('No token found');
    navigate('/'); // Redirect to homepage if no token is found
    return;
  }
 }, [])
  const { id } = match.params;
  const [formData, setFormData] = useState({
    categories: '',
    description: '',
    video_name: '',
    video: ''
  });

  useEffect(() => {
    // Fetch existing data for the selected ID
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5164/inventions/editInvention/${id}`);
        const { Categories, Description, video_name, Videos } = response.data;
        setFormData({
          categories: Categories,
          description: Description,
          video_name: video_name,
          video: Videos
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, video: reader.result, video_name: file.name });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      eventID: "1001",
      addInfo: {
        Categories: formData.categories,
        Description: formData.description,
        video_name: formData.video_name,
        Videos: formData.video
      }
    };
    try {
      await axios.put(`http://localhost:5164/inventions/editInvention/${id}`, payload);
      alert('Successfully updated!');
      history.push('/economytable');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      <h2>Edit Economy Form for ID: {id}</h2>
      <form onSubmit={handleSubmit}>
        <label>Categories:</label>
        <input type="text" name="categories" value={formData.categories} onChange={handleChange} />
        <br />
        <label>Description:</label>
        <textarea name="description" value={formData.description} onChange={handleChange} />
        <br />
        <label>Video:</label>
        <input type="file" name="video" onChange={handleVideoChange} accept="video/*" />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditEcoForm;
