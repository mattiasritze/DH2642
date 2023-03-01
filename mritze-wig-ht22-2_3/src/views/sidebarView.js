import { dishType, menuPrice, sortDishes } from "../utilities.js";

function SidebarView(props){
    function minusButtonClickACB(onClick){ 
        props.onNumberChange(props.number - 1);
    }

    function plussButtonClickACB(onClick){
        props.onNumberChange(props.number + 1);
    }

    //console.log(props.number + " hello")

    return (
            <div>
                <button onClick={minusButtonClickACB} disabled={props.number < 2}>-</button>{props.number}<button onClick={plussButtonClickACB}>+</button>
                {
                    
                    renderSidebarDishes(props.dishes, props.number, props.onDishDeleteClick, props.onCurrentDishChange)
                }
            </div> 
    );
}

function renderSidebarDishes(dishesArray, number, onDishDeleteClick, onCurrentDishChange){
    

    function sidebarDishesTableGeneratorCB(dish){

        function removeButtonClickACB(onClick){
            onDishDeleteClick(dish);
        }

        function dishNameClickACB(onClick){
            onCurrentDishChange(dish);
        }

        return <tr key={dish.id}><td><button onClick={removeButtonClickACB}>x</button></td><td><a href="#" onClick={dishNameClickACB}>{dish.title}</a></td><td>{dishType(dish)}</td><td className="aligner">{(dish.pricePerServing*number).toFixed(2)}</td></tr>
        //<tr key={dish.id}><td><button>x</button></td><td>{dish.title}</td><td>{dish.dishTypes}</td><td class="aligner">{(dish.pricePerServing * number).toFixed(2)}</td></tr>;
    }
    
    
    return <table>
        {/*<thead>
        <tr><th></th><th>dishName</th><th>dishType</th><th>dishPrice</th></tr>
        </thead>*/}
        <thead></thead>
        <tbody>
            {       
             sortDishes([...dishesArray]).map(sidebarDishesTableGeneratorCB) 
            }
          <tr><td></td><td>Total:</td><td></td><td>{(menuPrice(dishesArray)*number).toFixed(2)}</td></tr>

        </tbody>
        </table>;
}

export default SidebarView;