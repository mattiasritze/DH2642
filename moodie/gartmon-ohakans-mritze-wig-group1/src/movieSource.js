import { API_KEY, BASE_URL } from "./movieConfig";

// ACB to check the HTTP status code. If !200, throw an error.
function treatHTTPResponseACB(response){

    if(!response.ok)  {
        throw new Error("Something that wasn't supposed to happen, happened: "+response.status);
    }
    
    return response.json();
}

function getMovieDetails(params) {

    function transformSearchResultsACB(response){
        return response;
    }

    // Params equals {movie_id} - get details of certain movie with ID
    const endpoint = '/movie/'+params;

    // fetch to get movie info and return a promise. 
    return fetch(BASE_URL+ endpoint + "?api_key=" + API_KEY + "&language=en-US", {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

// This function is purely for testing purposes. It fetches the official list of movie Genres and prints them in the console.
function getMovieGenres() {

    function transformSearchResultsACB(response){
        return response;
    }

    const endpoint = '/genre/movie/list';

    return fetch(BASE_URL+ endpoint + "?api_key=" + API_KEY, {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

// This function is used to fetch a list of movies based on a genre provided in the parameter 'genres'.
function rerollMovie(genres, selectpage) {

    let pageparam = ""
    if(selectpage) pageparam = "&page=" + selectpage;

    function transformSearchResultsACB(response){
        return response;
    }

    // Params equals {movie_id} - get details of certain movie with ID
    const endpoint = '/discover/movie';

    // fetch to get recipe info and return a (pinky)promise. 
    return fetch(BASE_URL+ endpoint + "?api_key=" + API_KEY + "&with_genres=" + genres + pageparam, {
        method: 'GET',
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

// This function chooses a movie genre based on the weatherID and returns the genre ID.
function determineMovieGenre(weatherID) {
    let randomizer = Math.random();

    if (weatherID > 199 && weatherID < 233)         // Thunder, return Horror
        return 27;
    else if  (weatherID > 299 && weatherID < 322)   // Drizzle, return Drama
        return 18;
    else if  (weatherID > 499 && weatherID < 532)   // Rain, return Thriller
        return 53;
    else if  (weatherID > 599 && weatherID < 623)   // Snow, return Music
        return 10402;
    else if  (weatherID > 700 && weatherID < 782)   // Mist, return Mystery
        return 9648;
    else if  (weatherID === 800){                   // Clear, return Comedy, Romance or Adventure
        if(randomizer < 0.3){
            return 35
        }
        
        if(randomizer > 0.3 && randomizer < 0.7){
            return 10749
        }
        
        else { return 12 }
    }                
    else if (weatherID > 800 && weatherID < 805) {  // Cloudy, return Western, Crime or War
        
        if(randomizer < 0.3){
            return 37
        }
        
        if(randomizer > 0.3 && randomizer < 0.7){
            return 80
        }
        
        else { return 10752 }
        

    }
}
/*
This is the complete list of genres provided by TMDB as of 2022-12-12, it is included here for reference.

0: Object { id: 28, name: "Action" }
​​
1: Object { id: 12, name: "Adventure" }
​​
2: Object { id: 16, name: "Animation" }
​​
3: Object { id: 35, name: "Comedy" }
​​
4: Object { id: 80, name: "Crime" }
​​
5: Object { id: 99, name: "Documentary" }
​​
6: Object { id: 18, name: "Drama" }
​​
7: Object { id: 10751, name: "Family" }
​​
8: Object { id: 14, name: "Fantasy" }
​​
9: Object { id: 36, name: "History" }
​​
10: Object { id: 27, name: "Horror" }
​​
11: Object { id: 10402, name: "Music" }
​​
12: Object { id: 9648, name: "Mystery" }
​​
13: Object { id: 10749, name: "Romance" }
​​
14: Object { id: 878, name: "Science Fiction" }
​​
15: Object { id: 10770, name: "TV Movie" }
​​
16: Object { id: 53, name: "Thriller" }
​​
17: Object { id: 10752, name: "War" }
​​
18: Object { id: 37, name: "Western" }
*/

export {getMovieDetails, getMovieGenres, rerollMovie, determineMovieGenre}