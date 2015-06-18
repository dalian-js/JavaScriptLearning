"use strict"

function foo(a) {
    console.log( a + b ); // if a is number, result is NaN
    var b = a;
}

foo( '2' );

function foo2(a) {
    console.log( a + c ); // c is undefined, exception
    c = a;
}

foo2( '2' );
