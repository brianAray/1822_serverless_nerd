// Variable Scopes

/*
    JS has two primary variable scopes: local (function) scope, and global scope

    The scope determines where in your code that variable is visible and can be used
*/

// Global Scope
/*
    Variables declared outside of any function or block have global scope
    Global variables are accessible from anywhere in your JS code, including inside functions
    Be cautious with global scope as they can lead to naming conflicts and make it harder to maintain your code
*/

let globalVar = 10;

function exampleFunction(){
    console.log(globalVar); // Accessing the global variable
}

exampleFunction();

// Local (function) scope

/*
    Variables declared inside a function have local scope
    Local variables are only acecssible within the function they are defined
*/

function exampleFunction2(){
    let localVar = 20; // local variable
    console.log(localVar);
}

exampleFunction2();
// console.log(localVar); // Error: localVar is not defined


// Block Scope (ES6)
/*
    Introduced with ES6 (ECMAScript 2015)
    Block scope allows variables to be scoped to code blocks (e.g. if statements, loops, etc) in addition to functions
    Variables declared with let and const have block scope
    They are only accessible within the block they are defined
*/

if(true){
    let blockVar = 30; // block-scoped variable
    console.log(blockVar);
}

// console.log(blockVar); // Error: blockVar is not defined


// Lexical Scope (closure)

/*
    JS has lexical scope, which means that functions are able to access variables from their containing scopes, even after the outer function has finished executing
    This behavior is known as a closure
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