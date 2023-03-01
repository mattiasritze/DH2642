import promiseNoData from "../views/promiseNoData"
import DetailsView from "../views/detailsView.js"

export default
function Details(props) {

    function isDishInMenuCB(dish) { 
        return (props.model.currentDish === dish.id)
    }

    function menuEventHandlerACB() {
        props.model.addToMenu(props.model.currentDishPromiseState.data)
    }

    return promiseNoData(props.model.currentDishPromiseState)||<DetailsView dishData={props.model.currentDishPromiseState.data} 
                                                                isDishInMenu={props.model.dishes.filter(isDishInMenuCB).length > 0} 
                                                                guests={props.model.numberOfGuests}
                                                                addToMenuACB={menuEventHandlerACB}/>


}