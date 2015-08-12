
/*

OBJECT CREATION

*/

"use strict";
var alert = console.log;


/*
Alternate Prototype Syntax
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------1------------------------------------------");

function Person(){
}
                   
Person.prototype = {
    // constructor: Person,   // if constructor is important, could set it back
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};

var friend = new Person();
alert(friend instanceof Object);      //true
alert(friend instanceof Person);      //true
alert(friend.constructor === Person);  //false
alert(friend.constructor === Object);  //true
alert();



/////////////////////////////////////////////////////////////////////////////////
alert("--------2-----------------------------------------");


Person.prototype = {
    constructor: Person,   // if constructor is important, could set it back
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};
var friend = new Person();
alert(friend instanceof Object);      //true
alert(friend instanceof Person);      //true
alert(friend.constructor === Person);  //true
alert(friend.constructor === Object);  //false

// Keep in mind that restoring the constructor in this manner creates a property with [[Enumerable]] set to true. 
//   Native constructor properties are not enumerable by default, 
// so if you’re using an ECMAScript 5–compliant JavaScript engine, you may wish to use Object.defineProperty() instead
Object.defineProperty(Person.prototype, "constructor", {
    enumerable: false,
    value: Person
});

/////////////////////////////////////////////////////////////////////////////////
alert("--------3-----------------------------------------");

alert(" --- extend the existing prototype")
var friend= new Person();
                   
Person.prototype.sayHi = function(){
    alert("hi");
};
                   
friend.sayHi();   //"hi" - works!

alert();
alert(" --- overwrite the whole prototype, can't work for existing instance");
         
var friend2 = new Person();
alert(friend2.__proto__ === friend.__proto__);

alert();
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName2 : function () {
        alert(this.name + "2222222");
    }
};
                   
try {
   friend2.sayName2();   //error
} catch (e) {
    alert(e);
}
var friend3 = new Person();
friend3.sayName2();

// very strange for this
alert(friend2.__proto__ === friend3.__proto__);




/////////////////////////////////////////////////////////////////////////////////
alert("-------4------------------------------------------");



