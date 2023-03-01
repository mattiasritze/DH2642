import SidebarView from "../views/sidebarView.js";

export default
function Sidebar(props){
    function modifyGuestNumberACB(newnumber){
        props.model.setNumberOfGuests(newnumber);
    }

    function removeThatDishYeahACB(dish){
        props.model.removeFromMenu(dish);
    }

    function changeTheCurrentDishYeahBoiACB(dish){
        props.model.setCurrentDish(dish.id);
    }

    return <SidebarView number={props.model.numberOfGuests} dishes={props.model.dishes} onNumberChange={modifyGuestNumberACB} onDishDeleteClick={removeThatDishYeahACB} onCurrentDishChange={changeTheCurrentDishYeahBoiACB}/>;
}
