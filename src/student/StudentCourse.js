import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config'

export default function StudentCourse() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseno: '',
    coursename: '',
    modes: '',
    l: '',
    t: '',
    p: '',
    s: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Ensure that required fields are included in formData
      const { courseno, coursename, modes, l, t, p, s } = formData;
      if (!courseno || !coursename || !modes) {
        throw new Error('Course number, course name, and modes are required.');
      }

      const response = await axios.post(`${config.url}/insertcourse`, {
        courseno,
        coursename,
        modes,
        l,
        t,
        p,
        s
      });

      if (response.status === 200) {
        setFormData({
          courseno: '',
          coursename: '',
          modes: '',
          l: '',
          t: '',
          p: '',
          s: ''
        });
      }
      setMessage(response.data);
      setError('');
    } catch (error) {
      setError(error.message);
      setMessage('');
    }
  };
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Course Registration</h1>
      <form onSubmit={handleSubmit}>
      <table border={1} align="left" style={{ width: '700%', maxWidth: '800px', height: 'auto' }}>
          <thead>
            <tr>
              <th>Course No</th>
              <th>Course Name</th>
              <th>Modes</th>
              <th>L</th>
              <th>T</th>
              <th>P</th>
              <th>S</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(courses) && courses.length > 0 ? (
              courses.map((course, index) => (
                <tr key={index}>
                   
                   <td>
                    <select id="courseno" value={formData.courseno} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="C-2">C-2</option>
                      <option value="C-3">C-3</option>
                      <option value="C-4">C-4</option>
                      <option value="C-5">C-5</option>
                    </select>
                  </td>
                  <td>
                    <select id="coursename" value={formData.coursename} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="Mern">Mern</option>
                      <option value="Python">Python</option>
                      <option value="C">C</option>
                      <option value="OS">OS</option>
                    </select>
                  </td>
                  <td>
                    <select id="modes" value={formData.modes} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="Regular">Regular</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </td>
                  <td>
                    <select id="l" value={formData.l} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="s11">s11</option>
                      <option value="s12">s12</option>
                      <option value="s21">s21</option>
                      <option value="s22">s22</option>
                      <option value="s31">s31</option>
                      <option value="s32">s32</option>
                    </select>
                  </td>
                  <td>
                    <select id="t" value={formData.t} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="s11">s11</option>
                      <option value="s12">s12</option>
                      <option value="s21">s21</option>
                      <option value="s22">s22</option>
                      <option value="s31">s31</option>
                      <option value="s32">s32</option>
                    </select>
                  </td>
                  <td>
                    <select id="p" value={formData.p} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="s11">s11</option>
                      <option value="s12">s12</option>
                      <option value="s21">s21</option>
                      <option value="s22">s22</option>
                      <option value="s31">s31</option>
                      <option value="s32">s32</option>
                    </select>
                  </td>
                  <td>
                    <select id="s" value={formData.s} onChange={handleChange} required>
                      <option value="">Select Section</option>
                      <option value="s11">s11</option>
                      <option value="s12">s12</option>
                      <option value="s21">s21</option>
                      <option value="s22">s22</option>
                      <option value="s31">s31</option>
                      <option value="s32">s32</option>
                    </select>
                  </td>
                  <td>
                    <button type="submit" className='button'>Register Course</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9">Data Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
}