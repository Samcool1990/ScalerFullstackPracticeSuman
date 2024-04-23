
// BEFORE//
var result = sum(1,2);
console.log(result)

function sum(a,b) {
    var total = a+ b;
    return total;

}

// AFTER //
var result;
function sum(a,b) {
    var total = a+ b;
    return total;

}
result = sum(1,2);
console.log(result);


// BEFORE anonymus function example
var result = sum(1,2);
console.log(result)
var sum = function(a,b) {
    var total = a+ b;
    return total;
}


// AFTER anonymus function example
var result;
var sum;

result = sum(1,2);    //Error Saying sum is not a function
console.log(result)

sum = function(a,b) {
    var total = a+ b;
    return total;
}


//Question 3 :

function sum(a,b) {
    total = a+ b;  // total is not declared so  it becomes global variable
    return total;
}

var result = sum(1,2);
console.log(result,total);// A:3 B:3



//Question 4 :
//BEFORE
function sum(a,b) {
    let total = a+ b;  
    return total;
}

console.log(result,sum); //
let result = sum(1,2);

//AFTER
function sum(a,b) {
    let total = a+ b;  
    return total;
}
console.log(result,sum); // ERROR
let result = sum(1,2);


//Question5:
//before
let result = sum(1,2);
console.log(result);


let sum = function(a,b) {
    var total = a+ b;  
    return total;
}

// AFTER
var total = a+ b;  
let sum = function(a,b) {
    var total = a+ b;  
    return total;
}
let result = sum(1,2);
console.log(result);