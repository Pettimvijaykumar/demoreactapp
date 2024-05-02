// import React, { useState } from 'react';
// import './faculty.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export default function FacultyLogin({ onFacultyLogin }) {
//   const [formData, setFormData] = useState({
//     username: '',
//     password: ''
//   });
//   const [errorMessage, setErrorMessage] = useState('');

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:2014/checkfacultylogin', formData);
//       if (response.data) {
//         onFacultyLogin();
//         localStorage.setItem('faculty', JSON.stringify(response.data));
//         navigate("/facultyhome");
//       } else {
//         setErrorMessage("Invalid username or password. Please try again.");
//       }
//     } catch (error) {
//       setErrorMessage("An error occurred while processing your request. Please try again later.");
//       console.error("Error:", error.message);
//     }
//   };

//   return (
//     <div>
//       <h3 align="center"><u>Faculty Login</u></h3>
//       {errorMessage && <h4 align="center" style={{ color: 'red' }}>{errorMessage}</h4>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input type="text" name="username" value={formData.username} onChange={handleChange} required />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} required />
//         </div>
//         <button type="submit" className="button">Login</button>
//       </form>
//     </div>
//   );
// }




import React, { useState } from 'react';
import './faculty.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import your background image
// import backgroundImage from './path_to_your_image.jpg';

export default function FacultyLogin({ onFacultyLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2014/checkfacultylogin', formData);
      if (response.data) {
        onFacultyLogin();
        localStorage.setItem('faculty', JSON.stringify(response.data));
        navigate("/facultyhome");
      } else {
        setErrorMessage("Invalid username or password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while processing your request. Please try again later.");
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="faculty-login-container">
      <div className="faculty-login-form">
        <h3 align="center"><u>Faculty Login</u></h3>
        {errorMessage && <h4 align="center" style={{ color: 'red' }}>{errorMessage}</h4>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>
          <button type="submit" className="button">Login</button>
        </form>
      </div>
    </div>
  );
}
