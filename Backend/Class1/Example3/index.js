const http = require('http');
const { title } = require('process');

const server = http.createServer((req, res) => {
    // res.write('Hi from Node Server!!!');
    if (req.url === '/') {
        res.write(`
            <html>
                <head> 
                    <h1>Learning backend MERN stack Class1</h1>
                </head>
            </html>
        
            `);
        res.end();
    }
    if (req.url === '/contact') {
        res.write(`
            <html>
                <head> 
                    <h1>Trying  backend MERN stack </h1>
                </head>
            </html>
            `);
        res.end();
        }
    if (req.url === '/api.products') {
        const products = [{
            id: 1,
            title: 'Product1'
        },
        {
            id: 2,
            title: 'Product2'
        },
        {
            id: 3,
            title: 'Product3'
        },
        {
            id: 4,
            title: 'Product4'
        },        
    ];
    try {
        // throw new Error('Something Went Wrong');
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(products));
        res.end();
    }catch(e) {
        res.statusCode = 500;
        res.write(e.message);
        res.end();
    }    
    }
    });


server.listen(5002, () => {
    console.log('Server is running at http://localhost:5002');
})