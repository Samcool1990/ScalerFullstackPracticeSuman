function sum(a,b = 0) {  // b = 0 is the default value
    return a + b;
}
console.log(sum(1));
console.log(sum(1,2));



//Array

var arr1 = [1,2,3];
var arr2 = arr1;

arr2[0] = 10;

console.log(arr1, arr2);// [10,2,3] [10,2,3]


// AVOID 
var arr1 = [1,2,3];
var arr2 = arr1.slice();

arr2[0] = 10;

console.log(arr1, arr2);// [10,2,3] [10,2,3]


// or 
var arr1 = [1,2,3];
var arr2 = [...arr1];

arr2[0] = 10;

console.log(arr1, arr2);// [10,2,3] [10,2,3]


