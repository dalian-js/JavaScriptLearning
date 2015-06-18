// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
var o = {};
console.log(o);

var o = { a: "foo", b: 42, c: {} };
console.log(o);

var a = "foo", b = 42, c = {};
var o = { a: a, b: b, c: c };
console.log(o);

var o = {
  propA: function (value) {},
  get propB() {},
  set propB(value) {},
};
console.log(o);
