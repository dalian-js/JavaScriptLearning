"use strict";

function Dog(name, breed, color, sex) {
  this.name = name;
  this.breed = breed;
  this.color = color;
  this.sex = sex;
}
var theDog = new Dog('Gabby', 'Lab', 'chocolate', 'female');
console.log(theDog.toString()); // returns [object Object]

Dog.prototype.toString = function dogToString() {
  var ret = 'Dog ' + this.name + ' is a ' + this.sex + ' ' + this.color + ' ' + this.breed;
  return ret;
}
console.log(theDog.toString()); // returns [object Object]


//// use toString to get object type, could use for null, undefined too.
var toString = Object.prototype.toString;

toString.call(new Date);    // [object Date]
toString.call(new String);  // [object String]
toString.call(Math);        // [object Math]

// Since JavaScript 1.8.5
toString.call(undefined);   // [object Undefined]
toString.call(null);        // [object Null]