export default function promiseNoData(promiseState){
    
    // If there is no promise in the promiseState, then there is consequentially no data. Displaying a spinner makes no sense since no data will arrive either,
    // therefore we only show "no data".
    if(!promiseState.promise) return(<div>no data</div>);

    // If there is an active promise in the promiseState but we have not yet received any data (or error), we display some spinner image.
    if(!promiseState.data && !promiseState.error) {
        return(<div className="center-center">
        <div className="loadingio-spinner-spinner-agb8os98fdn"><div className="ldio-ndvytzom9cg">
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div></div>
        </div>);
    }

    // If there is an error, log it in the console.
    if(promiseState.error){
        return(<div>{promiseState.error.error}</div>);
    }
}