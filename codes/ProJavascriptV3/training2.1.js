/*

OBJECT CREATION

*/


"use strict";
var alert = console.log;


/*
The Factory Pattern
*/
// new keyword in the function.

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };    
    return o;
}
                   
var person1 = createPerson("Nicholas", 29, "Software Engineer");
var person2 = createPerson("Greg", 27, "Doctor");
alert(person1);
alert(person2);



/*
The Constructor Pattern
*/
// create by "new"

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };    
}
Person.prototype = function ABC(){
    alert("ABC constructor");
}
                   
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
alert(person1);
alert(person2);

/* 
speical with previous one:
    There is no object being created explicitly.
    The properties and method are assigned directly onto the this object.
    There is no return statement.
*/


/*       !!!!!!
Calling a constructor in this manner essentially causes the following four steps to be taken:
    1. Create a new object.
    2. Assign the this value of the constructor to the new object (so this points to the new object).
    3. Execute the code inside the constructor (adds properties to the new object).
    4. Return the new object.
*/

alert();
alert(person1.constructor === Person);  //true
alert(person2.constructor === Person);  //true
alert();
alert(" -- check instanceof -- ");
alert(person1 instanceof Object);  //true
alert(person1 instanceof Person);  //true
alert(person2 instanceof Object);  //true
alert(person2 instanceof Person);  //true
alert();
alert(" -- check prototype -- ");
alert(person1.__proto__ === Object.getPrototypeOf(person2));
alert(person1.__proto__);


/*
Constructors as Functions
    The only difference between constructor functions and other functions is the way in which they are called. 
*/
/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

//use as a constructor
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName();   //"Nicholas"
                   
// can't run in node.js
/*
//call as a function
Person("Greg", 27, "Doctor");  //adds to window
window.sayName();   //"Greg"
*/

//call in the scope of another object
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName();    //"Kristen"

// Remember that the this object always points to the Global object (window in web browsers) 
//      when a function is called without an explicitly set this value (by being an object method or through call()/apply()).

// Problems with Constructors
// It doesn’t make sense to have two instances of Function that do the same thing, 
//  especially when the this object makes it possible to avoid binding functions to particular objects until runtime.

alert(person1.sayName == person2.sayName); 
alert(person1.sayName === person2.sayName); 


// solution: 
//   These problems are addressed by using the prototype pattern.

