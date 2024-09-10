// Arrays

/*
    In JS, an array is a data structure used to store and manipulate collections of values
    Arrays can hold values of various data types, including numbers, strings, objects, and even other arrays
    in JS arrays are ordered, indexed, and can grow or shrink in size dynamically
*/

const fruits = ["apple", "orange", "banana"];

// access

const firstFruit = fruits[0];
const secondFruit = fruits[1];

// Modify

fruits[2] = "grape";

console.log(fruits);

// array length
let numFruits = fruits.length;

// Methods
// push, pop, shift, unshift, splice, concat, slice, filter, map
// functional methods on arrays like filter will return back a copy of the original with the modified values
// It will not change the original

const person = {firstName: "Mike", lastName: "Jones"};

// For In loop
for (const index in fruits) {
    console.log(index);
}
for (const key in person) {
    console.log(key);
}

// For of Loop
for (const fruit of fruits) {
    console.log(fruit);
}

