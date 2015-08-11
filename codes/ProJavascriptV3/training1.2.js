
/*
UNDERSTANDING OBJECTS
*/

// Defining Multiple Properties
// support compatibility: http://kangax.github.io/compat-table/es5/

"use strict";
var alert = console.log;

/////////////////////////////////////////////////////////////////////////////////
alert("----------------------------------");
var book = {};
 
Object.defineProperties(book, {
    _year: {
        value: 2004,
        writable: true // differ with code
    },
    edition: {
        value: 1,
        writable: true // differ with code
    },
    year: {            
        get: function(){
            return this._year;
        },
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }                  
        },
        // if add following code:
        //   value: 2003 
        // will throw TypeError: A property cannot both have accessors and be writable or have a value
    }        
});
alert(book);
book.year = 2014;
alert(book.year);
alert(book.edition); // 

var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
alert(descriptor.value);          //2004
alert(descriptor.configurable);   //false
alert(typeof descriptor.get);     //"undefined"
alert();
var descriptor = Object.getOwnPropertyDescriptor(book, "year");
alert(descriptor.value);          //undefined
alert(descriptor.enumerable);     //false
alert(typeof descriptor.get);     //"function"

