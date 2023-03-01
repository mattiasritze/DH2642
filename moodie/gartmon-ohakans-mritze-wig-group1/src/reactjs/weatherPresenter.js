import promiseNoData from "../views/promiseNoData"
import WeatherView from "../views/weatherView.js"
import { useState, useEffect } from "react";

export default function Weather(props) {
    // This is used to make the component stateful. The upper useState() sets an empty moviePromiseState. The lower doesn't store any state information but is
    // solely used to force re-renders upon calls to the moviePromiseStateChanged function (See lecture slide 119 - 135 for further explanations of what is going on here).
    const[weatherPromiseState] = useState({});
    const[, weatherPromiseStateChanged] = useState();

    function getWeatherPromiseState(){
        //return weatherPromiseState;
    }

    // Used to do an initial get when the weather component is created
    useEffect(initialGetCurrentWeather, []);

    function initialGetCurrentWeather(){
        props.model.currentWeatherID=weatherPromiseState;
        props.model.getCurrentWeather(props.model.userLatitude, props.model.userLongitude,  weatherPromiseState, notify)

    }

    // This function is used to notify React of changes in the weatherPromiseState.
    function notify(){
        weatherPromiseStateChanged(new Object());
    }

    // Returns either the promiseNoData function (no data, spinner image, etc) or the content defined in the weather view.
    return (<div>{promiseNoData(weatherPromiseState) || <WeatherView weatherData={weatherPromiseState.data}/>}</div>)

}