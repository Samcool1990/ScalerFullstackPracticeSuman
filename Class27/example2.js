const person1 = {
    name:'Mrinal',
    age: 25,

    printNameAndAge: function(location, isMarried){
        console.log(this, location, isMarried);
    }, 
};


const person2 = {
    name: 'Rishabh',
    age: 30
};

person1.printNameAndAge('New York');

person1.printNameAndAge.call(person2, 'San Fransico', true);

person1.printNameAndAge.apply(person2, ['San Fransico', true]);


const alice = {
    name: 'Alice',
    age: 30,
    introduce: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`);
    }
};

const intro = alice.introduce.bind(alice);

intro();//alice


///Polyfill for Reduce

let arr = [{type: 'debit', value: 100},{type: 'credit', value: 1},{type: 'credit', value: 2}]

let a = [1,2,3,4]
arr.reduce((acc, item) => {
    if (!acc[item.type]) {
        acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
}, {});


Array.prototype.myReduce = function(callback, start_val) {
    let acc = start_val;
    let idx = 0;

    for (let i = idx; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }
    return acc;
};



let car = {
    name: "Mercedes",
    color: "White"
}

function buyCar(price) {
    console.log(`I bought a ${this.car} ${this.name} of ${price} `);
}


Function.prototype.call = function(context, ...args) {
    const fn = this;  // buyCar  

    context.fn = fn;  //car.buyCar = buyCar;
    context.fn(...args);  // car.buyCar(...args);
}



Function.prototype.apply = function(context, argsArray) {
    const fn = this;  // buyCar  

    context.fn = fn;  //car.buyCar = buyCar;
    context.fn(argsArray);  // car.buyCar(...args);
}

Function.prototype.bind = function(context, ...argsArray) {
    const fn = this;  // buyCar  

    return function(...args) {
        return fn.call(context, ...argsArray, ...args);
    }
};