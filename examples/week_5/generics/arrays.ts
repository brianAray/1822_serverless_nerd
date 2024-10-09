// Generics
/*
    They are a way of having dyanmic typing in your code so that you can write code that can accept a variety of different types
    This can be used in functions and classes
*/

// Function for arrays
function reverseArray<T>(array: T[]): T[] {
    return [...array].reverse();
}

const numbers = [1, 2, 3, 4];
const reversedNumbers = reverseArray(numbers);

console.log(reversedNumbers);

const strings = ["apple", "banana", "orange"];
const reversedStrings = reverseArray(strings);

console.log(reversedStrings);