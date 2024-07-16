//Q1:

// console.log('A');

// setTimeout(function()  {              //It will run after everything is executed asynchronusly
//     console.log('B');
    
// }, 1000);

// ['T','T',].forEach(function(item) {
//     console.log(item);
// })

// console.log('C');

// for (var i=0; i < 3; i++) {
//     console.log('D');
// }

// console.log('E');



//Q2:     Event Loop

// console.log('A');

// setTimeout(function()  {              //It will run after everything is executed asynchronusly
//     console.log('B');    
// }, 2000);

// console.log('C');

// setTimeout(function()  {              //It will run after everything is executed asynchronusly
//     console.log('D');    
// }, 1000);

// for (var i=0; i < 100000; i++) {
//     console.log('E')
// }

// console.log('F');



//Q2:    Call stack

function fn1() {
    fn2();
    console.log('C')
}

function fn2() {
    fn3();
    console.log('B');
}

function fn3() {
    console.log('A');
}


console.log(fn1());


























