function memizeFn(x) {
    return function(y) {
        return x + y
    }

}

const sum10 = memizeFn(10);


sum10(1);
sum10(2);
sum10(3);


// Question 5:

function counter(x)  {
    let y = x;
    return function() {
        y += 1;
        return y ;
    }
}
const countInc = counter(10);

countInc(); //11
countInc(); //12
countInc(); //13
countInc(); //14

// Question 3:


