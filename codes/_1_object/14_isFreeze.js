// A new object is extensible, so it is not frozen.
console.log(Object.isFrozen({}) === false);

// An empty object which is not extensible is vacuously frozen.
var vacuouslyFrozen = Object.preventExtensions({});
console.log(Object.isFrozen(vacuouslyFrozen) === true);

// A new object with one property is also extensible, ergo not frozen.
var oneProp = { p: 42 };
console.log(Object.isFrozen(oneProp) === false);

// Preventing extensions to the object still doesn't make it frozen,
// because the property is still configurable (and writable).
Object.preventExtensions(oneProp);
console.log(Object.isFrozen(oneProp) === false);

// ...but then deleting that property makes the object vacuously frozen.
delete oneProp.p;
console.log(Object.isFrozen(oneProp) === true);

// A non-extensible object with a non-writable but still configurable property is not frozen.
var nonWritable = { e: 'plep' };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, 'e', { writable: false }); // make non-writable
console.log(Object.isFrozen(nonWritable) === false);

// Changing that property to non-configurable then makes the object frozen.
Object.defineProperty(nonWritable, 'e', { configurable: false }); // make non-configurable
console.log(Object.isFrozen(nonWritable) === true);

// A non-extensible object with a non-configurable but still writable property also isn't frozen.
var nonConfigurable = { release: 'the kraken!' };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, 'release', { configurable: false });
console.log(Object.isFrozen(nonConfigurable) === false);

// Changing that property to non-writable then makes the object frozen.
Object.defineProperty(nonConfigurable, 'release', { writable: false });
console.log(Object.isFrozen(nonConfigurable) === true);

// A non-extensible object with a configurable accessor property isn't frozen.
var accessor = { get food() { return 'yum'; } };
Object.preventExtensions(accessor);
console.log(Object.isFrozen(accessor) === false);

// ...but make that property non-configurable and it becomes frozen.
Object.defineProperty(accessor, 'food', { configurable: false });
console.log(Object.isFrozen(accessor) === true);

// But the easiest way for an object to be frozen is if Object.freeze has been called on it.
var frozen = { 1: 81 };
console.log(Object.isFrozen(frozen) === false);
Object.freeze(frozen);
console.log(Object.isFrozen(frozen) === true);

// By definition, a frozen object is non-extensible.
console.log(Object.isExtensible(frozen) === false);

// Also by definition, a frozen object is sealed.
console.log(Object.isSealed(frozen) === true);