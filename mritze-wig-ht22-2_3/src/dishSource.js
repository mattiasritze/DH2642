import { stringifyExpression } from "@vue/compiler-core";
import { API_KEY, BASE_URL } from "./apiConfig";

// ACB to check the HTTP status code. If !200, throw an error.
function treatHTTPResponseACB(response) {
    if (!response.ok) {
        throw new Error("Something that wasn't supposed to happen, happened: " + response.status);
    }

    return response.json();
}

function getDishDetails(params) {

    // suppose params is a dish ID, then this endpoint is used to retrieve detailed dish information.
    const endpoint = 'recipes/' + params + '/information';

    // fetch to get recipe info and return a (pinky)promise. 
    return fetch(BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            'X-Mashape-Key': API_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    ).then(treatHTTPResponseACB);
}

function searchDishes(params) {

    // Endpoint used to search recipes.
    const endpoint = 'recipes/search?';

    // This function transforms the search response, which is returned by the API as an array of objects, into an array of the enumerated keys of said objects, since we're not
    // very interested in all the metadata that comes with the result for the time being.
    function transformSearchResultsACB(response) {
        return response.results
    }

    // Basically the same as getDishDetails() except we have an additional callback to transform the results into an array of names of dishes.
    return fetch(BASE_URL + endpoint + new URLSearchParams(params), {
        method: 'GET',
        headers: {
            'X-Mashape-Key': API_KEY,
            'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }
    ).then(treatHTTPResponseACB).then(transformSearchResultsACB);
}

export { getDishDetails, searchDishes }