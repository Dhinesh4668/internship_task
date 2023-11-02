import React from "react";
import { Link } from 'react-router-dom';
import GoogleAuth from '../login/GoogleAuth';
import {toast} from 'react-toastify'
import { useNavigate } from "react-router-dom";
import {TbLogout} from 'react-icons/tb'
import{BiHomeAlt, }from 'react-icons/bi'
import {FiEdit2} from 'react-icons/fi'
const Slider = () => {
  const isLoggedIn = localStorage.getItem('email'); 
  const navigate = useNavigate()
  return (
      <div className="d-flex flex-row justify-content-around mb-4  p-3 text-white bg-secondary">
        {isLoggedIn ? (
          <>
            <div>
              <Link className="nav-link font-weight-bold" to="/home"><BiHomeAlt size={25} alignmentBaseline="central"/> Home</Link>
            </div>
            <div>
              <Link  className="nav-link font-weight-bold" to="/create"><FiEdit2 size={25} alignmentBaseline="central"/> Create Task</Link>
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
