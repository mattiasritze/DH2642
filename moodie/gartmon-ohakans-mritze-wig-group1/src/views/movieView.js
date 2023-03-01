
export default
function MovieView(props) {

        function rerollMovieACB(onClick) {
            props.clickOnReroll(props.movieData.id)
            props.onNumberChange(props.number + 1)          //Counter ökar med 1 när reroll knappen trycks. 
        }

        return(<div>
            <img className="object-contain h-60 m-auto rounded-3xl shadow-sm" src={"https://image.tmdb.org/t/p/w500"+props.movieData.backdrop_path}
                onError = {event => {
                event.target.src = "https://i.imgur.com/tUvQ8n7.png"
                event.onerror=null
            }}>
            </img>
     
            <div>
                <div className="grid place-items-center font-bold py-3 rounded text-white text-4xl">
                    {props.movieData.original_title}
                </div>
                <div className="flex place-content-center space-x-4 items-center font-bold py-3 rounded text-white"> 
                {props.movieData.overview}
            </div>
                <div className="flex place-content-center space-x-4 items-center font-bold py-3 rounded text-white">
                    {props.movieData.vote_average === 0 ? "Not available" : (props.movieData.vote_average).toFixed(1)+"/10"}
                    <img className="h-5 w-5" src="https://i.imgur.com/nASCFNb.png"></img>
                    <div>{props.movieData.release_date}</div>
                </div>
                <div className="grid place-items-center">           
                <button className="transform bg-white text-black text-2xl font-bold my-5 py-2 px-2 rounded drop-shadow mt-3 transition duration-200 hover:scale-105" onClick={rerollMovieACB}>
                Get a new movie!
            </button>
            <span className="text-white">{props.number} clicks on ''Get a new movie''' button</span>
            </div>
            </div>
            </div>);
}
