import SearchResultsView from "../views/searchResultsView"
import SearchFormView from "../views/searchFormView"
import promiseNoData from "../views/promiseNoData"
import resolvePromise from "../resolvePromise.js"
import {searchDishes, getDishDetails} from "../dishSource.js";
import { render } from "react-dom";


const Search={
    // This is used instead of the normal someFunction(props) syntax since Vue uses stateful objects instead of methods.
    props: ["model"],
    
    // This method is called immediately after allocation of props. It calls resolvePromise with empty search parameters in order to show an initial search once the user
    // brings up the webpage for the first time.
    created(){     
            resolvePromise(searchDishes({}), this.searchResultsPromiseState)
    },

    // This method returns all the presenter state properties in the form of an object containing the properties. 
    data(){ return {searchParams: { query: [], type : [] }, searchResultsPromiseState: { promise: null, data: null, error: null}, }},

    // Mostly the same as before when the presenter was a method, but the callbacks have been moved inside the render function.
    // It still returns the same content inside of a div as we did in the previous version.
    // Some things have been changed to point to the local state properties instead of those in the model, in particular searchParams and searchResultPromise state.
    // The ones stored in the model would be called with this.model.searchParams, etc if we for some reason wanted to use them. This.searchParams instead refer to the one above in data().
    render(){

        // Saves the search query in component state instead of application state (saved locally inside the presenter instead of in the application model).
        function searchTextChangeACB(text) {
            //this.model.setSearchQuery(text)
            this.searchParams.query = text;
        }
    
        // See the comment above searchTextChangeACB, same principle applied here.
        function dishTypeDropDownMenuChangeACB(choice) {
            //this.model.setSearchType(choice)
            this.searchParams.type = choice;
        }
    
        // Resolved the promise here in the presenter instead of letting the model do it as we did in previous versions of the presenter.
        // The principle is mostly the same as the above callbacks.
        // This used to be called searchButtonACB, but the new name is more fitting since the presenter ought to be separate from view-logic.
        function searchNowACB() {
            resolvePromise(searchDishes(this.searchParams), this.searchResultsPromiseState)
        }
    
        function textOrImageClickACB(dish) {
            this.model.setCurrentDish(dish.id)
        }

        // promiseNoData, searchResults, etc have been changed to refer to component state instead of model state. The callbacks have also been bound to this since we are now inside and object and not a method.
        return(<div><SearchFormView dishTypeOptions={["starter", "main course", "dessert"]} onSearchTextChange={searchTextChangeACB.bind(this)} onTypeDropDownMenuChange={dishTypeDropDownMenuChangeACB.bind(this)} searchButtonClick={searchNowACB.bind(this)}/>
        {promiseNoData(this.searchResultsPromiseState)||<SearchResultsView onTextOrImageClick={textOrImageClickACB.bind(this)} searchResults={this.searchResultsPromiseState.data}/>}</div>)
    }
};

export default Search;

/*
***THIS IS THE OLD STUFF WE USED BEFORE, LEAVE IT HERE FOR POSTERITY****

export default function Search(props) {

    if(!props.model.searchResultsPromiseState.promise) {
        props.model.doSearch()
    }

    function searchTextChangeACB(text) {
        console.log(text)
        props.model.setSearchQuery(text)
    }

    function dishTypeDropDownMenuChangeACB(choice) {
        console.log(choice)
        props.model.setSearchType(choice)
    }

    function searchButtonACB() {
        console.log(" The little, not so red button of doom has been pressed! Prepare for total annihilation!! ")
        props.model.doSearch(props.model.searchParams)
    }

    // Used by 2.3.1 to handle clicks on images or text (slide 39)
    function textOrImageClickACB(dish) {
        console.log(" You just pressed either some text or an image. Congratulations! You win absolutely nothing! ")
        props.model.setCurrentDish(dish.id)
    }

    return(<div><SearchFormView dishTypeOptions={["starter", "main course", "dessert"]} onSearchTextChange={searchTextChangeACB} onTypeDropDownMenuChange={dishTypeDropDownMenuChangeACB} searchButtonClick={searchButtonACB}/>
    {promiseNoData(props.model.searchResultsPromiseState)||<SearchResultsView onTextOrImageClick={textOrImageClickACB} searchResults={props.model.searchResultsPromiseState.data}/>}</div>)
}
*/
