"use strict";
var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("----1---------------------------------------------");

alert(typeof Array.prototype.sort); //"function"
alert(typeof String.prototype.substring); //"function"

var n = 3;
try {
    n.say();
}
catch (e) {
    alert(e)
}

Number.prototype.say = function() {
    alert("from Number")
}
n.say();

/////////////////////////////////////////////////////////////////////////////////
alert("-----2--------------------------------------------");

function Person() {}
Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["Shelby", "Court"],
    sayName: function() {
        alert(this.name);
    }
};
var person1 = new Person();
var person2 = new Person();
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Court,Van"
alert(person2.friends); //"Shelby,Court,Van"
alert(person1.friends === person2.friends); //true



/////////////////////////////////////////////////////////////////////////////////
alert("-----3--------------------------------------------");

/*
创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式。构造函数模式用于定义实
例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本，
但同时又共享着对方法的引用，最大限度地节省了内存。另外，这种混成模式还支持向构造函数传递参
数；可谓是集两种模式之长。
*/

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ["Shelby", "Court"];
}
Person.prototype = {
    constructor: Person,
    sayName: function() {
        alert(this.name);
    }
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
person1.friends.push("Van");
alert(person1.friends); //"Shelby,Count,Van"
alert(person2.friends); //"Shelby,Count"
alert(person1.friends === person2.friends); //false
alert(person1.sayName === person2.sayName); //true


/////////////////////////////////////////////////////////////////////////////////
alert("------4------------------------------------------");

/*
注意构造函数代码中加粗的部分。这里只在sayName()方法不存在的情况下，才会将它添加到原
型中。这段代码只会在初次调用构造函数时才会执行。此后，原型已经完成初始化，不需要再做什么修
改了。
*/

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
var friend = new Person("Nicholas", 29, "Software Engineer");
friend.sayName();


/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");


/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");
