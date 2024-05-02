import React from 'react'
import { Route, Routes, Link ,useNavigate} from 'react-router-dom'
import './faculty.css'
export default function FacultyNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');

    navigate('/facultylogin');
    window.location.reload()
  };
  return (
    <div>

    <nav>
     <ul>
     <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
     </ul>
     </nav>

         <Routes>
          
        </Routes>

    </div>
  )
}