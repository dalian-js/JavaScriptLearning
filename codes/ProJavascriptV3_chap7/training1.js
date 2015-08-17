
var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

function FuncNameIsThis(){
    
}

alert(FuncNameIsThis.name);


// function declaration hoisting
sayHi();
function sayHi(){
    alert("Hi!");
}

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

//不要这样做！
var condition = true;
if(condition){
    function sayHi2(){
        alert("Hi!");
    }
} else {
    function sayHi2(){
        alert("Yo!");
    }
}
sayHi2();

//可以这样做
var sayHi3;
if (condition) {
    sayHi3 = function() {
        alert("Hi!");
    };
}
else {
    sayHi3 = function() {
        alert("Yo!");
    };
}
sayHi3();

/*
做匿名函数（anonymous function），因为function 关键字后面没有标识符。
（匿名函数有时候也叫拉姆达函数。）匿名函数的name 属性是空字符串
*/
var functionName = function(arg0, arg1, arg2){
    //函数体
};

/////////////////////////////////////////////////////////////////////////////////
alert("-------------------------------------------------");

// arguments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数的递归调用
function factorial(num){
    if (num <= 1){
        return 1;
    } else {
        return num * arguments.callee(num-1);
    }
}

// or
var factorial = (function f(num){
    if (num <= 1){
        return 1;
    } else {
        return num * f(num-1);
    }
});



