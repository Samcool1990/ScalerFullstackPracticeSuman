function isPalindrome(str) {
    // Convert the string to lowercase and remove spaces and punctuation
    var formattedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Reverse the formatted string
    var reversedStr = formattedStr.split('').reverse().join('');
    
    // Check if the original string is equal to its reverse
    return formattedStr === reversedStr;
}