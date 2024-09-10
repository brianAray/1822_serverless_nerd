// Type Coercion

/*
    This means the automatic conversion of one data type to another when performing operations or comparisons that involve different data types.

    JS is a loosely typed language, which means it doesn't require expliciit data type declarations for variables, and instead it will attempt to convert values as needed.

    This is an automatic behavior which can lead to unexpected behaviors if not understood correctly.
*/

// Implicit Type Coercion (auto-conversion)
const num = 5;
const str = "10";

const result = num + str; // The number is coerced to a astring, and concatenation occurs

console.log(result);


// Explicit Type Coercion

const numStr = "42";

const nums = Number(numStr);
// Number(), String(), Boolean(), etc


// Comparison Operator
// == Loose equality operator
// === Strict equality operator

// Loose equality performs type coercion to compare values for equality

const x = 5;
const y = "5";
console.log(x == y);
console.log(x === y);


// Truthy Falsy Values

/*
    All values in JavaScript have an implicit truthy or falsy value
    Some values are considered "truthy" when coerced to a boolean, and others are considered "falsy"
*/

/**
 * Falsy
 * 
 * false
 * 0
 * ''
 * null
 * undefined
 * NaN
 * 
 * 
 * Truthy
 * Everything else
 * true
 * Non zero numbers
 * Non empty strings
 * Objects (even empty objects)
 * arrays (empty arrays as well)
 * functions
 * etc
 */

if (0){
    console.log("0 is falsy");
}

if (1){
    console.log("1 is truthy");
}

let name = "";

if (name){
    console.log(name);
}