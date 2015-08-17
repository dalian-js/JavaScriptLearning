

var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("-------1------------------------------------------");


var name = "The Window";
var object = {
    name : "My Object",
    getName: function(){
        return this.name;
    }
};

alert(object.getName());

/////////////////////////////////////////////////////////////////////////////////
alert("---1----------------------------------------------");
function assignHandler() {
    var element = document.getElementById("someElement");
    var id = element.id;
    element.onclick = function() {
        alert(id);
    };
    element = null;
}
/*
在上面的代码中，通过把element.id 的一个副本保存在一个变量中，并且在闭包中引用该变量消
除了循环引用。但仅仅做到这一步，还是不能解决内存泄漏的问题。必须要记住：闭包会引用包含函数
的整个活动对象，而其中包含着element。即使闭包不直接引用element，包含函数的活动对象中也
仍然会保存一个引用。因此，有必要把element 变量设置为null。这样就能够解除对DOM 对象的引
用，顺利地减少其引用数，确保正常回收其占用的内存。
*/


/////////////////////////////////////////////////////////////////////////////////
alert("-----2--------------------------------------------");

/*
function() {
    //这里是块级作用域
}(); //出错！


这段代码会导致语法错误， 是因为JavaScript 将function 关键字当作一个函数声明的开始， 而函
数声明后面不能跟圆括号。 然而， 函数表达式的后面可以跟圆括号。 要将函数声明转换成函数表达式，
只要像下面这样给它加上一对圆括号即可。
*/

(function() {
    //这里是块级作用域
})();

/*
这种技术经常在全局作用域中被用在函数外部，从而限制向全局作用域中添加过多的变量和函数。
一般来说，我们都应该尽量少向全局作用域中添加变量和函数。在一个由很多开发人员共同参与的大型
应用程序中，过多的全局变量和函数很容易导致命名冲突。而通过创建私有作用域，每个开发人员既可
以使用自己的变量，又不必担心搞乱全局作用域
*/

/////////////////////////////////////////////////////////////////////////////////
alert("-----3--------------------------------------------");

/*
严格来讲，JavaScript 中没有私有成员的概念；所有对象属性都是公有的。不过，倒是有一个私有
变量的概念。任何在函数中定义的变量，都可以认为是私有变量，因为不能在函数的外部访问这些变量。
私有变量包括函数的参数、局部变量和在函数内部定义的其他函数。
*/

// 我们把有权访问私有变量和私有函数的公有方法称为特权方法（privileged method）。

function MyObject() {
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }
    //特权方法
    this.publicMethod = function() {
        privateVariable++;
        alert(privateVariable);
        return privateFunction();
    };
}

var ret = new MyObject();
alert(ret.publicMethod());
alert(ret.privateVariable); // undefined


alert("------4-------------------------------------------");
(function() {
    //私有变量和私有函数
    var privateVariable = 10;

    function privateFunction() {
        return false;
    }
    //构造函数, not set with "var"
    MyObject = function() {};
    //公有/特权方法
    MyObject.prototype.publicMethod = function() {
        privateVariable++;
        alert(privateVariable);
        return privateFunction();
    };
})();

var myObj = new MyObject();
myObj.publicMethod();