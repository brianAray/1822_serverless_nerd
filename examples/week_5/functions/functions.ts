// Functions

// function declaration
function greet(name: string): string {
    return `Hello, ${name}`;
}

// function expression
const greetExpression = (name: string) : string => {
    return `Hello, ${name}`;
}

// Optional and Default parameters
function sayHello(name: string, age?: number, greeting: string = "Hello"){
    if(age){
        return `${greeting}, ${name}. You are ${age} years old`;
    }else{
        return `${greeting}, ${name}.`; 
    }
}

// Rest parameters
function sum(...numbers: number[]): number{
    return numbers.reduce((total, num) => total + num, 0);
}


// Function Overloading
function greet(person: string): string;
function greet(person: string, age: number): string;
function greet(person: string, age?: number): string {
    if (age){
        return `Hello ${person}, you are ${age} years old`;
    }else{
        return `Hello, ${person}`;
    }
}

