class Bird {
    #breed
    constructor(breed,name) {
        this.#breed = breed;
        this.name = name;
        
    }
    fly = function() {            
        console.log('I can fly');  
    }
    
    getDescription() {
        console.log(`${this.name} is a bird of breed ${this.#breed}`)
    }
}

class Penguin extends Bird {
    constructor(country) {
        super(breed,name);
        this.country = country;
    }

    fly() {
        console.log('It can\'t fly');
    }
}

const MyPenguin = new Penguin('India', 'X', 'India');