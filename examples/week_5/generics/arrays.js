// Generics
/*
    They are a way of having dyanmic typing in your code so that you can write code that can accept a variety of different types
    This can be used in functions and classes
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function for arrays
function reverseArray(array) {
    return __spreadArray([], array, true).reverse();
}
var numbers = [1, 2, 3, 4];
var reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);
var strings = ["apple", "banana", "orange"];
var reversedStrings = reverseArray(strings);
console.log(reversedStrings);
