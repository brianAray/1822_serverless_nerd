// Enhanced Object Literal

// Introduced in ES6 and provides a conciseand convenient way to create objects

// Property and method shorthand

const name = "JOhn";
const age = 30;

// traditional object literal
const person = {
    name: name,
    age: age,
    sayHello: function () {
        console.log("Hello");
    }
}

// enhanced Object literal (property shorthand)

const enhancedPerson = {
    name,
    age,
    sayHello(){
        console.log("Hello");
    }
}

// computed property names
// this is for dynamic property assignment

const dynamicKey = "color";

const car = {
    make: "Toyota",
    [dynamicKey]: "blue"
};

console.log(car.color);