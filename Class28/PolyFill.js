const numbers = [1,2,3,4,5]

const muliplier = 2;

const multiply = function(element) {
    console.log(element * muliplier);
};

numbers.forEach(function(element) {
    multiply(element);
});

const obj = {
    muliplier:2,
    multiply(element) {
        console.log(element * this.muliplier);
    },
};

numbers.forEach(function(element) {
    console.log(element * this.muliplier);
}, obj);


//Iterate through all ites & execute the callback
// PlyFill for forEach
if (!Array.prototype.forEach){
    Array.prototype.forEach = function(callback, thisArg) {
        console.log(thisArg);
        let arr = this;
    
        for(let i =0; i<arr.length; i++) {
            callback.call(thisArg, arr[i], i, arr);
        }
    }
}


Array.prototype.map = function(callback, thisArg) {    
    let newArr = [];
    const arr = this;
    for(let i =0; i<arr.length; i++) {
        newArr.push(callback.call(thisArg, arr[i], i, arr));
    }    
    return newArr;
}

// Array.prototype.filter = function(callback, thisArg) {    
//     let newArr = [];
//     const arr = this;
//     for (let i=0; i< arr.length; i++) {
//         newArr.push(callback.call(thisArg, arr[i]));
//     }
//     return newArr;
// }






















































   