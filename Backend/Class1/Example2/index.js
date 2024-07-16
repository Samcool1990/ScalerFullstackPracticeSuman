const fs = require('fs');

const demoFileData = fs.readFileSync('./demo.txt');
console.log(demoFileData.toString());

fs.appendFileSync('./demo.txt', '--Suman');
const demoFileData2 = fs.readFileSync('./demo.txt');
console.log(demoFileData2.toString());


fs.mkdirSync('dist'); //Comment for second attempt
fs.writeFileSync('./dist/index.html', `
    <html>
        <head> 
        <title>Trying  backend MERN stack Class1  13    </title>
        </head>
    </html>
    `)
const demoFileData3 = fs.readFileSync('./dist/index.html');
console.log(demoFileData3.toString());