var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
console.log(Object.getPrototypeOf(obj));