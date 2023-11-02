import React from "react";
import { Link } from 'react-router-dom';
import GoogleAuth from '../login/GoogleAuth'; // Import your GoogleAuth component
import { useNavigate } from "react-router-dom";
const Slider = () => {
  const isLoggedIn = localStorage.getItem('email'); 
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Daily Task Planner</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ml-auto">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/create">Create Task</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-danger" onClick={()=>{
                    localStorage.clear();
                    navigate('/')
                  }}>Logout</button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <GoogleAuth />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Slider;
