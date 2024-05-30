// -OOPS
//     - Member Variable
//     - Member Method
//     - Abstraction
//     - Encapsulation
//     - Polymorphism
//     - Static Keyword
//     - Access Modifier 
//     - Inheritance

class Bird {
    #breed
    constructor(breed,name) {
        this.#breed = breed;
        this.name = name;
        this.fly = function() {            
            console.log('I can fly');  
        }
    }
    
    getDescription() {
        console.log(`${this.name} is a bird of breed ${this.#breed}`)
    }
}

const Penguin = new Bird('X', 'Penguin');
console.log(Penguin.name);
console.log(Penguin.#breed);


// Convert the above function to constructor function//
function Bird2(breed,name) {
    this.#breed = breed;
    this.name = name;
    this.fly = function() {            
        console.log('I can fly');  
    }
}

Bird2.prototype.getDescription = function() {
    console.log(`${this.name} is a bird of breed ${this.#breed}`)
}

const Penguin2 = new Bird2('X', 'Penguin');
console.log(Penguin2.name);
console.log(Penguin2.#breed);


Object.create( {
    breed: 'X',
    name: 'penguin',
    color: 'white',
    fly: function() {},
    getDescription: function() {
        console.log(`${breed}${name}`)
    }
})

Object.defineProperty(Bird, 'name', {
    configurable: true,
    value: 'Penguin',
    writable: true,
    enumerable: true,
})

















