import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function Register(props){

   async function registerWithEmailPasswordACB(event){
      event.preventDefault();
      props.registerWithEmailPassword();
    }

    function setEmailACB(event){
      props.setEmail(event.target.value);
  }

  function setPasswordACB(event){
      props.setPassword(event.target.value);
  }
    return (
        <div className="login">
          <div className="loginFormation">
            <input type="email" id="email" className="block text-black bg-white my-px px-2 py-2 font-semibold rounded transition duration-200 hover:scale-105" onChange={setEmailACB} placeholder="Email"/>
            <input type="password" id="password" className="block text-black bg-white my-px px-2 py-2 font-semibold rounded transition duration-200 hover:scale-105" onChange={setPasswordACB} placeholder="Password"/>
            <button className="block text-black bg-white my-px px-2 py-2 font-semibold rounded transition duration-200 hover:scale-105" onClick={registerWithEmailPasswordACB}>
              Register
            </button>
            <div className="text-white">
              Already have an account? <NavLink to="/">Login here</NavLink>
            </div>
          </div>
        </div>
      );
}
export default Register;