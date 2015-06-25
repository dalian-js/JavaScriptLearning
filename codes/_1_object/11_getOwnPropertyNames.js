var arr = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(arr).sort()); // prints '0,1,2,length'

// Array-like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(obj).sort()); // prints '0,1,2'

// Printing property names and values using Array.forEach
Object.getOwnPropertyNames(obj).forEach(function(val, idx, array) {
  console.log(val + ' -> ' + obj[val]);
});
// prints
// 0 -> a
// 1 -> b
// 2 -> c

// non-enumerable property
var my_obj = Object.create({}, {
  getFoo: {
    value: function() { return this.foo; },
    enumerable: false
  }
});
my_obj.foo = 1;

console.log(Object.getOwnPropertyNames(my_obj).sort()); // prints 'foo,getFoo'


////////////

function ParentClass() {}
ParentClass.prototype.inheritedMethod = function() {};

function ChildClass() {
  this.prop = 5;
  this.method = function() {};
  return 555;
}
ChildClass.prototype = new ParentClass;
ChildClass.prototype.prototypeMethod = function() {};

console.log(
  Object.getOwnPropertyNames(
    new ChildClass() // ['prop', 'method']
  )
);

c3 = ChildClass();
console.log(c3);
c2 = new ChildClass();
console.log(c2.inheritedMethod);
console.log(c2.prototypeMethod);


//////////////

var target = myObject;
var enum_and_nonenum = Object.getOwnPropertyNames(target);
var enum_only = Object.keys(target);
var nonenum_only = enum_and_nonenum.filter(function(key) {
  var indexInEnum = enum_only.indexOf(key);
  if (indexInEnum == -1) {
    // not found in enum_only keys mean the key is non-enumerable,
    // so return true so we keep this in the filter
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_only);