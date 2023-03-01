function SearchResultsView(props) {

    return(<div>
        {props.searchResults.map(renderSearchResultsCB)}
        </div>);

    function renderSearchResultsCB(dish) {
        
        // Used when a user clicks some image or text in 2.3.1 to display the chosen thing in the console via searchPresenter.
        function chosenDishACB(onClick) {
            props.onTextOrImageClick(dish); 
        }

        return <span class="searchResult" onClick={chosenDishACB}>
        <img src={"https://spoonacular.com/recipeImages/"+dish.image} height="100"></img>
        <div>{dish.title}</div>
        </span>
    }

}

export default SearchResultsView