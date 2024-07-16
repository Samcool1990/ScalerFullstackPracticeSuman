const marriage = {
    name: "Bandi rakesh",
    age: 30,
    company: 'Microsoft',
    city: 'Bangalore',
    getDetails: function() {
        console.log(this);
    }
};

function Person(name, age, company, city) {
    this.name = name;
    this.age = age;
    this.company = company;
    this.city = city;
    this.getDetails = function() {
        console.log(this);
    }
};


const p1 = console.log( new Person("Bandi rakesh", 30, 'Microsoft', 'Bangalore'));
// console.log( new Person("Rishab Sharma", 30, 'Adobe', 'Hydrabad'));


console.log(p1);

























