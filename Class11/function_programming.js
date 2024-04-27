
//////////////////////////FOREACH///////////////////////////////////////////////////////////////////

//Ex 1

let arr =  [1,2,3,4,5];

function sum(arr1) {
    //
    let total = 0;
    //Imperative Code
    // for (let i = 0; i < arr1.length; i++) {
    //     total += arr1[i];
    // }

    //Declarative Code   (Value index)
    arr1.forEach(function(item, idx) {  
        total += item;
    });

    return total;
}

console.log(sum(arr)); //15

////////////////////////// MAP ///////////////////////////////////////////////////////////////////
//Ex 2

function double(arr1) {
    // const result = [];
    // arr1.forEach(function(item, idx) {  
    //     result.push(item * 2);
    // });

    //Alternateive function
    const result = arr1.map(function(item,idx) {
        // return ' Hi'
        return item * 2;
     })
    return result
}

console.log(double(arr)); // [2,4,6,8,10]


//Ex 3

let arr2 = ["suman","dave","vishal", "tatan","saxena", "Pathak"]

function uppercase(arr) {
    // Create a new array to store the uppercase words
    // let uppercaseArray = [];
    
    // // Iterate through each word in the input array
    // for (let i = 0; i < arr.length; i++) {
    //     // Convert the word to uppercase using the toUpperCase() method
    //     let uppercaseWord = arr[i].toUpperCase();
        
    //     // Push the uppercase word to the new array
    //     uppercaseArray.push(uppercaseWord);
    // }
    
    // Return the array with all words converted to uppercase
    // return uppercaseArray;
    // return arr.map(word => word.toUpperCase());
    return arr.map(function(item,idx) {
        return item.toUpperCase();
    });
}

console.log(uppercase(arr2))

////////////////////////// FILTER ///////////////////////////////////////////////////////////////////
//Ex 4

let arr3 = [1,2,3,4,5,6,7,8];

function filterEvenNumbers(arr) {
    //Code goes here
    // const result = []
    // arr.forEach(function(item, idx) {
    //     if (item % 2 == 0) {
    //         result.push(item);
    //     }
    // });
    // return result;
    // Use the filter method to create a new array with only even numbers
    const result = arr.filter(function(item,idx){
    return item % 2 ==0 ;
  });
  return result
}

console.log(filterEvenNumbers(arr3))


//Ex 5
let arr5 = [-1,2,-3,4,-5,6,7,-8];

function getPositiveNumber(arr) {
    const result = arr.filter(function(item,idx){
        return item > 0;
      });
      return result

}

console.log(getPositiveNumber(arr5));

////////////////////////// REDUCE ///////////////////////////////////////////////////////////////////
//Ex 6

let arr6 = [{amount: 100}, {amount:200}, {amount: 500}, {amount:700}];

function accountSummary(arr) {
    // const total = 0
    // for (let i=0; i < arr.length(); i++) {
    //     total += arr[i];
    // }
    // return total;
    // let result = 0;
    // arr.forEach(function(item, idx) {
    //     result += item.amount;
    // });
    // return result;
    //alternative code REDUCE
    // 1. Accumulation 2. Transformation
    arr.reduce(function(acc, item, idx) {
        acc += item.amount;
        return acc;
    }, 0);

}

console.log(accountSummary(arr6)) // 1500

//Ex 6

const letters = ['S','U','M','A','N']

function combineLetters(arr) {

    const result = arr.reduce(function(acc,item,idx){
        return acc += item;
    },'');
    return result;
}

console.log(combineLetters(letters))//SUMAN







