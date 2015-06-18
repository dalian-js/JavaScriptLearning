// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create


// sample 1
// Shape - superclass
function Shape() {
        this.x = 0;
        this.y = 0;
};

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved. x ' + this.x + ' y ' + this.y);
};

// Rectangle - subclass
function Rectangle() {
  Shape.call(this); // call super constructor.
};

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle? ' + (rect instanceof Rectangle)); // true
console.log('Is rect an instance of Shape? ' + (rect instanceof Shape)); // true
rect.move(9, 10); // Outputs, 'Shape moved.'
console.log(rect.x);
rect.move(9, 10); // Outputs, 'Shape moved.'
