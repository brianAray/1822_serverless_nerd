// Datatypes

// Primitive

// Number
let age = 30;
let price = 19.99;

// strings
let name = "John";
let message = 'Hello, world';

// boolean
let isStudent = true;

// undefined
let undefinedVariable;

// null
let emptyValue = null;

// Symbol
let uniqueKey = Symbol("value1");
let uniqueKey2 = Symbol("value1");

console.log(uniqueKey == uniqueKey2);

// BigInt

let bigNumber = 123124124n;

// Reference Datatypes

// Object
const person = {
                "firstName": "John", 
                lastName: "Doe"
            };

// array
// Arrays have the possiblity of holes, places where you have removed a value but not closed the gap
const numbers = [1, 2, 3, 4, 5];
const mixedArrays = [1, "2", true, {"hello": "there"}]

// Functions
function greet(name){
    return `Hello, ${name}`
}

// let mixedMessage = "hello" + ", name"
console.log(greet("John"));

// Template Literals
// Surrounded by backticks ``

let templateLiteral = `${1 + 1}`; // 2


