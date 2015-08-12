

"use strict";
var alert = console.log;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto

// [[Prototype]]
// xx.__proto__  ==> Object.prototype.__proto__
// xx.prototype
// Object.getPrototypeOf(xx)


// The use of __proto__ is controversial, and has been discouraged. It was never originally included in the EcmaScript language spec, 
//    but modern browsers decided to implement it anyway.


/////////////////////////////////////////////////////////////////////////////////
alert("------1-------------------------------------------");


var O1 = {
    name: "my name",
    sayO1: function sayO1(){
        alert("say O1");
    }
}
O1.toString();

var O21 = Object.create(null);
alert(O21);
try {
    O21.toString();
} catch (e) {
    alert(e)
}

var O22 = Object.create(O1);
O22.sayO1();


alert(O1.prototype);
try {
    O1.prototype.say = function(){};
} catch (e) {
    alert(e);
}

/////////////////////////////////////////////////////////////////////////////////
alert("-----2--------------------------------------------");

var call = Function.prototype.call;
var prototypeOfObject = Object.prototype;
var toStr = call.bind(prototypeOfObject.toString);

// https://github.com/es-shims/es5-shim/blob/master/es5-sham.js
if (!Object.getPrototypeOf) {
    // https://github.com/es-shims/es5-shim/issues#issue/2
    // http://ejohn.org/blog/objectgetprototypeof/
    // recommended by fschaefer on github
    //
    // sure, and webreflection says ^_^
    // ... this will nerever possibly return null
    // ... Opera Mini breaks here with infinite loops
    Object.getPrototypeOf = function getPrototypeOf(object) {
        /* eslint-disable no-proto */
        var proto = object.__proto__;
        /* eslint-enable no-proto */
        if (proto || proto === null) {
            return proto;
        } else if (toStr(object.constructor) === '[object Function]') {
            return object.constructor.prototype;
        } else if (!(object instanceof Object)) {
          // Correctly return null for Objects created with `Object.create(null)`
          // (shammed or native) or `{ __proto__: null}`.  Also returns null for
          // cross-realm objects on browsers that lack `__proto__` support (like
          // IE <11), but that's the best we can do.
          return null;
        } else {
          return prototypeOfObject;
        }
    };
}



function Person(){}
 
Person.prototype.kick = function(type){
  alert(type + " kick!");
}
 
function Norris(){}
 
// Inherit properties from Person
Norris.prototype = new Person();

Norris.prototype.kick = function(){
  Object.getPrototypeOf(this).kick("Roundhouse");
};
var n = new Norris();
n.kick();

n.__proto__.kick();
alert(typeof n);


/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");


if ( typeof Object.getPrototypeOf !== "function" ) {
  if ( typeof "test".__proto__ === "object" ) {
    Object.getPrototypeOf = function(object){
      return object.__proto__;
    };
  } else {
    Object.getPrototypeOf = function(object){
      // May break if the constructor has been tampered with
      return object.constructor.prototype;
    };
  }
}


// http://www.ituring.com.cn/article/56184
function New (f) {
    var n = { '__proto__': f.prototype }; /*第一步*/
    return function () {
        f.apply(n, arguments);            /*第二步*/
        return n;                         /*第三步*/
    };
}

Object.create = function (parent) {
    function F() {}
    F.prototype = parent;
    return new F();
};

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

// http://liujiacai.net/blog/2015/02/01/javascript-oop/
var a = {
    x: 10,
    calculate: function (z) {
        return this.x + this.y + z;
    }
};
var b = {
    y: 20,
    __proto__: a
};
var c = {
    y: 30,
    __proto__: a
};

var d = Object.create(a)

// call the inherited method
b.calculate(30); // 60
c.calculate(40); // 80
d.calculate(50);

/*
那么在函数对象中， 这两个属性的有什么区别呢？
__proto__表示该函数对象的原型
prototype表示使用new来执行该函数时（这种函数一般成为构造函数，后面会讲解），新创建的对象的原型。
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");
// http://dmitrysoshnikov.com/ecmascript/javascript-the-core/



// http://javascript.ruanyifeng.com/oop/basic.html
function _new(/* constructor, param, ... */) {
  var args = [].slice.call(arguments);
  var constructor = args.shift();
  var context = Object.create(constructor.prototype);
  var result = constructor.apply(context, args);
  return (typeof result === 'object' && result != null) ? result : context;
}

var actor = _new(Person, "张三", 28);


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf

Object.setPrototypeOf = Object.setPrototypeOf || function(obj, proto) {
  obj.__proto__ = proto;
  return obj; 
}