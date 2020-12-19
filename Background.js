export function Background() {
    
    this.color = function(color) {
        document.body.style.backgroundColor = color;
    };
    this.image = function(image) {
        document.body.style.backgroundImage = image;
    };
    this.gradient = function(anotherColor) {
        document.body.style.backgroundImage = "linear-gradient(to right, " + document.body.style.backgroundColor + ", "+ anotherColor +")";
    };
}