const exchangeRates = {
    'USD': 1.0,
    'EUR': 0.85,
    'GBP': 0.75,
};

function convertCurrency(amount, sourceCurrency, targetCurrency) {
    // Write code here =========
    return new Promise(function(resolve, reject) {
        if (exchangeRates[sourceCurrency] !== undefined && exchangeRates[targetCurrency] !== undefined) {
            const convertedAmount = amount * exchangeRates[targetCurrency] / exchangeRates[sourceCurrency];
            resolve(convertedAmount);
        }else {
            reject('Error converting currency: Invalid currency');
        }
    });
}