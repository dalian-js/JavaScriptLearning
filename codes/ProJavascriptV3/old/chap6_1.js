"use strict";

var person = new Object;
person.name = "Nicholas1";
person.age = 29;
person.job = "software engineer";

person.sayName = function(){
    console.log(this.name);
};



/// 

var person2 = {
    name: "Nicholas2",
    ago: 29,
    job: "software enginner",
    sayName: function(){
        console.log(this.name);
    }
};

///

var person3 = {};
Object.defineProperty(person3, "name", {
    writable: false,
    value: "Nicholas3"
});

console.log(person3.name);
try {
    person3.name = "Zakas";
    console.log(person3.name);
} catch (e) {
    console.log(e);
}

// 

var person4 = {};
Object.defineProperty(person4, "name", {
    configurable: false,
    value: "Nicholas4"
});
console.log(person4.name);
try {
    //delete person4.name;
    var propName = Object.getOwnPropertyDescriptor(person4, 'name');
    console.log(propName);
    console.log(typeof propName);
    // console.log(person4.name);
    // Object.defineProperty(person4, "name", {
    //     configurable: true,
    //     value: "Nicholas4"
    // });
} catch (e) {
    console.log(e);
}