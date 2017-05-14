/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {

        //Fish
        for(var i = 0; i <100; i++){
            let fish = new Fish();
        }
       

        //Bubble
       for(var i = 0; i <10; i++){
            let bubble = new Bubble();
        }
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});