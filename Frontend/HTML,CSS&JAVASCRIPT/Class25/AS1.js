class Vehicle {
    // Write Code here -----
    constructor (make ,model ) {
        this.make = make;
        this.model = model;
    }
}
  
class Car extends Vehicle {
    // Write Code here -----
    constructor(make ,model, numDoors) {
        super(make ,model);
        this.numDoors = numDoors;
    }
}