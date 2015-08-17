alert = console.log;

// use code like "Prototypal Inheritance in JavaScript"
var __extends = (this && this.__extends) || function (child, base) {
    // copy all owned properties to child
    for (var p in base) 
    {
        if (base.hasOwnProperty(p)) 
        {
            child[p] = base[p];
        }
    }
    
    // one temp object, constructor is child, prototype is base
    function __() { this.constructor = child; }
    __.prototype = base.prototype;
    // setup the prototype of child 
    child.prototype = new __();
};

// base class
var Animal = (function () {
    function Animal(name) {
        alert("Animal constructor");
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        alert(this.name + " moved " + meters + "m.");
    };
    
    alert("Animal internal");
    return Animal;
})();

// child Snake
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        alert("_Snake constructor");
        _super.call(this, name);
    }
    Snake.prototype.move = function () {
        alert("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    
    alert("Snake internal");
    return Snake;
})(Animal);


// child Horse
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        alert("Horse constructor");
        _super.call(this, name);
    }
    Horse.prototype.move = function () {
        alert("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    alert("Horse internal");
    return Horse;
})(Animal);

var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
var jj = new Horse("bbb ccc");
sam.move();
tom.move(34);
jj.move(99);
