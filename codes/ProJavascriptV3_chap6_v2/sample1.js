
var alert = console.log;

var p1 = Object.create(null);
alert(p1.toString);

p1.aaa;

function Test()
{
    name = "Nancy";
    alert(name);
}

Test();

//alert(name);
alert(this.name);



