let a = [1,2,3,4]

// a.myMap((item) => item*2);

function myMap(arr, callback) {
    let newArr = [];
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

myMap(a, (item) => item * 2);

Array.prototype.myMap = function(callback) {
    let newArr = [];
    const arr = this;
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}

a.myMap((item) => item*2);

let b = [2,3,4];

b.myMap((item) => item/2);



//Plyfill for filter

a.myFilter(item => item % 2 === 0);

function myFilter(arr, callback) {
    let newArr = [];
    const arr = this;
    for (let i=0; i< arr.length; i++) {
        newArr.push(callback(arr[i]));
    }
    return newArr;
}


Array.prototype.myFilter = function(callback) {
    let newArr = [];
    const arr = this;
    for (let i=0; i< arr.length; i++) {
        if (callback(arr[i])){
        newArr.push(arr[i]);
    }}
    return newArr;
}

a.myFilter(item => item % 2 === 0);
































