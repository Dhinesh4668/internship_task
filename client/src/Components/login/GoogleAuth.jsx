import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

// import {} from 'react-icons'
const GoogleAuth = () => {
  const [value, setValue] = useState("");
const navigate = useNavigate();
  // const history = useHistory()
  // google signin handle click
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);


      // history.push('/home')
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  return (
    <>
      {value ? (
        navigate('/home')
      ) : (
        <div className="justify-content-center">
          <button className="btn btn-primary" onClick={handleClick}>
            Login With Google
          </button>
        </div>
      )}
    </>
  );
};

export default GoogleAuth;
