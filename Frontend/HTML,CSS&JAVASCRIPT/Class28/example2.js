const transactions = [
    {customeId: 1, amount: 100, type: 'CREADIT', date: '2024-03-01'},
    {customeId: 2, amount: 150, type: 'CREADIT', date: '2024-03-01'},
    {customeId: 1, amount: 200, type: 'CREADIT', date: '2024-03-02'},
    {customeId: 3, amount: 50, type: 'DEBIT', date: '2024-03-02'},
    {customeId: 2, amount: 120, type: 'CREADIT', date: '2024-03-03'},
    
];

//Step1: Calculate the total number of transactions
const totalTransactions = transactions.length;
console.log(totalTransactions)

//Step2: Calculate the total balance of all transactions
const balanceAmount = transactions.reduce((acc, transaction) => {
    acc = transaction.type === 'CREDIT' ? acc + transaction.amount: acc - transaction.amount;
    return acc;
}, 0);
console.log(balanceAmount);

//Step3: Calculate the average amount of transactions


const averageAmount = totalAmount / totalTransactions;
console.log(averageAmount);



//Step4: Group transactions by data
const grpByDate = transactions.reduce(function(acc, item) {
    if (!acc[item.date]) {
        acc[item.date] = [];
    }
    
    acc[item.date].push(item);

    return acc;
}, {});
console.log(grpByDate);



//FlattenArray
const arr = [1,[2,3], [4,[5,6]]];


function flattenArray( ) {
    
}













































