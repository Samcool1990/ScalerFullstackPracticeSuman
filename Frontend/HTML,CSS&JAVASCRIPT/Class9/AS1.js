function main(str) {
    // Convert the string to lowercase to handle uppercase vowels as well
    str = str.toLowerCase();
    
    // Define an array containing the vowels
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Initialize a variable to store the count of vowels
    var count = 0;
    
    // Iterate through each character of the string
    for (var i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (vowels.includes(str[i])) {
            // If it is, increment the count
            count++;
        }
    }
    
    // Return the count of vowels
    return count;
}
