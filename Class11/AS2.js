function filterOutOdd(numbers) {
    // Write your code here
    // return the result
    return numbers.filter(function(item, idx) {
        if (item % 2 == 0) {
            return item
        }
    })
}