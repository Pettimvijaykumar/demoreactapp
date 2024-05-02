import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import config from '../config'

export default function ViewCourse() {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const viewCourse= async (email) => {
    try 
    {
      navigate(`/viewcourse/${email}`)
      window.location.reload()
    } 
    catch (error) 
    {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Courses</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course No</th>
              <th>Course Name</th>
              <th>Modes</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(courses) && courses.length > 0 ? (
    courses.map((course, index) => (
      <tr key={index}>
        <td>{course.courseno}</td>
        <td>{course.coursename}</td>
        <td>{course.modes}</td>
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