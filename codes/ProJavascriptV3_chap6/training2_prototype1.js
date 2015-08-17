

"use strict";
var alert = console.log;


// http://never-coding.com/__proto__-prototype/


/////////////////////////////////////////////////////////////////////////////////
alert("----1---------------------------------------------");


//所有构造器/函数的proto都指向Function.prototype，它是一个空函数（Empty function）

alert(Number.__proto__ === Function.prototype)  // true
alert(Boolean.__proto__ === Function.prototype) // true
alert(String.__proto__ === Function.prototype)  // true
alert(Object.__proto__ === Function.prototype)  // true
alert(Function.__proto__ === Function.prototype) // true 
alert(Array.__proto__ === Function.prototype)  // true
alert(RegExp.__proto__ === Function.prototype)  // true
alert(Error.__proto__ === Function.prototype)   // true
alert(Date.__proto__ === Function.prototype)    // true

alert(Math.__proto__ === Object.prototype)  // true 
alert(JSON.__proto__ === Object.prototype)  // true


// 函数声明
function Person() {}
// 函数表达式
var Man = function() {}
console.log(Person.__proto__ === Function.prototype) // true
console.log(Man.__proto__ === Function.prototype)    // true

/////////////////////////////////////////////////////////////////////////////////
alert("----2---------------------------------------------");

// Function.prototype也是唯一一个typeof XXX.prototype为 “function”的prototype。其它的构造器的prototype都是一个对象。
alert(typeof Function.prototype) // function
alert(typeof Object.prototype)   // object
alert(typeof Number.prototype)   // object
alert(typeof Boolean.prototype)  // object
alert(typeof String.prototype)   // object
alert(typeof Array.prototype)    // object
alert(typeof RegExp.prototype)   // object
alert(typeof Error.prototype)    // object
alert(typeof Date.prototype)     // object
alert(typeof Object.prototype)   // object


alert(Function.prototype.__proto__ === Object.prototype) // true
alert(Object.prototype.__proto__ === null)



/////////////////////////////////////////////////////////////////////////////////
alert("----3---------------------------------------------");
// 所有对象的proto都指向其构造器的prototype
var obj = {name: 'jack'}
var arr = [1,2,3]
var reg = /hello/g
var date = new Date
var err = new Error('exception')

console.log(obj.__proto__ === Object.prototype) // true
console.log(arr.__proto__ === Array.prototype)  // true
console.log(reg.__proto__ === RegExp.prototype) // true
console.log(date.__proto__ === Date.prototype)  // true
console.log(err.__proto__ === Error.prototype)  // true



function Person(name) {
    this.name = name
}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype) // true

function Person(name) {
    this.name = name
}
var p = new Person('jack')
console.log(p.__proto__ === p.constructor.prototype) // true

/////////////////////////////////////////////////////////////////////////////////
alert("----4---------------------------------------------");

function Person(name) {
    this.name = name
}
// 修改原型
Person.prototype.getName = function() {}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // true

function Person(name) {
    this.name = name
}
// 重写原型
Person.prototype = {
    getName: function() {}
}
var p = new Person('jack')
console.log(p.__proto__ === Person.prototype) // true
console.log(p.__proto__ === p.constructor.prototype) // false
alert(p.__proto__ === Object.getPrototypeOf(p))  // true

Person.prototype = {
    constructor: Person,
    getName: function() {}
}
var p = new Person('Hou')
console.log(p.__proto__ === p.constructor.prototype) // true

/////////////////////////////////////////////////////////////////////////////////
alert("-----5--------------------------------------------");

console.log(Object.prototype)
console.log(Object.__proto__)

console.log(Object.prototype.prototype)
console.log(Object.__proto__.__proto__)
console.log(Object.__proto__.__proto__.__proto__)


/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

