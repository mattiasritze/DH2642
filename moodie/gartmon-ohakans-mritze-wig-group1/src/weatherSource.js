import { API_KEY, BASE_URLCORD, BASE_URLWEATHER } from "./weatherConfig";

// ACB to check the HTTP status code. If !200, throw an error.
function treatHTTPResponseACB(response){

    if(!response.ok)  {
    throw new Error("Something that wasn't supposed to happen, happened: " + response.status);
    }
    
    return response.json();
}

// This function is responsible for getting the weather information from the OpenWeather API.
function getWeather(lat, lon) {

    function transformSearchResultsACB(response){

        return response;
    }

    // Fetch to get weather info. Returns a promise. 
    return fetch(BASE_URLCORD + lat + "&lon=" + lon + "&units=metric" + "&appid=" + API_KEY, {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

export {getWeather}