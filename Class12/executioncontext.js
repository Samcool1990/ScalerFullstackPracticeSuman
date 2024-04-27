console.log(x,y);//A

var x = 100, y = 200;

console.log(sum(x,y));//B


function sum(a,b) {
    total = a + b;
    return a + b;
}

console.log(total);//C



//CONVERTED CODE
//-------------------------------------------------------------------
var x;
var y;

function sum(a,b) {
    total = a + b;
    return a + b;
}

console.log(x,y); //A: Undefined undefined

var x = 100, y = 200;

console.log(sum(x,y)); //B: 300

console.log(total);//C: 300












