
/*

OBJECT CREATION

*/

"use strict";
var alert = console.log;


/*
The Prototype Pattern

    Each function is created with a prototype property, which is an object containing properties and methods that should be available to instances of a particular reference type. 
    This object is literally a prototype for the object to be created once the constructor is called. The benefit of using the prototype is that all of its properties and methods are shared among object instances. 

*/

/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");

function Person(){
}
                   
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
                   
var person1 = new Person();
person1.sayName();   //"Nicholas"
                   
var person2 = new Person();
person2.sayName();   //"Nicholas"
             
alert();      
alert(person1.sayName == person2.sayName);  //true
alert(person1.sayName === person2.sayName);  //true


/*     !!!!!!!
How Prototypes Work

Whenever a function is created, its prototype property is also created according to a specific set of rules. By default, all prototypes automatically get a property called constructor that points back to the function on which it is a property. In the previous example, for instance, Person.prototype.constructor points to Person. Then, depending on the constructor, other properties and methods may be added to the prototype.

When defining a custom constructor, the prototype gets the constructor property only by default; all other methods are inherited from Object. Each time the constructor is called to create a new instance, that instance has an internal pointer to the constructor’s prototype. In ECMA-262 fifth edition, this is called [[Prototype]]. There is no standard way to access [[Prototype]] from script, but Firefox, Safari, and Chrome all support a property on every object called __proto__.; in other implementations, this property is completely hidden from script. The important thing to understand is that a direct link exists between the instance and the constructor’s prototype but not between the instance and the constructor.
*/

// Note that Person.prototype points to the prototype object but Person.prototype.constructor points back to Person.

alert();
alert(Person.prototype.isPrototypeOf(person1));  //true
alert(Person.prototype.isPrototypeOf(person2));  //true

alert();
alert(Object.getPrototypeOf(person1) === Person.prototype);  //true
alert(Object.getPrototypeOf(person1).name);  //"Nicholas"


/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");

// Whenever a property is accessed for reading on an object, a search is started to find a property with that name. 
//      The search begins on the object instance itself. 
// If a property with the given name is found on the instance, then that value is returned; 
//      if the property is not found, then the search continues up the pointer to the prototype, and the prototype is searched for a property with the same name. 
// If the property is found on the prototype, then that value is returned.

alert(" -- hasOwnProperty() -- ");

function Person(){
}
                   
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
                   
var person1 = new Person();
var person2 = new Person();
                   
person1.name = "Greg";

alert(person1.name);     //"Greg" - from instance
alert(person2.name);     //"Nicholas" - from prototype
alert(person1.__proto__.name);     //"Nicholas" - from prototype

alert();
alert(person1.hasOwnProperty("name")); 
alert(person2.hasOwnProperty("name"));

/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");





/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");