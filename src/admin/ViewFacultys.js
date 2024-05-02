import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function ViewFacultys() {
  const [facultys, setFacultys] = useState([]);

  const fetchFacultys = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfacultys`);
      setFacultys(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }
 useEffect(() => {
    fetchFacultys();
  }, []);

  const deleteFaculty= async (email) => {
    try {
      await axios.delete(`${config.url}/deletefaculty/${email}`);
      fetchFacultys();
    } catch (error) {
      console.error(error.message);
    }
  }
return (
    <div style={{ textAlign: 'center' }}>
      <h1>Facultys</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Id</th>
              <th>Email</th>
              <th>Password</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(facultys) && facultys.length > 0 ? (
    facultys.map((faculty, index) => (
      <tr key={index}>
        <td>{faculty.fullname}</td>
        <td>{faculty.id}</td>
        <td>{faculty.email}</td>
        <td>{faculty.password}</td>
        <td>{faculty.contact}</td>
        <td>
          <button onClick={() => deleteFaculty(faculty.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}