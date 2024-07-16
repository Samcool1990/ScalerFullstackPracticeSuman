const path = require('path');

console.log('filepath', __filename);
console.log('dirname', __dirname);


console.log('isAbsolute', path.isAbsolute(__filename));

console.log('sep', path.sep);
console.log('delimiter', path.delimiter);

console.log('path', process.env.PATH);

console.log('extension', path.extname(__filename));

console.log('relative path', path.relative(__filename, 'D:\PIhealth\New folder\Scaler_practice_fullstack\ScalerFullstackPracticeSuman\Backend\Class1\Example1>'));

// Checkout the link https://nodejs.org/api/path.html for more methods
