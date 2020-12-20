export function Background(selector) {
    
    this.color = function(color) {
        document.querySelector(selector).style.backgroundColor = color;
    };
    this.image = function(image) {
        document.querySelector(selector).style.backgroundImage = image;
    };
    this.gradient = function(anotherColor) {
        document.querySelector(selector).style.backgroundImage = "linear-gradient(to right, " + document.querySelector(selector).style.backgroundColor + ", "+ anotherColor +")";
    };
}