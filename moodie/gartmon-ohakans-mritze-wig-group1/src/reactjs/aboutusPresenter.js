import AboutusView from "../views/aboutusView"
import { useState, useEffect } from "react";
import promiseNoData from "../views/promiseNoData"


export default function Aboutus(props) {

    const[weatherPromiseState] = useState({});
    const[, weatherPromiseStateChanged] = useState();

    // Used to do an initial get when the Movie component is created.
    useEffect(initialGetCurrentWeather, []);

    // This callback function is used to do an initial getCurrentMovieDetails, updating the moviePromiseState.
    // This should most likely be deprecated later on.
    function initialGetCurrentWeather(){
        // Testing this with a temporary id of 500. This should of course be dynamically changeable in the final app.
        props.model.currentWeatherID=weatherPromiseState;
        props.model.getCurrentWeather(5, 25, weatherPromiseState, notify)
    }

    // This function is used to notify React of changes in the moviePromiseState. It is called 
    function notify(){
        weatherPromiseStateChanged(new Object());
    }


    return (<div>{promiseNoData(weatherPromiseState) || <AboutusView weatherData={weatherPromiseState.data}/>}</div>)
}