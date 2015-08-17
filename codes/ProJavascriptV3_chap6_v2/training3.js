

"use strict";
var alert = console.log;


/*
6.2.5 动态原型模式

动态原型模式把所有信息都封装在了构造函数中，而通过在构造函数
中初始化原型（仅在必要的情况下），又保持了同时使用构造函数和原型的优点。换句话说，可以通过
检查某个应该存在的方法是否有效，来决定是否需要初始化原型。
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function Person(name, age, job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;
    //方法
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function() {
            alert(this.name);
        };
    }
}

var p1 = new Person();
var p2 = new Person();
