

var alert = console.log;



/////////////////////////////////////////////////////////////////////////////////
alert("------1-------------------------------------------");
function BaseComponent(){
    // xx
}

var application = function() {
    //私有变量和函数
    var components = new Array();
    //初始化
    components.push(new BaseComponent());
    //公共
    return {
        getComponentCount: function() {
            return components.length;
        },
        registerComponent: function(component) {
            if (typeof component == "object") {
                components.push(component);
            }
        }
    };
}();

// or 
var application2 = function() {
    //私有变量和函数
    var components = new Array();
    //初始化
    components.push(new BaseComponent());
    //创建application 的一个局部副本
    var app = new BaseComponent();
    //公共接口
    app.getComponentCount = function() {
        return components.length;
    };
    app.registerComponent = function(component) {
        if (typeof component == "object") {
            components.push(component);
        }
    };
    //返回这个副本
    return app;
}();

/////////////////////////////////////////////////////////////////////////////////
alert("------2-------------------------------------------");

alert(application.getComponentCount());
alert(application2.getComponentCount());




