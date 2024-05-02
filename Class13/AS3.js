function promiseSum(a, b) {
    // Write Code Here =============
    return new Promise(function(resolve, reject) {
        if (a > 0 && b > 0) {
            resolve(a+b);
        }else {
            reject("Both numbers must be positive");
        }
    });
}

