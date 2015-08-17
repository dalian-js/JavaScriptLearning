

"use strict";
var alert = console.log;

/*
原型模式
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    alert(this.name);
};

var person1 = new Person();
person1.sayName(); //"Nicholas"

var person2 = new Person();
person2.sayName(); //"Nicholas"

alert(person1.sayName == person2.sayName); //true

/*
使用hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。这个方法（不
要忘了它是从Object 继承来的）只在给定属性存在于对象实例中时，才会返回true。
*/


/*
要取得对象上所有可枚举的实例属性，可以使用ECMAScript 5 的Object.keys()方法。
*/





/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");





/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");



