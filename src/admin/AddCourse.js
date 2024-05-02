import React, { useState } from 'react';
import axios from 'axios';
import config from '../config'

export default function AddCourse() 
{
  const [formData, setFormData] = useState({
    sno:'',
    coursetitle: '',
    coursecode: '',
    modes: ''
  });
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  const handleChange = (e) => 
  {
    setFormData({...formData, [e.target.id]: e.target.value});
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/addcourse`, formData);
      if (response.status === 200) 
      {
        setFormData({
          sno:'',
          coursetitle: '',
          coursecode: '',
          modes: '',
        });
      }
      setMessage(response.data);
      setError('');
    } 
    catch(error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div>
      <h3 align="center"><u>Add Courses</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
      <div>
        <label>S.NO</label>
          <input type="text" id="sno" value={formData.sno} onChange={handleChange} required />
          <label>Course Title</label>
          <input type="text" id="coursetitle" value={formData.coursetitle} onChange={handleChange} required />
          <label>Course Code</label>
          <input type="text" id="coursecode" value={formData.coursecode} onChange={handleChange} required />
        </div>
        <div>
          <label>Modes</label>
          <select id="modes" value={formData.modes} onChange={handleChange} required>
            <option value="">Select Modes</option>
            <option value="Regular">Regular</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div> 
        <button type="submit">Add</button>
      </form>
    </div>
  );
}