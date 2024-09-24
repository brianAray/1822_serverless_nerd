// Spread and Rest operator
// ...

// These two are used for working with objects and arrays
// They provide a concise way to manipulate and destructure data

// Spread Operator

// Cloning
// arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]; // creates a shallow copy of the array

// It copies the addresses of the clone so if it is modified after it has been copied, the edits will show up in the copy as well


// objects
const originalObject = {a: 1, b: 2};
const clonedObject = {...originalObject};

// concatenate
// arrays
const array1 = [1, 2];
const array2 = [3, 4];
const concatenatedArray = [...array1, ...array2]; // combine the two arrays

// merge
// objects

const object1 = {a: 1};
const object2 = {b: 2};
let mergedObject = {...object1, ...object2};

// This lets you update a single field in the object without having to update everything else
// You can reassign to the same object or to a new one
mergedObject = {...mergedObject, b: 3};


// Rest Operator
// Rest operator is used in function parameter lists and destructuring assignments to gather mulitple values into a single variable

function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
};

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3));
console.log(sum(1, 2009, -933, 234));


// Destructuring Assignment

const [first, second, ...rest] = [1, 2, 3, 4, 5];

console.log(first);
console.log(second);
console.log(rest);

// destructuring with rest
const {a, ...objectRest} = {a: 1, b:2, c:3, d:4};

console.log(a);
console.log(objectRest);