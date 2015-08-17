

"use strict";
var alert = console.log;

/*
原型式继承

道格拉斯·克罗克福德在2006 年写了一篇文章，题为Prototypal Inheritance in JavaScript （JavaScript
中的原型式继承）。在这篇文章中，他介绍了一种实现继承的方法，这种方法并没有使用严格意义上的
构造函数。他的想法是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。为
了达到这个目的，他给出了如下函数。
function objectCreate(o){
    function F(){}
    F.prototype = o;
    return new F();
}

ECMAScript 5 通过新增Object.create()方法规范化了原型式继承。这个方法接收两个参数：一
个用作新对象原型的对象和（可选的）一个为新对象定义额外属性的对象。在传入一个参数的情况下，
Object.create()与objectCreate()方法的行为相同。

在没有必要兴师动众地创建构造函数，而只想让一个对象与另一个对象保持类似的情况下，原型式
继承是完全可以胜任的。
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");
var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"


/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");


/*
6.3.6 寄生组合式继承

这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.
prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用
instanceof 和isPrototypeOf()。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

*/

var objectCreate = Object.create;
function inheritPrototype(subType, superType){
    var prototype = objectCreate(superType.prototype); //创建对象
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}

// base
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    alert(this.name);
};

// child
function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    alert(this.age);
};
