const fs = require('fs');

console.log('Start');

// Read data from f1.txt
fs.readFile('f1.txt', function(err1, data1) {
    // Callback will execute
    if (err1) {
        console.log('Error reading file 1');
    } else {
        console.log(data1.toString());
        
        // Read data from f2.txt
        fs.readFile('f2.txt', function(err2, data2) {
            if (err2) {
                console.log('Error reading file 2');
            } else {
                console.log(data2.toString());
                
                // Read data from f3.txt
                fs.readFile('f3.txt', function(err3, data3) {
                    if (err3) {
                        console.log('Error reading file 3');
                    } else {
                        console.log(data3.toString());
                    }
                });
            }
        });
    }
});

console.log('End');
