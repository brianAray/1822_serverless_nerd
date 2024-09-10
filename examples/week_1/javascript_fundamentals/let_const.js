// Let and Const keywords

/*
    The let and const keywords are used for variable declaration in JS
    They were introduced in ES6 to provide better variable scoping and management compared to the older var keyword
*/

/*
    let

    let is used to declare with block scope
    Variables declared with let are accessible only within the block or function where they are defined
    You can reassign values to variables declared with let

    Variables are not hoisted when declared with let
*/

let x = 10; // declare and assign a value

if(true){
    let x = 20; // Creates a new variable 'x' with block scope
    console.log(x);
}

console.log(x);

/*
    const

    const is used to declare block scope variables, like let
    However, variables declared with const cannot be reassigned after they are initialized
    They are constants

*/

const PI = 3.14; // declare and initialize a constant
// PI = 3; // Error: Assignment to constant variable


/*
    var

    var does do variable hoisting, but only the definition of the variable, not the assignment
    This typically leads to unexpected behaviors with undefined values being accessible before the developer expects it

*/

// var varExample;

// console.log(varExample);

// varExample = 100;