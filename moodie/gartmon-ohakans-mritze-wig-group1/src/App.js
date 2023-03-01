import logo from './logo.svg';
import './App.css';
import { getMovieDetails } from './movieSource.js'
//import MovieModel from './movieModel';
import { getCurrentWeather } from './weatherSource.js'
//import ForgotPassword from './views/forgotPasswordView.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; //third component

import React from "react";
import { Helmet } from "react-helmet";

const Movie = require("./reactjs/moviePresenter.js").default;
const Weather = require("./reactjs/weatherPresenter.js").default;
const Login = require("./reactjs/loginPresenter.js").default;
const Register = require("./reactjs/registerPresenter.js").default;
const ForgotPassword = require("./reactjs/forgotPasswordPresenter.js").default;
const Navbar = require("./reactjs/navbarPresenter.js").default;
const Aboutus = require("./reactjs/aboutusPresenter.js").default;

export default
  function App(props) {

  return (
      <div>
      {/* <div className="app">⁄ */}
      <Router>
        <Routes>
          <Route exact path="/home" element={(<>
            <Navbar model={props.model}/>
            <div>
            <div className="center-home">
              <div className="bg-neutral-900 p-6 pr-12 pl-12 rounded-3xl w-2/4 border-solid mt-12 mb-12 border-2 border-white">
            <Weather model={props.model} />
            <Movie model={props.model} />
              </div>
            </div>
            </div></>)} />

          <Route exact path="/about-us" element={
            <div>
            <Navbar model={props.model}/>
            <div className="center-center">
            <div className="center-fullscreen bg-neutral-900 bg-opacity-20">
            <div className="bg-neutral-900 p-6 pr-12 pl-12 rounded-3xl w-2/4 border-solid mt-12 border-2 border-white">
          <Aboutus model={props.model}/>
          </div>
          </div>
          </div>
          </div>}/>  
          <Route exact path="/" element={<Login model={props.model}/>} />
          <Route exact path="/register" element={<Register model={props.model} />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword model={props.model} />} />
        </Routes>
      </Router>
  </div>
  );
}
/*

}*/