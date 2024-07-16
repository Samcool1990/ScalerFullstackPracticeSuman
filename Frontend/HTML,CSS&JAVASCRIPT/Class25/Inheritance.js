
// CLass Approach
class Car1 {
    constructor(color, model, price){
        this.color = color;
        this.model = model;
        this.price = price;
    //     this.getTotalPrice = function(taxP){
    //         return this.price + this.price * taxP * 0.01;
    // }
}
}

Car.prototype.getTotalPrice = function(taxP){
    return this.price + this.price * taxP * 0.01;
}

const BMW1 = new Car1('red','X', 10000000);
const MERC1 = new Car1('black','Y', 10000000);


console.log(BMW1.getTotalPrice(30));
console.log(MERC1.getTotalPrice(30));






































