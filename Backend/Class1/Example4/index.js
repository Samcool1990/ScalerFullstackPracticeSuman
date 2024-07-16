const express = require('express');

const server = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head> 
                <h1>Learning backend MERN stack Class1</h1>
            </head>
        </html>
        `)
})
app.get('/contact', (req, res) => {
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
        res.send(JSON.stringify(products));
        
    }catch(e) {
        res.statusCode = 500;
        res.send(e.message);
        
    }    
    });
    
app.get('/products', (req, res) => {
    res.send(`
        <html>
            <head> 
                <h1>Learning backend MERN stack Class1</h1>
            </head>
        </html>
        `)
})
app.get('*', (req, res) => {
    res.send(`
        <html>
            <head> 
                <h1>Learning backend MERN stack Class1</h1>
            </head>
        </html>
        `)
})



server.listen(5005, () => {
    console.log('Server is running at: http://localhost:5005');
})