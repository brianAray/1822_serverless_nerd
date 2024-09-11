// Anonymous Functions
/*
    In JS, these are functions without a name. Instead of defining a named function with the function keyword, you define an anonymous function as an expression.

    These are often used as arguments to other functions or to create IIFE (Immediately Invoked Function Expressions).


*/

// Function Expressions

const add = function (a, b) {
    return a + b;
};

const result = add(3, 4);
console.log(result);

// Callback Functions
// When you pass functions as arguments to other functions
// These are used in higher-order functions like filter, map, forEach, etc

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});

// IIFE

(function () {
    const message = "This is an IIFE";
    console.log(message);
})();

// Arrow Functions (ES6)
// Concise way to define anonymous functions

// By default if you keep it as one line, it has an implicit return

const multiply = (a, b) => a * b;

// If you have more than one parameter, you need to include (), if not then you can just use the parameter name
// If you need to have more than one line of code for your arrow function, you can use {} but you lose the implicit return

const square = x => {
    return x * x
}

// Passing Functions as Arguments

function processNumbers(numbers, callback){
    const result = callback(numbers);
    console.log(`Result: ${result}`);
}

const sum = numbers => numbers.reduce((acc, num) => acc + num, 0);

const product = numbers => numbers.reduce((acc, num) => acc * num, 1);

// const numbers = [1, 2, 3, 4, 5]

processNumbers(numbers, sum);
processNumbers(numbers, product);

// No this binding
/*
    Arrow functions do not have their own this binding
    They inherit the this value from their enclosing lexical context
    This can lead to unexpected behaviors if you are not aware of it
*/

const person = {
    "firstName": "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com",

    sayHello: function () {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 30,
    email: "jane@example.com",

    sayHello: () => {
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
};

person.sayHello();
person2.sayHello("Jane", "Doe");