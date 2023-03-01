import React, { useState } from "react";
import {  sendPasswordResetEmail  } from 'firebase/auth';
import { auth } from '../firebase';
import ForgotPasswordView from "../views/forgotPasswordView.js"
import '../App.css';

function ForgotPasswordPresenter() {
  const [email, setEmail] = useState("");

// function that will send a password reset link to an email address
const sendPasswordReset = async () => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

  return (
    < ForgotPasswordView
        setEmail = {setEmail}
        resetPassword = {sendPasswordReset}
    />
  );
}

export default ForgotPasswordPresenter;