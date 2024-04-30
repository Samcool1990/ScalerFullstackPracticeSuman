//Q1:
console.log("A");


setTimeout(function() {
    console.log("B");
}, 1000);


setTimeout(function() {
    console.log("C");
});


Promise 
    .resolve()
    .then(() => console.log('D'));

console.log('E');


const sum = function(a,b) {
    return  a + b;
}
//ARROW FUNCTION
const sum = (a,b) => {
    return a + b 
};

