// Functions

/*
    Fundamental concept in JS
    Groups code together to allow multiple executions

*/

// Basic Function Declaration

function greet(name){
    return `Hello, ${name}`
}

// let mixedMessage = "hello" + ", name"
console.log(greet("John"));

// Function Scope

/*
    Variables declared inside a funciton are scoped to that function and are not accessible from outside
    However, variables declared outside a function (global scope) can be accessed within the function
*/


function printMessage(){
    let message = "hello there";
    console.log(message);
}

// console.log(message);
printMessage();


// Function Hoisting

// Function declarations are hoisted, meaning they can be used before they are declared in code
// The declaration is hoisted to the top of the page and so you can invoke the function wherever

hoistExample();

function hoistExample(){
    console.log("I have been hoisted");
}

// Function Closures

/*
    Javascript functions can form closures, which means they can remember and access variables from their containing (enclosing) scope even after the outer function has finished executing
*/

function outer(){
    const message = "Hello, ";

    function inner(name){
        console.log(message + name);
    }

    return inner;
}

const closureFunction = outer();

closureFunction("Mike");

// Default Parameters
function  personGreeter(name = "Guest"){
    console.log(`Hello, ${name}`);
}

personGreeter("John");
personGreeter();