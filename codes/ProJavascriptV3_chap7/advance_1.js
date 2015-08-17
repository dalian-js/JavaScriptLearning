/*
http://goddyzhao.tumblr.com/post/11218727474/this
*/


var alert = console.log;

var foo = {
    x: 10
};

var bar = {
    x: 20,
    test: function() {

        alert(this === bar); // true
        alert(this.x); // 20
    }
};

// 在进入上下文的时候，this的值就确定了是“bar”对象
// 至于为什么，会在后面作详细介绍

bar.test(); // true, 20

foo.test = bar.test;

// 但是，这个时候，this的值又会变成“foo”
// 纵然我们调用的是同一个函数

foo.test(); // false, 10




function foo2() {
  alert(this);
}
 
foo2(); // global
 
alert(foo2 === foo2.prototype.constructor); // true
 
// 然而，同样的函数，以另外一种调用方式的话，this的值就不同了
 
foo2.prototype.constructor(); // foo.prototype