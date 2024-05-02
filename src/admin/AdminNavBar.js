import React from 'react'
import { Route, Routes, Link ,useNavigate} from 'react-router-dom'

import './admin.css'
import AdminHome from './AdminHome';
import ViewStudents  from './ViewStudents';
import ViewFacultys from './ViewFacultys';




import AddCourse from './AddCourse';
import ViewCourse from './ViewCourses';
export default function AdminNavBar() 
{
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/adminlogin');
    window.location.reload()
  };
  return (
    <div>
    <nav>
      <ul>
      <Link to="/adminhome">Home</Link>
      <Link to="/ViewStudents ">View students</Link>
      <Link to="/ViewFacultys">View facultys</Link> 
      <Link to="/addcourse">Add Course</Link>
      <Link to="/viewcourse">View Course</Link>

      <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
    </nav>

         <Routes>
         <Route path="/adminhome" Component={AdminHome} exact/>
        
         <Route path="/viewstudents" Component={ViewStudents} exact/>
         <Route path="/viewfacultys" Component={ViewFacultys} exact/>
         

         <Route path="/addcourse" Component={AddCourse} exact/> 
         <Route path="/viewcourse" Component={ViewCourse} exact/> 

        </Routes>

    </div>
  )
}