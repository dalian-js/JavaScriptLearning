// New objects are extensible.
var empty = {};
console.log(Object.isExtensible(empty) === true);

// ...but that can be changed.
Object.preventExtensions(empty);
console.log(Object.isExtensible(empty) === false);

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
console.log(Object.isExtensible(sealed) === false);

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
console.log(Object.isExtensible(frozen) === false);