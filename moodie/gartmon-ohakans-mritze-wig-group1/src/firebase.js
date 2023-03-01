import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
import mainModel from "./mainModel"

//Our firebaseConfi
const firebaseConfig = {
  apiKey: "AIzaSyCq-pVqvKQNvuEc9VkB66-gmGKkeQwOaf4",
  authDomain: "moodie-1.firebaseapp.com",
  databaseURL: "https://moodie-1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moodie-1",
  storageBucket: "moodie-1.appspot.com",
  messagingSenderId: "132514116513",
  appId: "1:132514116513:web:10981ff700cf56a4c311e0",
  measurementId: "G-N4CHLB2DWX"
};

//This will use our config to recognize the project and initialize authentication and database modules.
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth(app);
let userId
const REF = "userMovies";

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    userId = user.uid
    console.log('asd', user.uid);
  }
});

function observerRecap(model) {
  function payloadLogCB(payload) { console.log('observerRecap', payload) }
  model.addObserver(payloadLogCB)
}

function firebaseModelPromise() {
  function makeBigPromiseACB(firebaseData) {
    return new mainModel(0);
  }
  return firebase.database().ref(REF + "/users").once("value").then(makeBigPromiseACB);
}

function updateFirebaseFromModel(model) {
  function setPayloadInFbCB(payload) {
    if (payload.num) {
      console.log("number clicked", payload);
      firebase.database().ref(REF + "/users/" + userId + "/movies").set(payload.num);
    }
  }
  model.addObserver(setPayloadInFbCB)
  return;
}

function updateModelFromFirebase(model) {
 
    firebase.database().ref(REF + "/users/" + userId + "/movies").on("value",
      function moviesChangedInFirebaseACB(firebaseData) {
        model.setNumberOfMovies(firebaseData.val());
      });
  // } else {
  //   model.setNumberOfMovies(0);
  // }
}

export { observerRecap, firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase, app };
