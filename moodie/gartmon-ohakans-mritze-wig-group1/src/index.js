import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/database";
import {render} from "react-dom";


// import mainModel from './mainModel.js'

// const root = ReactDOM.createRoot(document.getElementById('root'));
/*let movieModel = new MovieModel();
let weatherModel = new weatherModel();*/

// let model = new mainModel()

// // using require() instead of import, for the above assignments to take effect before ReactRoot is loaded
const ReactRoot=require("./reactRoot.js").default;

// TODO render ReactRoot into the "root" div
render(
  <ReactRoot/>,
  document.getElementById('root')
);     



// root.render(
//   <React.StrictMode>
//     <App model={model}/>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
