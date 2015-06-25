var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  configurable: true,
  writable: false
});

// Object.defineProperty(o, 'a', { configurable: true }); // throws a TypeError
// Object.defineProperty(o, 'a', { enumerable: true }); // throws a TypeError
// Object.defineProperty(o, 'a', { set: function() {} }); // throws a TypeError (set was undefined previously)
// Object.defineProperty(o, 'a', { get: function() { return 1; } }); // throws a TypeError (even though the new get does exactly the same thing)
// Object.defineProperty(o, 'a', { value: 12 }); // throws a TypeError
o.a = "355"
Object.defineProperty(o, 'a', { writable: true});
console.log(o.a); // logs 1
delete o.a; 

console.log(o.a); // logs 1

o.a = "98"
console.log(o.a); // logs 1