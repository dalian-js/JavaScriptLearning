// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer

var obj1 = {};
console.log(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
console.log(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
console.log(Object.getPrototypeOf(obj3) === protoObj);

// If the value is not an object or null, the object is not changed
var obj4 = { __proto__: "not an object or null" };
console.log(Object.getPrototypeOf(obj4) === Object.prototype);
console.log(!obj4.hasOwnProperty("__proto__"));