function isPalindrome(str){
    // Step 1: Normalize the string by removing anything that is not a number or letter
    const cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Step 2: Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Step 3: Check if the cleaned string is the same as the reversed string
    return cleanedStr === reversedStr
}

// const string = "A man a plan a canal Panama";
// console.log(cleanedStr);


console.log(isPalindrome("A man a plan a canal Panama"));