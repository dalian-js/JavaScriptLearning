/*
ECMA-262 defines an object as an “unordered collection of properties each of which contains a primitive value, object, or function.”
*/


/*
UNDERSTANDING OBJECTS
*/

/////////////////////////////////////////////////////////////////////////////////
// create a object, then add properties, methods.

var alert = console.log;

var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
                   
person.sayName = function(){
    alert(this.name);
};
person.sayName();

/////////////////////////////////
// same as above

var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
 
    sayName: function(){
        alert(this.name);
    }
};
person.sayName();

/////////////////////////////////////////////////////////////////////////////////
// types of properties
/*
ECMA-262 fifth edition describes characteristics of properties through the use of internal-only attributes.
two types of properties: data properties and accessor properties.
*/

// 1, Data Properties
/*
    Data properties contain a single location for a data value. Values are read from and written to this location. Data properties have four attributes describing their behavior:
    [[Configurable]] — Indicates if the property may be redefined by removing the property via delete, changing the property’s attributes, or changing the property into an accessor property. By default, this is true for all properties defined directly on an object, as in the previous example.
    [[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object, as in the previous example.
    [[Writable]] — Indicates if the property’s value can be changed. By default, this is true for all properties defined directly on an object, as in the previous example.
    [[Value]] — Contains the actual data value for the property. This is the location from which the property’s value is read and the location to which new values are saved. The default value for this attribute is undefined.
    
    When a property is explicitly added to an object as in the previous examples, [[Configurable]], [[Enumerable]], and [[Writable]] are all set to true while the [[Value]] attribute is set to the assigned value.
*/
alert("----------------------");
var person = {};
alert(person.name);
person.name = "Nich";
alert(Object.getOwnPropertyDescriptor(person, "name"));
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas readonly"
});
alert(person.name);
person.name = "Greg";
alert(person.name); 
alert(Object.getOwnPropertyDescriptor(person, "name"));

// setting configurable to false means that the property cannot be removed from the object.
// Additionally, once a property has been defined as nonconfigurable, it cannot become configurable again. Any attempt to call Object.defineProperty() and change any attribute other than writable causes an error

// When you are using Object.defineProperty(), the values for configurable, enumerable, and writable default to false unless otherwise specified. 


// 2, Accessor Properties
/*
    Accessor properties do not contain a data value. Instead, they contain a combination of a getter function and a setter function (though both are not necessary). When an accessor property is read from, the getter function is called, and it’s the function’s responsibility to return a valid value; when an accessor property is written to, a function is called with the new value, and that function must decide how to react to the data. Accessor properties have four attributes:
    [[Configurable]] — Indicates if the property may be redefined by removing the property via delete, changing the property’s attributes, or changing the property into a data property. By default, this is true for all properties defined directly on an object.
    [[Enumerable]] — Indicates if the property will be returned in a for-in loop. By default, this is true for all properties defined directly on an object.
    [[Get]] — The function to call when the property is read from. The default value is undefined.
    [[Set]] — The function to call when the property is written to. The default value is undefined.
*/

alert("----------------------------------");
var book = {
    _year: 2004,
    edition: 1
};
Object.defineProperty(book, "year", {
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if (newValue > 2004) {
            this._year = newValue;
            this.edition += newValue - 2004;
        }
    }
});
 
book.year = 2005;
alert(book.edition); 
alert(book.year);
alert(book._year);

// It’s not necessary to assign both a getter and a setter. It is a little similar to C# property
//   

/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");





/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");





/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");





/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");

