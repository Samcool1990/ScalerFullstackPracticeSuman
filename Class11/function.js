// Example 1:
var x =1, y = 2;

function sum(a,b) {
    return a + b;
}

console.log(sum(1,2));

// Example 2:

var z = [1,2];
function total(arr) {
    return arr[0] + arr[1];
}

z[0] = 10;
console.log(total(z));


// Example 3:
var x =1, y = 2;

function sum(a,b) {
   a = 10;
   return a + b;
}
//pass by value
console.log(sum(x,y)); //A
console.log(x,y); //B


// Example 4:

var z = [1,2]
function total(arr) {
    arr[0] = 10
    return arr[0] + arr[1];
}
//pass by reference
console.log(total(z));//A
console.log(z); //B

// Example 5:
var x =1, y = 2;

function sum(a,b) {
   a = 10;
   return a + b;
}

//Pure function
console.log(sum(x,y)); //12
console.log(sum(x,y)); //12
console.log(sum(x,y)); //12
console.log(sum(x,y)); //12
console.log(sum(x,y)); //12
console.log(sum(x,y)); //12


// Example 6:

let count = 0

function counter() {
    count ++;
    return count;
}

//impure function
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());


// Example 7:

function compute(fn, a, b ) {
    return fn(a,b);
}

function sum(x,y) {
    return x + y;
}

function subtract(x,y) {
    return y - x;
}

console.log('Example 7 :' + compute(sum, 2, 5));
console.log('Example 7 :' + compute(subtract, 2, 5));

 
// Example 8:

function x( a ) {
    return function(b) {
    return a + b;
    }
}

//Function can return another function
console.log(x(1)(2));




















