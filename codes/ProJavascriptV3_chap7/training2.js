

var alert = console.log;

/*
闭包

当某个函数被调用时，会创建一个执行环境（execution context）及相应的作用域链。
然后，使用arguments 和其他命名参数的值来初始化函数的活动对象（activation object）。但在作用域
链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，……直至作
为作用域链终点的全局执行环境。

由于闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存。过
度使用闭包可能会导致内存占用过多，我们建议读者只在绝对必要时再考虑使用闭
包。
*/

/////////////////////////////////////////////////////////////////////////////////
alert("---------1----------------------------------------");



function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
}

var allF = createFunctions();
for (var i = 0; i < allF.length; i++) {
    alert(allF[i]());
}

// closure version
function createFunctions2(){
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function(num) {
            return function (){
                return num;
            };
        }(i);
    }
    return result;
}

var allF = createFunctions2();
for (var i = 0; i < allF.length; i++) {
    alert(allF[i]());
}

/////////////////////////////////////////////////////////////////////////////////
alert("-------2------------------------------------------");

var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        var that = this;
        return function() {
            return that.name;
        };
    }
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下） // my testing "undefined"


var name = "The Window";
var object = {
    name: "My Object",
    getNameFunc: function() {
        var that = this;
        return function() {
            return that.name;
        };
    }
};
alert(object.getNameFunc()());
