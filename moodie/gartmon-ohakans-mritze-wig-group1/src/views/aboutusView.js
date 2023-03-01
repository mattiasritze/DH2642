import { determineBackground } from "../utilities.js"


export default 
function AboutusView(props) {

    return <div>
        <div>
        {determineBackground(props.weatherData.weather[0].id)}
        </div>
        <p className="text-white font-bold py-3 rounded text-xl">Moodie is a web application that can dynamically recommend movies to watch based on the current time of day and weather at the users location. 
        The movie recommendations are tailored to suit the mood that the weather and time create. For example: The app may suggest horror movies during a rainy night, or a comedy when the sun is shining.
        </p>
        </div>

}
