function DetailsView(props) {

    function ingredientsCB(ingr) {
        return <div key={ingr.id}>
            <ul>
                <li>{ingr.name} {ingr.amount} {ingr.unit}</li>
            </ul>
            </div>
    }
        
    return(
        <div>


        <div class="center">


        <button disabled={props.isDishInMenu} class="button" onClick={props.addToMenuACB}>Add to menu!</button>


        <div>
            <h2>{props.dishData.title}</h2>
        </div>
        

        <div>
            <img src={props.dishData.image}></img>
        </div>
        

        <div>
        Dish price: {(props.dishData.pricePerServing).toFixed(2)}$ and for {props.guests} guests: {((props.dishData.pricePerServing)*props.guests).toFixed(2)}$
        </div>


        </div>


        <div class="debug-small">
            <h4 class="text-right">Ingredients:</h4>
            {props.dishData.extendedIngredients.map(ingredientsCB)}
        </div>


        <div class="debug-small">
            <h4 class="text-right">Recipe: </h4>
            <p class="text-right">{props.dishData.instructions}</p>
        </div>


        <div>
            {<a href={props.dishData.sourceUrl}>More information</a>}
        </div>


        </div>);
}
export default DetailsView