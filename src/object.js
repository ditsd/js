if (typeof NS == 'undefined') { NS = {}; }
 
NS.myFunction = {
    //empty stuff array, filled during initialization
    stuff: [],
    init: function init() {
<<<<<<< HEAD
        this.stuff.push('Testing2');
=======
        this.stuff.push('Testing');
>>>>>>> FETCH_HEAD
    },
    reset: function reset() {
        this.stuff = [];
    },
    //will add new functionality here later
};


NS.myFunction.init();
