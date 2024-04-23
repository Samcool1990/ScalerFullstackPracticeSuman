function global(a) {
    var g = 'g'
    function outer(b) {
        var o = 'o'
        function inner(c) {
            var i = 'i'

        }
    }
}


function x() {
    var outer = 'Outer';
    return function () {
        console.log(outer);

    }
}

const innerFn = x();
console.log(innerFn);
console.log(innerFn());


//Question2:

function x(a) {
    function y(b) {
        return a + b;
    }
    return y;
}

const innerFn = x(1);
console.log(innerFn(2));


//Question 3:
console.log(multiply(1)(2)(3)); // 6


function multiply(x) {
    return function(y) {
        return function(z) {
            return x * y * z;
        }
    } 
}

console.log(multiply(1)(2)); 