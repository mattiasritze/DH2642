import React, { useEffect } from "react";
import { firebaseModelPromise, updateFirebaseFromModel, updateModelFromFirebase } from "./firebase.js";
import resolvePromise from "./resolvePromise.js";
import promiseNoData from "./views/promiseNoData.js";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const App = require("./App.js").default;

function ReactRoot() {
    const [moviePromiseState] = React.useState({ promise: {}, data: null, error: null });
    const [, rerender] = React.useState({});

    useEffect(resolveCB, [])

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            updateFirebaseFromModel(moviePromiseState.data);              //Uppdaterar vi firebase från båda håller 
            updateModelFromFirebase(moviePromiseState.data);
        }
    });

    function resolveCB() {
        resolvePromise(firebaseModelPromise(), moviePromiseState, notifyACB);
    }

    function notifyACB() {
        if (moviePromiseState.data) {           //om sann
            updateFirebaseFromModel(moviePromiseState.data);              //Uppdaterar vi firebase från båda håller 
            updateModelFromFirebase(moviePromiseState.data);
            rerender(new Object());
        }
    }

    if (moviePromiseState.data) {
        return <div> <App model={moviePromiseState.data} /></div>;
    } else {
        return <div>{promiseNoData(moviePromiseState)}</div>
    }
}

// Export the ReactRoot component
export default ReactRoot;