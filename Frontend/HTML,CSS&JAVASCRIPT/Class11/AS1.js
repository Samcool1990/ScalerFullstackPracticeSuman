function sumArray(numbers) {
    // Write your code here
    // return the result
    return numbers.reduce(function(acc, item, idx) {
        acc += item
        return acc
    })
  }