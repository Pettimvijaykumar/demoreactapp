import React, { useState } from 'react';
import axios from 'axios';

export default function FacultyRegistration() 
{
  const [formData, setFormData] = useState({
    fullname: '',
    id: '',
    email: '',
    password: '',
    contact: ''
  });

 
  const [message, setMessage] = useState('');
  //error state variable
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
      const response = await axios.post('http://localhost:2014/insertfaculty', formData);
      if (response.status === 200) 
      {
        setFormData({
          fullname: '',
          id: '',
          email: '',
          password: '',
          contact: ''
        });
      }
      setMessage(response.data);
      setError('') 
    } 
    catch (error) 
    {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  
  return (
    <div>
      <h3 align="center"><u>Faculty Registration</u></h3>
      {
        message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>
      }

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} required />
        </div>    
        <div>
          <label>ID</label>
          <input type="text" id="id" value={formData.id} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Contact</label>
          <input type="number" id="contact" value={formData.contact} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}