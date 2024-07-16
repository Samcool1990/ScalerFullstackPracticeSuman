function findMaxValue(arr) {
    // Write your code here
    // return the result
    // Initialize a variable to store the maximum value
    var max_ele = arr[0];

    // Iterate through the array starting from the second element
    for (var i = 1; i < arr.length; i++) {
        // If the current element is greater than the current maximum, update the maximum
        if (arr[i] > max_ele) {
            max_ele = arr[i];
        }

    }
    // Return the maximum value
    return max_ele;
}