import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function ForgotPasswordView(props) {

  function setEmailACB(event){
    props.setEmail(event.target.value);
}

function resetPasswordACB(){
  props.resetPassword();
}

  return (
    <div className="login">
      <div className="loginFormation">
        <input type="email" id="email" className="block text-black bg-white my-px px-2 py-2 font-semibold rounded transition duration-200 hover:scale-105" onChange={setEmailACB} placeholder="Email" />
        <button className="block text-black bg-white my-px px-2 py-2 font-semibold rounded transition duration-200 hover:scale-105" onClick={resetPasswordACB}>
          Send password reset email
        </button>
        <div className="text-white">
          Don't have an account? <NavLink to="/register">Register</NavLink> now.
        </div>
        <div className="text-white">
           <NavLink to="/">Go back to login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordView;