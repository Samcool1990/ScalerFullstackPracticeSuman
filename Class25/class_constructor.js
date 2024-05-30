//Constructor function - Car (color, model, price, getTotalPrice)

function Car(color, model, price, getTotalPrice) {
        this.color = color;
        this.model = model;
        this.price = price;
        this.getTotalPrice = function(taxP){
            return this.price + this.price * taxP * 0.01;
        };
    }     

const BMW = new Car('red','X', 10000000);
const MERC = new Car('red','X', 10000000);

console.log(BMW.getTotalPrice(28));
console.log(MERC.getTotalPrice(80));


// CLass Approach
class Car1 {
    constructor(color, model, price){
        this.color = color;
        this.model = model;
        this.price = price;
        this.getTotalPrice = function(taxP){
            return this.price + this.price * taxP * 0.01;
    }
}
}

const BMW1 = new Car1('red','X', 10000000);
const MERC1 = new Car1('black','Y', 18880000);

console.log(BMW1.getTotalPrice(28));
console.log(MERC1.getTotalPrice(80));






































