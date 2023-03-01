export default function promiseNoData(promiseState){
    if(!promiseState.promise) return(<div>no data</div>);

    if(!promiseState.data && !promiseState.error) {
        return(<img src="../content/bush_spinner.png" alt="Confused_Dubya.PNG"></img>);
    }

    if(promiseState.error){
        console.log(promiseState.error.error);
        return(<div>{promiseState.error.error}</div>);
    }
}