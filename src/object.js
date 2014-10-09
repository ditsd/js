if (typeof NS == 'undefined') { NS = {}; }
 
NS.myFunction = {
    //empty stuff array, filled during initialization
    stuff: [],
    init: function init() {
        this.stuff.push('Testin5');
    },
    reset: function reset() {
        this.stuff = [];
    },
    //will add new functionality here later
};


NS.myFunction.init();
