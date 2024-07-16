console.log("Hello World !!")

// Control Statment

var basketPrice = 200;
// If statement

if (basketPrice > 300) {
    console.log("YOu can place order");
}


// if / else statement

if (basketPrice < 300) {
    console.log("Add more items to place order");

} else if(basketPrice > 300 & basketPrice < 500) {
    console.log("Add items worth 500 to get freedelivery");

} else if(basketPrice > 500 & basketPrice < 999) {
    console.log("Add price worth 99 to get more dicount")

} else {
    console.log("BEST DEAL")

}


// Switch statement // have to terminate through Break
var num = 1;
switch(num) {
    case  1: {
        console.log('One');
        break;
    }
    case 2: {
        console.log('Two');
        return;
    }
    default: {
        console.log('NA');
    }

}



//Loop

// for Loop
// for (INITIAL VALUE ; CONDITION ; CHANGE VALUE ){

// }
for (var a = 1 ; a < 10 ; a++ ){
    console.log('2 * ' + a + ' = ' + 2 *a);
    console.log(`2 * ${a} = ${2*a}`);

}
// while
var b = 1;
while(b <= 10) {
    console.log(`2 * ${a} = ${2*a}`);
    b++;

}

// do while
var c = 1;
do {
    console.log(`2 * ${c} = ${2*c}`);
    c++;
}while (c <= 0);

