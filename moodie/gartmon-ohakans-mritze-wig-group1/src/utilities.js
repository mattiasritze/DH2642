function determineBackground(weatherID) {
    if (weatherID > 199 && weatherID < 233) {
        return <section class="rain-container">
            <div className="rain">
            <div className="thunder">
            </div>
            </div>
            </section>
    }
    else if  (weatherID > 299 && weatherID < 322) {
        return <div className="drizzle"></div>
    }


    else if  (weatherID > 499 && weatherID < 532) {
        return <section className="rain-container">

            <div className="rain">
            </div>
            </section>
    }

    else if  (weatherID > 599 && weatherID < 623) {
       return <div className="snow"></div>
    }

    else if  (weatherID > 700 && weatherID < 782) {
        return <section class="mist">
            <div class="mist-container">
            <div class="mist-img mist-img-first"></div>
            <div class="mist-img mist-img-second"></div>
            </div>
            </section>
    }


    else if  (weatherID === 800) {
        return;
    }

    else if (weatherID > 800 && weatherID < 805) {
        return <div className="clouds"></div>
            
    }
}

export {determineBackground}