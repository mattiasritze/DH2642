export default function resolvePromise(promise, promiseState, notify){
	promiseState.promise = promise;
    promiseState.data = null;         
    promiseState.error = null;

    if(promise === null) {
        return("the promise is null!")
    }

    if(notify){
        notify();
    }

    function saveDataACB(result){ 
	    if(promiseState.promise !== promise) return;
            
        promiseState.data = result
            
        if(notify){
            notify();
        }
    } 

    function saveErrorACB(err)  { 
        if(promiseState.promise !== promise) return;
            promiseState.error = err
            
            if(notify){
                notify();
            }
    }
    promise.then(saveDataACB).catch(saveErrorACB);
}