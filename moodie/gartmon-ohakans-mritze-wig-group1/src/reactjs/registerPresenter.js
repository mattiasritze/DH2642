import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import '../App.css';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
import RegisterView from "../views/registerView.js"

function RegisterPresenter(){
    const[email, setEmail] = useState(" ");
    const[password, setPassword] = useState(" ");
    const navigate = useNavigate();

   async function registerWithEmailPasswordACB(){
      await
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        //signed in
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
    }

    return (
       < RegisterView
        setEmail = {setEmail}
        setPassword = {setPassword}
        registerWithEmailPassword = {registerWithEmailPasswordACB}
        />
      );
}
export default RegisterPresenter;