
/*
6.3 继承

简单回顾一下构造函数、原型和实例的关系：
每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型
对象的内部指针。那么，假如我们让原型对象等于另一个类型的实例，结果会怎么样呢？显然，此时的
原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数
的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实
例与原型的链条。这就是所谓原型链的基本概念。
*/

"use strict";
var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("---1----------------------------------------------");

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

// 这个例子中的实例以及构造函数和原型之间的关系如图6-4 所示 refer to image 6-4.jpg



/////////////////////////////////////////////////////////////////////////////////
alert("-----2--------------------------------------------");
/*
可以通过两种方式来确定原型和实例之间的关系。第一种方式是使用instanceof 操作符
第二种方式是使用isPrototypeOf()方法
*/

/*
通过原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会重写原型链
*/
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
//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
    getSubValue: function() {
        return this.subproperty;
    },
    someOtherMethod: function() {
        return false;
    }
};
var instance = new SubType();
try {
    alert(instance.getSuperValue()); //error!
} catch (e) {
    alert(e)
}


/////////////////////////////////////////////////////////////////////////////////
alert("------3-------------------------------------------");
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {
    //继承了SuperType
    SuperType.call(this);
}
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
var instance2 = new SubType();
alert(instance2.colors); //"red,blue,green"




