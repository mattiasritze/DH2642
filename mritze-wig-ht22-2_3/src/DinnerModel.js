/* This is an example of a JavaScript class.
   The Model keeps only abstract data and has no notions of graohics or interaction
*/
import { searchDishes, getDishDetails } from "./dishSource.js";
import resolvePromise from "./resolvePromise.js";

class DinnerModel {

    constructor(nrGuests = 2, dishArray = [], currentDish) {
        this.observers = [];
        this.setNumberOfGuests(nrGuests);
        this.dishes = dishArray;
        this.searchResultsPromiseState = {};
        this.searchParams = {};
        this.currentDishPromiseState = {};
    }

    // Set the search query in searchParams.
    setSearchQuery(q) {
        this.searchParams.query = q;
    }

    // Ditto.
    setSearchType(t) {
        this.searchParams.type = t;
    }

    // Add an observer.
    addObserver(observerCallback) {
        this.observers = [...this.observers, observerCallback];
    }

    // Ditto.
    removeObserver(observerCallback) {
        function removeObserverCB(callbackToBeRemoved) {
            if (observerCallback !== callbackToBeRemoved) return true;
        }

        this.observers = this.observers.filter(removeObserverCB);
    }

    // This function calls every observer in the observer array to notify them of changes in the model.
    notifyObservers(payload) {
        function invokeObserverCB(obs) { try { obs(payload); } catch (err) { console.error(err); } };
        this.observers.forEach(invokeObserverCB);
    }

    doSearch(queryAndType) {
        function notifyACB() {
            this.notifyObservers();
        }

        resolvePromise(searchDishes(queryAndType), this.searchResultsPromiseState, notifyACB.bind(this));
    }

    setCurrentDish(id) {
        // Dont't do anything if the id is bogus.
        if (id === undefined) return;

        // If the id is identical to current id, do nothing to preserve bandwidth and money.
        if (id === this.currentDish) return;

        // If the above do not apply, use resolvePromise to set the current dish.
        this.currentDish = id;

        this.notifyObservers({ currentDishChanged: id });

        function notifyACB() {
            this.notifyObservers();
        }

        resolvePromise(getDishDetails(id), this.currentDishPromiseState, notifyACB.bind(this));
    }

    setNumberOfGuests(nr) {
        // if() and throw exercise

        // TODO throw an error if the argument is smaller than 1 or not an integer
        // the error message must be exactly "number of guests not a positive integer"
        // to check for integer: test at the console Number.isInteger(3.14)

        if (nr < 1 || !Number.isInteger(nr)) {
            throw new Error("number of guests not a positive integer");
            return;
        }
        // TODO if the argument is a valid number of guests, store it in this.numberOfGuests

        if (this.numberOfGuests === nr) return;

        this.numberOfGuests = nr;
        this.notifyObservers({ numberOfGuestsChanged: nr });

        // when this is done the TW1.1 DinnerModel "can set the number of guests" should pass
        // also "number of guests is a positive integer"
    }
    addToMenu(dishToAdd) {
        // array spread syntax example. Make sure you understand the code below.
        // It sets this.dishes to a new array [   ] where we spread (...) the previous value
        //console.log("hey there bubby");
        // Prevent already present dishes from being added and observers from being notified.
        function dishFinderCB(presentDish) {
            if (presentDish.id === dishToAdd.id) return true;
        }
        if (this.dishes.find(dishFinderCB)) return;

        // Add dish to array and notify observers.
        this.dishes = [...this.dishes, dishToAdd];
        this.notifyObservers({ dishAddedToMenu: dishToAdd });

    }

    removeFromMenu(dishToRemove) {
        // callback exercise! Also return keyword exercise
        function hasSameIdCB(dish) {
            // TODO return true if the id property of dish is _different_ from the dishToRemove's id property
            // This will keep the dish when we filter below.
            // That is, we will not keep the dish that has the same id as dishToRemove (if any)

            if (dishToRemove.id !== dish.id) return true;

        }
        if (this.dishes.filter(hasSameIdCB).length < this.dishes.length) {

            this.dishes = this.dishes.filter(hasSameIdCB.bind(this));
            this.notifyObservers({ dishRemovedFromMenu: dishToRemove });
        }

        this.dishes = this.dishes.filter(hasSameIdCB.bind(this));
        // the test "can remove dishes" should pass
    }
    /* 
       ID of dish currently checked by the user.
       A strict MVC/MVP Model would not keep such data, 
       but we take a more relaxed, "Application state" approach. 
       So we store also abstract data that will influence the application status.
     */
    //setCurrentDish(id){
    //this.currentDish=TODO

    //  this.currentDish = id;
    //}

}

export default DinnerModel;
