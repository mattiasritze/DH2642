import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
 import LoginView from "../views/loginView.js"
import '../App.css';
import {auth} from '../firebase';


function LoginPresenter(props){
    const navigate = useNavigate();
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const googleProvider = new GoogleAuthProvider();

    useEffect(initialGetUserLocation, []);

    function initialGetUserLocation(){
      props.model.getUserLocation();
    }

    async function signIn(){
      await
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        navigate("/home")
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });}

    function guestLogin(){
      localStorage.setItem('guestLoggedIn', 'true')
      navigate("/home")
      props.model.numberOfMovies = 0;     //Set guest counter to 0 everytime a guest logs in.
    }


    //Google Authentication function that displays with a pop-up window from Firebase
  async function signInWithGoogle(){
  try {
    const res = await signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        navigate("/home"); 
      });
  }
  catch (error) {
    // Handle Errors here.
    console.error(error);
  }
};
 
    return (
       <LoginView  
        setEmail = {setEmail}
        setPassword = {setPassword}
       signIn ={signIn}
       signInWithGoogle = {signInWithGoogle}
       guestLogin={guestLogin}
       />
      );
}

export default LoginPresenter;