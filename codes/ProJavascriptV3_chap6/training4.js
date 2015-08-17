

"use strict";
var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

/*
变量friend 中保存的是一个稳妥对象，而除了调用sayName()方法外，没有别的方式可
以访问其数据成员。

与寄生构造函数模式类似，使用稳妥构造函数模式创建的对象与构造函数之间也
没有什么关系，因此instanceof 操作符对这种对象也没有意义。
*/

function Person(name, age, job) {
    //创建要返回的对象
    var o = new Object();
    //可以在这里定义私有变量和函数
    //添加方法
    o.sayName = function() {
        alert(name);
    };
    //返回对象
    return o;
}
var friend = Person("Nicholas", 29, "Software Engineer");
friend.sayName(); //"Nicholas"

