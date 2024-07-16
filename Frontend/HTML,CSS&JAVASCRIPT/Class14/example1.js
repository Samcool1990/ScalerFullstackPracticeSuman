//Creating our promise based on result

const boradPromise = new Promise(function(resolve, reject) {
    const passingScore = 95;
    const studentScore = 99 ;

    //SEt Delay
    setTimeout(function() {
        if (studentScore >= passingScore) {
            resolve('Yes, Completed');
        }else {
            reject('Not Completed');
        }

    }, 5000);
    
});


//Consume
console.log('Start');

const p = boradPromise
    .then(function(data) {
        //SUCCESS
        console.log('SUCCESS: ',data);
        return data;
    }).then(function(data) {
        console.log('UpperCase:', data.toUpperCase());

    })
    .catch(function(err) {
        //FAILURE
        console.log('FAILURE: ',err);
    })

console.log(p);

console.log('End');  




//ES6  ECMA SCRIPT

async function getBoardData() {
    try {
        const data = await boradPromise;
        console.log('UpperCase:',data.toUpperCase());
    }catch(e) {
        console.log('Failure:',e);
    }
}



// async function getBoardData() {
//     try {
//         await fetchTodoById("4")
//         console.log(todo);
//     }catch(e) {    
//         console.log(error);
//     }
// }































