import { propsToAttrMap } from "@vue/shared";
import { dishType, sortDishes, menuPrice } from "../utilities";

function SidebarView(props) {
    function incrementACB() {
        props.onNumberChange(props.number + 1)
    }
    function decrementACB() {
        props.onNumberChange(props.number - 1)
    }
    return(<div className = "debug"> 
        <button disabled = {props.number === 1} onClick = {decrementACB}>-</button>
        {props.number}
        <button onClick = {incrementACB}>+</button>
        {
            renderDishes(props.dishes, props.number)
        }
    </div>); 


   
    function renderDishes(dishesArray, number) {
        function dishTableRowCB(dish) {
            function removeDishesACB() {
                props.removeDish(dish)
            }
            function addDishesACB() {
                props.currentDish(dish)
            }

        
        return <tr key = {dish.id}>
        <td><button onClick = {removeDishesACB}>x</button></td>
        <td><a href="#" onClick = {addDishesACB}>{dish.title}</a></td>
        <td>{dishType(dish)}</td>
        <td className="align-right">{((dish.pricePerServing)*number).toFixed(2)}</td>
        </tr>

        }

    

    return <table>
        <tbody>
            {
                sortDishes(dishesArray).map(dishTableRowCB)
            }
        
            <tr>
                <td></td>
                    <td>Total :</td>
                <td></td>
                <td>{(menuPrice(dishesArray)*number).toFixed(2)}</td>
            </tr>
        </tbody>
    </table>
    
    }  
}

export default SidebarView; 