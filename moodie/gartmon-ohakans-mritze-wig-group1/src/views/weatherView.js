import { determineBackground } from "../utilities.js";
import React from "react";


export default
function WeatherView(props) {

return(
    
  <div>
      <div>
      {determineBackground(props.weatherData.weather[0].id)}
      </div>

      <span>

      <div className="grid place-content-center font-Titillium-Web font-bold py-6 -mt-8 rounded text-white text-2xl">
          <p>It is currently</p>
      </div>
      <div>
          <p className="grid place-content-center font-Pacifico rounded text-white -mt-2 text-6xl">
          {props.weatherData.weather[0].main}
          </p>
      </div>
      <div>
          <p className="grid place-content-center font-Titillium-Web font-bold py-4 rounded text-white text-2xl">
              We therefore recommend the movie:
          </p>
      </div>
      </span>
    </div>);
}