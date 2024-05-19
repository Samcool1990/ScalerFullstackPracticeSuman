function reverseString(inputString) {
    // Split the string into an array of characters
    var characters = inputString.split('');
    
    // Reverse the array of characters
    var reversedCharacters = characters.reverse();
    
    // Join the characters back into a string
    var reversedString = reversedCharacters.join('');
    
    // Return the reversed string
    return reversedString;
  }