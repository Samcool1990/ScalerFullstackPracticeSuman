function findLongestWord(str) {
    // Write your code here
    // return the result
    // Split the string into an array of words
    var words = str.split(' ');
    
    // Initialize variables to store the longest word and its length
    var longestWord = '';
    var maxLength = 0;
    
    // Iterate through each word in the array
    for (var i = 0; i < words.length; i++) {
        // Check if the current word is longer than the previous longest word
        if (words[i].length > maxLength) {
            // If it is, update the longest word and its length
            longestWord = words[i];
            maxLength = words[i].length;
        }
    }
    
    // Return the longest word
    return longestWord;

}