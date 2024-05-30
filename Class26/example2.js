//Question1:
let obj = {
    name: 'Sample Object'
};
console.log(obj.toString());


obj.__proto__ = null;
try {
    console.log(obj.toString());
} catch(e) {
    console.log('Error:', e.message);
}





