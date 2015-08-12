

"use strict";
var alert = console.log;


/*
寄生组合继承
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}

function inheritPrototype(subType, superType) {
    //var prototype = object(superType.prototype); //创建对象
    var prototype = Object.create(superType.prototype);
    prototype.constructor = subType; //增强对象
    subType.prototype = prototype; //指定对象
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function() {
    alert(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name);
    this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function() {
    alert(this.age);
};

var sub = new SubType("Myname", 33);
sub.sayAge();
sub.sayName();

/*
这个例子的高效率体现在它只调用了一次SuperType 构造函数，并且因此避免了在SubType.
prototype 上面创建不必要的、多余的属性。与此同时，原型链还能保持不变；因此，还能够正常使用
instanceof 和isPrototypeOf()。开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。

refer to image 6-6.jpg
*/



/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");




