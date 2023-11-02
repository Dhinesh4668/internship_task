import React from "react";
import { Link } from 'react-router-dom';
import GoogleAuth from '../login/GoogleAuth';
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import {TbLogout} from 'react-icons/tb'

const Slider = () => {
  const isLoggedIn = localStorage.getItem('email'); 
  const navigate = useNavigate()
  return (
      <div className="d-flex flex-row justify-content-around mb-4  p-3 text-white bg-secondary">
        {isLoggedIn ? (
          <>
            <div>
              <Link className="nav-link font-weight-bold" to="/home">Home</Link>
            </div>
            <div>
              <Link  className="nav-link font-weight-bold" to="/create">Create Task</Link>
            </div>
            <div>
              <button className="btn btn-danger font-weight-bold" onClick={() => {
                localStorage.clear();
                navigate('/');
                toast.success("Logout successfully");
              }}><TbLogout size={25} /> Logout</button>
            </div>
          </>
        ) : (
          <div className="nav-item">
            <GoogleAuth />
          </div>
        )}
    </div>
  );
};

export default Slider;
