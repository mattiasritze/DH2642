import NavbarView from "../views/navbarView.js"
import { useState, useEffect } from "react";
import { signOut} from 'firebase/auth';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate} from "react-router-dom";

export default function Navbar(props) {

    const navigate = useNavigate();
    const guestLoggedIn = localStorage.getItem('guestLoggedIn')
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
        } else if (guestLoggedIn === 'false') {
          navigate("/");
        }
    });

   function logOut1(){
        if (guestLoggedIn !== 'false') {
          localStorage.setItem('guestLoggedIn', 'false')
          navigate("/");
        } 
        else {
          signOut(auth).then(() => {
            navigate("/");
          }).catch((error) => {
            console.error(error);
          // An error happened.
        });
    }
}
    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the MovieView.
    return (<div>{<NavbarView logOut={logOut1}/>}</div>)
}