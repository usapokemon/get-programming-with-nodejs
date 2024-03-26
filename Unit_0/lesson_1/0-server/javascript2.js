var foo = 123; 
if (true) { 
    (function() { // create a new scope with var 
        var foo = 456;
    })();
}
console.log(foo); // 123;
/*
var foo = 123;
if (true) {
    (function () { // create a new scope
        var foo = 456;
    })();
}
console.log(foo); // 123; 
*/
