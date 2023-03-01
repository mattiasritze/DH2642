function SearchFormView(props) {

    // Used to handle changes in search text
    function onInputChangeACB(onChange) {
        props.onSearchTextChange(onChange.target.value)
    }

    // Used to handle changes in type drop down menu
    function onOptionSelectACB(onChange) {
        // If the value is default value, the type becomes "", which corresponds to no type.
        if(onChange.target.value === "Choose:"){
            props.onTypeDropDownMenuChange("")
        }
        else {
            props.onTypeDropDownMenuChange(onChange.target.value)
        }
    }

    // Used to handle button clicks on the add to menu button
    function searchButtonClickACB(onClick) {
        props.searchButtonClick()
    }

    return(<div>
        <input onChange={onInputChangeACB}></input>
            <select onChange={onOptionSelectACB}>
                <option value="">Choose:</option>
                {props.dishTypeOptions.map(renderSearchTypesCB)}
            </select>
            <button onClick={searchButtonClickACB}>Search!</button>
    </div>);

    function renderSearchTypesCB(props) {
        return <option>{props}</option>
    }
}

export default SearchFormView;