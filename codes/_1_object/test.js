"use strict";

console.log(Object == Object);
console.log(Object === Object);

function a()
{
    console.log("aa")
}

console.log(a.valueOf());

var num = null;
//num.toString();
var output = toString.call(num);
console.log(output);

console.log(typeof(undefined));

var x= 079;
console.log(x);