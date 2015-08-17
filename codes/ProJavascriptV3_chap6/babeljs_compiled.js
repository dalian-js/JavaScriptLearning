// https://babeljs.io/repl/#?experimental=true&evaluate=true&loose=false&spec=false&code=class%20Animal%20%7B%20%0D%0A%20%20constructor(name)%20%7B%0D%0A%20%20%20%20this.name%20%3D%20name%3B%0D%0A%20%20%7D%0D%0A%20%20%0D%0A%20%20speak()%20%7B%0D%0A%20%20%20%20console.log(this.name%20%2B%20'%20makes%20a%20noise.')%3B%0D%0A%20%20%7D%0D%0A%7D%0D%0A


'use strict';

var _createClass = (function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
})();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var Animal = (function() {
    function Animal(name) {
        _classCallCheck(this, Animal);
        this.name = name;
    }
    _createClass(Animal, [{
        key: 'speak',
        value: function speak() {
            console.log(this.name + ' makes a noise.');
        }
    }]);

    return Animal;
})();

// will throw an error
// Animal("abc");

var animal = new Animal("abc");
console.log(animal);