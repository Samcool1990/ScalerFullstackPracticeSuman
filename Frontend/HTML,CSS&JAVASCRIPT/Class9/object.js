var a = {1:1};
console.log(a);

var b = {1:1, "1": "ONE"};
console.log(b);

console.log(String([1,2]));


// var c = {[1,2]: 'key was array'}

var d = [1,2];
var e = {d: "value" };


var bioData  = {
    name: "Suman ",
    age: "21",
    salary: 20000
}

console.log( bioData.age)
console.log( bioData['age'])

bioData.age = 24
bioData['age'] = 24

bioData.city = 'Delhi'
console.log(bioData)


delete bioData.salary

console.log(bioData)

var f = {
    name: "suman"
}
console.log(f)

f['e'] = "value1"
console.log(f)


var d = {a: {b:1}, c: 2}
console.log (d.a.b)
console.log (d.c)