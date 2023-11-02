import React, { useEffect, useState } from "react";
import { auth, provider } from "../../firebase.config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";

const GoogleAuth = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      toast.success("login sucessfully");
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });
  
  return (
    <>
      {value ? (
        navigate("/home")
      ) : (
        <div className="justify-content-center">
          <GoogleButton className="rounded-1" onClick={handleClick}>
            Login With Google
          </GoogleButton>
        </div>
      )}
    </>
  );
};

export default GoogleAuth;
