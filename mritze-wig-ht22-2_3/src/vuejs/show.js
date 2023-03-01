const Show = {
    props:["hash"], 

    data(){ return {hashState: window.location.hash}},

    creation() {
        window.addEventListener("hashchange", this.listener)
    },

    unmounted() {
        window.removeEventListener("hashchange", this.listener)
    },

    methods: {
        hashListenerACB(e) {
            this.hashState = e.target.value;
        }
    },

    render() { 
        if (window.location.hash === this.hash) {
            return <div class={""}>
            { this.$slots.default() }
            </div>;
        }

        return ("Hello World!")
    },
}

export default Show;

