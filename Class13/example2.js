//Creating our promise based on result

const boradPromise = new Promise(function(resolve, reject) {
    const passingScore = 95;
    const studentScore = 99 ;

    //SEt Delay
    setTimeout(function() {

    }, 5000);
    if (studentScore >= passingScore) {
        resolve('Yes, Completed');
    }else {
        reject('Not Completed');
    }
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
console.log(p)    ;

console.log('End');  






































