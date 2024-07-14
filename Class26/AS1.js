// Constructor function for Person
function Person(name) {
    this.name = name;
}
  
// Prototype for Person
Person.prototype.introduce = function() {
    return `Hi, I'm ${this.name}.`;
}