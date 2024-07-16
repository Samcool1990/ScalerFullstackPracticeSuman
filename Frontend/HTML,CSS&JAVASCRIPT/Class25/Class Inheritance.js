// function Animal (name) {
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     return `${this.name} -----`;
// }


// function Dog(breed, name) {
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// // Dog.prototype.constructor = Dog;
// const Dog1 = new Dog('X', 'Pappu');



//Class base inheritance

class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} -----`;
    }
}


class Dog extends Animal {
    constructor(breed, name) {
        super(name);
        this.breed = breed;
    }
}


const Dog2 = new Dog('X', 'Tommy');












