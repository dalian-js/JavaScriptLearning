

"use strict";
var alert = console.log;


/*
6.3 继承

许多OO 语言都支持两种继承方式：接口继承和实现继承。接口继承只继承方法签名，而实现继承则继承实际的方法。
如前所述，由于函数没有签名，在ECMAScript 中无法实现接口继承。ECMAScript 只支持实现继承，而且其实现继承主要是依靠原型链
来实现的。
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
};

function SubType() {
    this.subproperty = false;
}

//继承了SuperType
SubType.prototype = new SuperType();
SubType.prototype.getSubValue = function() {
    return this.subproperty;
};

var instance = new SubType();
alert(instance.getSuperValue()); //true

/*
可以通过两种方式来确定原型和实例之间的关系。第一种方式是使用instanceof 操作符
第二种方式是使用isPrototypeOf()方法。同样，只要是原型链中出现过的原型，都可以说是该
原型链所派生的实例的原型，因此isPrototypeOf()方法也会返回true
*/




/////////////////////////////////////////////////////////////////////////////////
alert("-------1------------------------------------------");


/*
组合继承（combination inheritance），有时候也叫做伪经典继承，指的是将原型链和借用构造函数的
技术组合到一块，从而发挥二者之长的一种继承模式。其背后的思路是使用原型链实现对原型属性和方
法的继承，而通过借用构造函数来实现对实例属性的继承。这样，既通过在原型上定义方法实现了函数
复用，又能够保证每个实例都有它自己的属性。
*/
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    alert(this.name);

};

function SubType(name, age) {
    //继承属性
    SuperType.call(this, name); // call base function constructor
    this.age = age;
}
//继承方法
//SubType.prototype = new SuperType();

SubType.prototype = {
    prototype: SuperType,
}

//SubType.prototype.constructor = SubType;
alert(SubType.prototype.constructor === SuperType);


/////////////////////////////////////////////////////////////////////////////////
alert("--------2-----------------------------------------");
// todo
alert(SubType.constructor === Function);

alert(SubType.__proto__.name);

SubType.prototype.sayAge = function() {
    alert(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27