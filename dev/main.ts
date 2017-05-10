/// <reference path="fish.ts"/>
/// <reference path="bubble.ts"/>

class Game {
    
    constructor() {

        for(var i = 0; i <100; i++){
            let fish = new Fish();
        }
       

        // bubble
        let b = document.createElement("bubble");
        document.body.appendChild(b);
                        
        let startx:number = Math.random() * window.innerWidth;
        b.style.left = startx + "px";
    }
} 


// load
window.addEventListener("load", function() {
    new Game();
});