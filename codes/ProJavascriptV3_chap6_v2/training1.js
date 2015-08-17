

"use strict";
var alert = console.log;


/*
构造函数模式
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    alert(this.name);
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

/*
要创建Person 的新实例，必须使用new 操作符。以这种方式调用构造函数实际上会经历以下4
个步骤：
(1) 创建一个新对象；
(2) 将构造函数的作用域赋给新对象（因此this 就指向了这个新对象）；
(3) 执行构造函数中的代码（为这个新对象添加属性）；
(4) 返回新对象。
在前面例子的最后，person1 和person2 分别保存着Person 的一个不同的实例。
*/
