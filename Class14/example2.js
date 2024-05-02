const list = [{
    id: 1,
    title: 'Product 1',
    description: 'Awesome product'
    }, {
    id: 2,
    title: 'Product 2',
    description: 'Awesome product'
    }, {
    id: 3,
    title: 'Product 3',
    description: 'Awesome product'
    }];

//A function to take (delay, limit)
//Which return data with limit
//In case limit > 3, through error

const myFetch =  function(delay, limit) {
    //code goes here
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            if (limit > list.length) {
                reject("Out of Limit");
            }else {
                const data = list.slice(0, limit);
                resolve(data);
            }
        }, delay);
    })
};


//Promise Chaining
// myFetch(3000,4)
//     .then((data) => console.log(data))
//     .catch(err => console.log(err));
// Product1, Product 2

//ES6 async/await
// async function fetchListData() {   
//     try {
//         const data = await myFetch(3000,5);
//         console.log(data);
//     } catch(e) {
//         console.log(e);
//     }    
// }

// fetchListData();


//scenario1: Fetch below data in sequence
// myFetch(3000,3)
// myFetch(1000,1)
// myFetch(2000,2)

//A. Chaining
// myFetch(3000,3)
//     .then(function(data) {
//         console.log(data);
//         return myFetch(1000,1);
//     })
//     .then (function(data) {
//         console.log(data);
//         return myFetch(2000,2);
//     })
//     .then(function(data) {
//         console.log(data);
//         console.log('Done');
//     })
//     .catch((e) => {
//         console.log(e);
//     });

//B. async/await

//  async function getData() {
        // myFetch(3000,3)
        // myFetch(1000,1)
        // myFetch(2000,2)
//     try {
//         const data1 = await myFetch(3000,3);
//         console.log(data1);

//         const data2 = await myFetch(1000,1);
//         console.log(data2);

//         const data3 = await myFetch(2000,2);
//         console.log(data3);

//     } catch(e) {
//         console.log(e)
//     }
    
//  }

// getData();





//Scenario 2: Fetch below data in parallel
// myFetch(3000,3)
// myFetch(1000,1)
// myFetch(2000,2)

// Promise.all([myFetch(5000,3),myFetch(1000,5),myFetch(3000,2)])
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(e) {
//         console.log(e);
//     })

//scenarion 3 : fetch below data in parallel (dont terminate)

// Promise.allSettled([myFetch(5000,3),myFetch(1000,5),myFetch(3000,2)])
//     .then(function(data) {
//         console.log(data);
//         // console.log(jsonStringfy(data));
//     });


//scenarion 4 : fetch below data in parallel (return results)

// Promise.race([myFetch(10000,3),myFetch(2000,3),myFetch(2000,5)])
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(e) {
//         console.log(e);
//     })


//scenarion 4 : fetch below data in parallel (return results)

// Promise.any([myFetch(10000,3),myFetch(2000,5),myFetch(5000,3)])
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(e) {
//         console.log(e);
//     });




// function fetchByPromise(fileName) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(`content : ${fileName}`);
//         }, 100 * Math.random());
//     });
// }

// async function nSeries(fileArray, ansArray) {
//     //write your code here =========================================
//     for (let fileName of fileArray) {
//         const content = await fetchByPromise(fileName);
//         ansArray.push(content);
//     }
    
//     ansArray.push("All files have been read");

//     return ansArray }

//     console.log(nSeries(["FILE 1", "FILE 2"],[]));


function divide(a, b) {
    //write your code here ===============================================
    try {
        const result1 = divide(10, 2);
        console.log("Result:", result1); // Should print "Result: 5"

        const result2 = divide(8, 0); // Division by zero
    } catch (error) {
        console.error(error.message); // Prints: Division by zero is not allowed.
    }
}


console.log(divide(-1,0))












