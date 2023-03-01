import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    function changeNumberACB(x) {
        props.model.setNumberOfGuests(x); 
    }

    function currentDishACB(id) {
        props.model.setCurrentDish(id)
    }

    function removeDishACB(dish) {
        props.model.removeFromMenu(dish)
    }


    return <SidebarView number={props.model.numberOfGuests} 
                                onNumberChange={changeNumberACB}   
                                dishes={props.model.dishes} 
                                currentDish={currentDishACB} 
                                removeDish={removeDishACB}/>;
}